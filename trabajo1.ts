//Crea una función genérica llamada reversa<T> que reciba un arreglo de cualquier tipo y devuelva un nuevo arreglo con
//  los elementos en orden inverso utiliza un for o un foreach .

function reversa<T>(arr: T[]): T[] {
    const arreglo: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arreglo.push(arr[i]);
    }
    return arreglo;
}


const numeros = [1, 2, 3, 4];
console.log(reversa(numeros));


const palabras = ["uno", "dos", "tres"];
console.log(reversa(palabras));

