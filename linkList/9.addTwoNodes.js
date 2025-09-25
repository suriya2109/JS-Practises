class ListNode {
    constructor(val, next) {
        this.val = val;
        this.val = next;
    }
}

var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let ptr = result;

    let carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
        let sum = 0 + carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = (sum % 10);
        ptr.next = new ListNode(sum);
        ptr = ptr.next;
    }
    if (carry == 1) {
        ptr.next = new ListNode(1);
    }
    return result.next;
};