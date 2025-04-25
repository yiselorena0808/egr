//3.	Desarrolla una función genérica filtrar<T> que reciba un arreglo y un criterio que busque
//  elementos del arreglo y devuelva un nuevo arreglo con los elementos que cumplan el criterio.

function filtrar<T>(arreglo: T[], criterio: (elemento: T) => boolean): T[] {
    const resultado: T[] = [];
    arreglo.forEach((elemento) => {
        if (criterio(elemento)) {
            resultado.push(elemento);
        }
    });
    return resultado;
}
const numeros1 = [1, 2, 3, 4, 5];
const resultado2 = filtrar(numeros1, (x) => x > 3);
console.log(resultado2);