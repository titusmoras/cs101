
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



function insertNodeAtEnd( root, val){
    let current = root;
    if( root === null)
    return getNode( val);

    while(current.next!==null ){
        current=current.next;
        //do nothing
    }
    current.next= getNode( val)
    return root;
}

let arr = [9,38,39,17,0,8,1,4,100,398,7]
let obj = createLinkedList(arr );
printlist( obj);




obj = insertNodeAtEnd(obj, 8)
printlist(obj);
