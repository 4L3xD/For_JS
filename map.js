let vitaminas = [ {nome: 'C', fontes: ['uva', 'goiaba', 'cereja', 'banana', 'maçã', 'apricó', 'abacate', 'manga']}, {nome: 'A', fontes: ['goiaba', 'cereja', 'apricó', 'oxicoco', 'manga', 'azeitonas' ]} ]

let nomeVitaminas = vitaminas.map(vitamina => vitamina.nome);

console.log(`${'Vitaminas: ' + nomeVitaminas}`);

// let fonteVitaminas = new Map();

// fonteVitaminas.set('goiaba', ['A', 'C']); 
// fonteVitaminas.set('cereja', ['A', 'C']); 

// fonteVitaminas.get('goiaba');
// fonteVitaminas.get('cereja');

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


let fontesVitaminas = vitA.concat(vitC);

let fonteVitaminas = new Map();


for (i = todasFontes.length; i >= 0; i--){
    
    for (fonte of fontesVitaminas){

        for (x = 0; x <= vitA.length; x++) {
            if (fonte == fontesVitaminas[x]) {
               
                fonteVitaminasA = fonteVitaminas.set(fonte, 'A');

                console.log(`Fontes em comum ${fonte} e ${fontesVitaminas[x]}`);
                console.log(fonteVitaminasA);

            } else {
                console.log(`Fontes diferentes ${fonte} e ${fontesVitaminas[x]}`);
            }
        }
         

        for (x = 0; x <= vitC.length; x++) {
            if (fonte == fontesVitaminas[x]) {
               
                fonteVitaminasB = fonteVitaminas.set(fonte, 'B');

                console.log(`Fontes em comum ${fonte} e ${fontesVitaminas[x]}`);
                console.log(fonteVitaminasB);

            } else {
                console.log(`Fontes diferentes ${fonte} e ${fontesVitaminas[x]}`);
            }
        }
    }
}


