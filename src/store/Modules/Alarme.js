// import axios from '../../plugins/axios'
// import { Loading, Notify } from 'quasar'

export default {
  state: {
    alarmes: []
  },
  actions: {
    getAlarmes ({getters}) {
      console.log(getters.getConsultas)
      console.log(getters.getAlarmes)
    }
  },
  mutations: {
    // setToken (state, token) {
    //   state.token = ''
    //   state.token = token
    // }
  },
  getters: {
    // getToken: (state) => {
    //   return state.token
    // }
  }
}
