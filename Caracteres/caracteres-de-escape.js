//Caracteres de escape.
//const whatDoIDo= 'I'm Software Developer';

// 1 - Escape alternativo.

const escapeAlternativo = "I'm Software Developer";

// 2 - Barra invertida.(alt 92 \ )

const barraInvertida = 'I\'m Software Developer';

// 4 - Template Literals

const templateLiterals = ` I\'m Software Developer`;

//Escritura de strings largos.

/*
 Lorem ipsum dolor sit amet, consectetur.
 Lorem ipsum dolor sit amet, consectetur.
 Lorem ipsum dolor sit amet, consectet.

*/

const textoLargo= 'Lorem ipsum dolor sit amet, consectet. ' +  
'\nLorem ipsum dolor sit amet, consectet.' +
'\nLorem ipsum dolor sit amet, consectet.'
console.log(textoLargo);

const textoLargo1= 'Lorem ipsum dolor sit amet,\n\
Lorem ipsum dolor sit amet,\n\
Lorem ipsum dolor sit amet,'

console.log(textoLargo1);

const textoLargoLiterals = `Lorem ipsum dolor sit amet,
Lorem ipsum dolor sit amet,
Lorem ipsum dolor sit amet,`;

console.log(textoLargoLiterals);

// El resultado de esos strings en pantalla se conocen com strings values.



