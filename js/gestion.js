const servDefault = 10;
const services = JSON.parse(localStorage.getItem("services"));
const dataServices = document.getElementById("dataServices");
const dataUsers = document.getElementById("dataUsers");
var servStorage;
var totalServices;
if (services == null) {
    console.log("No hay servicios registrados en localstorage");
    totalServices = servDefault;
    insertNumServices(totalServices);
}else{
    servStorage = Object.keys(services).length;
    totalServices = servDefault + servStorage;
    insertNumServices(totalServices);
}
console.log(servStorage);


function insertNumServices(totalServices){
    console.log("insertando:",totalServices);
    const numServices = ` ${totalServices} `;
    dataServices.innerHTML = numServices;

}

const users = JSON.parse(localStorage.getItem("users"));
const usersStorage = Object.keys(users).length;
console.log(usersStorage);
function insertNumUsers(){
    const numUsers = ` ${usersStorage} `;
    dataUsers.innerHTML = numUsers;
}
insertNumUsers();