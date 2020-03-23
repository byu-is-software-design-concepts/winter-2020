//Addapter does all the stuff that ContactManager can't do
import {ContactManager} from './ContactManager'
import {TableData} from './TableData'
import {Contact} from './Contact'
import {Justification} from './Justification'

export class Adapter implements TableData {
    public contactManager:ContactManager;

    constructor(cm : ContactManager) {
        this.contactManager = cm;

        const contact : Contact = new Contact();
        contact.setEmail("yousexythang@gmail.com");
        contact.setFirstName("Hot");
        contact.setLastName("Chocolate");
        contact.setPhone("80187654321");

        const contact1 : Contact = new Contact("Joe", "Shmoe", "7898765432", "get@me.com");
        this.contactManager.addContact(contact);
        this.contactManager.addContact(contact1);

    }

    public getColumnCount() : number {
        return 4;
    }

    public getRowCount() : number {
        return this.contactManager.getContactCount();
    }

    public getColumnSpacing() : number {
        return 1;
    }

    
    public getRowSpacing() : number {
        return 0;
    }

    
    public getHeaderUnderline() : string {
        return '_';
    }

    
    public getColumnHeader(col: number) : string {
        const headers : string[] = [
                "First Name",
                "Last Name",
                "Phone Num",
                "Email"
        ];
        return headers[col];
    }

    
    public getColumnWidth(col : number) : number {
        const headers : String[] = [
                "First Name",
                "Last Name",
                "Phone Num",
                "Email"
            ];
        return headers[col].length;
    }

    
    public getColumnJustification(col : number) : Justification {
        return Justification.Left;
    }

    
    public getCellValue(row : number, col : number) : string {
        let c : Contact = this.contactManager.getContact(row);
        let sb : string = "";
        switch (col) {
            case 0:
                sb += (c.getFirstName());
                break;
            case 1:
                sb += (c.getLastName());
                break;
            case 2:
                sb += (c.getPhone());
                break;
            case 3:
                sb += (c.getEmail());
                break;
            default:

        }
        return sb.toString();
    }
}
