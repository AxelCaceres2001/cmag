    // Obtiene todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav__link');
    const navLinkInicio = document.querySelector(".nav__link--inicio");
    const navLinkBio = document.querySelector(".nav__link--bio");
    const navLinkConocimientos = document.querySelector(".nav__link--conocimientos");
    const navLinkPortafolio = document.querySelector(".nav__link--portafolio");
    const navLinkContactame = document.querySelector(".nav__link--contactame");

    // Agrega un controlador de eventos de desplazamiento a la ventana
    window.addEventListener('scroll', () => {
        // Recorre todas las secciones
        document.querySelectorAll('.section--s').forEach((section) => {
            // Obtiene la posición vertical de la parte superior de la sección
            const sectionTop = section.offsetTop - 10;
            
            // Obtiene la altura de la sección
            const sectionHeight = section.clientHeight;

            // Obtiene la ID de la sección actual
            const currentSectionId = section.getAttribute('id');

            // Verifica si la ventana se encuentra dentro de la sección actual
            if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {

                navLinks.forEach((link) => {
                    link.classList.remove('nav__link--active');
                });

                switch (currentSectionId) {
                    case "inicio":
                        navLinkInicio.classList.add("nav__link--active");
                        break;
                    case "bio":
                        navLinkBio.classList.add("nav__link--active");
                        break;
                    case "conocimientos":
                        navLinkConocimientos.classList.add("nav__link--active");
                        break;
                    case "portafolio":
                        navLinkPortafolio.classList.add("nav__link--active");
                        break;
                    case "contactame":
                        navLinkContactame.classList.add("nav__link--active");
                        break;
                    default:
                        break;
                }
            }
        });
    });