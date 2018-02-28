function Discount(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor <any> {
    console.log("Target: ", target);
    console.log("PropertyKey: ", propertyKey);
    console.log("descriptor: ", descriptor);
    console.log('************************************************************');

    let oldValue = descriptor.value;

    descriptor.value = function () {
        console.log(`Calling "${propertyKey}" with`, arguments, target);
        // Executing the original function
        let value = oldValue.apply(this, ...arguments);
        //returning a modified value
        if (value >= 100){
            return value * 0.9;
        }
        return value;
    };

    return descriptor;
}

class JSMeetup {
    private readonly deliveryPrice: number = 10;
    @Discount
    calculateSum(arr: number[]): number {
        return arr.reduce((a, b) => a + b, this.deliveryPrice);
    }
}

const meetup = new JSMeetup();

console.log("Result:", meetup.calculateSum([10, 20]));
console.log('-------------------------------------------------------');
console.log("Result:", meetup.calculateSum([50, 50]));