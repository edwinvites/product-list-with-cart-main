
function conectarConBotonAdicionar (idAdicionar, idContabilizador) {

    let [botonAdicionar,contabilizador] = [document.getElementById(idAdicionar),document.getElementById(idContabilizador)];

    botonAdicionar.className  += " visually-hidden";
    contabilizador.className  -= "visually-hidden";

};
