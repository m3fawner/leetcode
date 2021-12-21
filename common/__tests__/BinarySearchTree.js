const { default: TreeNode, createTreeFromArray, convertTreeToArrayByBreadth } = require('../BinarySearchTree');

const ONE_DEEP = (() => {
  const root = new TreeNode(1);
  const left = new TreeNode(-1, root);
  const right = new TreeNode(2, root);
  root.left = left;
  root.right = right;
  return root;
})();
const ONE_DEEP_BREADTH = [1, -1, 2];
const TWO_DEEP = (() => {
  const root = new TreeNode(1);
  const l1 = new TreeNode(-1, root);
  root.left = l1;
  const l2 = new TreeNode(-2, l1);
  l1.left = l2;
  const l1r = new TreeNode(0, l1);
  l1.right = l1r;
  const r1 = new TreeNode(3, root);
  root.right = r1;
  const r1l = new TreeNode(2, r1);
  r1.left = r1l;
  const r2 = new TreeNode(4, r1);
  r1.right = r2;
  return root;
})();
const TWO_DEEP_BREADTH = [1, -1, 3, -2, 0, 2, 4];
const LEFT_HEAVY = (() => {
  const root = new TreeNode(1);
  const l1 = new TreeNode(-1, root);
  const l2 = new TreeNode(-2, l1);
  root.left = l1;
  l1.left = l2;
  return root;
})();
const LEFT_HEAVY_BREADTH = [1, -1, -2];
describe(TreeNode, () => {
  it('should instantiate the TreeNode with null left, right, val, and parent values', () => {
    expect(new TreeNode()).toEqual({
      val: null,
      parent: null,
      left: null,
      right: null,
    });
  });
  it('should set the parent and val properties via the constructor', () => {
    const parent = new TreeNode();
    expect(new TreeNode(1, parent)).toEqual(expect.objectContaining({
      val: 1,
      parent,
    }));
  });
  it('should be able to write left & right properties of the node', () => {
    const left = new TreeNode();
    const right = new TreeNode();
    const testNode = new TreeNode(1);
    testNode.left = left;
    testNode.right = right;
    expect(testNode).toEqual({
      val: 1,
      parent: null,
      left,
      right,
    });
  });
});

describe(createTreeFromArray, () => {
  it('should produce a tree with only the root set if only one value is passed', () => {
    expect(createTreeFromArray([1])).toEqual(expect.objectContaining({
      val: 1,
    }));
  });
  it('should produce a null root if there are no values passed in', () => {
    expect(createTreeFromArray([])).toEqual(null);
  });
  it('should produce a null root if there are no args provided', () => {
    expect(createTreeFromArray()).toEqual(null);
  });
  it('should set the left property on the root if the value is smaller than that of the root', () => {
    expect(createTreeFromArray([5, 1])).toEqual(expect.objectContaining({
      left: expect.objectContaining({
        val: 1,
      }),
      right: null,
    }));
  });
  it('should set the right property on the root if the value is greater than that of the root', () => {
    expect(createTreeFromArray([1, 5])).toEqual(expect.objectContaining({
      right: expect.objectContaining({
        val: 5,
      }),
      left: null,
    }));
  });
  it('should set the left property on the root if the value is equal to that of the root', () => {
    expect(createTreeFromArray([5, 5])).toEqual(expect.objectContaining({
      left: expect.objectContaining({
        val: 5,
      }),
      right: null,
    }));
  });
  it('should set the left and right properties of the root for the given array', () => {
    expect(createTreeFromArray([5, 1, 7])).toEqual(expect.objectContaining({
      left: expect.objectContaining({
        val: 1,
      }),
      right: expect.objectContaining({
        val: 7,
      }),
    }));
  });
  it('should go deep left for a decreasing array', () => {
    expect(createTreeFromArray([7, 5, 3, 1])).toEqual(expect.objectContaining({
      val: 7,
      left: expect.objectContaining({
        val: 5,
        left: expect.objectContaining({
          val: 3,
          left: expect.objectContaining({
            val: 1,
          }),
        }),
      }),
    }));
  });
});

describe(convertTreeToArrayByBreadth, () => {
  it('should return an empty array when the tree is null', () => {
    expect(convertTreeToArrayByBreadth(null)).toEqual([]);
  });
  it('should return an empty array when the tree is undefined', () => {
    expect(convertTreeToArrayByBreadth()).toEqual([]);
  });
  it('should return the root value if it is the only node', () => {
    const root = new TreeNode(1);
    expect(convertTreeToArrayByBreadth(root)).toEqual([1]);
  });
  it('should return the left and right children of the root after the root value (the first level)', () => {
    expect(convertTreeToArrayByBreadth(ONE_DEEP)).toEqual(ONE_DEEP_BREADTH);
  });
  it('should handle a deep tree', () => {
    expect(convertTreeToArrayByBreadth(LEFT_HEAVY)).toEqual(LEFT_HEAVY_BREADTH);
  });
  it('should handle two layers', () => {
    expect(convertTreeToArrayByBreadth(TWO_DEEP)).toEqual(TWO_DEEP_BREADTH);
  });
});

describe('self-validation', () => {
  it.each([
    [ONE_DEEP_BREADTH, ONE_DEEP],
    [TWO_DEEP_BREADTH, TWO_DEEP],
    [LEFT_HEAVY_BREADTH, LEFT_HEAVY],
  ])('should produce an array and tree that can be converted back and forth', (arr, tree) => {
    expect(createTreeFromArray(convertTreeToArrayByBreadth(tree))).toEqual(tree);
    expect(convertTreeToArrayByBreadth((createTreeFromArray(arr)))).toEqual(arr);
  });
});
