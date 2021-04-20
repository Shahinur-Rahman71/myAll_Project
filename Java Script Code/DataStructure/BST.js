/* Binary Search Tree */

class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null; // it's call just one time.
	}

	add = (data) => {
		const node = this.root;
		//console.log(node)
		if (node === null) {
			this.root = new Node(data); // root = 9;
			return;
		} else {
			// The value of node will be always 9 ***
			const searchTree = (node) => {
				if (data < node.data) {
					if (node.left === null) {
						node.left = new Node(data);
						return;

					} else if (node.left !== null) {
						return searchTree(node.left);
					}
				} else if (data > node.data) {
					if (node.right === null) {
						node.right = new Node(data);
						return;
					} else if (node.right !== null) {
						return searchTree(node.right);
					}
				} else {
					return null;
				}
			}

			return searchTree(node) // At firt this function will be call. here node = 9;
		}
	}

	findMinValue = () => {
		let current = this.root;
		//console.log('trial : ',current.left.data)
		while (current.left !== null) {
			current = current.left;
		}
		return current.data;
	}

	findMaxValue = () => {
		let current = this.root;
		while (current.right !== null) {
			current = current.right;
		}
		return current.data;
	}

	isPresent = (data) => {
		let current = this.root;
		while (current) {
			if (data === current.data) {
				return true;
			}
			else if (data < current.data) {
				current = current.left;
			} else {
				current = current.right
			}
		}
		return false;
	}

	findMaxHeight = (node = this.root) => {
		if (node === null) { return -1 }
		let l = this.findMaxHeight(node.left);
		let r = this.findMaxHeight(node.right);
console.log(l,r)
		if (l > r) return l + 1;
		else return r + 1;
	}

	findMinHeight = (node = this.root) => {
		if (node === null) { return -1 }
		let l = this.findMinHeight(node.left);
		let r = this.findMinHeight(node.right);
		if (l < r) return l + 1;
		else return r + 1;
	}

	inOrder() {
		if (this.root == null) {
			return null;
		} else {
			var result = new Array();
			function traverseInOrder(node) {
				node.left && traverseInOrder(node.left);
				result.push(node.data);
				node.right && traverseInOrder(node.right);
			}
			traverseInOrder(this.root);
			return result;
		};
	}
	preOrder() {
		if (this.root == null) {
			return null;
		} else {
			var result = new Array();
			function traversePreOrder(node) {
				result.push(node.data);
				node.left && traversePreOrder(node.left);
				node.right && traversePreOrder(node.right);
			};
			traversePreOrder(this.root);
			return result;
		};
	}
	postOrder() {
		if (this.root == null) {
			return null;
		} else {
			var result = new Array();
			function traversePostOrder(node) {
				node.left && traversePostOrder(node.left);
				node.right && traversePostOrder(node.right);
				result.push(node.data);
			};
			traversePostOrder(this.root);
			return result;
		}
	}

	levelOrder() {
		let result = [];
		let Q = [];
		if (this.root != null) {
			Q.push(this.root);
			while (Q.length > 0) {
				let node = Q.shift();
				result.push(node.data);
				if (node.left != null) {
					Q.push(node.left);
				};
				if (node.right != null) {
					Q.push(node.right);
				};
			};
			return result;
		} else {
			return null;
		};
	};

}


const bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log("Min value = ", bst.findMinValue());
console.log("Max value = ", bst.findMaxValue());
console.log("Present = ", bst.isPresent(54));
bst.add(10);
console.log("Max Height = ", bst.findMaxHeight());
console.log("Min Height = ", bst.findMinHeight());

console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());
console.log('levelOrder: ' + bst.levelOrder());

