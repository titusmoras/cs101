//bubblesort - loop through the array n times, each time find the biggest, and move it to the end. In the next loop, find the 
//second biggest, and so on. this is O(nPOW2) as we loop over n times, and each time do a n comparison.worst case can be O(n) as we 
//maintain a flag indicating no changes made in a loop, which will exit after the first pass.

function bubblesort(inputarray){
    let change, temp;
    for(let i = 0; i < inputarray.length;i++){
        let change = false;
        for( let j = 0; j< inputarray.length - i;j++){
            if( inputarray[j] > inputarray[j+1])
            {
                change = true;
                temp = inputarray[j]
                inputarray[j] = inputarray[j+1]
                inputarray[j+ 1 ] = temp;
            }
            
        }
        console.log( "current state of the array:"  + inputarray)
        if (change = false ) return inputarray;
    }
    return inputarray;
}

console.log(bubblesort( [5,2,9,1, 0 ,55,100, 3,3,5,2]));
