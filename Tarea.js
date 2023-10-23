const console = require("console");

function Tarea(titulo, descripcion, estado, dificultad, fechaVencimiento){ //
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._estado = estado;
        this._dificultad = dificultad;
        this._fechaCreacion = new Date;
        this._fechaVencimiento = fechaVencimiento;
}

Tarea.prototype.setDescripcion = function(descripcion){
    this._descripcion = descripcion;
}

Tarea.prototype.getDescripcion = function(){
    return this._descripcion;
}   

Tarea.prototype.setTitulo = function(titulo){
    this._titulo = titulo;
}

Tarea.prototype.getTitulo = function(){
    return this._titulo;
}

Tarea.prototype.setDificultad = function(dificultad){
    if (["facil", "intermedio", "dificil"].includes(dificultad)) {
        this._dificultad = dificultad;
    } else {
        console.log("Dificultad no válida. No se pudo insertar, por defecto: Facil");
        this._dificultad = "facil";
    }
    
}

Tarea.prototype.getDificultad = function(){
    return this._dificultad;
}

Tarea.prototype.setEstado = function(nuevoEstado){
    if (["pendiente", "en curso", "terminado", "cancelado"].includes(nuevoEstado)) {
        this._estado = nuevoEstado;
    } else {
        console.log("Estado no válido. No se realizó ninguna modificación.");
    }
}

Tarea.prototype.getEstado = function(){
    return this._estado;
}

Tarea.prototype.getFechaCreacion = function(){
    return this._fechaCreacion;
}

Tarea.prototype.setFechaVencimiento = function(fechaVencimiento){
    this._fechaVencimiento = fechaVencimiento
}

Tarea.prototype.getFechaVencimiento = function(){
    return this._fechaVencimiento;
}

Tarea.prototype.mostrarInfo = function () { //Muestro la informacion de cada tarea
        console.log(`Título: ${this.getTitulo()}`);
        console.log(`Descripción: ${this.getDescripcion()}`);
        console.log(`Estado: ${this.getEstado()}`);
        console.log(`Dificultad: ${this.getDificultad()}`);
        console.log(`Fecha de Creacion: ${this.getFechaCreacion()}`)
        console.log(`Fecha de Vencimiento: ${this.getFechaVencimiento()}`)
}

module.exports = Tarea;