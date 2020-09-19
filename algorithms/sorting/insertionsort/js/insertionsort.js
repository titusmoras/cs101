//Insertion sort is like arranging a hand of cards. You always have a section of sorted cards and unsorted cards.
//you find the smallest in unsorted, and insert into the correct position in sorted. Then you shift the bigger cards to the right
//by one
//since there are 2 loops, the worst case is O(nPOW2) . For the best case, it is already sorted, so it is O(n).


function insertionsort(inputarray){
 for ( let key = 1; key < inputarray.length;key++)
 if( inputarray[key ]< inputarray[key-1])
    {
        let value = inputarray[key];
        let j = key-1;


        
        while ( inputarray[j]>value&& j>=0 ){
              inputarray[j+1 ] = inputarray[j]
              j--;

        }

        inputarray[j+1]=value;
 

    }
  
  return inputarray;
}

console.log(insertionsort([1,2,5,93,100,29,8,3]));
