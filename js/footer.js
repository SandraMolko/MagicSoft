function createFooter() {
    let footer = document.getElementById("footer");
    let navigation = `
    <div class="container">
        <div class="footer-row">
            <div class="footer-links">
                <h4>Compañía</h4>
                <ul>
                    <li><a href="./nosotros.html">Nosotros</a></li>
                    <li><a href="./servicios.html">Nuestros servicios</a></li>
                    <li><a href="./contacto.html">Contacto</a></li>
                </ul>
                <br />
                <h4><a href="./login.html" id="admin">Administradores</a></h4>
            </div>
            <div class="footer-links">
                <h4>Contáctanos</h4>
                <ul>
                    <li><a href="#">+52 5543604500</a></li>
                    <li><a href="#">hello@myemail.com</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Horarios</h4>
                <ul>
                    <li><a href="#">09:00 a 18:00 hrs</a></li>
                    <li><a href="#">(Cerrado los domingos)</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Redes Sociales</h4>
                <div class="social-link">
                    <a href="#" target=blank><i class="fab fa-facebook-f"></i></a>
                    <a href="#" target=blank><i class="fab fa-instagram"></i></a>
                    <a href="#" target=blank><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/soluciones-integrales-amr/" target=blank><i class="fab fa-linkedin"></i></a>
                </div>
                <br />
                <h4>Desarrollado por</h4>
                <ul>
                    <li><a href="./magicsoft.html">MagicSoft</a></li>
                </ul>
            </div>
        </div>
    </div>  
    `;
    footer.insertAdjacentHTML("afterbegin", navigation);
}

createFooter();

admin.addEventListener("click", function(event){
    event.preventDefault();
    const userLogged = localStorage.getItem("user");
    if (userLogged == "" || userLogged == null) {
        location.href ='./login.html';
    } else{
        location.href ='./gestion.html';
    }
});//admin EvenListener