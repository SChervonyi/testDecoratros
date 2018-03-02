function HelmetFactory(name: string) {
    return function Helmet<TFunc extends { new(...args: any[]): {} }>(constructor: TFunc): TFunc | void {
        return class extends constructor implements SmartAnimal {
            say(): string {
                return "Hi, I'm " + name;
            }
            thinking(): void {
                console.log("I am thinking");
            }
        }
    }
}

@HelmetFactory("Snaffles")
class Snaffles {
    say() {
        return "Gaf!";
    }
}

interface SmartAnimal {
    thinking(): void;
}

const dog = new Snaffles() as Snaffles & SmartAnimal;
console.log(dog.say());
if (dog.thinking) { 
    dog.thinking(); 
}