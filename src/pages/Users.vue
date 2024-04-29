<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.UserID">
        {{ usuario.UserName }} - {{ usuario.UserEmail }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      usuarios: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/usuarios')
      .then(response => {
        this.usuarios = response.data;
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
      });
  }
};
</script>

<style>
/* Estilos para tu componente si es necesario */
</style>
