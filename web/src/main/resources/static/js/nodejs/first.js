let repository = require('./file-repository.js');
let fs = require('fs');
let newlec = require("newlec-hello");

let dirList = repository.findAll("../");
let csv = dirList.join(",");

fs.writeFileSync("./folder-list.txt",csv);

console.log(repository.findAll("./",{typeName:".js"}));

newlec.hello();