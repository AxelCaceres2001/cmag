function handleWindowSizeChange() {
    const windowWidth = window.innerWidth;
    const navLinkInicio = document.querySelector(".nav__link--inicio");

    if (windowWidth <= 600) {
        navLinkInicio.href = "#section-fixed";
    } else {
        navLinkInicio.href = "#inicio";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("#nav");
    const btnAbrir = document.querySelector("#btn-open");
    const btnCerrar = document.querySelector("#btn-close");
    const navLinks = document.querySelectorAll(".nav__link");
    const divNavLinks = document.querySelector(".nav__links");

    btnAbrir.addEventListener("click", () => {
        nav.classList.add("nav-visible");
    });

    btnCerrar.addEventListener("click", () => {
        nav.classList.remove("nav-visible");
    });

    window.addEventListener('resize', handleWindowSizeChange);

    handleWindowSizeChange();

    navLinks.forEach(navLink => {
        navLink.addEventListener("click", () => {
            nav.classList.remove("nav-visible");
        });
    });
});