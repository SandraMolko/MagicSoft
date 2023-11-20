function createNavbar (){
    let navbar = document.getElementById("navbar");
    let navigation = `
        <div id="navbar-container" class="container">
            <div id="brand">
                <a href="./index.html">
                    <img src="./src/logoAMR.png" alt="Logo AMR" class="navbar-brand">
                </a>
                <p hidden>Soluciones Integrales AMR</p>
            </div>
            <a href="./index.html" id="logout" class="nav-link"></a>
        </div>    
        `;
    navbar.insertAdjacentHTML("afterbegin",navigation);
}

createNavbar();

const userLogged = localStorage.getItem("user");
const $logout = document.getElementById("logout");
window.addEventListener("load", function(event){  
    if(userLogged == "" || userLogged==null){
        let backHome = `Regresar a Inicio`;
        $logout.insertAdjacentHTML("beforeend",backHome);
    }else{
        let logout = `<i class="bi bi-box-arrow-right">
            <img src="./src/icons/box-arrow-right.svg" alt="Logout">
            </i>`;
        $logout.insertAdjacentHTML("beforeend",logout);
    }
});//set icon logout

$logout.addEventListener("click", function(event){  
    if(userLogged == "" || userLogged==null){
        location.href ='./index.html';
    }else{
        localStorage.setItem("user", "");
        localStorage.setItem("pass", "");
        location.href ='./index.html';
    }
});//logout