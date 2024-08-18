const { ref, createApp } = Vue;

const app = createApp({
  setup() {
    const num1 = ref(0);  // Variable reactiva para el primer número
    const num2 = ref(0);  // Variable reactiva para el segundo número
    const result = ref(0); // Variable reactiva para almacenar el resultado

    const calculate = (operation) => {
      switch (operation) {
        case 'sum':
          result.value = num1.value + num2.value;
          break;
        case 'subtract':
          result.value = num1.value - num2.value;
          break;
        case 'multiply':
          result.value = num1.value * num2.value;
          break;
        case 'divide':
          if (num2.value !== 0) {
            result.value = num1.value / num2.value;
          } else {
            alert("No se puede dividir por cero.");
          }
          break;
      }
    };

    return {
      num1,
      num2,
      result,
      calculate
    };
  }
});

app.mount('#app');
