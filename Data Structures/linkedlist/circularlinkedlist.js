//circular linked list

function getNode (value ){
return ({value, next: null})
}

function createcircularlist(arr){
    let root = getNode(arr[0]);
    let current = root;
    for( let i = 1;  i < arr.length; i++)
    {
        current.next= getNode( arr[i]);
        current= current.next;
    }
    current.next= root;
    return root;
}

function printcircularlist( root){
    let current = root; 
    while( current.next !==root){
        console.log( current.value + " -> ")
        current = current.next
    }
    return root;
}

let obj = createcircularlist( [3,5,7,39,29,6,9])
printcircularlist( obj);
