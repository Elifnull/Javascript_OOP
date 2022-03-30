class Ninja {
    constructor (name, health, speed = 3, strength =3 ) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log("my name is " + this.name);
    }
    showStat(){
        console.log("this is Ninja: " + this.name);
        console.log("My health Points: " +this.health);
        console.log("My Speed force: " + this.speed);
        console.log("My pitiful Strength: " + this.strength);
    }
    drinkSake(){
        this.health += 10;
        console.log("now my health is empowered. New health: " + this.health)
    }
}

const ninjaBill = new Ninja("John", 5, 3, 3);

ninjaBill.sayName();
ninjaBill.showStat();
ninjaBill.drinkSake();