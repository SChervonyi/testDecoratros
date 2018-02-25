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
class Snaffles {
    say() {
        return "Gaf!";
    }
}

interface SmartDog {
    say(): string;
    thinking(): void;
}

const snaffles = new Snaffles() as Snaffles & SmartDog;
console.log(snaffles.say());
if(snaffles.thinking) { 
    snaffles.thinking(); 
}