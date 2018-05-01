/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sorting;

/**
 *
 * @author titusmoras
 */
public class InsertionSort {
    
    
    
public static void main(String ... vargs){
    int[] numbers = new int[] {5,7,1,6,9,4};
    InsertionSort sorting = new InsertionSort();
    sorting.sortNumber(numbers);
}

public int[] sortNumber(int numbers[]){
    
    int shuffledIndex = 1;
    int sortedIndex = 0;
    // first element is already in place
    // start from second element, insert in the right place
    for(shuffledIndex= 1; shuffledIndex< numbers.length; shuffledIndex++)
    {
        // compare 
        for(sortedIndex=0; sortedIndex<shuffledIndex; sortedIndex++ )
            if(numbers[sortedIndex]> numbers[shuffledIndex]) // the picked card is greater than any
                //card in the sorted set of cards
            {
                int temp = numbers[shuffledIndex]; // remember the picked card
                for(int i = shuffledIndex;i > sortedIndex; i-- ) 
                {  numbers[i] = numbers[i-1];// move all sorted cards from the right, including the
                // one which is bigger than the picked card
                System.out.println("Shifting...");
                    printArray(numbers);
                }
                numbers[sortedIndex]= temp; // insert the picked card  in the positiin of 
                //the compared sorted card
                
                
            }
    printArray(numbers);
    }
    return numbers;
}

public void printArray(int[] numbers){
    for(int i =0; i < numbers.length; i++)
    System.out.print(numbers[i] + " ");
    
    System.out.println();
}
}
