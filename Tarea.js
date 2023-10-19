const console = require("console");

function Tarea(titulo, descripcion, estado, dificultad, fechaVencimiento){ //
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.dificultad = dificultad;
        this.fechaCreacion = new Date;
        this.fechaVencimiento = fechaVencimiento;
}

Tarea.prototype.mostrarInfo = function () { //Muestro la informacion de cada tarea
        console.log(`Título: ${this.titulo}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Estado: ${this.estado}`);
        console.log(`Dificultad: ${this.dificultad}`);
        console.log(`Fecha de Creacion: ${this.fechaCreacion}`)
};

module.exports = Tarea;