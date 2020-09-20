//create a complete binary tree and traverse it - input is an array. You can create a heap

function getNode(val){
    return ({val, left:null,right: null})
}

function createTree( input,index,maxindex, current){
    
    if( index > maxindex)
    return;
    if (current === null)
    {
        current = getNode(input[index] )
        console.log( "current node is " + current.val)
        current.left= createTree(input, 2*index + 1, maxindex, current.left)
        current.right = createTree( input, 2*index +2, maxindex, current.right)
        if( current.left === undefined && current.right === undefined)
            console.log( "current node is a leaf, value " + current.val)
        if( current.left!== undefined)
        {
            let temp = current.left; 
            console.log( "currents left node is : " + temp.val  )
        }

        if( current.right!== undefined){
            let temp = current.right
            console.log( "currents right node is: " + temp.val)
        }
 
    }
    return current;
}

function inordertraversal( root){
    if( root === null || root === undefined)
        return;
    inordertraversal( root.left)
    console.log( root.val + " \ ")
    inordertraversal ( root.right)


}

function preordertraversal(root){
    if( root === null || root === undefined)
    return;
    console.log( root.val)
    console.log( " // ")
    preordertraversal( root.left)
    console.log( " \\ ")
    preordertraversal(root.right)
}

function postordertraversal(root){
    if( root === null || root === undefined)
    return
    postordertraversal(root.left)
    postordertraversal(root.right)
    console.log( root.val)
}


let arr = [2,5,7,9,11,13,95,799,2999,29977,57,63,92,65]

let root = createTree(arr,0,arr.length -1 , null)
inordertraversal( root);
preordertraversal(root);
postordertraversal( root);
