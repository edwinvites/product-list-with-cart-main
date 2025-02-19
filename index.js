const htmlCantidadProductosSeleccionados = document.getElementById("numeroTotalDeProductos");
const htmlNadaSeleccionado = document.getElementById("carritoSinProductos");
const htmlarticulosSeleccionados = document.getElementById("carritoConProductos");
const htmlPrecioTotal = document.getElementById("precioTotal");
const htmlParentPrecioTotal = document.getElementById("precioTotal").parentNode;
const htmlSpanPrecioTotal = document.getElementById("spanPrecioTotal");
const htmlContainerAriticulosModal = document.getElementById("articulosConfirmados");
const htmlFilaTotalCompraModal = document.getElementById("filaTotalCompraModal");
const htmlTotalPrecioModal = document.getElementById("totalCompraModal");
const htmlBotonModal = document.getElementById("botonDelModal");

const myModal = new bootstrap.Modal(document.getElementById('modalArticulos'));
// or


console.log(htmlContainerAriticulosModal.childNodes);


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
    document.getElementById("spanPrecioTotal").innerText = articulosSeleccionados.precioTotal.toFixed(2);
    htmlTotalPrecioModal.innerText = articulosSeleccionados.precioTotal.toFixed(2);

    let nodoModal = document.getElementById(articulos[primerID].tercerId);
    nodoModal.parentNode.removeChild(nodoModal);

    

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
    <p class="m-0"><span class="text-danger fw-bolder" id="cantidadArticuloEnElCarrio${primerID}">${articulosSeleccionados[primerID].cantidad}</span><span class="text-danger fw-bolder">x</span> &nbsp; &nbsp;
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

