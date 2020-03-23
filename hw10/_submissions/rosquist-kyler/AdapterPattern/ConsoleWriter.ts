
import { Writer } from './Writer';


export class ConsoleWriter implements Writer {

	private buffer: string;
	
	constructor() {
		this.buffer = '';
	}
	
	public append(str: string): void {
		if (str === '\n') {
			console.log(this.buffer);
			this.buffer = '';
		}
		else {
			this.buffer += str;
		}
	}
}
