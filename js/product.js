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
    titulo: "Prueba",
    img: "https://i.pinimg.com/474x/2d/47/6f/2d476f37d61d6707c9d912a8ac740fa5.jpg",
    descripcion: "Hola" 
}
addCard(conjuntoCard,promps)

const promps2 = {
    titulo: "Prueba 2",
    img: "https://i.pinimg.com/474x/2d/47/6f/2d476f37d61d6707c9d912a8ac740fa5.jpg",
    descripcion: "Adios" 
}
addCard(conjuntoCard,promps2)