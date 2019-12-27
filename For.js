/* for ([inicialização]; [condição]; [expressão final])
   declaração
*/

for (var i = 0; i <= 9; i++) {
    console.log(i);
 }
 console.log('10!');


 for (var i = 0;; i++) {
    console.log(i);
    if (i > 3) break;
 }
 console.log('5!');


 var i = 0;
 for (;;) {
   if (i > 3) break;
   console.log(i);
   i++;
 }
 console.log('4!');
 

 // Array = Matriz
 
let yellowFruits = ['laranja ', 'banana', 'mamão', 'manga', 'carambola', 'caju'];
let greenFruits = ['limão', 'abacate', 'melancia', 'kiwi', 'pêra'];
let yellowAndGreenFruits = yellowFruits.concat(greenFruits);
// console.log(yellowAndGreenFruits);
let yellowGreenAndRedFruits = yellowAndGreenFruits.concat('morango', 'acerola', 'caqui', 'amora', 'cereja')
// console.log(yellowGreenAndRedFruits);
console.log('Todas as frutas: ' + yellowFruits + greenFruits + yellowGreenAndRedFruits.slice(-10));


var fruits = [ "orange", "banana" ];
var newLength = fruits.unshift ( "apple", "pear" );
//Adds elements to the start of an array
console.log(`fruits: ${fruits}, quantidade: ${newLength}`);


fruit = fruits.shift ( );
console.log(`Removes an fruit from the start of an array: '${fruit}'.`);
console.log(`Array update: ${fruits}`);


var newLength = fruits.push ( "apple" );
console.log(`Add fruit to the end of the array: ${fruits}`);


var fruit = fruits.pop ( );
// Removes 1 element from the end of an array
console.log(`Removed fruit of array: '${fruit}'.`);
console.log(`Array update: ${fruits}`);


var removedElements = fruits.splice ( 1, 2 );
console.log(`Removed fruits of array: '${removedElements}'.`);
console.log(`Removing two elements from the middle of an array: ${fruits}`)


var addElements = fruits.splice ( 2, 0, "cherry" );
console.log(`Adding two elements to the middle of an array: ${fruits}`)


var fruits = [ "apple", "pear", "orange", "banana" ];
var replacedElements = fruits.splice ( 1, 2, "cherry" );
console.log(`Array update: ${fruits}`)





console.log('Eu transformei a falta em força com o suporte dos que confiam em mim!');

/*
referências bibliográficas:
 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

https://www.elated.com/javascript-array-basics/

https://www.elated.com/category/development/javascript/javascript-arrays/

https://www.elated.com/manipulating-javascript-arrays/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


 
*/

