//selection sort - select the smallest, every loop, and swap with the first - and so on. Best case and worst case match
// as we loop even on sorted lists

function selectionsort(input){
    for( let i = 0; i < input.length; i++){
        let smallest = input[i];
        let swapindex = -1;
        for( let j= i; j<input.length; j++){
            if(input[j]< smallest){
                swapindex = j;
                smallest = input[j];
            }
              
    
        }
        if(-1 !==swapindex){
        input[swapindex]= input[i];
        input[i]= smallest;
        }


    }
    return input;
}

let arg = selectionsort([88,2,8,9,1,5,299,29,12]);
console.log(arg);
