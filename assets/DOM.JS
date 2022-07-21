const $addTask = document.querySelectorAll(".container__add-task");

const $cancelTask = document.getElementById("btnCancelnewtask");

let selectorAddtask = ".container__add-task";

 /* btn añadir targetas funcionalidad */

document.addEventListener("click", (e)=> {//todo: esta linea es para seleccionar todo el selector de css e.target.matches(`${selectorAddtask} *`) en caso de no ponerla no funcionara si se le da click al icono dentro del boton solo si se le da click a el boton como tal, con esta linea habilitados la funcion a todo lo que este dentro de ese selector
  function showForm(){
    document.getElementById("newTaskModal").classList.toggle('show-lateral');
  }
  if (e.target.matches(`${selectorAddtask} *`)) {
    showForm();
  }

  if (e.target === $cancelTask) {
    showForm();
  }

});

/* cerrar btn añadir targetas funcionalidad */


/* funcionalidad arrastrar y soltar tareas en las columnas */

const prueba = document.querySelectorAll("container__columns");

new Sortable(toDo, {
  group: 'shared', // set both lists to same group
  animation: 150
});

new Sortable(inProgress, {
  group: 'shared',
  animation: 150
});

new Sortable(completed, {
  group: 'shared',
  animation: 150
});

/* cerrar funcionalidad arrastrar y soltar tareas en las columnas */