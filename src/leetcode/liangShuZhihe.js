/*
*
* 两数之和 链表
*
* 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 输出：7 -> 0 -> 8
 原因：342 + 465 = 807
*
*
* */

function ListNode(v) {
    this.val = v;
    this.next = null;
}


function getNum(l1, l2) {
    let head = new ListNode('head');
    let run = head;
    let inc = 0;
    while(l1 || l2) {
        const v1 = l1? l1.val : 0;
        const v2 = l2? l2.val : 0;
        let sum = (v1 + v2 + inc);
        if(sum >= 10) {
            sum = sum - 10;
            inc = 1;
        } else {
            inc = 0;
        }
        run.next = new ListNode(sum);
        run = run.next;
    }
    if(inc === 1) run.next = new ListNode(1);
    return head.next;
}


aa([2,4,3], [5,6,4])
