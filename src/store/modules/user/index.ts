import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    login: null,
    name: null,
    birthDate: null,
    description: null,
    workplace: null,
    isPremium: false,
    externalLinks: [],
    matches: [],
    photos: [],
  }),
})
