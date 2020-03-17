
import { Writer } from './Writer';
import { TableData } from './TableData';
import { Justification } from './Justification';


export class Table {
	
	private destination: Writer;
	private data: TableData;
	
	constructor(destination: Writer, data: TableData) {
		this.destination = destination;
		this.data = data;
	}
	
	public display(): void {
		this.displayHeaders();
		this.displayRows();
	}
	
	private displayHeaders(): void {
		let colCount = this.data.getColumnCount();
		
		for (let i = 0; i < colCount; ++i) {
			
			// Display header spacing
			if (i > 0) {
				this.displayChar(' ', this.data.getColumnSpacing());
			}
			
			// Display header
			this.displayValue(this.data.getColumnHeader(i), this.data.getColumnWidth(i), Justification.Center);
		}
		
		this.destination.append('\n');
		
		let underline: string = this.data.getHeaderUnderline();
		for (let i = 0; i < colCount; ++i) {
			
			// Display underline spacing
			if (i > 0) {
				this.displayChar(' ', this.data.getColumnSpacing());
			}
			
			// Display underline
			this.displayChar(underline, this.data.getColumnWidth(i));
		}
		
		this.destination.append('\n');
	}
	
	private displayRows(): void {
		let colCount: number = this.data.getColumnCount();
		let rowCount: number = this.data.getRowCount();	
		for (let row = 0; row < rowCount; ++row) {
			
			// Display row spacing
			this.displayChar('\n', this.data.getRowSpacing());
			
			// Display row's cell values
			for (let col = 0; col < colCount; ++col) {
				
				// Display column spacing
				if (col > 0) {
					this.displayChar(' ', this.data.getColumnSpacing());
				}
				
				// Display cell value
				this.displayValue(this.data.getCellValue(row, col), this.data.getColumnWidth(col),
									this.data.getColumnJustification(col));
			}
					
			this.destination.append('\n');
		}
	}
	
	private displayValue(value: string, width: number, justification: Justification): void {		
		if (value.length > width) {
			value = value.substring(0, width);
		}
		
		let padding: number = width - value.length;
		
		switch (justification) {
			case Justification.Left:
				{
					this.destination.append(value);
					this.displayPadding(padding);
				}
				break;
			case Justification.Center:
				{
					let leftPadding: number = Math.floor(padding / 2);
					let rightPadding: number = padding - leftPadding;
					
					this.displayPadding(leftPadding);
					this.destination.append(value);
					this.displayPadding(rightPadding);
				}
				break;
			case Justification.Right:
				{
					this.displayPadding(padding);
					this.destination.append(value);
				}
				break;
			default:
				console.assert(false);
				break;
		}		
	}
	
	private displayPadding(count: number): void {
		this.displayChar(' ', count);
	}
	
	private displayChar(c: string, count: number): void {
		for (let i = 0; i < count; ++i) {
			this.destination.append(c);
		}
	}
	
}
