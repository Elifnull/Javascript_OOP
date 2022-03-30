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

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("not all black belts are equall")
    }
}
const Raph = new Sensei("Raphael", 240, 9, 12, 9);
Raph.speakWisdom();