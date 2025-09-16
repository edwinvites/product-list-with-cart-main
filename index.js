
const articulos = {

  waffle:
  {
    precio: 6.50,
    full_nombre: "Waffle with Berries",
    nombre: "Wafle",
    urlThumbnail: "/aseets/image-waffle-thumbnail.jpg",
    urlTablet: "/aseets/image-waffle-tablet.jpg",
    mobile_img: "/aseets/image-waffle-mobile.jpg",
    desktop_img: "/aseets/image-waffle-desktop.jpg"
  },

  vanillaBeanCremeBrulee:
  {
    precio: 7.00,
    full_nombre: "Vanilla Bean Crème Brûlée",
    nombre: "Crème Brûlé",
    urlThumbnail: "aseets/image-creme-brulee-thumbnail.jpg",
    urlTablet: "aseets/image-creme-brulee-tablet.jpg",
    mobile_img: "/aseets/image-creme-brulee-mobile.jpg",
    desktop_img: "/aseets/image-creme-brulee-desktop.jpg"
  },

  MacaronMixOfFive:
  {
    precio: 8.00,
    full_nombre: "Macaron Mix of Five",
    nombre: "Macaron",
    urlThumbnail: "aseets/image-macaron-thumbnail.jpg",
    urlTablet: "aseets/image-macaron-tablet.jpg",
    mobile_img: "/aseets/image-macaron-mobile.jpg",
    desktop_img: "/aseets/image-macaron-desktop.jpg"
  },

  classicTiramisu:
  {
    precio: 5.50,
    full_nombre: "Classic Tiramisu",
    nombre: "Tiramisu",
    urlThumbnail: "aseets/image-tiramisu-thumbnail.jpg",
    urlTablet: "aseets/image-tiramisu-tablet.jpg",
    mobile_img: "/aseets/image-tiramisu-mobile.jpg",
    desktop_img: "/aseets/image-tiramisu-desktop.jpg"
  },

  pistachioBaklava:
  {
    precio: 4.00,
    full_nombre: "Pistachio Baklava",
    nombre: "Baklava",
    urlThumbnail: "aseets/image-baklava-thumbnail.jpg",
    urlTablet: "aseets/image-baklava-tablet.jpg",
    mobile_img: "/aseets/image-baklava-mobile.jpg",
    desktop_img: "/aseets/image-baklava-desktop.jpg"
  },

  LemonMeringuePie:
  {
    precio: 5.00,
    full_nombre: "Lemon Meringue Pie",
    nombre: "Pie",
    urlThumbnail: "aseets/image-meringue-thumbnail.jpg",
    urlTablet: "aseets/image-meringue-tablet.jpg",
    mobile_img: "/aseets/image-meringue-mobile.jpg",
    desktop_img: "/aseets/image-meringue-desktop.jpg"
  },

  RedVelveCake:
  {
    precio: 4.50,
    full_nombre: "Red Velve Cake",
    nombre: "Cake",
    urlThumbnail: "aseets/image-cake-thumbnail.jpg",
    urlTablet: "aseets/image-cake-tablet.jpg",
    mobile_img: "/aseets/image-cake-mobile.jpg",
    desktop_img: "/aseets/image-cake-desktop.jpg"
  },

  SaltedCaramelBrownie:
  {
    precio: 5.50,
    full_nombre: "Salted Caramel Brownie",
    urlThumbnail: "aseets/image-brownie-thumbnail.jpg",
    urlTablet: "aseets/image-brownie-tablet.jpg",
    mobile_img: "/aseets/image-brownie-mobile.jpg",
    desktop_img: "/aseets/image-brownie-desktop.jpg"
  },

  VanillaPannaCotta:
  {
    precio: 6.50,
    full_nombre: "Vanilla Panna Cotta",
    nombre: "Panna Cotta",
    urlThumbnail: "aseets/image-panna-cotta-thumbnail.jpg",
    urlTablet: "aseets/image-panna-cotta-tablet.jpg",
    mobile_img: "/aseets/image-panna-cotta-mobile.jpg",
    desktop_img: "/aseets/image-panna-cotta-desktop.jpg"
  },

}



