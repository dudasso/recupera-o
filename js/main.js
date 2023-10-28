let users = getObjectLocalStorage("users")

if (users === null) {
    users = [];
    setObjectLocalStorage("users", users)
}

window.addEventListener("load", () => {
    document.getElementById("erro").style.display = "none";
})

const funcaoLogin = () => {
    console.log("entro")
    const usuario = document.getElementsByName("usuario")[0];
    const senha = document.getElementsByName("senha")[0];
    for (user of users) {
      if( (user.usuario == usuario) && (user.senha == senha) ){
        console.log("Entro no if")
        document.getElementById("erro").style.display = "none";
        window.location.href = "/paginas/salao.html";
      }
      else {
        document.getElementById("erro").style.display = "";
    } 
    }
} 
   
function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}