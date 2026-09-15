/* ==================================================
   DOLCE VITA
   SCRIPT.JS
================================================== */


/* ================= TEMA OSCURO ================= */

const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("dolceVitaTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀";

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    if (isDark) {

        themeButton.textContent = "☀";

        localStorage.setItem("dolceVitaTheme", "dark");

    } else {

        themeButton.textContent = "☾";

        localStorage.setItem("dolceVitaTheme", "light");

    }

});


/* ================= MENÚ MOBILE ================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {

        menuButton.textContent = "×";

    } else {

        menuButton.textContent = "☰";

    }

});


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuButton.textContent = "☰";

    });

});


/* ================= INDICADOR ACTIVO ================= */

const sections = document.querySelectorAll("main section[id]");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* ================= MODAL PRODUCTOS ================= */

const modal = document.getElementById("productModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const closeModal =
    document.getElementById("closeModal");

const detailsButtons =
    document.querySelectorAll(".details-button");


detailsButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.getAttribute("data-product");

        const description =
            button.getAttribute("data-description");


        modalTitle.textContent = product;

        modalDescription.textContent = description;

        modal.classList.add("visible");

        document.body.style.overflow = "hidden";

    });

});


function closeProductModal() {

    modal.classList.remove("visible");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeProductModal
);


modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeProductModal();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProductModal();

    }

});


/* ================= MODAL → CONTACTO ================= */

const modalOrder =
    document.getElementById("modalOrder");


modalOrder.addEventListener("click", () => {

    closeProductModal();

});


/* ================= INFORMACIÓN DEL LOCAL ================= */

const infoButton =
    document.getElementById("infoButton");

const localExtra =
    document.getElementById("localExtra");


infoButton.addEventListener("click", () => {

    localExtra.classList.toggle("visible");

    if (localExtra.classList.contains("visible")) {

        infoButton.textContent =
            "Ocultar información";

    } else {

        infoButton.textContent =
            "Ver información del local";

    }

});


/* ================= SECCIÓN ITALIANA ================= */

const italianButton =
    document.getElementById("italianButton");

const italianExtra =
    document.getElementById("italianExtra");


italianButton.addEventListener("click", () => {

    italianExtra.classList.toggle("visible");

    if (italianExtra.classList.contains("visible")) {

        italianButton.textContent =
            "Nascondi ↑";

    } else {

        italianButton.textContent =
            "Scopri di più →";

    }

});


/* ================= FORMULARIO ================= */

const orderForm =
    document.getElementById("orderForm");

const formMessage =
    document.getElementById("formMessage");


orderForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const contact =
        document.getElementById("contact").value.trim();

    const product =
        document.getElementById("product").value;


    if (!name || !contact || !product) {

        formMessage.textContent =
            "Por favor completá los campos obligatorios.";

        return;

    }


    formMessage.textContent =
        "¡Gracias, " +
        name +
        "! Tu consulta por " +
        product +
        " fue registrada correctamente.";

    orderForm.reset();

});


/* ================= ANIMACIONES AL SCROLL ================= */

const revealElements = document.querySelectorAll(
    ".history-card, .product-card, .step, .contact-form, .contact-info"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});