const fila_de_productos = document.getElementById("fila_productos");

function articulo(nombre_producto) {


  return (
    `
                    <article class="col pt-2">

                        <div
                          class="rounded-2 rounded-md-4 rounded-lg-2 overflow-hidden"
                          id="img_product_${nombre_producto}"
                        >
                          <img
                            src="${articulos[nombre_producto].mobile_img}"
                            alt=""
                            class="w-100 d-lg-none"
                          />
                          <img
                            src="${articulos[nombre_producto].desktop_img}"
                            alt=""
                            class="w-100 d-none d-lg-block"
                          />
                        </div>


                        <div class="bg-Rose-50 position-relative mb-3">

                          
                          <div
                            class="position-absolute start-50 translate-middle bg-Rose-50 border rounded-pill border-Rose-900 d-flex justify-content-between align-items-center px-4 py-2"
                            id="addToCar_${nombre_producto}"
                            onclick="add_to_car('${nombre_producto}')"
                          >
                            <img
                              src="/aseets/icon-add-to-cart.svg"
                              alt=""
                              class="d-inline pe-2"
                            />
                            <p
                              class="d-inline ps-2 m-0 fs-6 fs-md-4 fs-lg-5 fw-bold text-nowrap pe-none"
                            >
                              Add to Car
                            </p>
                          </div>


                          <div
                            class="position-absolute start-50 translate-middle bg-danger border-0 rounded-pill d-flex justify-content-between align-items-center d-none w-50"
                            id="cantidad_bottons_${nombre_producto}"
                          >
                            <div
                              class="py-2 ps-2 pe-5 py-md-4 ps-md-4 pe-md-5 py-lg-2 ps-lg-2 pe-lg-3 d-flex justify-content-center"
                              onclick="decrementarProductos('${nombre_producto}')"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="none"
                                viewBox="0 0 10 2"
                              >
                                <circle
                                  cx="50%"
                                  cy="50%"
                                  r="4"
                                  fill=""
                                  stroke="white"
                                  stroke-width="0.5"
                                />
                                <path
                                  fill="#fff"
                                  d="M0 .375h10v1.25H0V.375Z"
                                  transform-origin="50%"
                                  transform="scale(0.5)"
                                />
                              </svg>
                            </div>
                            <p
                              class="px-1 py-0 m-0 text-center fs-5 fs-md-2 fs-lg-6 text-white"
                              id="amount_product_in_menu_${nombre_producto}"
                            >
                              1
                            </p>
                            <div
                              class="py-2 ps-5 pe-2 py-md-4 pe-md-4 ps-md-5 py-lg-2 ps-lg-3 pe-lg-2 d-flex justify-content-center"
                              onclick="incrementarCantidades('${nombre_producto}')"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="none"
                                viewBox="0 0 10 10"
                                transform=""
                              >
                                <circle
                                  cx="50%"
                                  cy="50%"
                                  r="4"
                                  fill=""
                                  stroke="white"
                                  stroke-width="0.5"
                                />
                                <path
                                  fill="#FFFFFF"
                                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                                  transform="scale(0.5)"
                                  transform-origin="50%"
                                />
                              </svg>
                            </div>
                          </div>

                        </div>

                        <p class="pt-3 mb-0 mt-md-2 fs-5 fs-md-3 fs-lg-5 text-Rose-400">
                          ${articulos[nombre_producto].nombre}
                          </p>
                          <p class="m-0 fw-bolder fs-4 fs-lg-3 fs-md-2 text-Rose-900">
                          ${articulos[nombre_producto].full_nombre}
                          </p>
                          <p
                          class="fw-bold fs-4 fs-md-2 fs-lg-3 mx-0 my-0 mb-md-3 pb-4 pb-md-5 text-ocre"
                          >
                          $ ${articulos[nombre_producto].precio.toFixed(2)}
                        </p>
                      </article>
    `
  )
}

