const { ref, reactive, createApp } = Vue;

const app = createApp({
  setup() {
    const newTask = ref(''); // Variable reactiva para la nueva tarea
    const tasks = reactive([]); // Array reactivo para la lista de tareas

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.push(newTask.value);
        newTask.value = ''; // Limpiar el input después de agregar la tarea
      }
    };

    const removeTask = (index) => {
      tasks.splice(index, 1); // Elimina la tarea de la lista
    };

    return {
      newTask,
      tasks,
      addTask,
      removeTask
    };
  }
});

app.mount('#app');
