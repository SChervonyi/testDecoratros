function HelmetFactory(name: string) {
    return function Helmet<TFunc extends { new(...args: any[]): {} }>(constructor: TFunc): TFunc | void {
        return class extends constructor implements SmartDog {
            say(): string {
                return "Hi, I'm " + name;
            }
            thinking(): void {
                console.log("Where's my bone?");
            }
        }
    }
}

@HelmetFactory("Snaffles")
class Dog {
    say() {
        return "Gaf!";
    }
}

interface SmartDog {
    thinking(): void;
}

const dog = new Dog() as Dog & SmartDog;
console.log(dog.say());
if (dog.thinking) { 
    dog.thinking(); 
}