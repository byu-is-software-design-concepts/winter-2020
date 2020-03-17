// SINGLETON DESIGN PATTERN
// Only one object of its kind exist
// Provides single point of access to it for any other code

class Singleton {
    public id: number;
    private data: number[] = [];
  
    private static instance: Singleton;
    // Constructor should always be private to prevent direct construction 
    // calls with 'new' operator
    private constructor() { 
      this.id = Math.random();
    }
    // static method controls access to the Singleton instance
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    public addData(num: number) {
      this.data.push(num);
    }
  
    public getData() {
      return this.data;
    }
  }
  
  const singleton = Singleton.getInstance();
  const singletonJr = Singleton.getInstance();
  
  singleton.addData(1);
  singleton.addData(2);
  singleton.addData(4);
  
  singletonJr.addData(3);
  singletonJr.addData(5);
  
  console.log(singletonJr.getData());
  // console.log(singleton.id);
  // console.log(singletonJr.id);
  
  // console.log(singleton === singletonJr);
  // console.log({} === {});