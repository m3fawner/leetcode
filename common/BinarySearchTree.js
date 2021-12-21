class TreeNode {
  left = null;

  right = null;

  parent = null;

  constructor(val, parent) {
    this.val = val ?? null;
    this.parent = parent ?? null;
  }
}

const createTreeFromArray = (nodeValues = []) => {
  let root = null;
  nodeValues.forEach((val) => {
    if (root === null) {
      root = new TreeNode(val, null);
    } else {
      let node = root;
      let parent;

      while (node) {
        parent = node;
        if (val <= node.val) {
          node = node.left;
          if (!node) {
            parent.left = new TreeNode(val, parent);
          }
        } else {
          node = node.right;
          if (!node) {
            parent.right = new TreeNode(val, parent);
          }
        }
      }
    }
  });
  return root;
};

const convertTreeToArrayByBreadth = (tree) => {
  if (!(tree instanceof TreeNode)) {
    return [];
  }
  const arr = [];
  let currentLevel = [tree];
  let nextLevel = [];

  while (currentLevel.length > 0) {
    const node = currentLevel.pop();
    arr.push(node.val);
    if (node.left) {
      nextLevel = [node.left, ...nextLevel];
    }
    if (node.right) {
      nextLevel = [node.right, ...nextLevel];
    }
    if (currentLevel.length === 0) {
      currentLevel = nextLevel;
      nextLevel = [];
    }
  }
  return arr;
};
module.exports = {
  default: TreeNode,
  createTreeFromArray,
  convertTreeToArrayByBreadth,
};
