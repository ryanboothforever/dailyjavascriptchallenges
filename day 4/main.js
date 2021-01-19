//Please create a function that takes in the name of a person.This function should add this person to a names list and let them know their position on the list.The names list should be created outside of the function. 

let listArr = [];

function theList(name){
    listArr.push(name);
    console.log(`${name} is number ${listArr.indexOf(name)+1} on the list`);
}

theList("Ryan")
theList("Trashcan Man")
