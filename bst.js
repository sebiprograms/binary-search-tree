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
}

//let tree = new Tree([0,1,2,3,4,5,6,7])
//console.log(tree.buildTree([0,1,2,3,4,5,6,7], 0, 7)) 

