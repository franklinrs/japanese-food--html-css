
document.getElementById("submit").onclick = function(){logJson();}
document.getElementById("hamburguer-menu").onclick = function() {displayMenu()};

function logJson() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let id = document.getElementById("ID").value;
    let nationality = document.getElementById("nationality").value;

    console.log("Nombre : " + name + ' | ' +
    "Email : " + email + ' | ' +
    "Id : " + id + ' | ' +
    "Nationality : " + nationality );

    var json = {
        name: name,
        email: email,
        id: id,
        nationality: nationality
    }

    console.log(json)
}

function displayMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}
