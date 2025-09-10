class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.visited = false;
    }
}

class Stack {
  constructor(){
    this.stack = []
    this.top = this.stack[this.stack.length - 1]
  }
}

class Tree {
    constructor(){
        this.root = null;
        this.visited = null
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

    height(node){
  
      if (node == null){
        return 0
      }

      return 1 + Math.max(this.height(node.left),this.height(node.right))
    }

    // need to read more before creatings
    isBalanced(node){
      if (node === null){
        return true;
      }

      let lHeight = this.height(node.left);
      let rHeight = this.height(node.right);

      if (Math.abs(lHeight - rHeight) > 1){
        return false;
      }

      return this.isBalanced(node.left) && this.isBalanced(node.right)
    }
    
    preOrder(node, Array){
      if (node === null) return   
      
      arr.push(node.value)
      console.log(node.value)
  
      this.preOrder(node.left)

      this.preOrder(node.right)
    }

    inOrder(node, Array){
      if (node === null) return
  
      this.inOrder(node.left)

      arr.push(node.value)
      console.log(node.value)

      this.inOrder(node.right)
    }

    postOrder(node, Array){
      if (node === null) return
  
      this.postOrder(node.left)
      this.postOrder(node.right)

      arr.push(node.value)
      console.log(node.value)  
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




prettyPrint(tree.root)
let arr = new Array

tree.postOrder(tree.root, arr)
console.log(arr)