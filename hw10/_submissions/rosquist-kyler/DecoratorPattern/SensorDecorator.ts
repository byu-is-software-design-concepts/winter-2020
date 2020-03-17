import {Decorator} from './abstrDecorator'
import {IStringSource} from './IStringSource'

export class SensorDecorator extends Decorator {

    constructor(ss : IStringSource) {
        super(ss);
    }

    public next() : String {
        let s : String = this.source.next();
        return this.sensor(s);
    }
    vowels : String[] = ['a','e','o','i','u'];

    public sensor(s : String) : String {
        let output : String = "";
        for ( let i : number = 0; i < s.length; i++) {
            output += this.vowels.indexOf(s.charAt(i)) > -1 ? '*' : s.charAt(i);
        }
        return output;
    }
}