class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    // still needs work to sort and remove duplicates in array
    buildTree(array, start, end) {
      if (start > end) {
        return null
      }

      let mid = Math.floor(start + (end - start) / 2);

      let root = new Node(array[mid])

      root.left = this.buildTree(array, start, mid-1);
      root.right = this.buildTree(array, mid+1, end);
      this.root = root
      return root;
    }

    insert(value){
      if (this.root == null){
        throw new Error("No bst associated with object call buildTree")
      }

      let newNode = new Node(value)
      let tree = this.root
      
      while((tree.left || tree.right) != null){
        if (tree.value < newNode.value){
          tree = tree.right
          if ((tree.value || tree.value) == newNode.value){
            throw new Error("value exists in bst only unique values may be inserted")
          }
        } else if (tree.value > newNode.value){
          tree = tree.left 
          if ((tree.value || tree.value) == newNode.value){
            throw new Error("value exists in bst only unique values may be inserted")
          }
        }
      }
      if (tree.value > newNode.value){
        tree.left = newNode
      } else {
        tree.right = newNode
      }

    }

    delete(){
      
    }

    // need to read more before creating
    isBalanced(leftCounter, rightCounter){
      let tree = this.root
       while((tree.left || tree.right) != null){
         if (tree.left != null){
          tree = tree.left
          
         }
       }
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};


let tree = new Tree
tree.buildTree([0,1,2,3,4,5,6,7], 0, 7) 

tree.insert(13)
prettyPrint(tree.root)
tree.insert(9)
prettyPrint(tree.root)