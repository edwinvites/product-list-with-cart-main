const htmlCantidadProductosSeleccionados = document.getElementById("numeroTotalDeProductos");
const htmlNadaSeleccionado = document.getElementById("carritoSinProductos");
const htmlarticulosSeleccionados = document.getElementById("carritoConProductos");
const htmlPrecioTotal = document.getElementById("precioTotal");
const htmlParentPrecioTotal = document.getElementById("precioTotal").parentNode;
const htmlSpanPrecioTotal = document.getElementById("spanPrecioTotal");



function buscaIds(id) {
    
    
    let seEncuentra;
    seEncuentra = document.getElementById(id) ? true : false;
    return seEncuentra;

}


function sacarDelCarro(primerID) {

    let node = document.getElementById(articulos[primerID].segundoId);
    node.parentNode.removeChild(node);
    articulosSeleccionados.cantidadProductos -= articulosSeleccionados[primerID].cantidad;
    articulosSeleccionados.precioTotal -= articulosSeleccionados[primerID].total;
    delete articulosSeleccionados[primerID]
    document.getElementById(primerID).parentNode.parentNode.childNodes[1].classList.remove("border", "border-danger", "border-3");
    document.getElementById(primerID).classList.remove("visually-hidden");
    document.getElementById(primerID).parentNode.childNodes[5].classList.add("visually-hidden");
    document.getElementById("numeroTotalDeProductos").textContent = articulosSeleccionados.cantidadProductos;

    if (articulosSeleccionados.cantidadProductos == 0) {

        htmlNadaSeleccionado.classList.remove("visually-hidden");
        htmlarticulosSeleccionados.classList.add("visually-hidden");
    
    }
}

function generadorDeHtml(primerID) {
    
    let nodo = document.createElement("div");
    nodo.classList.add("row", "border-bottom", "pb-3", "pt-3");
    nodo.setAttribute("id", articulos[primerID].segundoId);

    const plantilla = `
    <div class="col-9 p-0">
    <p class="mb-2 fw-bold">${articulos[primerID].nombre}</p>
    <p class="m-0"><span class="text-danger fw-bolder">${articulosSeleccionados[primerID].cantidad}</span><span class="text-danger fw-bolder">x</span> &nbsp; &nbsp;
    <span class="text-Rose-400">@ $</span><span class="text-Rose-400">${articulos[primerID].precio.toFixed(2)}</span>

    &nbsp;&nbsp;
    <span class="text-Rose-500 fw-bolder">$</span>
    <span class="text-Rose-500 fw-bolder" id="${primerID}PrecioTotalXArticulo" >${(articulos[primerID].precio * articulosSeleccionados[primerID].cantidad).toFixed(2)}</span></p>
    </div>
    <div class="col-3 align-self-center p-0" >
    <div class="d-flex justify-content-end ps-3 py-3" onclick="sacarDelCarro('${primerID}')">
    <img src="/aseets/icon-remove-item.svg" class="p-1 border  border-secondary border-2 rounded-circle" alt="">
    </div>
    </div>
    `;

    nodo.innerHTML = plantilla;

    return nodo;

}




function botonesAdicionar(idAdicionar, idContabilizador, idimage, idLabelContabilizador) {

    let [botonAdicionar, contabilizador, imagen, labelContabilizador] =
        [document.getElementById(idAdicionar), document.getElementById(idContabilizador),
        document.getElementById(idimage), document.getElementById(idLabelContabilizador)];

    botonAdicionar.classList.add("visually-hidden");
    contabilizador.classList.remove("visually-hidden");
    imagen.classList.add("border", "border-danger", "border-3");
    agregarProductosAlCarro(idAdicionar);
    labelContabilizador.textContent = articulosSeleccionados[idAdicionar]["cantidad"];

};

const articulosSeleccionados = { cantidadProductos: 0, precioTotal: 0 };

