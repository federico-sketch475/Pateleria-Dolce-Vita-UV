/* ==================================================
   DOLCE VITA
   DOCENTE.JS
================================================== */


/* ================= ELEMENTOS ================= */

const loginSection =
    document.getElementById("loginSection");

const documentation =
    document.getElementById("documentation");

const loginForm =
    document.getElementById("teacherLogin");

const passwordInput =
    document.getElementById("password");

const loginMessage =
    document.getElementById("loginMessage");

const logoutButton =
    document.getElementById("logoutButton");


/* ================= CONTRASEÑA ================= */

/*
   Contraseña utilizada para la presentación académica.

   IMPORTANTE:
   Al ser GitHub Pages un sitio estático,
   esta contraseña no representa seguridad real.
*/

const TEACHER_PASSWORD = "dolcevita";


/* ================= VERIFICAR SESIÓN ================= */

const teacherLogged =
    sessionStorage.getItem("dolceVitaTeacher");


if (teacherLogged === "true") {

    showDocumentation();

}


/* ================= LOGIN ================= */

loginForm.addEventListener("submit", event => {

    event.preventDefault();


    const password =
        passwordInput.value;


    if (password === TEACHER_PASSWORD) {

        sessionStorage.setItem(
            "dolceVitaTeacher",
            "true"
        );

        showDocumentation();

    } else {

        loginMessage.textContent =
            "Contraseña incorrecta. Intentá nuevamente.";

        passwordInput.value = "";

        passwordInput.focus();

    }

});


/* ================= MOSTRAR DOCUMENTACIÓN ================= */

function showDocumentation() {

    loginSection.style.display = "none";

    documentation.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= CERRAR SESIÓN ================= */

logoutButton.addEventListener("click", () => {

    sessionStorage.removeItem(
        "dolceVitaTeacher"
    );

    documentation.hidden = true;

    loginSection.style.display = "flex";

    loginMessage.textContent = "";

    passwordInput.value = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
