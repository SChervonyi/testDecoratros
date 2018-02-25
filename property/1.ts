function RealName(target: any, key: string): void {
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

const meetup = new Rick();
console.log(meetup.greet());
meetup.myName = "Morti";
console.log(meetup.greet());