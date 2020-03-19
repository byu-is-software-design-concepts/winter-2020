import { toJson } from "xml2json";

interface NewDataFormat {
    getData(): {};
}

class LegacyCode {
    xmlData: string;
    constructor() { }
}

class LegacyCodeAdapter implements NewDataFormat {
    adaptee: LegacyCode;
    constructor(legacyCode: LegacyCode) {
        this.adaptee = legacyCode;
    }
    getData() {
        return toJson(this.adaptee.xmlData, { object: true });
    }
}

class NewCode implements NewDataFormat {
    data: JSON;
    constructor() { }
    getData() {
        return this.data;
    }
}