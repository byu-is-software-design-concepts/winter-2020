import UtahPerson from './UtahPerson'
import Store from "./Store"
import IObserver from "./IObserver"
import SanePerson from './SanePerson';


const uPerson : IObserver = new UtahPerson();
const sPerson : IObserver = new SanePerson();
let walMart : Store = new Store();

walMart.subscribe(uPerson);
walMart.subscribe(sPerson);

console.log('\n***Wal-Mart just ran out of TP');
walMart.setToiletPaperCount(0);

console.log('\n***Restocking Wal-Mart with TP');
walMart.setToiletPaperCount(32);
