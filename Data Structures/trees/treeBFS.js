//breadth first traversal of a tree - idea is to push children into a queue. Dequeue, push children, print.

function getNode(value){
    return ({value, left: null, right:null})
}

function createtree( arr, currentindex, maxindex, root){
 if( currentindex > maxindex)
 return;
 root = getNode( arr[currentindex]);
 root.left = createtree( arr, 2*currentindex +1, maxindex, root.left)
 root.right = createtree( arr, 2*currentindex+ 2, maxindex, root.right)
 return root;
}

function printtree( root){
    if( root===null || root === undefined)
    return
    console.log( root.value)
    printtree( root.left)
    printtree( root.right)
}



//breadth first traversal

function bfs( root){
    let queue = [];
    if ( root === null)
    return;
    queue.push(root);
    let current = null;
    while ((current = queue.shift()) !== null && current!== undefined)
    {
        
        console.log( current.value)
        if( current.left!== null && current.left !== undefined)
        queue.push( current.left)
        if ( current.right !== null && current.right!== undefined)
        queue.push( current.right)
    }

}

let root = null;
let arr = [1,5,7,9, 11,93,57,62,91,66,55,44,33,22]
root = createtree( arr, 0, arr.length, root)
printtree( root)
bfs ( root)
