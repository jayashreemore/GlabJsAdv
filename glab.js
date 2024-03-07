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

class Adventurer extends Character {
    constructor(name, role) {
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
    investigate() {
        console.log(`${this.name} is investigating...`);
        super.roll();
    }
    charm() {
        console.log(`${this.name} is putting charm...`);
        super.roll();
    }

}
let Keoti = new Adventurer("keoti" , "Rogue");
//console.log(Keoti.investigate());
Keoti.charm();
Keoti.investigate();









