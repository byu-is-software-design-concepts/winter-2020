interface Box {
    open(): any;
}

class LeafBox implements Box {
    contents: any;
    constructor(stuff: any) {
        this.contents = stuff;
    }
    open() {
        return this.contents;
    }
}

class CompositeBox implements Box {
    contents: Box[];
    constructor(boxes: Box[]) {
        this.contents = boxes;
    }

    open() {
        return this.contents.map(box => box.open());
    }
}