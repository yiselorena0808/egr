//2.	Crea una interfaz genérica Par<T, U> que represente un par de valores de cualquier tipo y
//  luego define una función que reciba un objeto de tipo Par y devuelva una cadena con ambos valores concatenados.

interface Par<T,U>{
    uno:T;
    dos:U;
}
  
function concatenarValores<T,U>(par:Par<T,U>):string{
    return `${par.uno}${par.dos}`;
}
  
const par1:Par<string,number>={uno:'lorena',dos:123};
console.log(concatenarValores(par1)); 





