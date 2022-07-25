/* funcionalidad arrastrar y soltar tareas en las columnas */

const prueba = document.querySelectorAll("container__columns");

new Sortable(todoTasks, {
  group: 'shared', // set both lists to same group
  animation: 150
});

new Sortable(progressTasks, {
  group: 'shared',
  animation: 150
});

new Sortable(doneTasks, {
  group: 'shared',
  animation: 150
});

/* cerrar funcionalidad arrastrar y soltar tareas en las columnas */