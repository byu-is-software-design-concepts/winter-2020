class NormalString {
    public request(): string {
        return 'Normal string behavior.';
    }
}

class ReverseString {
    public specificRequest(): string {
        return '.looc era sgnirts sdrawkcaB';
    }
}

/**
 * The adapter reverses the ReverseString to be a NormalString
 */
class Adapter extends NormalString {
    private reversedString: ReverseString;

    constructor(reversedString: ReverseString) {
        super();
        this.reversedString = reversedString;
    }

    public request(): string {
        const result = this.reversedString.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

function clientCode(normalString: NormalString) {
    console.log(normalString.request());
}

console.log('Client: I can work just fine with the Target objects:');
const normalString = new NormalString();
clientCode(normalString);

console.log('');

const adaptee = new ReverseString();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);