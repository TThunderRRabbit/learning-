array1 = [3,4,5,6]

function remove(original, ...args) {
    newArray = []

    original.forEach((x) => {
        if(!args.includes(x)) {
            newArray.push(x)
        }
    });
    return newArray
}


console.log(remove(array1, 3))