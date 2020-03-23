import {IStringSource} from './IStringSource'
import {StringSource1} from './StringSource1'
import {StringSource2} from './StringSource2'
import {ReverseDecorator} from './ReverseDecorator'
import {SensorDecorator} from './SensorDecorator'

const test1 : IStringSource = new StringSource1();
console.log(test1.next());
console.log((new SensorDecorator(test1)).next());
console.log((new SensorDecorator( new ReverseDecorator(test1))).next());

console.log("\n");

const test2 : IStringSource = new StringSource2();
console.log(test2.next());
console.log((new SensorDecorator(test2)).next());
console.log((new SensorDecorator( new ReverseDecorator(test2))).next());
