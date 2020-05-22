// 链表翻转，

function Node(val) {
    this.val = val;
    this.next = null;
}

function rev(head) {
   if(head === null || head.next == null) return null;
   let prev = null;
   let next =null;
    while(head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}


let next = null,
    prev = null;
while (pHead !== null) {
    next = pHead.next;
    pHead.next = pPre;
    pPre = pHead;
    pHead = pNext;
}
return pPre;



// 1 -> 2 -> 3 -> 4


head = null;

head.next = new Node(1);
head = head.next;

