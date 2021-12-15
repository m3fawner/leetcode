const { default: ListNode, createArrayFromList, createLinkedListFromArray } = require('../ListNode');

describe(ListNode, () => {
    it('should create a ListNode element with the next & val set on the result', () => {
        const next = new ListNode();
        expect(new ListNode(1, next)).toEqual({
            val: 1,
            next
        })
    });
    it('should be able to create a new instance without any arguments (to be assigned later)', () => {
        const node = new ListNode();
        expect(node).toEqual({});
        expect(node).toEqual(expect.any(ListNode));
    });
    it('should allow you to assign val and next after the fact', () => {
        const node = new ListNode();
        node.val = 1;
        const next = new ListNode();
        node.next = next;
        expect(node).toEqual({
            val: 1,
            next
        })
    });
});

describe(createLinkedListFromArray, () => {
    it('should create a linked list from an array of values', () => {
        const head = createLinkedListFromArray([1,2,3,4]);
        let currentNode = head;
        for(let i = 1; i <=4; i++) {
            expect(currentNode.val).toEqual(i);
            currentNode = currentNode.next;
        }
    });
    it('should return null for an empty array', () => {
        const head = createLinkedListFromArray([]);
        expect(head).toEqual(null);
    });
});

describe(createArrayFromList, () => {
    it('should return an array implementation for the linked list', () => {
        const head = new ListNode(1);
        let currentNode = head;
        for (let i = 2; i <= 4; i++) {
            const newNode = new ListNode(i);
            currentNode.next = newNode;
            currentNode = newNode;
        }
        expect(createArrayFromList(head)).toEqual([1,2,3,4]);
    });
    it('should return an empty array for a null list', () => {
        expect(createArrayFromList(null)).toEqual([]);
    });
});