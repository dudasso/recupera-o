let users = getObjectLocalStorage("users")

if (users === null) {
    users = [];
    setObjectLocalStorage("users", users)
}

const funcaoCadastro = () => {
    const usuario = document.getElementsByName("usuario")[0];
    const senha = document.getElementsByName("senha")[0];
    const user = {
        usuario: usuario.value,
        senha: senha.value        
    }
    usuario.value = "";
    senha.value = "";

    users.push(user);
    setObjectLocalStorage("users", users);

}

   
function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}