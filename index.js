
function conectarConBotonAdicionar (idAdicionar, idContabilizador) {

    let [botonAdicionar,contabilizador] = [document.getElementById(idAdicionar),document.getElementById(idContabilizador)];

    botonAdicionar.classList.add("visually-hidden");
    contabilizador.classList.remove("visually-hidden");

};
