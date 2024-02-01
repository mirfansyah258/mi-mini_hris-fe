import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from "@/utils/api";

export const useAuthStore = defineStore('auth', {
  state: () => ({
  }),
  getters: {},
  actions: {
    async login(credential) {
      http.post('/auth/login', credential)
        .then(r => {
          console.log('success', r);
        })
        .catch(e => {
          console.error('error', e);
        })
    }
  }
})
