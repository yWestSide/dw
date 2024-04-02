function verificarTriangulo(l1, l2, l3) {
    // Lados Validos do Trinagulo
    if (l1 <= 0 || l2 <= 0 || l3 <= 0) {
        return "none";
    }

    if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1) {
        return "none";
    }

    // Tipo de Triângulo
    if (l1 === l2 && l2 === l3) {
        return "equilateral";
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

console.log('Seus Trinagulo é :')
console.log(verificarTriangulo(2, 2, 2)); 
console.log(verificarTriangulo(10, 10, 2)); 
console.log(verificarTriangulo(3, 4, 5)); 
console.log(verificarTriangulo(0, 0, 0)); 
