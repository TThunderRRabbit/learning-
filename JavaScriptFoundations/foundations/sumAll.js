function range(start,end) {
    rangeList = []
    sum = 0 
    for (i=start; i<=end; i++) {
        rangeList.push(i);  
    }
    for (i=0; i<rangeList.length;i++ ) {
        sum += Number(rangeList[i]) }
    return sum
}

console.log(range(1,4))

