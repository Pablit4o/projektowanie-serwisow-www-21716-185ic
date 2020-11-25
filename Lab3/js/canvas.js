var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

// Jeżeli klucz "userData" jest pusty użytkownik zostaje przekierowany do login.html, w innym przypadku wykonywany jest drugi warunek
if(localStorage.getItem("userData") == null){
	location.replace("login.html")
}else{

	// Zmienna 'userData' będzię tablicą dwu wymiarową w której będą przechowywane wszystkie, informacje o uzytkowniku
	var userData = localStorage.getItem('userData').split(";").map((key)=>{return key.split(":")})
	var canvas = document.querySelector('canvas')
	var c = canvas.getContext('2d')
	canvas.width = 800
	canvas.height = 800

	// Z 4 pierwszych zmiennych tworzone są obiekty
	var player1 = new NPC(40, 40, "../img/pixelGuy.png", parseInt(userData[1][1]), parseInt(userData[2][1]));
	var castle = new Field(80, 80, "../img/castle.png", 80, 400)
	var gate = new Field(40, 40, "../img/gate.png", 120, 440)
	var enemy = new Enemy(40, 40, "../img/raven.png", Math.floor(Math.random() * 800 / 40) *40, Math.floor(Math.random() * 800 / 40) *40,250,100,5,"Raven")
	var HP, MANA, eHP, eMANA, myReq

	// funkcja ta wyświetla informacje o uzytkowniku na pasku informacyjnym, oraz tworzy przycisk umożliwiający wylogowanie
	function infoBar(){
		var userInfo = document.querySelector("#userInfo")
		userInfo.innerHTML = `Nazwa Użytkowanika: ${userData[0][1]} | HP:  ${userData[3][1]}/${userData[5][1]}  | MANA:  ${userData[4][1]}/${userData[6][1]} `
		userInfo.className = "container mx-auto px-4 bg-green-500 pb-1 pt-1"
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "Logout";
		btn.className = "float-right py-1 px-1 text-blue-700";
		document.querySelector("#userInfo").appendChild(btn)
		btn.addEventListener("click", ()=>{
			localStorage.removeItem("userData")
			cancelAnimationFrame(req)
			location.replace("login.html")
		})
	}

	// po załadowainu okna wykonuje funckję infoBar()
	window.addEventListener("load",infoBar())

	// Z zmiennej 'areaGame' towrzona jest tablica dwu wymiarowa, w której będą przechowywane obiekty tworzące tło gry (kafelki o wymiarach 40x40)
	var areaGame = new Array()
	for(var i = 0;i < 20;i++){
		areaGame[i] = new Array()
		for(var j = 0;j < 20;j++){
			areaGame[i][j] = new Field(40, 40, "../img/grass.png", j*40, i*40);
		}
	}

	// Poruszanie postacią przy użyciu strzałek
	window.addEventListener('keydown',(e) => {
		  if (e.keyCode === 38) {player1.newPosition(0, -40)}  			//arrowUP
		  else if (e.keyCode === 40) {player1.newPosition(0, 40)}   	//arrowDown
		  else if (e.keyCode === 37) {player1.newPosition(-40, 0)}  	//arrowLeft
		  else if (e.keyCode === 39) {player1.newPosition(40, 0)}   	//arrowRight
	})

	// Mierzy odległość między Graczem, a Przeciwnikiem
	function getDistance(x1,y1,x2,y2){
		var xDistance = x2 - x1;
		var yDistance = y2 - y1;
		return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
	}

	// Jeżeli odległość między Graczem, a Przeciwnikiem jest wystarczając, dostępna jest opcja walki
	document.querySelector("canvas").addEventListener('click',(e)=>{
		var a = window.innerWidth
		var b = window.innerHeight
		if((getDistance(player1.x, player1.y, enemy.x, enemy.y) - 40 < 20)
			&& (enemy.x <= (e.clientX - (a - canvas.width)/2)
				&&	(e.clientX - (a - canvas.width)/2) <= (enemy.x +40))
			&& (enemy.y <= (e.clientY - (b - canvas.height)/2)
				&& 	(e.clientY - (b - canvas.height)/2) <= (enemy.y +40))){
			var cP = document.querySelector("#controlPanel")
			cP.style.display = "block"
			cP.style.position = "fixed"
			cP.style.top = `${enemy.y + (b/2 - canvas.height/2) + 7}px`
			cP.style.left = `${enemy.x + (a/2 - canvas.width/2) + 10}px`
		}else{
			document.querySelector("#controlPanel").style.display = "none"
		}
	})

	// Po wybraniu opcji walki z Przeciwnikiem, następuję wyświetlenie okna walki
	document.querySelector("div#controlPanel").addEventListener('click',()=>{
		document.querySelector("#controlPanel").style.display = "none"
		var pW = document.querySelector("div.poleWalki")
		var userName = document.querySelectorAll("p#userName")[0]
		var userHP = document.querySelectorAll("p#userHP")[0]
		var userMANA = document.querySelectorAll("p#userMANA")[0]
		var userHpBar = document.querySelectorAll("div.hpBar")[0]
		var userManaBar = document.querySelectorAll("div.manaBar")[0]
		HP = parseInt(userData[3][1])
		MANA = userData[4][1]

		var enemyName = document.querySelectorAll("p#userName")[1]
		var enemyHP = document.querySelectorAll("p#userHP")[1]
		var enemyMANA = document.querySelectorAll("p#userMANA")[1]
		var enemyHpBar = document.querySelectorAll("div.hpBar")[1]
		var enemyManaBar = document.querySelectorAll("div.manaBar")[1]
		eHP = enemy.hp
		eMANA = enemy.mana

		var a = 0;
		var b = 0

		if(window.innerWidth%2 == 0){
		  a = (window.innerWidth / 2) - 400
		}else{
		  a = ((window.innerWidth-1) / 2) - 400
		};
		if(window.innerHeight%2 == 0){
		  b = (window.innerHeight / 2) - 400
		}else{
		  b = ((window.innerHeight-1) / 2) - 400
		};

		pW.style.position = "fixed"
		pW.style.left = a + "px"
		pW.style.top = b + "px"
		pW.style.display = "flex"

		userName.innerHTML = `Nazwa: ${userData[0][1]}`
		userHP.innerHTML = `HP: ${userData[3][1]}/${userData[5][1]}`
		userMANA.innerHTML = `Mana: ${userData[4][1]}/${userData[6][1]}`
		userHpBar.style.width = `${(userData[3][1]*100)/userData[5][1]}%`
		userManaBar.style.width = `${(userData[4][1]*100)/userData[6][1]}%`

		enemyName.innerHTML = `Nazwa: ${enemy.name}`
		enemyHP.innerHTML = `HP: ${eHP}/${enemy.hp}`
		enemyMANA.innerHTML = `Mana: ${eMANA}/${enemy.mana}`
		enemyHpBar.style.width = `${(eHP*100)/enemy.hp}%`
		enemyManaBar.style.width = `${(eMANA*100)/enemy.mana}%`

		document.querySelector("div.fightLog").innerHTML = ""
	})

	// Podczas walki wybranie opcji "atak" wywoła tą funkcję
	document.querySelectorAll("div.opcje button")[0].addEventListener("click",()=>{
		action(0)
	})
	// natomiast wybranie opcji "leczenie" wywołuje równierz tą samą funkcję, jednak przekazywany jest inny parametr
	document.querySelectorAll("div.opcje button")[1].addEventListener("click",()=>{
		action(1)
	})

	// ta funkcja w głównej mierze odpowiada, za przebieg walki
	// jeżeli Gracz wygra, po zakończeniu walki na mapie gry, w losowym miejscu pojawi się nowy przeciwnik
	// jeżeli Przeciwnik wygra to ... smuteczek 
	function action(d){
		var userHpBar = document.querySelectorAll("div.hpBar")[0]
		var userHP = document.querySelectorAll("p#userHP")[0]

		var enemyHpBar = document.querySelectorAll("div.hpBar")[1]
		var enemyHP = document.querySelectorAll("p#userHP")[1]

		var btn = document.createElement("BUTTON");
		var fightLog = document.querySelector("div.fightLog")

		if(d == 0){
			var userAtack = Math.floor((Math.random() * (userData[7][1]-8)) + 10);
			var enemyAtack = Math.floor((Math.random() * (enemy.dmg-8)) + 5);
			eHP -= Math.floor((Math.random() * (userData[7][1]-8)) + 10);
			HP -= Math.floor((Math.random() * (enemy.dmg-8)) + 5);
			if(eHP <= 0){
				eHP = 0
				addRecord(`${userData[0][1]} zadał: śmiertelne obrażenia `)
				addRecord(`Walkę wygrywa: ${userData[0][1]}`)
				btn.innerHTML = "Zakończ";
				btn.className = "bg-gray-100 py-1 px-1 w-full text-black";
				fightLog.appendChild(btn)
				fightLog.scrollTop = fightLog.scrollHeight;
				document.querySelectorAll("div.opcje button")[0].disabled = true
				document.querySelectorAll("div.opcje button")[1].disabled = true
				document.querySelector("div.fightLog > button").addEventListener("click",()=>{
					document.querySelectorAll("div.opcje button")[0].disabled = false
					document.querySelectorAll("div.opcje button")[1].disabled = false
					enemy = new Enemy(40, 40, "../img/raven.png", Math.floor(Math.random() * 800 / 40) *40, Math.floor(Math.random() * 800 / 40) *40,250,100,5,"Raven")
					document.querySelector("div.poleWalki").style.display = "none"
					userData[3][1] = HP.toString()
					player1.refresh()
					infoBar()
				})
			}else if(HP <= 0){
				HP = 0
				addRecord(`${enemy.name} zadał: śmiertelne obrażenia `)
				addRecord(`Walkę wygrywa: ${enemy.name}`)
				btn.innerHTML = "Zakończ";
				btn.className = "bg-gray-100 py-1 px-1 w-full text-black";
				fightLog.appendChild(btn)
				fightLog.scrollTop = fightLog.scrollHeight;
				document.querySelectorAll("div.opcje button")[0].disabled = true
				document.querySelectorAll("div.opcje button")[1].disabled = true
				document.querySelector("div.fightLog > button").addEventListener("click",()=>{
					document.querySelectorAll("div.opcje button")[0].disabled = false
					document.querySelectorAll("div.opcje button")[1].disabled = false
					document.querySelector("div.poleWalki").style.display = "none"
					userData[3][1] = HP.toString()
					player1.refresh()
					infoBar()
				})
			}else{
				addRecord(`${userData[0][1]} zadał: ${userAtack} obrażeń`)
				addRecord(`${enemy.name} zadał: ${enemyAtack} obrażeń`)
			}
		}else if(d == 1){
			var userHeal = Math.floor((Math.random() * (userData[7][1]-8)) + 10);
			var enemyAtack = Math.floor((Math.random() * (enemy.dmg-8)) + 5);
			HP += userHeal
			if(HP > userData[5][1]){
				HP = userData[5][1];
			}
			HP -= enemyAtack
			addRecord(`${userData[0][1]} uleczył się: +${userHeal} punktów życia`)
			addRecord(`${enemy.name} zadał: ${enemyAtack} obrażeń`)
		}

		userHpBar.style.width = `${(HP*100)/userData[5][1]}%`
		userHP.innerHTML = `HP: ${HP}/${userData[5][1]}`
		enemyHpBar.style.width = `${(eHP*100)/enemy.hp}%`
		enemyHP.innerHTML = `HP: ${eHP}/${enemy.hp}`
	}

	// Dodaje informacje o przebiegu walki, do okan przebiegu walki
	function addRecord(info) {
		var record = document.createElement("P");
		var textnode = document.createTextNode(info);
		var fightLog = document.querySelector("div.fightLog")
		record.appendChild(textnode);
		fightLog.appendChild(record).appendChild(document.createElement("HR"));
		fightLog.scrollTop = fightLog.scrollHeight;
	}

	// Odświerza animacje
	function animate(){
		c.clearRect(0, 0, canvas.width, canvas.height);
		for(var i = 0;i < 20;i++){
			for(var j = 0;j < 20;j++){
				areaGame[i][j].draw()
			}
		}

		castle.draw()
		gate.draw()
		player1.newPosition()
		player1.draw()
		enemy.draw()

		var a = 0;
		var b = 0
		if(window.innerWidth%2 == 0){
		  a = (window.innerWidth / 2) - 400
		}else{
		  a = ((window.innerWidth-1) / 2) - 400
		};
		if(window.innerHeight%2 == 0){
		  b = (window.innerHeight / 2) - 400
		}else{
		  b = ((window.innerHeight-1) / 2) - 400
		};
		document.querySelector("canvas").style.position = "fixed"
		document.querySelector("canvas").style.left = a + "px"
		document.querySelector("canvas").style.top = b + "px"
		document.querySelector("div.poleWalki").style.position = "fixed"
		document.querySelector("div.poleWalki").style.left = a + "px"
		document.querySelector("div.poleWalki").style.top = b + "px"
		req = requestAnimationFrame(animate)
	}
	req = requestAnimationFrame(animate)
}
