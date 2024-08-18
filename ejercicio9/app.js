const { ref, computed, createApp } = Vue;

const app = createApp({
  setup() {
    const firstName = ref(''); // Estado reactivo para el nombre
    const lastName = ref('');  // Estado reactivo para el apellido

    // Propiedad computada para obtener el nombre completo
    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`.trim();
    });

    return {
      firstName,
      lastName,
      fullName
    };
  }
});

app.mount('#app');

