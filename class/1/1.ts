function Helmet<TFunc extends { new(...args: any[]): {} }>(constructor: TFunc): TFunc {
    console.log("Target: ", constructor);
    console.log('************************************************************');
    
    return class extends constructor implements SmartAnimal {
        say(): string {
            return "Hi, I'm Snaffles";
        }
        thinking(): void {
            console.log("I am thinking");
        }
    }
}

@Helmet
class Snaffles {
    public name: string = "Snaffles";
    
    say() {
        return "Gaf!";
    }
}

interface SmartAnimal {
    thinking(): void;
}

const snaffles = new Snaffles() as Snaffles & SmartAnimal;

console.log(snaffles.say());
if(snaffles.thinking) { 
    snaffles.thinking(); 
}



//             // return "Hi, I'm " + (<any>this).name;