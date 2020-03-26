// see https://dev.to/coly010/the-composite-pattern-design-patterns-meet-the-frontend-445e

export interface Instruction {
    name: string;

    execute(): boolean; // check whether it was executed successfully
}

export abstract class SingleInstruction implements Instruction {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract execute(): boolean;
}

export class CompositeInstructionSet implements Instruction {
    // Our composite instruction should have children
    // that can be any implementation of Instruction
    private children: Instruction[] = [];

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    execute() {
        let successful = false;

        // Iterate through our children calling their execute method
        // We don't need to know if our child is a Composite Instruction Set
        // or just a SingleInstruction
        for (const child of this.children) {
            successful = child.execute();

            if (!successful) {
                return false;
            }
        }
    }

    addChild(child: Instruction) {
        this.children.push(child);
    }

    removeChild(child: Instruction) {
        this.children = this.children.filter(c => c.name !== child.name);
    }
}

export class LogInstructon extends SingleInstruction {
    log: string;

    constructor(name: string, log: string) {
        super(name);

        this.log = log;
    }

    execute() {
        console.log(`${this.name}: ${this.log}`);
        return true;
    }
}

export class TaskRunner {
    tasks: Instruction[];

    constructor(tasks: Instruction[]) {
        this.tasks = tasks;
    }

    runTasks() {
        for (const task of this.tasks) {
            task.execute();
        }
    }
}

// Testing

function main() {
    const startUpLogInstruction = new LogInstructon('Starting', 'Task runner booting up...');
    const compositeInstruction = new CompositeInstructionSet('Composite');

    const firstSubTask = new LogInstructon('Composite 1', 'The first sub task');
    const secondSubTask = new LogInstructon('Composite 2', 'The second sub task');

    compositeInstruction.addChild(firstSubTask);
    compositeInstruction.addChild(secondSubTask);

    const taskRunner = new TaskRunner([startUpLogInstruction, compositeInstruction]);

    taskRunner.runTasks();
}