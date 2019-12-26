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
 

/*
referências bibliográficas:
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
 */