
//insert, update , delete operations on linked lists: 

function getNode(value){
    return ({value,next : null})
}

function createLinkedList(input){
    let root;
    let current;
    for ( let i of input){
        if (root=== undefined){     
        root = getNode(i);
        current = root;
        }
        else{
        current.next = getNode(i);
        current= current.next;
        }
    
    }
    return root;
}

function printlist ( root){
    let current = root;
    while ( current!==null){
    console.log( current.value + "->")
    current= current.next 
    }
}

//delete the first occurance of a node of value x
function deleteNode(root, val){
    let current = root;
    //case 1 : node is at the beginning ie root. 
    if( root.value === val){
        current = root;
        root= root.next;
        current = null;
        return root;
    }
    
    //case 2 : node is in the middle
    let parentofcurrent = current;
    current = current.next;
    while( current!==null){
        if( current.value === val){
            parentofcurrent.next = current.next
            current.next = null;
            return root;
        }
        parentofcurrent = current;
        current = current.next;
    }
    
    return root;
}

let arr = [9,38,39,17,0,8,1,4,100,398,7]
let obj = createLinkedList(arr );
printlist( obj);

obj = deleteNode( obj, 9);
printlist( obj);

obj = deleteNode( obj,0 );
printlist( obj);

obj = deleteNode(obj, 7);
printlist( obj)
