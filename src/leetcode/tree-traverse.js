/**
 * Created by Administrator on 2020/5/25.
 */
// 二叉树遍历
// 前序
Tree.prototype.preOrderTraverse = function(callback) {
    preOrder(root, callback);
}

var preOrder = function(node, callback) {
    if (node !== null) {
        callback(node.element);
        preOrder(node.left, callback);
        preOrder(node.right, callback);
    }
}

// 中序便利
Tree.prototype.inOrderTraverse = function(callback) {
    inOrder(root, callback);
}
var inOrder = function(node, callback) {
    if (node !== null) {
        inOrder(node.left, callback);
        callback(node);
        inOrder(node.right, callback);
    }
}

// 后序便利
Tree.prototype.postOrderTraverse = function(callback){
    postOrder(root, callback);
}
var postOrder = function(node,callback){
    if(node !== null){
        postOrder(node.left,callback);
        postOrder(node.right, calback);
        callback(node.key);
    }
}



// 多叉树的遍历，广度优先遍历
// 层序遍历，借助队列，非递归方式
Tree.prototype.BFSearch = function(node, callback) {
    var queue = [];
    while (node != null) {
        callback(node);
        if (node.children.length != 0) {
            for (var i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]); //借助于队列,暂存当前节点的所有子节点
            }
        }
        node = queue.shift(); //先入先出，借助于数据结构：队列
    }
};



// 多叉树的遍历，深度优先遍历
// 借助栈，首先遍历根节点，然后沿着一条路径遍历到最深的一层，最后在逐层返回
Tree.prototype.DFSearch = function(node, callback) {
    var stack = [];
    while (node != null) {
        callback(node);
        if (node.children.length != 0) {
            for (var i = node.children.length - 1; i >= 0; i--) { //按照相反的子节点顺序压入栈
                stack.push(node.children[i]); //将该节点的所有子节点压入栈
            }
        }
        node = stack.pop(); //弹出栈的子节点顺序就是原来的正确顺序(因为栈是先入后出的)
    }
};