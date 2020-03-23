
import { Contact } from './Contact';

export class ContactManager {

	private contacts: Contact[];
	
	constructor() {
		this.contacts = [];
	}
	
	public getContactCount(): number {
		return this.contacts.length;
	}
	
	public getContact(index: number): Contact {
		return this.contacts[index];
	}
	
	public setContact(index: number, value: Contact): void {
		this.contacts[index] = value;
	}
	
	public addContact(value: Contact): void {
		this.contacts.push(value);
	}
	
}
