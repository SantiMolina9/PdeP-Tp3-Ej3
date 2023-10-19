const Tarea = require("./Tarea");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Aplicacion(){
    this.tareas = [];
}

Aplicacion.prototype.startApp = function(){
    this.showMainMenu();
}
//Menu Principal
Aplicacion.prototype.showMainMenu = function () {
    console.log("Bienvenido al Menú principal \n");
    console.log("1- Para ver tareas");
    console.log("2- Para crear tarea");
    console.log("3- Para modificar tareas");
    console.log("4- Para borrar tareas");
    console.log("5- Salir");
    rl.question("Ingrese una opción: ", (option) => {
    switch (option) {
        case "1":
            this.showMenuTasks();
            break;
        case "2":
            this.createTask();
            break;
        case "3":
            this.modifyTask();
            break;
        case "4":
            this.deleteTask();
            break;
        case "5":
            rl.close(); 
            break;
        default:
            console.log("Opción no válida. Por favor, elija una opción válida.");
            this.showMainMenu(); // Volver al menú principal
            break;
        }
    });
};

//Crea las tareas y las inserta en el array
Aplicacion.prototype.createTask = function () {
    console.clear();
    rl.question("Ingrese el título de la nueva tarea: ", (titulo) => {
        rl.question("Ingrese la descripción de la tarea: ", (descripcion) => {
            let estado = "pendiente"; 
            rl.question("Ingrese la dificultad de la tarea (facil, intermedio, dificil): ", (dificultad) => {
                const newTask = new Tarea(titulo, descripcion, estado, dificultad);
                this.tareas.push(newTask); // Inserto la nueva tarea en el array
                console.log("Tarea creada exitosamente.");
                this.showMainMenu(); // Volver al menú principal
            });
        });
    });
};

//Modifica los atributos de a uno.
Aplicacion.prototype.modifyTask = function () {
    console.clear();

    this.tareas.forEach((tarea, index) => { //Vuelvo a mostrar todas las tareas con su indice
        console.log(`Tarea ${index + 1}:`);
        tarea.mostrarInfo();
        console.log('----------------------');
        });

    rl.question("Ingrese el número de la tarea que desea modificar: ", (nroTarea) => {
        const taskIndex = parseInt(nroTarea) - 1;
        if (taskIndex >= 0 && taskIndex < this.tareas.length) { //Verifico que el numero elegido por el usuario sea valido
        const taskToModify = this.tareas[taskIndex]; 
        console.log(`Tarea seleccionada: ${taskToModify.titulo}`);
        console.log("¿Qué atributo desea modificar?");
        console.log("1- Título");
        console.log("2- Descripción");
        console.log("3- Estado");
        console.log("4- Dificultad");

        rl.question("Ingrese una opción: ", (opAtributo) => {
            switch (opAtributo) {
            case "1":
                rl.question("Ingrese el nuevo título: ", (nuevoTitulo) => {
                taskToModify.titulo = nuevoTitulo;
                console.log("Título modificado exitosamente.");
                this.showMainMenu();
            });
                break;
            case "2":
                rl.question("Ingrese la nueva descripción: ", (nuevaDescripcion) => {
                taskToModify.descripcion = nuevaDescripcion;
                console.log("Descripción modificada exitosamente.");
                this.showMainMenu();
            });
                break;
            case "3":
                rl.question("Ingrese el nuevo estado (Pendiente, En curso, Terminado, Cancelado): ", (nuevoEstado) => {
                nuevoEstado = nuevoEstado.toLowerCase();
                if (["pendiente", "en curso", "terminado", "cancelado"].includes(nuevoEstado)) {
                    taskToModify.estado = nuevoEstado;
                    console.log("Estado modificado exitosamente.");
                } else {
                    console.log("Estado no válido. No se realizó ninguna modificación.");
                }
                this.showMainMenu();
            });
                break;
            case "4":
                rl.question("Ingrese la nueva dificultad (facil, intermedio, dificil): ", (nuevaDificultad) => {
                nuevaDificultad = nuevaDificultad.toLowerCase();
                if (["facil", "intermedio", "dificil"].includes(nuevaDificultad)) {
                    taskToModify.dificultad = nuevaDificultad;
                    console.log("Dificultad modificada exitosamente.");
                } else {
                    console.log("Dificultad no válida. No se realizó ninguna modificación.");
                }
                this.showMainMenu();
            });
                break;
            default:
                console.log("Opción no válida. No se realizó ninguna modificación.");
                this.showMainMenu();
                break;
            }
        });
        } else {
        console.log("El Numero de tarea no es valido. No se realizó ninguna modificación.");
        this.showMainMenu();
        }
    });
};



