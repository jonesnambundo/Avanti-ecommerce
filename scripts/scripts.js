
document.addEventListener('DOMContentLoaded', function () {
    const allCategoriesLink = document.getElementById("allCategoriesLink");
    const categoriesDropdown = document.getElementById("categoriesDropdown");
    const departmentItems = document.querySelectorAll(".department-item");
    const contentDropdownWrapper = document.querySelector(".content-dropdown-wrapper");
    const contentDropdowns = document.querySelectorAll(".content-dropdown");
    const departmentLinksNavbar = document.querySelectorAll(".departments.navbar-links a");
    const departmentsSide = document.querySelector(".sidebar");
    const departmentsNavbar = document.querySelector(".departments.navbar-links");

    const ativarEstiloNavbarLink = () => {
        contentDropdownWrapper.classList.add('ativo-dropdown');
    };

    const desativarEstilo = () => {
        contentDropdownWrapper.classList.remove('ativo-dropdown');
    };

    const mostrarSubmenu = (submenuId) => {
        contentDropdowns.forEach(dropdown => {
            dropdown.style.display = "none";
        });
        const submenu = document.getElementById(submenuId);
        if (submenu) {
            submenu.style.display = "flex";
        }
    };

    allCategoriesLink.addEventListener("mouseenter", () => {
        categoriesDropdown.style.display = "flex";
        departmentsSide.style.display = "block";
        desativarEstilo();
        mostrarSubmenu(null); // Oculta qualquer submenu ativo ao passar em "Todas as Categorias"
    });

    categoriesDropdown.addEventListener("mouseleave", (event) => {
        if (!event.relatedTarget || !event.relatedTarget.closest(".dropdown")) {
            categoriesDropdown.style.display = "none";
            contentDropdowns.forEach(dropdown => {
                dropdown.style.display = "none";
            });
            departmentsSide.style.display = "none";
            desativarEstilo();
        }
    });

    departmentItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            mostrarSubmenu(item.getAttribute("data-submenu"));
            departmentsSide.style.display = "block";
            desativarEstilo();
        });
    });

    departmentLinksNavbar.forEach(link => {
        link.addEventListener("mouseenter", () => {
            categoriesDropdown.style.display = "flex";
            departmentsSide.style.display = "none";
            ativarEstiloNavbarLink();
            mostrarSubmenu(link.getAttribute("data-submenu-link"));
        });

        link.addEventListener("mouseleave", () => {
            // Não ocultamos o submenu imediatamente ao sair do link,
            // pois o usuário pode estar movendo o mouse para dentro do submenu.
            // O submenu será ocultado ao sair do dropdown principal.
        });
    });

});

/*Funcionalidade de Busca */
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    const modal = document.getElementById('modalBusca');
    const resultadoBusca = document.getElementById('resultadoBusca');
    const closeBtn = document.querySelector('.close');

    searchIcon.addEventListener('click', function () {
        const valorBusca = searchInput.value.trim();
        if (valorBusca !== '') {
            resultadoBusca.textContent = `Você buscou por: '${valorBusca}'`;
            modal.style.display = "block";
        }
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