for (const name_product in articulos) {

  fila_de_productos.innerHTML += articulo(name_product);
}


class carrito_compras {
  constructor() {
    this.productos = {};
    this.total_amount_products = 0;
    this.total_price = 0;
  }

  agregar_producto(nombre_producto) {
    let producto_en_el_carrito = Object.hasOwn(this.productos, nombre_producto);
    let { precio, full_nombre } = articulos[nombre_producto];
    if (!producto_en_el_carrito) {
      this.productos[nombre_producto] = { "amount_x_product": 1, "subtotal": articulos[nombre_producto]["precio"] }

    } else {
      this.productos[nombre_producto]["amount_x_product"]++;
      this.productos[nombre_producto]["subtotal"] += articulos[nombre_producto]["precio"];
    }
    this.total_amount_products++;
    this.total_price += articulos[nombre_producto]["precio"];
  }

  sacar_producto(nombre_producto) {
    this.productos[nombre_producto].amount_x_product--;
    this.productos[nombre_producto].subtotal -= articulos[nombre_producto].precio;
    this.total_amount_products--;
    this.total_price -= articulos[nombre_producto].precio;
  }

}

const carrito = new carrito_compras();

function add_to_car(nombre_producto) {

  document.getElementById(`addToCar_${nombre_producto}`).classList.add("d-none");
  document.getElementById(`cantidad_bottons_${nombre_producto}`).classList.remove("d-none");
  document.getElementById(`img_product_${nombre_producto}`).classList.add("border", "border-danger", "border-2", "border-md-4", "border-lg-2");
  agregarProductosAlCarro(nombre_producto);
  document.getElementById(`amount_product_in_menu_${nombre_producto}`).textContent = carrito["productos"][nombre_producto]["amount_x_product"];

};



const total_units = document.getElementById("cantidad_productos");
const car_without_products = document.getElementById("carritoSinProductos");
const car_with_products = document.getElementById("carritoConProductos");
const price_total = document.getElementById("cost_total");
const total_cost_carrito = document.getElementById("spanPrecioDeLaCompra");
const box_for_products_and_cost_modal = document.getElementById("box_for_products_and_cost_modal");
const total_cost_element_in_modal = document.getElementById("total_cost_element_in_modal");
const container_for_products_in_car = document.getElementById("container_for_products_in_car")



const myModal = new bootstrap.Modal(document.getElementById('modalArticulos'));







function sacarDelCarro(name_product) {

  let node = document.getElementById(`producto_en_el_carrito_${name_product}`);
  console.log({ node });

  container_for_products_in_car.removeChild(node);
  carrito.total_amount_products -= carrito.productos[name_product].amount_x_product;

  carrito.total_price -= carrito.productos[name_product].subtotal;
  delete carrito.productos[name_product]

  document.getElementById(`img_product_${name_product}`).classList.remove("border", "border-danger", "border-2", "border-md-4", "border-lg-2");
  document.getElementById(`addToCar_${name_product}`).classList.remove("d-none");

  document.getElementById(`cantidad_bottons_${name_product}`).classList.add("d-none");
  total_units.textContent = carrito.total_amount_products;
  document.getElementById("spanPrecioDeLaCompra").innerText = carrito.total_price.toFixed(2);
  total_cost_element_in_modal.innerText = carrito.total_price.toFixed(2);

  let nodoModal = document.getElementById(name_product + "_element_in_modal");
  nodoModal.parentNode.removeChild(nodoModal);



  if (carrito.total_amount_products == 0) {

    car_without_products.classList.remove("d-none");
    car_with_products.classList.add("d-none");

  }
}

