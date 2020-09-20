//Heap sort involves building a Max heap ( a complete binary tree ) , moving the largest to the end, adjusting the heap. Repeat until
//the heap length is 1. This is an inplace sort. Works well for arrays.
// creating a heap is O(n) as you have to go through all the elements. sifting down is log n as you are adjusting a tree.
// since you have to sift down n times ,it is a total of n*logn  + n for the heap. O(nlogn)

//2*i + 1 and 2*i + 2 are child nodes. Math.floor((i-1)/2) is the parent node.

function heapify(input, rootindex, endindex){
    //the idea is to apply heapify from the bottommost non-leaf, and move up. 
    //at any point, the bottom trees should be heaps. If there is a swap at any point,
   // then the affected tree is recursively heapified.


   for( let i = Math.floor((endindex -1) / 2); i >=0; i--)
   {    let largest = i ;
        if( 2*i + 1 <= endindex && input[i] < input[2*i + 1])
          largest = 2*i +1;
       if( 2*i + 2 <= endindex && input[i] < input[2*i + 2])
          largest = 2*i +2;

        if ( largest !== i)
        {
            swap ( input, largest, i);
            console.log( "recursive call to heapify. Current array: " + input)
            heapify( input, largest, endindex)
        }


   }
}






function swap(input, index1,index2){
    let temp = input[index1];
    input[index1] = input[index2];
    input[index2]= temp;
}

function siftdown(input, root, maxlength){
    let largest = root;
    if (2*root + 1 <= maxlength && input[2*root+1] > input[largest])
      largest = 2*root + 1;
    if (2*root + 2 <= maxlength && input[2*root+2] > input[largest])
      largest = 2*root + 2;

    if ( largest !== root)
    {
        swap(input, root, largest)
        console.log( "Recursive call to siftdown. current array : " + input)
        siftdown( input, largest, maxlength)
    }
      
}


//heapify - this is done once
let input =  [3,299,29,100,593,2,1,39,28,26,1,5,1000,38,59,37,55,53];
heapify(input, 0, input.length - 1);
//swap the largest - move it to the end
for( let i = input.length-1;i >0; i--)
{
  console.log( " Swapping the largest value - moving it to the end here")  
 swap(input, 0, i);
 
  siftdown(input, 0, i-1)
}
console.log(input)
