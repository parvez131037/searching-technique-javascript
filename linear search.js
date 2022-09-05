function linearSearch(array,target){
    for(i=0 ; i<array.length ; i++){
        if (array[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([5,8,24,56,78,44],56));
console.log(linearSearch([5,8,24,56,78,44],78));
console.log(linearSearch([5,8,24,56,78,44],20));