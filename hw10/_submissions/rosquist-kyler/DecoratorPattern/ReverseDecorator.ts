import {Decorator} from './abstrDecorator'
import {IStringSource} from './IStringSource'

export class ReverseDecorator extends Decorator {

    constructor(ss : IStringSource) {
        super(ss);
    }

    public next() : String {
        let s : String = this.source.next();
        return this.reverse(s);
    }

    public reverse(s : String) : String {
        let output : String = "";
        for ( let i : number = s.length-1; i >= 0; i--) {
            output += s.charAt(i);
        }
        return output;
    }
}