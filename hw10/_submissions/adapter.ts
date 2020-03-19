/**
ADAPTER is a structural design pattern that allows objects with incompatible
interfaces to collaborate. It wraps one of the objects to hide the complexity
of conversion happening behind the scenes.
 */

/**
 * The Target defines the domain-specific interface used by the client code.
 */
class DefaultString {
    public request(): string {
        return 'This is the default string.';
    }
}

/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
class IncompatibleString {
    public getIncompatibleString(): string {
        return '.gnirts elbitapmocni na si sihT';
    }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class ConvertToReadableAdapter extends DefaultString {
    private adaptee: IncompatibleString;

    constructor(adaptee: IncompatibleString) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.getIncompatibleString().split('').reverse().join('');
        return `ConvertToReadable Adapter: (TRANSLATED) ${result}`;
    }
}

/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCode(target: DefaultString) {
    console.log(target.request());
}

console.log('Client: I can work just fine with the Default objects:');
const target = new DefaultString();
clientCode(target);

console.log('');

const adaptee = new IncompatibleString();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Incompatible Input String: ${adaptee.getIncompatibleString()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new ConvertToReadableAdapter(adaptee);
clientCode(adapter);