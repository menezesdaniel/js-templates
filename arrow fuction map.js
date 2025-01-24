// TODO: criar a fun��o obterTamanhoString()

const obterTamanhoString = strings => 
  strings.map(string => string.length)



// Exemplo de uso - não modifique
console.log(obterTamanhoString(["a", "abc"])); // [1, 3]
console.log(obterTamanhoString(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(obterTamanhoString(["Ol�", "Azul"])); // [5, 4]