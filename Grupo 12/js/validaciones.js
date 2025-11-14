//
//      ITEMS
//
const categoriaUno = document.getElementById("categoria00-item01");

categoriaUno.addEventListener("mouseover", function () {
    categoriaUno.classList.add("resaltado");
});

categoriaUno.addEventListener("mouseout", function () {
    categoriaUno.classList.remove("resaltado");
});

const categoriaDos = document.getElementById("categoria00-item02");

categoriaDos.addEventListener("mouseover", function () {
    categoriaDos.classList.add("resaltado");
});

categoriaDos.addEventListener("mouseout", function () {
    categoriaDos.classList.remove("resaltado");
});
const categoriaTres = document.getElementById("categoria00-item03");

categoriaTres.addEventListener("mouseover", function () {
    categoriaTres.classList.add("resaltado");
});

categoriaTres.addEventListener("mouseout", function () {
    categoriaTres.classList.remove("resaltado");
});

const categoriaCuatro = document.getElementById("categoria00-item04");

categoriaCuatro.addEventListener("mouseover", function () {
    categoriaCuatro.classList.add("resaltado");
});

categoriaCuatro.addEventListener("mouseout", function () {
    categoriaCuatro.classList.remove("resaltado");
});
const categoriaCinco = document.getElementById("categoria00-item05");

categoriaCinco.addEventListener("mouseover", function () {
    categoriaCinco.classList.add("resaltado");
});

categoriaCinco.addEventListener("mouseout", function () {
    categoriaCinco.classList.remove("resaltado");
});
const categoriaSeis = document.getElementById("categoria00-item06");

categoriaSeis.addEventListener("mouseover", function () {
    categoriaSeis.classList.add("resaltado");
});

categoriaSeis.addEventListener("mouseout", function () {
    categoriaSeis.classList.remove("resaltado");
});
const categoriaSiete = document.getElementById("categoria00-item07");

categoriaSiete.addEventListener("mouseover", function () {
    categoriaSiete.classList.add("resaltado");
});

categoriaSiete.addEventListener("mouseout", function () {
    categoriaSiete.classList.remove("resaltado");
});
const categoriaOcho = document.getElementById("categoria00-item08");

categoriaOcho.addEventListener("mouseover", function () {
    categoriaOcho.classList.add("resaltado");
});

categoriaOcho.addEventListener("mouseout", function () {
    categoriaOcho.classList.remove("resaltado");
});
const categoriaNueve = document.getElementById("categoria00-item09");

categoriaNueve.addEventListener("mouseover", function () {
    categoriaNueve.classList.add("resaltado");
});

categoriaNueve.addEventListener("mouseout", function () {
    categoriaNueve.classList.remove("resaltado");
});
const categoriaDiez = document.getElementById("categoria00-item10");

categoriaDiez.addEventListener("mouseover", function () {
    categoriaDiez.classList.add("resaltado");
});

categoriaDiez.addEventListener("mouseout", function () {
    categoriaDiez.classList.remove("resaltado");
});
const categoriaOnce = document.getElementById("categoria00-item11");

categoriaOnce.addEventListener("mouseover", function () {
    categoriaOnce.classList.add("resaltado");
});

categoriaOnce.addEventListener("mouseout", function () {
    categoriaOnce.classList.remove("resaltado");
});
const categoriaDoce = document.getElementById("categoria00-item12");

categoriaDoce.addEventListener("mouseover", function () {
    categoriaDoce.classList.add("resaltado");
});

categoriaDoce.addEventListener("mouseout", function () {
    categoriaDoce.classList.remove("resaltado");
});

//
// LOGIN
//
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector('.form-contenedor');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password'); // ID CORREGIDO
    const btnLogin = document.getElementById('btn-login');

    function validarEmail(email) {
        const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
        return patronEmail.test(email);
    }

    function validarPassword(password) {

        const patronContrasenia = /^(?=.{8,12}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!%$-])/;
        return patronContrasenia.test(password);
    }

    function manejarErrorVisual(inputElement, esValido) {
        if (esValido) {
            inputElement.classList.remove('campo-obligatorio-vacio');
        } else {
            inputElement.classList.add('campo-obligatorio-vacio');
        }
    }
});
//
//REGISTRARSE
//
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector('.form-contenedor');
    const campoEmail = document.getElementById('email');
    const campoContraseña = document.getElementById('password');
    const botonRegistro = document.getElementById('btn-registro');

    function verificarFormatoEmail(valorEmail) {
        const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
        return patronEmail.test(valorEmail);
    }

    function verificarSeguridadContraseña(valorContraseña) {
        const patronContraseña = /^(?=.{8,12}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!%$-])/;
        return patronContraseña.test(valorContraseña);
    }

    function manejarRecuadroRojo(elementoInput, esValido) {
        if (esValido) {
            elementoInput.classList.remove('campo-obligatorio-vacio');
        } else {
            elementoInput.classList.add('campo-obligatorio-vacio');
        }
    }
    function actualizarEstadoRegistro() {
        const emailEsValido = verificarFormatoEmail(campoEmail.value.trim());
        const contraseñaEsSegura = verificarSeguridadContraseña(campoContraseña.value.trim());

        manejarRecuadroRojo(campoEmail, emailEsValido);
        manejarRecuadroRojo(campoContraseña, contraseñaEsSegura);

        if (emailEsValido && contraseñaEsSegura) {
            botonRegistro.disabled = false;
        } else {
            botonRegistro.disabled = true;
        }
    }
});
//
//Recuperar password
//
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector('.form-contenedor');
    const campoEmail = document.getElementById('email');
    const botonContinuar = document.getElementById('btn-continuar');

    function verificarFormatoEmail(valorEmail) {
        const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
        return patronEmail.test(valorEmail.trim());
    }

    function manejarRecuadroRojo(elementoInput, esValido) {
        if (esValido) {
            elementoInput.classList.remove('campo-obligatorio-vacio');
        } else {
            elementoInput.classList.add('campo-obligatorio-vacio');
        }
    }

    function actualizarEstadoFormulario() {
        const emailEsValido = verificarFormatoEmail(campoEmail.value);

        manejarRecuadroRojo(campoEmail, emailEsValido);

        if (emailEsValido) {
            botonContinuar.disabled = false;
        } else {
            botonContinuar.disabled = true;
        }
    }
});

//
//
//
