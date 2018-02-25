function LogParameter(target: any, key: string, index: number) {
    var metadataKey = `myMetaData`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}

function LogMethod(target: any, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {

        var metadataKey = `myMetaData`;
        var indices = target[metadataKey];
        console.log('indices', indices);
        for (var i = 0; i < args.length; i++) {

            if (indices.indexOf(i) !== -1) {
                console.log("Found a marked parameter at index" + i);
                args[i] = "Abrakadabra";
            }
        }
        var result = originalMethod.apply(this, args);
        return result;

    }
    return descriptor;
}

class JSMeetup {
    @LogMethod
    public saySomething(something: string, @LogParameter somethingElse: string): string {
        return something + " : " + somethingElse;
    }
}

let meetup = new JSMeetup();

console.log(meetup.saySomething("something", "Something Else"));