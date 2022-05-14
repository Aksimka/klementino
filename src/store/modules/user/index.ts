import { defineStore } from 'pinia'
import { Profile } from '@/types'

type UserState = {
  login: string
  isPremium: boolean
  profileInfo: Profile
}

const useUserStore = defineStore<string, UserState>('user', {
  state: () => ({
    login: 'aksimka97',
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

export default useUserStore
