const { ref, watch, createApp } = Vue;

const app = createApp({
  setup() {
    const value = ref(''); // Variable reactiva
    const message = ref(''); // Mensaje reactivo

    // Observa los cambios en la variable "value"
    watch(value, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        message.value = `El valor ha cambiado a: ${newValue}`;
      }
    });

    return {
      value,
      message
    };
  }
});

app.mount('#app');
