import {Table} from './Table'
import {Adapter} from './Adapter'
import { Writer } from './Writer';
import {ConsoleWriter} from './ConsoleWriter'
import {ContactManager} from './ContactManager'

console.log("\n\n********Adapter**************");
let w : Writer = new ConsoleWriter();
let table : Table = new Table(w, new Adapter(new ContactManager()));

try {
    table.display();
} catch (e) {
    console.log(e);
}