Aplicacion.prototype.showAllTasks = function () { //Muestro todas las tareas en el array
    this.tareas.forEach((tarea, index) => {
    console.log(`Tarea ${index + 1}:`);
    tarea.mostrarInfo();
    console.log('----------------------');
    });
    this.showMainMenu();
};

Aplicacion.prototype.showPendingTasks = function () { //Muestro las tareas pendientes
    console.log("Tareas Pendientes:");
    this.tareas.forEach((tarea) => {
        if (tarea.estado === 'pendiente') {
        tarea.mostrarInfo();
        console.log('----------------------');
        }
    });
    this.showMainMenu();
};

Aplicacion.prototype.showInProgressTasks = function () { //Muestro las tareas en curso
    console.log("Tareas en Curso:");
    this.tareas.forEach((tarea) => {
        if (tarea.estado === 'en curso') {
        tarea.mostrarInfo();
        console.log('----------------------');
        }
    });
    this.showMainMenu();
};

Aplicacion.prototype.showCompletedTasks = function () { //Muestro las tareas Terminadas
    console.log("Tareas Terminadas:");
    this.tareas.forEach((tarea) => {
        if (tarea.estado === 'terminado') {
        tarea.mostrarInfo();
        console.log('----------------------');
        }
    });
    this.showMainMenu();
};


Aplicacion.prototype.showMenuTasks = function(){
    console.clear();
    console.log("1- Ver todas las tareas")
    console.log("2- Ver tareas pendientes")
    console.log("3- Ver tareas en curso")
    console.log("4- Ver tareas terminadas")
        rl.question("Ingrese una opcion: ", (opTask) => {
        switch(opTask){
            case "1": 
                this.showAllTasks();
                break;
            case "2": 
                this.showPendingTasks();
                break;
            case "3":
                this.showInProgressTasks();
                break;
            case "4": 
                this.showCompletedTasks();
                break;
            default:
                console.log("Opción no válida. Por favor, elija una opción válida.");
                this.showMenuTasks(); // Volver al menú de tareas
                break;
        }
    });
}

Aplicacion.prototype.deleteTask = function () {
    console.clear();

    this.tareas.forEach((tarea, index) => { //Vuelvo a mostrar todas las tareas con su indice
        console.log(`Tarea ${index + 1}:`);
        tarea.mostrarInfo();
        console.log('----------------------');
        });

    rl.question("Ingrese el número de la tarea que desea eliminar: ", (nroTarea) => {
        const taskIndex = parseInt(nroTarea) - 1;

        if (taskIndex >= 0 && taskIndex < this.tareas.length) {
        const taskToDelete = this.tareas[taskIndex];

        console.log(`Tarea seleccionada para eliminar: ${taskToDelete.titulo}`);

        rl.question("¿Está seguro de que desea eliminar esta tarea? (Sí/No): ", (confirmacion) => {
            if (confirmacion.toLowerCase() === "si") {
            
            for (let i = taskIndex; i < this.tareas.length - 1; i++) {
                this.tareas[i] = this.tareas[i + 1];
            }
            this.tareas.pop(); // Elimina el último elemento duplicado

            console.log("Tarea eliminada exitosamente.");
            } else {
            console.log("La tarea no se ha eliminado.");
            }

            this.showMainMenu();
        });
    } else {
        console.log("Número de tarea no válido. No se realizó ninguna eliminación.");
        this.showMainMenu();
        }
    });
};


module.exports = Aplicacion;