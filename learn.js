let number = [{name: 'integer', property0: 0, property1: 1}, {name: 'float', property0: 0.0, property1: 1.0}];
console.log(number);

number.property0 = 'zero';
console.log(number.property0);

number[0].name;
console.log(number[0]);
//output: "integer"

number[1].name;
console.log(number[1]);
//output: "float"

console.log(number['name']);

backpack = {};

backpack.nameProperty = 'property';

console.log(backpack);

console.log(number['0']);
// output: {nome: "integer", property0: 0, property1: 1}

console.log(number['1']);
// output: {nome: "float", property0: 0, property1: 1}


ab = [ {nome: 'A', n: 0, item:
['abelha', 'amor', 'azul', 'abacate', 'amarelo', 'alegria'] },
{ nome: 'B', n: 1, item: ['babosa', 'brócolis', 'besta', 'binário', 'barbaridade', 'barco', 'berinjela'] }];

variavel0 = ab[0].item; 
console.log(variavel0);
// [ 'abelha', 'amor', 'azul', 'abacate', 'amarelo', 'alegria' ]

variavel1 = ab[0].item; 
console.log(variavel1);
// ['babosa', 'brócolis', 'besta', 'binário', 'barbaridade', 'barco', 'berinjela'] 


say = { hello: 'Hello world!'};
console.log(say.hello);

say = { hello: () => console.log('Hello world!') };
console.log(say.hello);

console.log(say.hello());
// sayHello = say.hello();
// console.log(sayHello);


obj = [{a: 'A', b: 0, c: ['a', 'b', 'c']}, {a: 'B', b: 1, c: ['d', 'e', 'f']}]
console.log(obj[0].a);
console.log(obj[1].a);
console.log(obj[0].b);
console.log(obj[1].b);
console.log(obj[0].c);
console.log(obj[1].c);

object = { x: [ 'string', {} ] };
// object = { x: [] };
console.log(object.x);

object.x = () => console.log(x);
console.log(object.x);

object = [ () => console.log(x), 'string', {} ];
console.log(object[2]);
console.log(object[1]);
console.log(object[0]);


