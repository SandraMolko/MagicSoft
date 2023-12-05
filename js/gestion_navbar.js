function createNavbar (){
    let navbar = document.getElementById("navbar");
    let navigation = `
    <nav class="navbar navbar-dark bg-dark fixed-top">
    <div id="navbar-container" class="container-fluid">
        <a class="navbar-brand" href="./gestion.html">
            <img src="./src/logoAMR.png" alt="Logo AMR">
            
        </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Bienvenido</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link" href="./gestion.html">
                <i class="fa-solid fa-square-poll-vertical" style="color: #294bf3;"></i>
                Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./gestion_servicios.html">
                <i class="fa-brands fa-servicestack" style="color: #294bf3;"></i>
                Agregar Servicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./profile.html">
                    <i class="fa-regular fa-address-card" style="color: #294bf3;"></i>
                    Perfil</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" id="logout">
                    <i class="fa-solid fa-right-from-bracket fa-fade" style="color: #294bf3;"></i>
                    Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>  
        `;
    navbar.insertAdjacentHTML("afterbegin",navigation);
}

createNavbar();

const userLogged = localStorage.getItem("user");
const $logout = document.getElementById("logout");
window.addEventListener("load", function(event){  
    if(userLogged == "" || userLogged==null){
        location.href ='./index.html';
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Usuario sin sesión. Regresando al Home.",
            showConfirmButton: false,
            timer: 1500
          });
    }else{
        console.log("Usuario ", userLogged, " con sesión");
    }
});//validate user active

$logout.addEventListener("click", function(event){  
    if(userLogged == "" || userLogged==null){
        location.href ='./index.html';
    }else{
        localStorage.setItem("user", "");
        localStorage.setItem("pass", "");
        location.href ='./index.html';
    }
});//logout

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
      //console.log(link.href + " " + window.location.href)
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
  }
});
