

class Tree {
    constructor(arr){
        this.arr = arr
        this.root = null
    }

    buildTree(array, start, end) {
        let mid = (end - start) / 2;
        this.root = new Node(array[mid])

        this.root.left = buildTree(array, start, mid-1);

        this.root.right = buildTree(array, mid+1, end);

        return this.root;
    }
}

class Node extends Tree{
    constructor(value, left=null, right= null, arr){
        super(arr)
        this.value = value;
        this.left = null
        this.right = null
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};


let tree = new Tree([0,1,2,3,4,5,6,7])
console.log(tree.buildTree(tree.arr, 0, 7))