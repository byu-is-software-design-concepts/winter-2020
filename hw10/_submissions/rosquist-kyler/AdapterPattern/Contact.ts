

export class Contact {

	private _firstName: string;
	private _lastName: string;
	private _phone: string;
	private _email: string;
	
	constructor(firstName: string = "", lastName: string = "", phone: string = "", email: string = "") {
		this.setFirstName(firstName);
		this.setLastName(lastName);
		this.setPhone(phone);
		this.setEmail(email);
	}
	
	public getFirstName(): string {
		return this._firstName;
	}
	public setFirstName(value: string): void {
		this._firstName = value;
	}
	
	public getLastName(): string {
		return this._lastName;
	}
	public setLastName(value: string): void {
		this._lastName = value;
	}
	
	public getPhone(): string {
		return this._phone;
	}
	public setPhone(value: string): void {
		this._phone = value;
	}
	
	public getEmail(): string {
		return this._email;
	}
	public setEmail(value: string): void {
		this._email = value;
	}
	
}
