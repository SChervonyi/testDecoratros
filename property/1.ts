function RealName(target: any, key: string): void {
    console.log("Target: ", target);
    console.log("PropertyKey: ", key);
    console.log('************************************************************');

    // property value
    var _val : any = target[key];

    // property getter
    var getter = function () {
        return  _val + " Sanchez";
    };

    // property setter
    var setter = function (newVal: any) {
        _val = newVal;
    };

    // Create new property with getter and setter
    Object.defineProperty(target, key, {
        get: getter,
        set: setter
    });
}

class Rick {
    @RealName public myName = "Rick";
    greet() {
        return "Hi, I'm " + this.myName;
    }
}

const rick = new Rick();
console.log(rick.greet());
rick.myName = "Morti";
console.log(rick.greet());