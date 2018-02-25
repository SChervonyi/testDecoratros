function LeDecorator(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor <any> {
    let oldValue = descriptor.value;

    descriptor.value = function () {
        console.log(`Calling "${propertyKey}" with`, arguments, target);
        // Executing the original function interchanging the arguments
        let value = oldValue.apply(null, [arguments[1], arguments[0]]);
        //returning a modified value
        return value + "; This is awesome";
    };

    return descriptor;
}

class JSMeetup {
    speaker = "Ruban";
     @LeDecorator
    welcome(arg1: string, arg2: string): string {
        console.log(`Arguments Received are ${arg1}, ${arg2}`);
        return `${arg1} ${arg2}`;
    }
}

const meetup = new JSMeetup();

console.log(meetup.welcome("World", "Hello"));