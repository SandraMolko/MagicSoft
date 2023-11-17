function createNavbar (){
    let navbar = document.getElementById("navbar");
    let navigation = `
        <div id="navbar-container" class="container">
            <div id="brand">
                <img src="./src/logoAMR.png" alt="Logo AMR" class="navbar-brand">
                <p hidden>Soluciones Integrales AMR</p>
            </div>
            <a href="./index.html" class="nav-link">Regresar a Inicio</a>
        </div>    
        `;
    navbar.insertAdjacentHTML("afterbegin",navigation);
}

createNavbar();