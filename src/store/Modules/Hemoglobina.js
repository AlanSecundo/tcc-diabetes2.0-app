import axios from '../../plugins/axios'
import { date, Notify } from 'quasar'

export default {
  state: {
    glicoses: []
  },
  actions: {
    getGlicose ({ commit }, page) {
      axios.get('/glicose')
        .then(res => {
          console.log(res.data)
          commit('setGlicose', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postGlicose ({dispatch}, json) {
      axios.post('/glicose', {
        dataUltimaMedicao: json.dataUltimaMedicao,
        valor: json.valor
      })
        .then(res => {
          console.log(res)
          dispatch('getGlicose')
          Notify.create({
            message: 'Hemoglobina cadastrada com sucesso!',
            position: 'top',
            color: 'positive'
          })
          this.$router.push('/home')
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
    setGlicose (state, data) {
      state.glicoses = data
      state.glicoses.forEach(item => {
        let dataFormatada = date.formatDate(item.dataUltimaMedicao, 'YYYY-MM-DD')
        let arrayData = dataFormatada.split('-', 3)
        item.dataUltimaMedicao = arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0]
      })
    }
  },
  getters: {
    getGlicoses: (state) => {
      return state.glicoses
    }
  }
}
