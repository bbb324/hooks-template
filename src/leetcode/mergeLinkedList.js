/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(null);
    let cur = dummy;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    while(l1) {
        cur.next = l1;
        l1 = l1.next;
        cur = cur.next;
    }
    while(l2) {
        cur.next = l2;
        l2 = l2.next;
        cur = cur.next;
    }
    return dummy.next
};
