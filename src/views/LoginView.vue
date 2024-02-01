<style>
  .login-bg {
    /* width: 100%; */
    height: 100%;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  }
</style>
<template>
  <v-row align="center" justify="center">
    <v-card :min-width="375" variant="elevated">
      <v-form validate-on="submit lazy" @submit.prevent="handleSubmit">
        <v-card-item>
          <v-card-title class="mb-3">Login</v-card-title>
          <v-text-field label="Username" v-model="username"></v-text-field>
          <v-text-field label="Password" type="password" v-model="password"></v-text-field>
        </v-card-item>
        <v-card-actions>
          <v-btn
            block
            variant="outlined"
            type="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-row>
</template>
<script>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

export default {
  setup() {
    const authStore = useAuthStore()

    const username = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      console.log('data', { 
        username: username.value, 
        password: password.value
      });
      await authStore.login({ 
        username: username.value, 
        password: password.value
      })
    }

    return { authStore, username, password, handleSubmit }
  }
}
</script>