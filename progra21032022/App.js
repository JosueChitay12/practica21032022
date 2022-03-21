document
.getElementById("formulario-producto")
.addEventListener("submit", function (elemento){
    
    elemento.preventDefault(); //evalua el comportamiento del elemento

    //Obtener valores del formulario
    const nombre = document.getElementById("name").value,
    precio = document.getElementById("precio"),
    año = document.getElementById("añoo").value;

    //Crear nuevo objeto producto
    const producto = new Producto(nombre, precio,año);

    //Crear nuevo usuario
    const usuario= new Usuario();

    //Boton de validación
    if(nombre == " " || producto == " " || año == " "){
        Usuario.ShowMessage("Por favor inserte nombre de usuario")
    }

    //Guardar producto

    usuario.addProducto(producto);
    usuario.ShowMessage("Producto agregado correctamente");
    usuario.resetForm();
});

document.getElementById("Lista producto").addEventListener("Click", (elemento) => {
    const usuario = new Usuario();
    usuario.deleteProduct(elemento.target);
    elemento.preventDefault();
});

//producto clase
export class Producto{
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}