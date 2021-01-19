//Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 
//Review our last practice problem from last class if you need some ideas.

function oddBoyOut(arr){
    let newArr = [];
    arr.forEach(element => {
        if(element %2 ===1){
            newArr.push(element)
        }
    });
   return newArr
}

console.log(oddBoyOut([76, 55, 43, 42, 17]))

// function oddNums(arr){
//     const onlyOdds = arr.filter(otherArr=>otherArr%2===1);
//     return onlyOdds;
// }

// console.log(oddNums([2, 5, 8, 9]));