function palindromeLinkedList(head) {
    let fast = head.next;
    let slow = head;
    let map = new Map()
    for (let count of head) {
        if (!map.has(count)) {
            map.set(count);
        } else {
            map.delete(count);
            if (count == 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

let head = [1, 2, 2, 1];
console.log(palindromeLinkedList(head))