function html_of_products_in_car(name_product) {

  let nodo = document.createElement("article");
  nodo.classList.add("row", "border-bottom", "pb-2", "pt-2", "py-lg-2");
  nodo.setAttribute("id", `producto_en_el_carrito_${name_product}`);
  console.log({ carrito });

  const plantilla = `
        <div class="col-9 p-0">
            <div class="d-flex justify-content-evenly flex-column h-100">
            <p class="m-0 fs-5 fw-bold fs-md-4 fs-lg-6">${articulos[name_product].nombre}</p>
            <p class="m-0 fs-5 fs-md-4 fs-lg-6"><span class="text-danger fw-bolder" id="subtotal_cantidad_en_el_carro_${name_product}">${carrito["productos"][name_product]["amount_x_product"]}</span><span class="text-danger fw-bolder">x</span> &nbsp; &nbsp;
                <span class="text-Rose-400">@ $</span><span class="text-Rose-400">${articulos[name_product].precio.toFixed(2)}</span>

                &nbsp;&nbsp;
                <span class="text-Rose-500 fw-bolder">$</span>
                <span class="text-Rose-500 fw-bolder" id="${name_product}_subtotal_producto" >${(carrito["productos"][name_product]["subtotal"]).toFixed(2)}
                </span>
            </p>
            </div>
        </div>
        <div class="col-3 align-self-center p-0" >
            <div class="d-flex justify-content-end ps-3 py-3 ps-lg-1 py-lg-1 " onclick="sacarDelCarro('${name_product}')">
                <img src="/aseets/icon-remove-item.svg" class="p-1 p-md-2 p-lg-1 border  border-secondary border-2 rounded-circle img-fluid scala65" alt="">
            </div>
        </div>
    `;

  nodo.innerHTML = plantilla;

  return nodo;

}

function element_product_in_modal(name_product) {
  let nodo = document.createElement("article");
  nodo.classList.add("row", "w-100", "border-bottom", "m-0", "pt-3", "pb-3");
  nodo.setAttribute("id", name_product + "_element_in_modal");
  console.log(carrito["productos"][name_product]["amount_x_product"]);

  const plantilla =
    `
                           
                                <div class="col-2 m-0 p-0 ">
                                    <div class="d-flex flex-column justify-content-center h-100">
                                        <img src="${articulos[name_product].urlThumbnail}" alt="" class="w-100 ">
                                    </div>
                                </div>
                                <div class="col-8 m-0 px-3 ">
                                    <div class="d-flex flex-column justify-content-center h-100">
                                        <p class="mb-1 fs-6 fw-semibold   text-truncate">${articulos[name_product].nombre}</p>
                                        <div>
                                            <p class="m-0"><span class="text-danger fs-6 fw-semibold" id="cantidad_producto_en_el_modal_${name_product}">${carrito["productos"][name_product]["amount_x_product"]}</span><span class="text-danger fs-6 fw-semibold">x</span> &nbsp; &nbsp; &nbsp;&nbsp;
                                                <span class="text-Rose-400 fs-6 ">@ $${articulos[name_product].precio.toFixed(2)}</span>
                                                </p>
                                        </div>


                                    </div>
                                </div>
                                <div class="col-2 m-0 p-0 ">
                                    <div class="d-flex h-100 align-items-center justify-content-center">
                                        <p class="m-0 fs-4 fw-semibold" id="subtotal_cost_for_${name_product}">$${(carrito["productos"][name_product]["subtotal"]).toFixed(2)}</p>
                                    </div>
                                </div>
                        
    `;


  nodo.innerHTML = plantilla;
  return nodo;


}


function agregarProductosAlCarro(name_product) {


  carrito.agregar_producto(name_product);

  total_units.textContent = carrito["total_amount_products"];
  car_without_products.classList.add("d-none");
  car_with_products.classList.remove("d-none");
  if (document.getElementById(`${name_product}_en_el_carrito`)) {
    container_for_products_in_car.replaceChild(html_of_products_in_car(name_product), document.getElementById(`${name_product}_en_el_carrito`));
  } else {
    container_for_products_in_car.insertBefore
      (html_of_products_in_car(name_product), price_total);
  }

  if (document.getElementById(name_product + "_element_in_modal")) {
    box_for_products_and_cost_modal.replaceChild(element_product_in_modal(name_product), document.getElementById(name_product + "_element_in_modal"));
  } else {
    box_for_products_and_cost_modal.insertBefore
      (element_product_in_modal(name_product), document.getElementById("total_cost_in_modal"));
  }

  total_cost_carrito.textContent = carrito.total_price.toFixed(2);
  total_cost_element_in_modal.textContent = carrito.total_price.toFixed(2)

}

