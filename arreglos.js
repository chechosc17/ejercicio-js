
const obtenerMenor = (numeros) => {
    let menor = Infinity;
    for (let i = 0; i< numeros.length; i++){
        if(numeros[i]<= menor){
            menor = numeros [i];
        }
    }
    return (menor);
}
console.log(obtenerMenor([5,4,8,3,6,9,2]));
/**ejercicio 2 */

const sumaNumeros = (numero) => {
    let final =""
    for (let i = 0; i<numero.length; i++){
        final = parseInt(final +numero[i])
        }
        return final
    }
    console.log(sumaNumeros([2,2,2,2]));

/**ejercicio 3 */

const contineIndice = (numero, numeros) => {
    for (let i=0; i<numeros.length; i++){
        if(numeros[i] === numero){
            return true
        }
    }
    return false
    
}
console.log(contineIndice (45,[4,8,12,45]))//true
console.log(contineIndice (63,[4,8,12,63]))//false

/**ejercicio 4 */

const separar = (string) => {
    const arrayEmoji = string.sort().reverse();
    return arrayEmoji
}


console.log(separar(['🐶','🐈','🐶','🐈','🐶','🐈','🐶']))

/**ejercicio 5 */

const estarJuntos = (personajes) => {
    const frodo = personajes.indexOf('frodo');
    const sam = personajes.indexOf('sam');
    return sam - frodo === 1 || sam - frodo === -1
}

console.log (estarJuntos(['sam','frodo','legolas']))
console.log (estarJuntos(['aragon','frodo','frodo']))
console.log (estarJuntos(['sam','orco','frodo']))

/**ejercicio 6 */

const obtenerIndice = (valor,array) => {
    return array.indexOf(valor);
    }
    console.log (obtenerIndice(5,[6,7,12,5]));
    console.log (obtenerIndice(67,[8,4,7,46,34]));



