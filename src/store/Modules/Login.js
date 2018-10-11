import axios from '../../plugins/axios'
import { Loading, Notify } from 'quasar'

export default {
  state: {
    token: ''
  },
  actions: {
    login ({ dispatch, commit }, json) {
      axios.post('/api/login', {
        identificador: json.identificador,
        senha: json.senha
      })
        .then(res => {
          window.localStorage.setItem('token', res.data)
          axios.defaults.headers.common['token'] = res.data
          commit('setToken', res.data)
          this.$router.push('/')
        }).catch(err => {
          console.log(err)
          Notify.create({
            message: err.response.data.error,
            type: 'negative',
            position: 'top'
          })
          Loading.hide()
        })
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = ''
      state.token = token
    }
  },
  getters: {
    getToken: (state) => {
      return state.token
    }
  }
}
