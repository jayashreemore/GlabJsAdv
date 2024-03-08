
// Define the adventurer object
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};

// Log each item in Robin's inventory
console.log(`${adventurer.name}'s inventory:`);
for (const item of adventurer.inventory) {
    console.log(`- ${item}`);
}

// Introduce Leo, Robin's feline companion
console.log(`Meet ${adventurer.companion.name}, the ${adventurer.companion.type}.`);

// Create a companion for Leo
adventurer.companion.companion = {
    name: "Frank",
    type: "Flea",
    belongings: ["small hat", "sunglasses"]
};

// Describe Frank, Leo's friend
console.log(`Leo's friend, ${adventurer.companion.companion.name}, is a ${adventurer.companion.companion.type}.`);
console.log(`${adventurer.companion.companion.name} has the following belongings:`);
for (const item of adventurer.companion.companion.belongings) {
    console.log(`- ${item}`);
}

// Test the dice roll method
adventurer.roll()

////////////////// part 3/////////

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
}


class Robin extends Adventurer {
    constructor(name, role, favoriteQuest, favoriteFood) {
        super(name, role);
        this.favoriteQuest = favoriteQuest;
        this.favoriteFood = favoriteFood;
    }
    // Additional methods specific to Robin can be added here.
}

class Companion {
    constructor(companionName, loyaltyLevel) {
        this.companionName = companionName;
        this.loyaltyLevel = loyaltyLevel;
        this.inventory = []; // Initialize an empty inventory.
    }
    // Additional methods specific to companions can be added here.
}
////////////////part 4

class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
    }
}

// Example usage:
const player = new Character("Alice");
console.log(`${player.name}'s max health: ${Character.MAX_HEALTH}`);

class Adventurer {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        this.name = name;
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Must be one of ${Adventurer.ROLES.join(", ")}`);
        }
        this.role = role;
    }
}

// Example usage:
try {
    const warrior = new Adventurer("Bob", "Fighter");
    console.log(`${warrior.name} is a ${warrior.role}.`);
} catch (error) {
    console.error(error.message);
}
