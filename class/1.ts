function AwesomeMeetup<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor implements extra {
        speaker: string = "Ragularuban";
        extra = "Tadah!";
    }
}

@AwesomeMeetup
class JSMeetup {
    public speaker = "Ruban";
    constructor() {
    }
    greet() {
        return "Hi, I'm " + this.speaker;
    }
}

interface extra {
    extra: string;
}

const meetup = new JSMeetup() as JSMeetup & extra;
console.log(meetup.greet());
console.log(meetup.extra);