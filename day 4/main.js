let listArr = [];

function theList(name){
    listArr.push(name);
    console.log(`${name} is number ${listArr.indexOf(name)+1} on the list`);
}

theList("Ryan")
theList("Trashcan Man")
