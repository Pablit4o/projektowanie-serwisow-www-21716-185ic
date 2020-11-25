// W klasie NPC zawartę są szerokość, wysokość, wygląd, współrzędne x i y które będzie zawierać obiekt, dodatkowo zawiera 3 metody.
// Pierwsza rysuje obiekt, druga uaktualnia jego położenie, oraz dane użytkownika, a trzecia jest wywoływana po walce, żeby tylko uaktualnić dane użytkownika
class NPC{
		constructor(width, height, img, x, y) {
	    this.img = new Image();
	    this.img.src = img;
	    this.width = width;
	    this.height = height;
	    this.x = x;
	    this.y = y;
		}
    draw(){
        c.beginPath()
				c.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
		refresh(){
			localStorage.setItem('userData',`userName:${userData[0][1]};userLocationX:${this.x};userLocationY:${this.y};HP:${userData[3][1]};MANA:${userData[4][1]};maxHP:${userData[5][1]};maxMANA:${userData[6][1]};dmg:15`);
		}
    newPosition(x , y) {
			if(this.x + x >= 0 && this.x + x <= 760){
				this.x += x;
				x = 0;
			}
			if(this.y + y >= 0 && this.y + y <= 760){
				this.y += y;
				y = 0;
			}
			this.refresh()
    }

}

// Klasa Enemy oraz Field dziedziczą od Klasy NPC
class Enemy extends NPC {
	constructor(width, height, img, x, y, hp, mana, dmg, name){
		super(width, height, img, x, y)
		this.name = name;
		this.hp = hp;
		this.mana = mana;
		this.dmg = dmg;
	}
}

class Field extends NPC{
	constructor(width, height, img, x, y){
		super(width, height, img, x, y)
	}
}
