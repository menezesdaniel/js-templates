

const obterTemperaturasCongelantes = temperaturas => 
  temperaturas.filter(temp => temp<0 )   


// Exemplo de uso - não modifique
console.log(obterTemperaturasCongelantes([-5, 12, 3])); // [-5]
console.log(obterTemperaturasCongelantes([1, -3, -2, 4, 10])); // [-3, -2]


// arrow function
// filter method
// no return
