import axios from '../../plugins/axios'
import { Notify } from 'quasar'

export default {
  state: {
    hemoglobinas: []
  },
  actions: {
    getHemoglobina ({ commit }, page) {
      axios.get('/glicose')
        .then(res => {
          commit('setHemoglobina', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postHemoglobina ({dispatch}, json) {
      console.log(json)
      axios.post('/glicose', {
        dataUltimaMedicao: json.dataUltimaMedicao,
        nome: 0,
        valor: json.valor
      })
        .then(res => {
          console.log(res)
          Notify.create({
            message: 'Hemoglobina cadastrada com sucesso!',
            position: 'top',
            color: 'positive'
          })
        })
        .catch(err => {
          console.log(err)
          Notify.create({
            message: 'Ops, correu um erro!',
            position: 'top',
            color: 'negative'
          })
        })
    }
  },
  mutations: {
    setHemoglobina (state, data) {
      state.hemoglobinas = data
    }
  },
  getters: {
    getHemoglobinas: (state) => {
      return state.hemoglobinas
    }
  }
}
