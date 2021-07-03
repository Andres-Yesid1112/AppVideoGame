//VALIDAR REGISTRO
const formRegistro = document.getElementById('formRegistro');
const inputs = document.querySelectorAll('#formRegistro input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	contrasena: false
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "contrasena":
            validarCampo(expresiones.password, e.target, 'contrasena');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {

    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('form-group_Incorrecto');
        document.getElementById(`grupo-${campo}`).classList.add('form-group');  
        document.querySelector(`#grupo-${campo} .error`).classList.remove('error-active');  
        campos[campo] = true;
    }else {
        document.getElementById(`grupo-${campo}`).classList.add('form-group_Incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('form-group'); 
        document.querySelector(`#grupo-${campo} .error`).classList.add('error-active');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

document.getElementById('registrar').addEventListener('click', (e) =>{

    e.preventDefault();
    if(campos.usuario && campos.contrasena && campos.nombre ){
        document.getElementById('mensaje-Error').classList.remove('mensaje-Error_Activo');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Genial Ahora puedes iniciar Sesion',
            showConfirmButton: false,
            timer: 1800
          })
        setTimeout(() => {
            document.getElementById('mensaje-Exitoso').classList.remove('mensaje-Exitoso_Activo');
        }, 4000);
        formRegistro.reset();
    } else {
        e.preventDefault();
        document.getElementById('mensaje-Error').classList.add('mensaje-Error_Activo');
        setTimeout(() => {
            document.getElementById('mensaje-Error').classList.remove('mensaje-Error_Activo');
        }, 4000);
    }
});

//VALIDAR LOGIN
document.getElementById('login').addEventListener('click', (e) => {
    var usuario = document.getElementById('nombreUsuario');
    var	clave = document.getElementById('clave');

    if(usuario.value === null || usuario.value === ''){
        e.preventDefault();
        Swal.fire({
            title: 'Por favor ingrese el usuario',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
	}else{
		
		if(clave.value === null || clave.value === ''){
            e.preventDefault();
            Swal.fire({
                title: 'Por favor ingrese la clave',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
		}else {
			return true;
		}
	}
	return false;
});


document.getElementById("cambiarRegistrar").addEventListener("click", () => {
    alert("Hola")
    document.getElementById('fieldRegistro').classList.remove("active");
    document.getElementById('fieldRegistro').classList.add("inactive");
    document.getElementById('fieldLogin').classList.add("active");
    document.getElementById('fieldLogin').classList.remove("active");
})

function cambiarLogin(){
    document.getElementById('fieldLogin').classList.remove("inactive");
    document.getElementById('fieldLogin').classList.add("active");
    document.getElementById('fieldRegistro').classList.remove("active");
    document.getElementById('fieldRegistro').classList.add("inactive"); 
}


