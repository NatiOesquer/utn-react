function mostrarPrecio() {
    let tipoSeguro = document.getElementById("tipoSeguro").value;
    let precioDiv = document.getElementById("precio");

    let precio = 0;
    switch (tipoSeguro) {
        case "basico":
            precio = 500;
            break;
        case "intermedio":
            precio = 1000;
            break;
        case "premium":
            precio = 1500;
            break;
    }

    precioDiv.textContent = "Precio del seguro: $" + precio;
}

