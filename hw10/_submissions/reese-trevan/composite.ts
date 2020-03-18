interface Box {
    open(): any;
    pay(): number;
  }
  
  class LeafBox implements Box {
    contents: List[Employee];
    constructor(stuff: List[Employee]) {
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
      return this.contents.map(box => box.pay());
    }
  }
  