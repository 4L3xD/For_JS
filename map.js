let vitaminas = [ {nome: 'C', fontes: ['uva', 'goiaba', 'cereja', 'banana', 'maçã', 'apricó', 'abacate', 'manga']}, {nome: 'A', fontes: ['goiaba', 'cereja', 'apricó', 'oxicoco', 'manga', 'azeitonas' ]} ]

console.log(`${'Vitaminas: ' + vitaminas.map(vitamina => vitamina.nome)}`);

let fonteVitaminas = new Map();

fonteVitaminas.set('goiaba', ['A', 'C']); 
fonteVitaminas.set('cereja', ['A', 'C']); 

fonteVitaminas.get('goiaba');
fonteVitaminas.get('cereja');

let A, B;

for (let vitamina of vitaminas) {
    if (vitamina.nome === 'A') {
        vitA = vitamina.fontes;
        console.log(`Fontes de vitamina A: ${vitA}`);
    }
    else if (vitamina.nome === 'C') {
    vitC = vitamina.fontes;
    console.log(`Fontes de vitamina C: ${vitC}`);
    }
} 

let todasFontes = vitaminas.map(alimento => alimento.fontes);
console.log(`Todas as fontes listadas: ${todasFontes}`);


// for (fonte of todasFontes) {
//     let fonteExistente = [];
   
//     if (fonte.fontes )
// }