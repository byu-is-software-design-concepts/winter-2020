
import { Justification } from './Justification';


export interface TableData {
	
	// TABLE STRUCTURE
	
	// Returns number of columns in the table
	getColumnCount(): number;
	// Returns number of rows in the table
	getRowCount(): number;
	// Returns the number of spaces between the table columns
	getColumnSpacing(): number;
	// Returns the number of empty lines between the table rows
	getRowSpacing(): number;
	// Returns the character to be used to underline the table headers
	getHeaderUnderline(): string;
	
	
	// COLUMN STRUCTURE
	
	// Returns the header string for the specified column
	getColumnHeader(col: number): string;
	// Returns the width (in spaces) of the specified column
	getColumnWidth(col: number): number;
	// Returns the justification for the values in the specified column
	getColumnJustification(col: number): Justification;
	
	
	// CELL VALUES
	
	// Returns the value in the specified table cell
	getCellValue(row: number, col: number): string;
	
}
