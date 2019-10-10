export default class Articulo{
    constructor(articulo){
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre;
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
        this._siguiente = null;
    }
    

   //Lectura de los valores 
    get codigo(){
        return this._codigo;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    get descripcion(){
        return this._descripcion;
    }
    get siguiente(){
        return this._siguiente;
    }
    //Cambio de Valores
    set siguiente(siguiente){
        this._siguiente = siguiente;
    }

    toString(){
        let s = `El artículo ${this._nombre} contiene el código ${this._codigo} y tiene un precio de $${this._precio}`;
        return s
    }
}