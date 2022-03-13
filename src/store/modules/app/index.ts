import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state() {
    return {
      login: null,
      theme: 'default',
      isDark: false,
    }
  },
})
