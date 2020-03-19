function File(name) {
    this.name = name;
}

File.prototype.display = function () {
    console.log(this.name);
}

function Directory(name) {
    this.name = name;
    this.files = [];
}

Directory.prototype.add = function (file) {
    this.files.push(file);
}

Directory.prototype.remove = function (file) {
    for (let i = 0, length = this.files.length; i < length; i++) {
        if (this.files[i] === file) {
            this.files.splice(i, 1);
            return true;
        }
    }
    
    return false;
}

Directory.prototype.getFileName = function (index) {
    return this.files[index].name;
}

Directory.prototype.display = function() {
    console.log(this.name);
    for (let i = 0, length = this.files.length; i < length; i++) {
        console.log("   ", this.getFileName(i));
    }
}

directoryOne = new Directory('Directory One');
directoryTwo = new Directory('Directory Two');
directoryThree = new Directory('Directory Three');

fileOne = new File('File One');
fileTwo = new File('File Two');
fileThree = new File('File Three');

directoryOne.add(fileOne);
directoryOne.add(fileTwo);

directoryTwo.add(fileOne);

directoryThree.add(fileOne);
directoryThree.add(fileTwo);
directoryThree.add(fileThree);

directoryOne.display();
directoryTwo.display();
directoryThree.display();