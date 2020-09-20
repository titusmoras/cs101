//Quicksort is the most widely used, it has a worst case complexity of O(nPOW2), although that only happens if the pivot chosen is the 
//largest. Avg and best case is O(nlogn)
// Idea  - you choose a pivot, maybe at the end of the list. You use a position pointer(pos) which will be used to 
//insert the pivot adjacent to it ( pos + 1). j counter is used to compare the value against the pivot. 
// once the pivots position is locked, the lists on the left and right are broken into sub lists, recursively.

function quicksort( arr, startindex, endindex){
    console.log("inside quicksort: startindex:" + startindex + " endindex: " + endindex + " array " + arr)
    let pivot = endindex;
    let pos= startindex -1;
    let temp;
    for( let j = startindex; j< endindex; j++)
    if ( arr[j]<=arr[pivot]){
        pos++;
        temp = arr[j]
        arr[j] = arr[pos];
        arr[pos]= temp;
        console.log("swapping i with j and moving i " + arr)

    }
    temp = arr[pivot]
    arr[pivot]= arr[pos+1]
    arr[pos+1] = temp;
    console.log( "pivot " + arr[pos+1] + "  is placed in the correct position in the arr " + arr)

   if( pos >= startindex)
   quicksort(arr,startindex,pos)
   if( pos+2<=endindex)
   quicksort(arr, pos+2,endindex)   
}

let arr= [53,4,74,23,299,2,9,3,2,2929,28,19,9]
quicksort(arr,0, arr.length -1)
console.log(arr)
