/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //several ways to deal with, but the head has no 'previous' node
    let previous = null;
    //start at the beginning
    let current = head;
    //do while you haven't finished moving through list
    while (current) {
        //set next to next of current (to store as original ref is disappearing)
        const next = current.next;
        //reverse pointer
        current.next = previous;
        //now that we've changed pointer, call the one we just changed to previous
        previous = current;
        //we saved next so we can find the old next, start over
        current = next;        
    }
    return previous;
    
};
