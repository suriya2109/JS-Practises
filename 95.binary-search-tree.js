// 1️⃣ Binary Search Tree (BST)

// A BST is a binary tree where:

// Left subtree has only values less than the node’s value

// Right subtree has only values greater than the node’s value

// No duplicates (in the classic definition)

// Pattern Name:

// Middle Element → Root → Recurse Left & Right
// (also called Divide & Conquer for balanced BST creation)
//     4
//      / \
//     2   6
//    / \ / \
//   1  3 5  7
// 2️⃣ Height-Balanced
// A binary tree is height-balanced when:

// The height difference between the left and right subtrees of any node is at most 1.

// Height = number of edges on the longest path from that node to a leaf.

// Example of height-balanced:

// markdown
// Copy
// Edit
//       3
//      / \
//     2   5
//    /   / \
//   1   4   6
// Here, no node has a left/right height difference greater than 1.

// TreeNode constructor
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Convert sorted array to BST
function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2);
    return new TreeNode(
        nums[mid],
        sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1))
    );
}

let nums = [-10, -3, 0, 5, 9];
sortedArrayToBST(nums);
// Output: BST with root 0, left -10, -3, right 5, 9