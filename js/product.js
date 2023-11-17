function addCard(cards,promps){

    const titulo = promps['titulo']
    const img = promps['img']
    const descripcion = promps['descripcion']

    const templateCard = ` 
    <div class="col">
    <div class="card">
      <img
        src=${img}
        class="card-img-top"
        alt="..."
        style="height: 200px"
      />
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">
          ${descripcion}
        </p>
      </div>
    </div>
  </div>     
    `

    cards.innerHTML += templateCard;
}

const conjuntoCard = document.getElementById("cards_servicios")



const promps = {
    titulo: "Distribución de equipo de cómputo.",
    img: "./src/img/computo.jpg",
    descripcion: "Equipo de cómputo centralizado y descentralizado. Infraestructura de redes y accesorios periféricos."
}
addCard(conjuntoCard,promps)

const promps2 = {
    titulo: "Distribución de licencias de software",
    img: "./src/img/TI.jpeg",
    descripcion: "Integramos nuestras soluciones con licencias de sistema operativo nivel enterprise (Windows, RHEL). Software de diseño gráfico, arquitectónico y de ingeniería (Autodesk, Adobe)." 
}
addCard(conjuntoCard,promps2)

const promps3 = {
  titulo: "Servicios en la nube.",
  img: "./src/img/financieros.jpg",
  descripcion: "Servicios en la nube (Azure, AWS, Google Cloud)." 
}
addCard(conjuntoCard,promps3)

const promps4 = {
  titulo: "Desarrollo de Software a la medida.",
  img: "./src/img/desarrollo.jpg",
  descripcion: "Utilizamos metodologías ágiles y alcanzamos un alto nivel de madurez de acuerdo con la certificación internacional CMMi DEV5." 
}
addCard(conjuntoCard,promps4)

const promps5 = {
  titulo: "Servicios finacieros. Arrendamiento",
  img: "./src/img/financieros.jpg",
  descripcion: "Esta es la estrategia ideal para la renovación constante de tu infraestructura de TI y amortizar el costo financiero de la inversión inicial." 
}
addCard(conjuntoCard,promps5)

const promps6 = {
  titulo: "Servicios administrados.",
  img: "./src/img/servicios.jpg",
  descripcion: "Administramos y mantenemos tu red, almacenamiento de datos,seguridad informática, gestión de base de datos y soporte técnico." 
}
addCard(conjuntoCard,promps6)

const promps7 = {
  titulo: "SLA",
  img: "./src/img/computo.jpg",
  descripcion: "Ofrecemos acuerdos de nivel de servicio (SLA) que garantizan un alto rendimiento y disponibilidad de los servicios." 
}
addCard(conjuntoCard,promps7)

const promps8 = {
  titulo: "Diseño de Arquitectura de sistemas",
  img: "./src/img/arq.jpeg",
  descripcion: "Nos adaptamos a las necesidades y presupuesto de tu organización para planificar estratégicamente la infraestructura de IT, ya sea para cómputo centralizado o cómputo descentralizado." 
}
addCard(conjuntoCard,promps8)

const promps9 = {
  titulo: "Implementación de Software de Caja",
  img: "./src/img/servicios.jpg",
  descripcion: "Adaptamos software de tipo ERP y CRM a las necesidades de ttu empresa." 
}
addCard(conjuntoCard,promps9)

const promps10 = {
  titulo: "Servicios Administrativos de la OnSite",
  img: "./src/img/servicios.jpg",
  descripcion: "Junto con los servicios en la nube, le proveemos del servicio de administración de esta desde su empresa." 
}
addCard(conjuntoCard,promps10)


