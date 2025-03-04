const EtiquetaNumeroDeProductosComprados = document.getElementById("cantidadDeProductosSeleccionados");
const etiquetaCarroSinProductos = document.getElementById("carritoSinProductos");
const etiquetaCarroConProductos = document.getElementById("carritoConProductos");
const etiquetaPrecioDeLaCompra = document.getElementById("precioTotal");
const etiquetaPadrePrecioDeLaCompra = document.getElementById("precioTotal").parentNode;
const etiquetaSpanDelPrecioDeLaCompra = document.getElementById("spanPrecioDeLaCompra");
const etiquetaConTotalDelaCompra = document.getElementById("etiquetaConTotalDelaCompra");
const etiquetaDelTotalCompra = document.getElementById("totalCompraModal");

const myModal = new bootstrap.Modal(document.getElementById('modalArticulos'));
// or




function buscaIds(id) {


    let seEncuentra;
    seEncuentra = document.getElementById(id) ? true : false;
    return seEncuentra;

}


function sacarDelCarro(primerID) {

    let node = document.getElementById(primerID +"etiquetaDelArticuloEnElModal");
    node.parentNode.removeChild(node);
    articulosSeleccionados.cantidadProductos -= articulosSeleccionados[primerID].cantidad;
    
    articulosSeleccionados.precioTotal -= articulosSeleccionados[primerID].total;
    delete articulosSeleccionados[primerID]
    document.getElementById(primerID+"Imagen").classList.remove("border", "border-danger", "border-3");
    document.getElementById(primerID+"BotonAdicionar").classList.remove("d-none");
        
    document.getElementById(primerID+"BotonDisminuirOAdicionar").classList.add("d-none");
    document.getElementById("cantidadDeProductosSeleccionados").textContent = articulosSeleccionados.cantidadProductos;
    document.getElementById("spanPrecioDeLaCompra").innerText = articulosSeleccionados.precioTotal.toFixed(2);
    etiquetaDelTotalCompra.innerText = articulosSeleccionados.precioTotal.toFixed(2);

    let nodoModal = document.getElementById(primerID + "ArticuloEnElModal");
    nodoModal.parentNode.removeChild(nodoModal);

    

    if (articulosSeleccionados.cantidadProductos == 0) {

        etiquetaCarroSinProductos.classList.remove("d-none");
        etiquetaCarroConProductos.classList.add("d-none");

    }
}

function generadorDeHtml(primerID) {

    let nodo = document.createElement("div");
    nodo.classList.add("row", "border-bottom", "pb-3", "pt-3");
    nodo.setAttribute("id", primerID + "etiquetaDelArticuloEnElModal" );

    const plantilla = `
        <div class="col-9 p-0">
            <p class="mb-2 fw-bold">${articulos[primerID].nombre}</p>
            <p class="m-0"><span class="text-danger fw-bolder" id="cantidadArticuloEnElCarrio${primerID}">${articulosSeleccionados[primerID].cantidad}</span><span class="text-danger fw-bolder">x</span> &nbsp; &nbsp;
            <span class="text-Rose-400">@ $</span><span class="text-Rose-400">${articulos[primerID].precio.toFixed(2)}</span>

            &nbsp;&nbsp;
            <span class="text-Rose-500 fw-bolder">$</span>
            <span class="text-Rose-500 fw-bolder" id="${primerID}etiquetaPrecioXArticuloEnElCarro" >${(articulos[primerID].precio * articulosSeleccionados[primerID].cantidad).toFixed(2)}</span></p>
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

function ElementoDelArticuloEnElModal(primerID) {
    let nodo = document.createElement("div");
    nodo.classList.add("row", "w-100", "border-bottom", "m-0", "pt-3", "pb-3");
    nodo.setAttribute("id", primerID + "ArticuloEnElModal" );

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
                                        <p class="m-0" id="totalPrecioArticuloModal${primerID}">$${(articulos[primerID].precio * articulosSeleccionados[primerID].cantidad).toFixed(2)}</p>
                                    </div>
                                </div>
                        
    `;


    nodo.innerHTML = plantilla;
    return nodo;


}



