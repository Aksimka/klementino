import Vue from 'vue'
import Vuetify, { VTextField, VContainer, VCol, VRow } from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  components: { VTextField, VContainer, VCol, VRow },
});

const opts = {};

export default new Vuetify(opts)