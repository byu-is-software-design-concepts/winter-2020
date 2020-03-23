import {IStringSource} from './IStringSource'

export class StringSource1 implements IStringSource {
    public next() : String {
        return "I listened to a rap song on the radio this morning.";
    }
}