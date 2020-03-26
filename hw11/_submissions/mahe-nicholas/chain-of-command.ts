
class ATM {
    public processorOnes: ProcessorOnes;
    public processorFives: ProcessorFives;
    public processorTens: ProcessorTens;
    public processorTwenties: ProcessorTwenties;
    constructor(processorOnes: ProcessorOnes, processorFives: ProcessorFives, processorTens: ProcessorTens, processorTwenties: ProcessorTwenties){
        this.processorOnes = processorOnes;
        this.processorFives = processorFives;
        this.processorTens = processorTens;
        this.processorTwenties = processorTwenties;
    }
    public withDrawCash(amount: any){
        if (amount % 20 === 0){
            return this.processorOnes.processCash(amount);
        }
        else if (amount % 10 === 0){
            return this.processorTens.processCash(amount);
        }
        else if (amount % 5 === 0){
            return this.processorFives.processCash(amount);
        }
        else {
            return this.processorOnes.processCash(amount);
        }
    }
}

abstract class BillProcessor {
    public billType: number;
    constructor(billType: number){
        this.billType = billType;
    }
    processCash(amount: any, billType: any): void{
        console.log(`printing ${amount} in $${billType}bills`);
    }
}

class ProcessorOnes extends BillProcessor{
    constructor(){
        super(1);
    }
    processCash(amount: any){
        super.processCash(amount, 1)
    }
}
class ProcessorFives extends BillProcessor{
    constructor(){
        super(5);
    }
    processCash(amount: any){
        super.processCash(amount, 5)
    }
}
class ProcessorTens extends BillProcessor{
    constructor(){
        super(10);
    }
    processCash(amount: any){
        super.processCash(amount, 10)
    }
}
class ProcessorTwenties extends BillProcessor{
    constructor(){
        super(20);
    }
    processCash(amount: any){
        super.processCash(amount, 20)
    }
}

const processorOnes = new ProcessorOnes();
const processorFives = new ProcessorFives();
const processorTens = new ProcessorTens();
const processorTwenties = new ProcessorTwenties();
const atm = new ATM(processorOnes, processorFives, processorTens, processorTwenties);

atm.withDrawCash(40);
atm.withDrawCash(50);
atm.withDrawCash(45);
atm.withDrawCash(6);
