// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
// É¾³ýµ¥Á´±íµ¹ÊýkµÄ½Úµã  É¾³ýÉ¾³ý£¡£¡£¡£¡£¡
function f(list, n) {
    let pre = new ListNode(null);
    let fast = pre.next;
    let slow = pre.next
    while(n !== 0) {
        fast = fast.next;
        n--
    }

    while(fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return pre.next;
}

