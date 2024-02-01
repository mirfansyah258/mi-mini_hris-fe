<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <v-app>
    <v-navigation-drawer theme="dark" v-if="authenticated">
      <v-list>
        <v-list-item title="HRIS"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Dashboard" value="dashboard" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="About" value="about" to="/about"></v-list-item>
      </v-list>
      
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      authenticated: false, // Set this based on your authentication logic
    };
  },
};
</script>