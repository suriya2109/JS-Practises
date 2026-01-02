var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let leftPre = dummy;
    let currNode = head;

    for (let i = 0; i < left - 1; i++) {
        leftPre = leftPre.next;
        currNode = currNode.next;
    }

    let subListNode = currNode;
    let preNode = null;
    for (let i = 0; i <= right - left; i++) {
        let nextNode = currNode.next;
        currNode.next = preNode;
        preNode = currNode;
        currNode = nextNode;
    }

    leftPre.next = preNode;
    subListNode.next = currNode;

    return dummy.next;
};