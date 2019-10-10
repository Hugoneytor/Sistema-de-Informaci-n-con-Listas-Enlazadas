import Articulo from "./articulo.js";
import Tabla from "./tabla.js";

class Main{
    constructor(){
        let tabla = new Tabla(
            document.querySelector("#tablaArt"),
            document.querySelector("#info")
        );
        
    document.querySelector("#btnAgregar").addEventListener("click",()=>{

        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let precio = Number(document.querySelector("#precio").value);
        let cantidad = document.querySelector("#cantidad").value;
        let descripcion = document.querySelector("#descripcion").value;
        let toString = document.querySelector("#toString");
        
        let objArticulo = {
            codigo: codigo,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            descripcion: descripcion
        };

        let articulo = new Articulo(objArticulo);
        
            tabla.AgregarProducto(articulo);
            tabla.AgregarEnTabla(articulo);
            
            
       
   


        toString.textContent = articulo.toString();
        
    });
    
    }
}

var m = new Main()