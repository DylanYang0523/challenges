// https://leetcode.com/problems/implement-trie-prefix-tree/
// 208. Implement Trie (Prefix Tree)

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.children = {};
    this.isComplete = false;   
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    const wordArr = word.split('');
    let pointer = this.children;
    for (let i = 0; i < wordArr.length; i++) {
        if (pointer[wordArr[i]] === undefined) {
            pointer[wordArr[i]] = new Trie();
        }
        pointer = pointer[wordArr[i]];
        if (i === wordArr.length - 1) pointer.isComplete = true;
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const wordArr = word.split('');
    let pointer = this.children;
    for (let i = 0; i < wordArr.length; i++) {
        if (pointer[wordArr[i]] === undefined) return false;
        pointer = pointer[wordArr[i]];
        if (i === wordArr.length - 1) {
            return pointer.isComplete;
        }
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const arr = prefix.split('');
    let pointer = this.children;
    for (let i = 0; i < arr.length; i++) {
        if (pointer[arr[i]] === undefined) return false;
        pointer = pointer[arr[i]];
        if (i === arr.length - 1) return true;
    }
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */