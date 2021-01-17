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