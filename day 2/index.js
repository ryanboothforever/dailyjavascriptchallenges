function wordGreaterThanNum(word, num){
    if(word.length*num > 100){
        console.log("Winner!");
    } else {
        console.log("try again");
    }
}

console.log(wordGreaterThanNum("hotdog", 5));