class Dog {
    public name: string = "Snaffles";

    say() {
        return "Gaf!";
    }
}

class Sheep {
    public name: string = "Dolli";

    say() {
        return "Bee!";
    }
}

interface SmartAnimal {
    thinking(): void;
}

const snaffles = new Dog() as Dog & SmartAnimal;

console.log(snaffles.say());
if (snaffles.thinking) {
    snaffles.thinking();
}



//             // return "Hi, I'm " + (<any>this).name;