/**
 * Created by Administrator on 2020/5/25.
 */
// ����������
// ǰ��
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

// �������
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

// �������
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



// ������ı�����������ȱ���
// ����������������У��ǵݹ鷽ʽ
Tree.prototype.BFSearch = function(node, callback) {
    var queue = [];
    while (node != null) {
        callback(node);
        if (node.children.length != 0) {
            for (var i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]); //�����ڶ���,�ݴ浱ǰ�ڵ�������ӽڵ�
            }
        }
        node = queue.shift(); //�����ȳ������������ݽṹ������
    }
};



// ������ı�����������ȱ���
// ����ջ�����ȱ������ڵ㣬Ȼ������һ��·�������������һ�㣬�������㷵��
Tree.prototype.DFSearch = function(node, callback) {
    var stack = [];
    while (node != null) {
        callback(node);
        if (node.children.length != 0) {
            for (var i = node.children.length - 1; i >= 0; i--) { //�����෴���ӽڵ�˳��ѹ��ջ
                stack.push(node.children[i]); //���ýڵ�������ӽڵ�ѹ��ջ
            }
        }
        node = stack.pop(); //����ջ���ӽڵ�˳�����ԭ������ȷ˳��(��Ϊջ����������)
    }
};