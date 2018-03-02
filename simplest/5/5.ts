function Readonly(target: any, key: string): void {
    var _val: any = target[key];

    var getter = function () { return _val; };

    var setter = function (newVal: any) {
        if(_val === undefined && newVal !== undefined) { _val = newVal; }
    };

    // Create new property with getter and setter
    Object.defineProperty(target, key, { get: getter, set: setter });
}

class Rick {
    @Readonly public myName = "Rick";
    greet() {
        return "Hi, I'm " + this.myName;
    }
}

const rick = new Rick();
console.log(rick.greet());
rick.myName = "Morti";
console.log(rick.greet());