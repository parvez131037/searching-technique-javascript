function recursiveBinarySearch(arr,target){
    return search(arr, target, 0, arr.length-1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }

    let midIndex = Math.floor((leftIndex+rightIndex)/2)
    if(target===arr[midIndex])
    return midIndex;

    if(target<arr[midIndex]){
        return search(arr, target, leftIndex, midIndex-1)
    }else{
        return search(arr,target,midIndex+1, rightIndex);
    }
}
console.log(recursiveBinarySearch([2,4,6,8,10], 4))  //1
console.log(recursiveBinarySearch([2,4,6,8,10], 12))   //-1
console.log(recursiveBinarySearch([2,4,6,8,10], 8))  //3