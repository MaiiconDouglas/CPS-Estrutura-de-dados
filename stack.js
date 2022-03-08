class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.counter = 0;
        this.top = null;
    }
    push(value) { // Inserir elementos na pilha
        this.counter++;
        let newnode = new Node(value);
        newnode.next = this.top;
        this.top = newnode;
    }
    isEmpty() {
        return this.counter === 0;
    }
    pop() { // excluir item da pilha (node)
        if (this.isEmpty) return null;
        this.counter--;
        let rmnode = this.top
        delete this.top;
        this.top = rmnode.next;
        return rmnode;
    }
    size() {
        return this.counter;
    }
    onTop() {
        if (this.isEmpty()) return null;
        let tpnode = this.top;
        this.push(tpnode.value);
        return tpnode;
    }
}; // Final  da class stack

module.exports = Stack;