function htmlArticulosEnElModal(primerID) {
    let nodo = document.createElement("div");
    nodo.classList.add("row", "w-100", "border-bottom", "m-0", "pt-3", "pb-3");
    nodo.setAttribute("id", articulos[primerID].tercerId);

    const plantilla =
        `
                           
                                <div class="col-2 m-0 p-0 ">
                                    <div class="d-flex flex-column justify-content-center h-100">
                                        <img src="${articulos[primerID].urlThumbnail}" alt="" class="w-100 ">
                                    </div>
                                </div>
                                <div class="col-8 m-0 px-3 ">
                                    <div class="d-flex flex-column justify-content-between">
                                        <p class="mb-2 fw-bold text-truncate">${articulos[primerID].nombre}</p>
                                        <div>
                                            <p class="m-0"><span class="text-danger fw-bolder" id="cantidadDelArticuloEnElModal.${primerID}">${articulosSeleccionados[primerID].cantidad}</span><span class="text-danger fw-bolder">x</span> &nbsp; &nbsp;
                                                <span class="text-Rose-400">@ $${articulos[primerID].precio.toFixed(2)}</span>
                                        </div>


                                    </div>
                                </div>
                                <div class="col-2 m-0 p-0 ">
                                    <div class="d-flex h-100 align-items-center justify-content-center">
                                        <p class="m-0" id="totalPrecioArticuloModal${articulos[primerID].tercerId}">$${(articulos[primerID].precio * articulosSeleccionados[primerID].cantidad).toFixed(2)}</p>
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

    articulosSeleccionados[primerID]["total"] = (articulosSeleccionados[primerID]["cantidad"] * articulos[primerID].precio);
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

        // htmlContainerAriticulosModal.childNodes


    }


    if (buscaIds(articulos[primerID].tercerId)) {
        let htmlDelArticuloEnElModal = document.getElementById(articulos[primerID].tercerId);
        let parentNode = htmlDelArticuloEnElModal.parentNode;
        parentNode.replaceChild(htmlArticulosEnElModal(primerID), htmlDelArticuloEnElModal);

    } else {

        htmlFilaTotalCompraModal.parentNode.insertBefore
            (htmlArticulosEnElModal(primerID), htmlFilaTotalCompraModal);
    }

    htmlSpanPrecioTotal.textContent = articulosSeleccionados.precioTotal.toFixed(2);
    htmlTotalPrecioModal.textContent = articulosSeleccionados.precioTotal.toFixed(2)

}

function incrementarCantidades(primerID, idSpanCantidad) {
    articulosSeleccionados[primerID].cantidad++;
    articulosSeleccionados.cantidadProductos++;
    articulosSeleccionados[primerID].total = articulosSeleccionados[primerID].total + articulos[primerID].precio;
    articulosSeleccionados.precioTotal = articulosSeleccionados.precioTotal + articulos[primerID].precio;
    document.getElementById(idSpanCantidad).innerText = articulosSeleccionados[primerID].cantidad;
    document.getElementById(primerID+"PrecioTotalXArticulo").innerText = (articulosSeleccionados[primerID].cantidad*articulos[primerID].precio).toFixed(2);
    document.getElementById("cantidadArticuloEnElCarrio"+primerID).innerText = articulosSeleccionados[primerID].cantidad;
    document.getElementById("cantidadDelArticuloEnElModal."+primerID).innerText = articulosSeleccionados[primerID].cantidad;
    document.getElementById("totalPrecioArticuloModal"+articulos[primerID].tercerId).innerText = (articulosSeleccionados[primerID].cantidad*articulos[primerID].precio).toFixed(2);
    htmlTotalPrecioModal.innerText = articulosSeleccionados.precioTotal.toFixed(2);
    htmlSpanPrecioTotal.innerText = (articulosSeleccionados.precioTotal).toFixed(2);



    
}

function decrementarProductos(primerID, idLabelCantidad) {

    let htmlTotalPorArticulo = document.getElementById(primerID + "PrecioTotalXArticulo");
    let htmlDelArticuloEnElCarro = document.getElementById(articulos[primerID].segundoId);
    let htmlDelArticuloEnElModal = document.getElementById(articulos[primerID].tercerId)
    let htmlDelTotalPrecioPorArticuloEnElModal = document.getElementById("totalPrecioArticuloModal"+articulos[primerID].tercerId);


    if (Object.hasOwn(articulosSeleccionados, primerID)) {

        articulosSeleccionados[primerID]["cantidad"]--;
        let labelDeCantidad = document.getElementById(idLabelCantidad);
        labelDeCantidad.textContent = articulosSeleccionados[primerID]["cantidad"];
        articulosSeleccionados["cantidadProductos"]--;
        articulosSeleccionados[primerID]["total"] = articulosSeleccionados[primerID]["cantidad"] * articulos[primerID].precio;
        articulosSeleccionados["precioTotal"] -= articulos[primerID].precio;
        htmlTotalPorArticulo.textContent = articulosSeleccionados[primerID]["total"].toFixed(2);
        htmlDelTotalPrecioPorArticuloEnElModal.textContent = articulosSeleccionados[primerID]["total"].toFixed(2);
        htmlSpanPrecioTotal.innerText = articulosSeleccionados.precioTotal.toFixed(2);
        document.getElementById("cantidadArticuloEnElCarrio"+primerID).innerText = articulosSeleccionados[primerID].cantidad;
        document.getElementById("cantidadDelArticuloEnElModal."+primerID).innerText = articulosSeleccionados[primerID].cantidad;

        if (articulosSeleccionados[primerID]["cantidad"] == 0) {

            delete articulosSeleccionados[primerID];
            document.getElementById(primerID).parentNode.parentNode.childNodes[1].classList.remove("border", "border-danger", "border-3");
            document.getElementById(primerID).classList.remove("visually-hidden");
            document.getElementById(primerID).parentNode.childNodes[5].classList.add("visually-hidden");
            htmlDelArticuloEnElCarro.parentNode.removeChild(htmlDelArticuloEnElCarro);
            htmlDelArticuloEnElModal.parentNode.removeChild(htmlDelArticuloEnElModal);
            
            if (articulosSeleccionados.cantidadProductos == 0) {
                
                htmlNadaSeleccionado.classList.remove("visually-hidden");
                htmlarticulosSeleccionados.classList.add("visually-hidden");

            }

        }

        htmlCantidadProductosSeleccionados.textContent = articulosSeleccionados["cantidadProductos"];
        htmlSpanPrecioTotal.textContent = articulosSeleccionados.precioTotal.toFixed(2);
        htmlTotalPrecioModal.textContent = articulosSeleccionados.precioTotal.toFixed(2);

    }

}


function reset() {

    let arregloArticulosSeleccionados = Object.keys(articulosSeleccionados);

    for (let index = 2; index < arregloArticulosSeleccionados.length; index++) {
    
        sacarDelCarro(arregloArticulosSeleccionados[index]);

    }

    for (let index = 2; index < arregloArticulosSeleccionados.length; index++) {
    
        delete articulosSeleccionados[arregloArticulosSeleccionados[index]];
    }


    articulosSeleccionados["cantidadProductos"] = 0;
    articulosSeleccionados["precioTotal"] = 0;

    myModal.hide();
    
}


const articulos = {

    waffle: {
        precio: 6.50, nombre: "Waffle with Berries", 
        segundoId: "waffleCarro", tercerId: "waffleModal" ,
        urlThumbnail: "/aseets/image-waffle-thumbnail.jpg"
    },
    
        vanillaBeanCremeBrulee: 
        { 
            precio: 7.00, 
            nombre: "Vanilla Bean Crème Brûlée", 
            segundoId: "vanillaBeanCremeBruleeCarro",
             tercerId: "vanillaBeanCremeBruleeModal",
                    
             urlThumbnail: "aseets/image-creme-brulee-thumbnail.jpg"
            },
    MacaronMixOfFive: 
    { precio: 8.00, 
        nombre: "Macaron Mix of Five", 
        segundoId: "MacaronMixOfFiveCarro", 
        tercerId: "MacaronMixOfFiveModal" ,
    urlThumbnail: "aseets/image-macaron-thumbnail.jpg"
},
    classicTiramisu: 
    { 
        precio: 5.50, 
        nombre: "Classic Tiramisu", 
        segundoId: "classicTiramisuCarro", 
        tercerId: "classicTiramisuModal" ,
        urlThumbnail: "aseets/image-tiramisu-thumbnail.jpg"
     },
    pistachioBaklava: 
    { 
        precio: 4.00, 
        nombre: "Vanilla Bean Crème Brûlée", 
        segundoId: "pistachioBaklavaCarro", 
        tercerId: "pistachioBaklavaModal",
    urlThumbnail:"aseets/image-baklava-thumbnail.jpg" 
},
    LemonMeringuePie: 
    { 
        precio: 5.00, 
        nombre: "Lemon Meringue Pie", 
        segundoId: "LemonMeringuePieCarro", 
        tercerId: "LemonMeringuePieModal",
    urlThumbnail:"aseets/image-meringue-thumbnail.jpg" 
},
    RedVelveCake: 
    { 
        precio: 4.50, 
        nombre: "Red Velve Cake", 
        segundoId: "RedVelveCakeCarro", 
        tercerId: "RedVelveCakeModal",
        urlThumbnail: "aseets/image-cake-thumbnail.jpg" 
    },
    SaltedCaramelBrownie: 
    { 
        precio: 5.50, 
        nombre: "Salted Caramel Brownie",
         segundoId: "SaltedCaramelBrownieCarro", 
         tercerId: "SaltedCaramelBrownieModal",
        urlThumbnail: "aseets/image-brownie-thumbnail.jpg" 
    },
    VanillaPannaCotta: 
    { 
        precio: 6.50, 
        nombre: "Vanilla Panna Cotta", 
        segundoId: "VanillaPannaCottaCarro", 
        tercerId: "VanillaPannaCottaModal",
    urlThumbnail: "aseets/image-panna-cotta-thumbnail.jpg" 
},

}


