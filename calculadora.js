function calcular(v1, v2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = v1 + v2;
            break;
        case '-':
            resultado = v1 - v2;
            break;
        case '*':
            resultado = v1 * v2;
            break;
        case '/':
            if (v2 !== 0) {
                resultado = v1 / v2;
            } else {
                resultado = "Erro: divisão por zero";
            }
            break;
        default:
            resultado = "Operador inválido";
            break;
    }

    return resultado;
}

console.log('O Resultado é :')
console.log(calcular(5, 3, '+')); 
console.log(calcular(5, 3, '-'));  
console.log(calcular(5, 3, '*'));  
console.log(calcular(5, 3, '/'));  
console.log(calcular(5, 0, '/'));  
console.log(calcular(5, 3, '%'));  
