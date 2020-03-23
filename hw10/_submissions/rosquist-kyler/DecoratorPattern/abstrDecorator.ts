import {IStringSource} from './IStringSource'

export abstract class Decorator implements IStringSource {
    source : IStringSource;
    constructor(ss : IStringSource) {
        this.source = ss;
    }

    public next() : String {
        return this.source.next();
    }

}
