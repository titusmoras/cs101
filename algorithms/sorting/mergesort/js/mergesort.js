//mergesort
//The idea here is to split the unsorted input, recursively, until there are only 1 per split. At that point , the list is sorted and 
//the sorted list is returned.
//T(n)=aT(n/b)+O(nPOWd). Master Theorem or Master method. Here, a = 2, b = 2, d=1. Since a = bPOW d, it is nPOWd log n , ie nlogn.



function merge(part1, part2){
    let i=0,j = 0,k=0;
    let result = Array(0);

    console.log("unsorted part1 : " + part1 + ", unsorted part 2 : " + part2)
  
    while(i < part1.length && j< part2.length)
    {
        if (part1[i]<=part2[j])
        result[k++] = part1[i++]
        else result[k++]= part2[j++]
    }

    while (j<part2.length)
    result[k++] = part2[j++]

    while(i< part1.length)
    result[k++]=part1[i++]

       
    console.log("merged and sorted part1 and part 2: " + result)
    return result;
   

}


function mergesort(inputarray, startindex, endindex){
console.log("startindex : " +  startindex + " , endindex: " + endindex)


if(endindex - startindex === 0 )
return inputarray[startindex];

//send first half to one, and second half to another
let val1,val2;
val1 = mergesort(inputarray, startindex, Math.floor((startindex + endindex)/2));
val2 = mergesort(inputarray,Math.floor((startindex+ endindex)/2) +1, endindex);
if(Array.isArray(val1)===false)
val1 = Array.of(val1);
if(Array.isArray(val2)===false)
val2 = Array.of(val2);
return merge(val1, val2);

}

let unsorted = [35,23,100,0,1,5,7,22,19];
let sorted = mergesort(unsorted, 0, unsorted.length - 1)
console.log("sorted!!" + sorted);
