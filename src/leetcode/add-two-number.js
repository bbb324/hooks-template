var addTwoNumbers = function(l1, l2) {
    let head = new ListNode('head');
    let run = head;
    let inc = 0;
    while(l1 || l2) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        sum = (v1 + v2 + inc);
        if(sum >= 10) {
            inc = 1;
            sum = sum - 10;
        } else {
            inc = 0;
        }
        run.next = new ListNode(sum);
        run = run.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(inc > 0) run.next = new ListNode(1);
    return head.next;

};