function agregarProductosAlCarro(primerID) {


    if (Object.hasOwn(articulosSeleccionados, primerID)) {

        articulosSeleccionados[primerID]["cantidad"]++;

    } else {

        articulosSeleccionados[primerID] = { cantidad: 1 }

    }

    articulosSeleccionados[primerID]["total"] = (articulosSeleccionados[primerID]["cantidad"] * articulos[primerID].precio).toFixed(2);
    articulosSeleccionados["precioTotal"] += articulos[primerID].precio;
    articulosSeleccionados["cantidadProductos"]++;
    htmlCantidadProductosSeleccionados.textContent = articulosSeleccionados["cantidadProductos"];
    htmlNadaSeleccionado.classList.add("visually-hidden");
    htmlarticulosSeleccionados.classList.remove("visually-hidden");

    if (buscaIds(articulos[primerID].segundoId)) {

        let htmlDelArticuloEnElCarro = document.getElementById(articulos[primerID].segundoId);
        let parentNode = htmlDelArticuloEnElCarro.parentNode;
        parentNode.replaceChild(generadorDeHtml(primerID), htmlDelArticuloEnElCarro);

    } else {

        htmlParentPrecioTotal.insertBefore
            (generadorDeHtml(primerID), htmlPrecioTotal);

    }

    htmlSpanPrecioTotal.textContent = articulosSeleccionados.precioTotal.toFixed(2);

}


function decrementarProductos(primerID, idLabelCantidad) {

    let htmlTotalPorArticulo = document.getElementById(primerID + "PrecioTotalXArticulo");
    let htmlDelArticuloDelCarro = document.getElementById(articulos[primerID].segundoId);

    if (Object.hasOwn(articulosSeleccionados, primerID)) {

        articulosSeleccionados[primerID]["cantidad"]--;
        let labelDeCantidad = document.getElementById(idLabelCantidad);
        labelDeCantidad.textContent = articulosSeleccionados[primerID]["cantidad"];
        articulosSeleccionados["cantidadProductos"]--;
        articulosSeleccionados[primerID]["total"] = articulosSeleccionados[primerID]["cantidad"] * articulos[primerID].precio;
        articulosSeleccionados["precioTotal"] -= articulos[primerID].precio;
        htmlTotalPorArticulo.textContent = articulosSeleccionados[primerID]["total"].toFixed(2);

        if (articulosSeleccionados[primerID]["cantidad"] == 0) {

            delete articulosSeleccionados[primerID];
            document.getElementById(primerID).parentNode.parentNode.childNodes[1].classList.remove("border", "border-danger", "border-3");
            document.getElementById(primerID).classList.remove("visually-hidden");
            document.getElementById(primerID).parentNode.childNodes[5].classList.add("visually-hidden");
            htmlDelArticuloDelCarro.parentNode.removeChild(htmlDelArticuloDelCarro);

            if (articulosSeleccionados.cantidadProductos == 0) {

                htmlNadaSeleccionado.classList.remove("visually-hidden");
                htmlarticulosSeleccionados.classList.add("visually-hidden");

            }

        }

        htmlCantidadProductosSeleccionados.textContent = articulosSeleccionados["cantidadProductos"];
        htmlSpanPrecioTotal.textContent = articulosSeleccionados.precioTotal.toFixed(2);
        console.log(articulosSeleccionados);

    }

}

function incrementarCantidades(idProducto, idLabelCantidad) {

    agregarProductosAlCarro(idProducto);
    let labelDeCantidad = document.getElementById(idLabelCantidad);
    labelDeCantidad.textContent = articulosSeleccionados[idProducto]["cantidad"];

}


const articulos = {

    waffle: { precio: 6.50, nombre: "Waffle with Berries", segundoId: "waffleCarro" },
    vanillaBeanCremeBrulee: { precio: 7.00, nombre: "Vanilla Bean Crème Brûlée", segundoId: "vanillaBeanCremeBruleeCarro" },
    MacaronMixOfFive: { precio: 8.00, nombre: "Macaron Mix of Five", segundoId: "MacaronMixOfFiveCarro" },
    classicTiramisu: { precio: 5.50, nombre: "Classic Tiramisu", segundoId: "classicTiramisuCarro" },
    pistachioBaklava: { precio: 4.00, nombre: "Vanilla Bean Crème Brûlée", segundoId: "pistachioBaklavaCarro" },
    LemonMeringuePie: { precio: 5.00, nombre: "Lemon Meringue Pie", segundoId: "LemonMeringuePieCarro" },
    RedVelveCake: { precio: 4.50, nombre: "Red Velve Cake", segundoId: "RedVelveCakeCarro" },
    SaltedCaramelBrownie: { precio: 5.50, nombre: "Salted Caramel Brownie", segundoId: "SaltedCaramelBrownieCarro" },
    VanillaPannaCotta: { precio: 6.50, nombre: "Vanilla Panna Cotta", segundoId: "VanillaPannaCottaCarro" },

}


