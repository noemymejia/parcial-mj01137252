const { ref, createApp } = Vue;

const app = createApp({
  setup() {
    const inputValue = ref(''); // Variable reactiva para almacenar el valor del input

    const showAlert = () => {
      alert(inputValue.value); // Muestra el valor del input en una alerta
    };

    return {
      inputValue,
      showAlert
    };
  }
});

app.mount('#app');
