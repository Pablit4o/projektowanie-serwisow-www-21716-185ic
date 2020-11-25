// Tworzony jest klucz 'userData' który zawiera nazwę wprowadzoną przez użytkownika, oraz pozostałe parametry które są wprowadzane automatycznie

if(localStorage.getItem('userData') == null){
	document.querySelector("button").addEventListener("click",()=>{
		var userName = document.querySelector("input").value
		if(userName === ""){
			throw new Error("Nie ze mną te numery gagatku :p")
		}else{
			localStorage.setItem('userData',`userName:${userName};userLocationX:120;userLocationY:440;HP:100;MANA:100;maxHP:100;maxMANA:100;dmg:15`);
			location.replace("canvas.html")
		}
	})
}else{
	location.replace("canvas.html")
}