function botonesAdicionar(primerID) {

    let [botonAdicionar, botonDisminuirOAumentar, imagen, etiquetaCantidadProducto] =
        [document.getElementById(primerID + "BotonAdicionar"), document.getElementById(primerID + "BotonDisminuirOAdicionar"),
        document.getElementById(primerID + "Imagen"), document.getElementById(primerID + "EtiquetaCantidad")];

    botonAdicionar.classList.add("d-none");
    botonDisminuirOAumentar.classList.remove("d-none");
    imagen.classList.add("border", "border-danger", "border-3");
    agregarProductosAlCarro(primerID);
    etiquetaCantidadProducto.textContent = articulosSeleccionados[primerID]["cantidad"];

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
    EtiquetaNumeroDeProductosComprados.textContent = articulosSeleccionados["cantidadProductos"];
    etiquetaCarroSinProductos.classList.add("d-none");
    etiquetaCarroConProductos.classList.remove("d-none");

    if (buscaIds(primerID + "etiquetaDelArticuloEnElModal")) {

        let htmlDelArticuloEnElCarro = document.getElementById(primerID +"etiquetaDelArticuloEnElModal");
        let parentNode = htmlDelArticuloEnElCarro.parentNode;
        parentNode.replaceChild(generadorDeHtml(primerID), htmlDelArticuloEnElCarro);


    } else {

        etiquetaPadrePrecioDeLaCompra.insertBefore
            (generadorDeHtml(primerID), etiquetaPrecioDeLaCompra);



    }


    if (buscaIds(primerID + "ArticuloEnElModal")) {
        let htmlDelArticuloEnElModal = document.getElementById(primerID +"ArticuloEnElModal");
        let parentNode = htmlDelArticuloEnElModal.parentNode;
        parentNode.replaceChild(ElementoDelArticuloEnElModal(primerID), htmlDelArticuloEnElModal);

    } else {

        etiquetaConTotalDelaCompra.parentNode.insertBefore
            (ElementoDelArticuloEnElModal(primerID), etiquetaConTotalDelaCompra);
    }

    etiquetaSpanDelPrecioDeLaCompra.textContent = articulosSeleccionados.precioTotal.toFixed(2);
    etiquetaDelTotalCompra.textContent = articulosSeleccionados.precioTotal.toFixed(2)

}

function incrementarCantidades(primerID) {
    articulosSeleccionados[primerID].cantidad++;
    articulosSeleccionados.cantidadProductos++;
    articulosSeleccionados[primerID].total = articulosSeleccionados[primerID].total + articulos[primerID].precio;
    articulosSeleccionados.precioTotal = articulosSeleccionados.precioTotal + articulos[primerID].precio;
    document.getElementById(primerID+"EtiquetaCantidad").innerText = articulosSeleccionados[primerID].cantidad;
    document.getElementById(primerID+"etiquetaPrecioXArticuloEnElCarro").innerText = (articulosSeleccionados[primerID].cantidad*articulos[primerID].precio).toFixed(2);
    document.getElementById("cantidadArticuloEnElCarrio"+primerID).innerText = articulosSeleccionados[primerID].cantidad;
    document.getElementById("cantidadDelArticuloEnElModal."+primerID).innerText = articulosSeleccionados[primerID].cantidad;
    document.getElementById("totalPrecioArticuloModal"+primerID).innerText = (articulosSeleccionados[primerID].cantidad*articulos[primerID].precio).toFixed(2);
    etiquetaDelTotalCompra.innerText = articulosSeleccionados.precioTotal.toFixed(2);
    etiquetaSpanDelPrecioDeLaCompra.innerText = (articulosSeleccionados.precioTotal).toFixed(2);



    
}

