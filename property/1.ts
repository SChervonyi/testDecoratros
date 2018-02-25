function RealName(target: any, key: string): void {
    // property value
    var _val : any = target[key];

    // property getter
    var getter = function () {
        return "Sanchez(" + _val + ")";
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

class JSMeetup {
    @RealName public myName = "Rick";
    constructor() {
    }
    greet() {
        return "Hi, I'm " + this.myName;
    }
}

const meetup = new JSMeetup();
console.log(meetup.greet());
meetup.myName = "Morti";
console.log(meetup.greet());