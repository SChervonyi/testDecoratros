function Helmet<TFunc extends { new(...args: any[]): {} }>(constructor: TFunc): TFunc | void {
    return class extends constructor implements SmartDog {
        say(): string {
            return "Hi, I'm Snaffles";
        }
        thinking(): void {
            console.log("Where's my bone?");
        }
    }
}

@Helmet
class Snaffles {
    private name: string = "Snaffles";
    constructor() {
    }
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



//             // return "Hi, I'm " + (<any>this).name;