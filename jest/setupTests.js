const expect = require('expect');
const { createArrayFromList } = require('../common/ListNode');
expect.extend({
    linkedListMatchesArray(received, array) {
        let equal = false;
        const list = createArrayFromList(received);
        const message = () => `Expected linked list equal to ${array.toString()}, but received ${list.toString()}`;
        if (list.length !== array.length) {
            return {
                pass: false,
                message
            }
        }
        for (let i = 0; i < list.length; i++) {
            if (list[i] !== array[i]) {
                return {
                    pass: false,
                    message
                }
            }
        }
        return {
            message: () => 'Linked list matched array expectation',
            pass: true
        }
    }
});