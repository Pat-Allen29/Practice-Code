<template>
  <div id="app">
    <h1>hello from vue</h1>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="username" label="Username">
      </v-text-field>
      <v-text-field v-model="password" label="Password" type="password"></v-text-field>
      <v-btn type="submit" class="login-btn" elevation="0" color="primary" dark>Login</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'App',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  computed: {
    ...mapGetters(["USER_DETAILS"]),
  },
  methods: {
    submit() {
      const payload = {
        username: this.username,
        password: this.password,
      };
      console.log(this.USER_DETAILS)
      this.$store.commit('USER_DETAILS',payload)
      console.log(this.USER_DETAILS)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
