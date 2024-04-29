<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model"> </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./Profile/EditProfileForm";
import UserCard from "./Profile/UserCard";
export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  data() {
    return {
      model: {
        company: "Creative Code Inc.",
        email: "max@hotmail.com",
        username: "max",
        firstName: "Maximiliano",
        lastName: "",
        address: "Salamanca gto",
        city: "Salamanca",
        country: "Mexico",
        about:
          "Dessarrollador principiante",
      },
      user: {
        fullName: "Maximiliano",
        title: "Ceo/Co-Founder",
        description: `Plataforma gestor de proyectos en remoto`,
      },
    };
  },
};
</script>
<style></style>
