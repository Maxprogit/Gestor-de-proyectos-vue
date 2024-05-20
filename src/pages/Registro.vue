
<template>
  <!-- some code condensed for display reasons -->
    <FormulateForm
      v-model="values"
      @submit="handleRegistration"
    >
      <h2>Create a new Account</h2>
      <FormulateInput
        type="text"
        name="name"
        label="Full name"
        validation="required"
        />
      <FormulateInput
        type="text"
        name="email"
        label="Email address"
        validation="required|email"
        />
      <FormulateInput
        type="password"
        name="password"
        label="Password"
        validation="required"
      />
      <FormulateInput
        name="terms"
        type="checkbox"
        label="I accept, just don't make me read the terms."
        validation="accepted"
      />
      <FormulateInput
        type="submit"
        label="Register" />
      <pre>{{ values }}</pre>
    </FormulateForm>
</template>
<!-- Despues de que se registre el usuario establecer unas preguntas que sean, --* esto debe aparecer despues de el registro ¿Y ahora que hacemos? <-- titulo ,
    *botones ¿Quieres iniciar sesion?,  y demas que respondan cosas como entremos, o porque no, la idea es cuestionar el porque con respuestas graciosas -->
<script>
import axios from 'axios'
export default {
  data () {
    return {
      values: {}
    }
  },
  methods: {
    async handleRegistration() {
      try {
        // Realiza una solicitud POST con los datos del formulario
        const response = await axios.post('http://localhost:3000/api/registro', this.values);
        alert('Registro exitoso');
        console.log(response.data); //Muestra la respuesta del back en la consola
      } catch (error) {
        console.error('Error al registra el usuario', error);
        alert('Error al registrar el usuario')
      }
    }
  }
}
</script>

<style scoped>
   h2 {
    text-align: center;
  }
</style>
