const Stack = require('./stack');

var clientes = new Stack();

//inserindo clientes

clientes.push('João');
clientes.push('Livro');
clientes.push('Antonia')

// Listando clientes

while (clientes.size() > 0) {
    let clientedaVez = clientes.pop();
    console.log(clientedaVez.value)
}