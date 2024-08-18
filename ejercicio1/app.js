const { createApp, reactive } = Vue;

createApp({
    setup() {
        const estado = reactive({
            mensaje: '¡Bienvenido a mi aplicación Vue.js!'
        });

        return {
            estado
        };
    }
}).mount('#app');