function incrementarCantidades(name_product) {

  carrito.agregar_producto(name_product);
  document.getElementById("amount_product_in_menu_" + name_product).innerText = carrito["productos"][name_product].amount_x_product;
  document.getElementById(name_product + "_subtotal_producto").innerText = (carrito["productos"][name_product].subtotal).toFixed(2);
  document.getElementById("subtotal_cantidad_en_el_carro_" + name_product).innerText = carrito["productos"][name_product].amount_x_product;
  document.getElementById("cantidad_producto_en_el_modal_" + name_product).innerText = carrito.productos[name_product].amount_x_product;
  document.getElementById("subtotal_cost_for_" + name_product).innerText = (carrito.productos[name_product].subtotal).toFixed(2);
  total_cost_element_in_modal.innerText = carrito.total_price.toFixed(2);
  total_cost_carrito.innerText = (carrito.total_price).toFixed(2);

}

function decrementarProductos(name_product) {

  let producto_en_el_carro_ = document.getElementById(`producto_en_el_carrito_${name_product}`);
  console.log({ producto_en_el_carro_ });

  let subtotal_producto_en_carrito = document.getElementById(name_product + "_subtotal_producto");
  let cantidad_producto_in_menu = document.getElementById(`amount_product_in_menu_${name_product}`);
  let cantidad_producto_en_carrito = document.getElementById("subtotal_cantidad_en_el_carro_" + name_product);

  let producto_en_el_modal = document.getElementById(name_product + "_element_in_modal")
  let subtotal_producto_en_modal = document.getElementById("subtotal_cost_for_" + name_product);
  let cantidad_producto_en_modal = document.getElementById("cantidad_producto_en_el_modal_" + name_product);

  carrito.sacar_producto(name_product);
  cantidad_producto_in_menu.textContent = carrito.productos[name_product]["amount_x_product"];
  subtotal_producto_en_carrito.textContent = carrito.productos[name_product]["subtotal"].toFixed(2);
  subtotal_producto_en_modal.textContent = carrito.productos[name_product]["subtotal"].toFixed(2);
  total_cost_carrito.innerText = carrito.total_price.toFixed(2);
  cantidad_producto_en_carrito.innerText = carrito.productos[name_product].amount_x_product;
  cantidad_producto_en_modal.innerText = carrito.productos[name_product].amount_x_product;

  if (carrito.productos[name_product]["amount_x_product"] == 0) {

    delete carrito.productos[name_product];
    document.getElementById(`img_product_${name_product}`).classList.remove("border", "border-danger", "border-2", "border-md-4", "border-lg-2");
    document.getElementById(`addToCar_${name_product}`).classList.remove("d-none");
    document.getElementById(`cantidad_bottons_${name_product}`).classList.add("d-none");
    console.log("type of", typeof producto_en_el_carro_);
    console.log(producto_en_el_carro_);

    container_for_products_in_car.removeChild(producto_en_el_carro_);
    box_for_products_and_cost_modal.removeChild(producto_en_el_modal);
  }

  if (carrito.total_amount_products == 0) {
    car_without_products.classList.remove("d-none");
    car_with_products.classList.add("d-none");
  }

  total_units.textContent = carrito["total_amount_products"];
  total_cost_carrito.textContent = carrito.total_price.toFixed(2);
  total_cost_element_in_modal.textContent = carrito.total_price.toFixed(2);


}


function reset() {

  let arregloArticulosSeleccionados = Object.keys(carrito.productos);

  for (let index = 2; index < arregloArticulosSeleccionados.length; index++) {

    sacarDelCarro(arregloArticulosSeleccionados[index]);

  }

  carrito["total_amount_products"] = 0;
  carrito["total_price"] = 0;
  myModal.hide();

}


