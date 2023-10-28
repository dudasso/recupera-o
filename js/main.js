let alunos = getObjectLocalStorage("usuarios")

if (usuarios === null) {
    usuarios = [];
    setObjectLocalStorage("usuarios", usuarios)
}

window.addEventListener("load", () => {
    document.getElementsById("erro").style.display = "none";
})

const funcaoCadastro = () => {
    const cadastrousuario = document.getElementsByName("cadastrousuario")[0];
    const cadastrosenha = document.getElementsByName("cadastrosenha")[0];
    const user = {
        cadastrousuario: cadastrousuario.value,
        cadastrosenha: cadastrosenha.value        
    }
    cadastrousuario.value = "";
    faltas.value = "";

    usuarios.push(user);
    setObjectLocalStorage("usuarios", usuarios);

}

const funcaoLogin = () => {
    const usuario = document.getElementsByName("usuario")[0];
    const senha = document.getElementsByName("senha")[0];
    for (user in usuarios) {
      if( (user.usuario == usuario) && (user.senha == senha) ){
        document.getElementsById("erro").style.display = "none";
        window.location.href = "/paginas/salao.html";
      }
      else {
        document.getElementsById("erro").style.display = "";
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