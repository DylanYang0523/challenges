/**
 * @lv 🟡
 * @link https://leetcode.com/problems/design-linked-list/
 * @name 707. Design Linked List
 */
class Node {
    constructor (val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
    this.getNode = getNode;
    this.changeSize = function (val) { this.size += val; };
    
    function getNode (index) {
        let pointer = this.head;
        for (let i = 1; i <= index; i++) {
            if (pointer === null) break;
            pointer = pointer.next;
        }
        return pointer;
    }
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    const pointer = this.getNode(index);
    return pointer ? pointer.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const tmp = this.head;
    this.head = new Node(val, tmp);
    this.changeSize(1);
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.size === 0) {
        this.addAtHead(val);
        return;
    }
    
    const pointer = this.getNode(this.size - 1);
    const node = new Node(val, null);
    pointer.next = node;
    this.changeSize(1);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
        this.addAtHead(val);
    } else {
        const pointer = this.getNode(index - 1);
        const tmp = pointer.next;
        const node = new Node(val, tmp);
        pointer.next = node;
        this.changeSize(1);
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index === 0) {
        if (this.head && this.head.next) {
            this.head = this.head.next;
            this.changeSize(-1);
        }
    } else if (index === this.size - 1) {
        const pointer = this.getNode(index - 1);
        pointer.next = null;
        this.changeSize(-1);
    } else if (index > 0 && index < this.size) {
        const prev = this.getNode(index - 1);
        const curr = this.getNode(index);
        const tmp = curr.next;
        prev.next = tmp;
        this.changeSize(-1);
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */