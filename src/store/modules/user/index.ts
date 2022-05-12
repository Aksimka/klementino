import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    login: null,
    isPremium: false,
    profileInfo: {
      userId: 0,
      name: 'Aksimka',
      birthDate: '1997-08-05',
      isOnline: false,
      business: 'Frontend developer',
      about: 'I give you site, you give me pussy',
      interests: ['beer', 'diving', 'sport'],
      images: [
        'images/dg.png',
        'images/6.jpeg',
        'images/3.jpeg',
        'images/4.jpg',
      ],
    },
  }),
})
