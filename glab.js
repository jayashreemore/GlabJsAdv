/*
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    //companion to Robin - leo 
    companion: {
        name: "Leo",
        type: "Cat",
        companion : {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    }
}

console.log(adventurer);
console.log(adventurer.companion);
console.log(adventurer.companion.companion);

*/

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: "a small hat and sunglasses",
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};
adventurer.roll();

/// Part 2 

class Character {
    //add a static  MAX_HEALTH property to the Character class equal to 100.
    //can only be accessed by the class itself by doing console.log(Character.MAX_HEALTH);
    static MAX_HEALTH = 100;
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}


const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin)
console.log(robin.companion.type);
//console.log(Character);
robin.companion.companion.roll();


/// Part 3 

//Part 3: Class Features
class Adventurer extends Character {
    // Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
    static ROLES = ['Fighter', 'Healer', 'Wizard'];////part 4 static roles added ////
    constructor(name, role,) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    discover(){
        console.log(`${this.name} is discovering...`);
        super.roll();
    }
    fish(){
        console.log(`${this.name} is fishing...`);
        super.roll();
    }
    addItems(items){
    console.log(this.inventory.push(items));
    }
}
console.log(Adventurer.ROLES);
const Jaya = new Adventurer ('Jaya', 'girl scout');
console.log(Jaya);

Jaya.fish();

//Next, create a Companion class with properties and methods specific to the companions.
////part 4 character //////
class Companion extends Character {
    constructor(name, type){
        super(name);
        this.name = name;
        this.type = type;
    }
    //methods
    assist(){
        console.log (`${this.name} is a ${this.type} assisting the adventurer.`)
    }
}
const Tinkerbell = new Companion ("Tinkerbell", "fairy");
Tinkerbell.assist();
//answer: Tinkerbell is a fairy assisting the adventurer.
// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
let Robin = new Adventurer('Robin','adventurer');
let Leo = new Companion('Leo', 'cat');
let Frank = new Companion ('Frank', 'flea');