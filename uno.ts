interface Usuario{
    nombreUsuario: string;
    contraseña: string;
}
  
function login(usuarios:Usuario): string {
    return (!usuarios.nombreUsuario||!usuarios.contraseña||usuarios.contraseña.length<8)?"Usuario o contraseña incorrectos": "Inicio de sesión exitoso";
}
const usuarioss: Usuario ={nombreUsuario:"lorena",contraseña:"lorena123"};
  console.log(login(usuarioss));