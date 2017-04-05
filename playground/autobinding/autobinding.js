let obj = {
    name: 'Dustin',
    printName: function() {
        "use strict";
        console.log(`${this.name}`);
    }
};

obj.printName();
setTimeout(obj.printName.bind(obj), 1000);