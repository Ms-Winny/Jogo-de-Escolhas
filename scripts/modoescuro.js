let modoEscuro = localStorage.getItem('modoEscuro')
const controleTema = document.getElementById('controle-tema')

const ligarModoescurdo = () => {
    document.body.classList.add('modoEscuro')
    localStorage.setItem('modoEscuro', 'ativo')
}

const desligarModoescuro = () => {
    document.body.classList.remove('modoEscuro')
    localStorage.setItem('modoEscuro', null)
}

if(modoEscuro === "ativo") ligarModoescurdo()

controleTema.addEventListener("click", () => {
    modoEscuro = localStorage.getItem('modoEscuro')
    modoEscuro !== "ativo" ? ligarModoescurdo() : desligarModoescuro()
    /*
    if(modoescuro !== "active"){
        ligarModoescurdo()
    } else {
        desligarModoescuro()
    }
    */
})
