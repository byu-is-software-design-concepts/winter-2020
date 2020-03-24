// This is an adapter that is really similar to the one in class.
// It converts data stored in a CSV into a JSON object. This is a real library. The
// docs can be found here: https://www.npmjs.com/package/convert-csv-to-json
let csvToJson = require('convert-csv-to-json');
let fileInputName = 'myInputFile.csv'; 
let fileOutputName = 'myOutputFile.json';

interface NewDataFormat {
    getData();
}

class LegacyCSV {
    csvData: string;
    constructor() {}
}

class LegacyCSVAdapter implements NewDataFormat {
    adaptee: LegacyCSV;
    constructor(legacyCSV: LegacyCSV){
        this.adaptee = legacyCSV;
    }
    getData(){
        return csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
    }
}

class NewCode implements NewDataFormat {
    data: JSON;
    constructor() {}
    getData(){
        return this.data;
    }
}