function decrementarProductos(primerID) {

    let etiquetaDelArticuloEnElModal = document.getElementById(primerID + "etiquetaDelArticuloEnElModal");
    let EtiquetaEnElModalDelArticulo = document.getElementById(primerID + "ArticuloEnElModal")
    let etiquetaDelTotalPorArticuloEnElModal = document.getElementById("totalPrecioArticuloModal"+primerID);


    if (Object.hasOwn(articulosSeleccionados, primerID)) {

        articulosSeleccionados[primerID]["cantidad"]--;
        document.getElementById(primerID+"EtiquetaCantidad").textContent = articulosSeleccionados[primerID]["cantidad"];
        articulosSeleccionados["cantidadProductos"]--;
        articulosSeleccionados[primerID]["total"] = articulosSeleccionados[primerID]["cantidad"] * articulos[primerID].precio;
        articulosSeleccionados["precioTotal"] -= articulos[primerID].precio;
        document.getElementById(primerID + "etiquetaPrecioXArticuloEnElCarro").textContent = articulosSeleccionados[primerID]["total"].toFixed(2);
        etiquetaDelTotalPorArticuloEnElModal.textContent = articulosSeleccionados[primerID]["total"].toFixed(2);
        etiquetaSpanDelPrecioDeLaCompra.innerText = articulosSeleccionados.precioTotal.toFixed(2);
        document.getElementById("cantidadArticuloEnElCarrio"+primerID).innerText = articulosSeleccionados[primerID].cantidad;
        document.getElementById("cantidadDelArticuloEnElModal."+primerID).innerText = articulosSeleccionados[primerID].cantidad;

        if (articulosSeleccionados[primerID]["cantidad"] == 0) {

            delete articulosSeleccionados[primerID];
            document.getElementById(primerID+"Imagen").classList.remove("border", "border-danger", "border-3");
            document.getElementById(primerID+"BotonAdicionar").classList.remove("d-none");
            document.getElementById(primerID+"BotonDisminuirOAdicionar").classList.add("d-none");
            etiquetaDelArticuloEnElModal.parentNode.removeChild(etiquetaDelArticuloEnElModal);
            EtiquetaEnElModalDelArticulo.parentNode.removeChild(EtiquetaEnElModalDelArticulo);
            
            if (articulosSeleccionados.cantidadProductos == 0) {
                
                etiquetaCarroSinProductos.classList.remove("d-none");
                etiquetaCarroConProductos.classList.add("d-none");

            }

        }

        EtiquetaNumeroDeProductosComprados.textContent = articulosSeleccionados["cantidadProductos"];
        etiquetaSpanDelPrecioDeLaCompra.textContent = articulosSeleccionados.precioTotal.toFixed(2);
        etiquetaDelTotalCompra.textContent = articulosSeleccionados.precioTotal.toFixed(2);

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

    waffle: 
    {
    precio: 6.50, 
    nombre: "Waffle with Berries",
    urlThumbnail: "/aseets/image-waffle-thumbnail.jpg",
    urlTablet: "/aseets/image-waffle-tablet.jpg"
    },
    
    vanillaBeanCremeBrulee: 
    { 
    precio: 7.00, 
    nombre: "Vanilla Bean Crème Brûlée",
    urlThumbnail: "aseets/image-creme-brulee-thumbnail.jpg"
    },

    MacaronMixOfFive: 
    { 
    precio: 8.00, 
    nombre: "Macaron Mix of Five",
    urlThumbnail: "aseets/image-macaron-thumbnail.jpg"
    },

    classicTiramisu: 
    { 
    precio: 5.50, 
    nombre: "Classic Tiramisu", 
    urlThumbnail: "aseets/image-tiramisu-thumbnail.jpg"
    },

    pistachioBaklava: 
    { 
    precio: 4.00, 
    nombre: "Vanilla Bean Crème Brûlée", 
    urlThumbnail:"aseets/image-baklava-thumbnail.jpg" 
    },

    LemonMeringuePie: 
    { 
    precio: 5.00, 
    nombre: "Lemon Meringue Pie", 
    urlThumbnail:"aseets/image-meringue-thumbnail.jpg" 
    },

    RedVelveCake: 
    { 
    precio: 4.50, 
    nombre: "Red Velve Cake", 
    urlThumbnail: "aseets/image-cake-thumbnail.jpg" 
    },

    SaltedCaramelBrownie: 
    { 
    precio: 5.50, 
    nombre: "Salted Caramel Brownie",
    urlThumbnail: "aseets/image-brownie-thumbnail.jpg" 
    },
    
    VanillaPannaCotta: 
    { 
    precio: 6.50, 
    nombre: "Vanilla Panna Cotta", 
    urlThumbnail: "aseets/image-panna-cotta-thumbnail.jpg" 
},

}


