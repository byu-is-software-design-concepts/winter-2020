import { toJson } from "csvtojson";

interface NewDataFormat {
  getData(): {};
}

class LegacyCode {
  data: csvString;
  constructor() {}
}

class LegacyCodeAdapter implements NewDataFormat {
  adaptee: LegacyCode;
  constructor(legacyCode: LegacyCode) {
    this.adaptee = legacyCode;
  }
  getData() {
    csv().from(csvString).then((jsonObj)=>{
        console.log(jsonObj)});
    return jsonObj;
  }
}

class NewCode implements NewDataFormat {
  data: JSON;
  constructor() {}
  getData() {
    return this.data;
  }
}