const { ref, createApp } = Vue;

const app = createApp({
  setup() {
    const condition = ref(true); // Estado reactivo para la condición

    const toggleCondition = () => {
      condition.value = !condition.value; // Alterna el valor de la condición
    };

    return {
      condition,
      toggleCondition
    };
  }
});

app.mount('#app');
