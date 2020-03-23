import {IStringSource} from './IStringSource'

export class StringSource2 implements IStringSource {
    public next() : String {
        return "racecar    able was I ere I saw Elba     a man a plan a canal panama";
    }
}