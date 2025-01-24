const obterAno = (anos, anoProcurado) => 
   anos.find((ano) => ano===anoProcurado )
   


// Exemplo de uso - não modifique
console.log(obterAno([2019, 2020, 2021], 2020)); // 2020
console.log(obterAno([2019, 2020, 2021], 1990)); // undefined

/* função não reduzida: 

function obterAno (anos, anoProcurado){
	return anos.find(function(ano){
		return ano===anoProcurado;
	})
}

*/