//Please create a function that takes in a number.Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2.

function skipDiv2(n1){
    for(let i = 1; i <=n1; i++){
        if((i*3)%2===0){
            continue;
        } else {
            console.log(i);
        }
    }
}

skipDiv2(100)