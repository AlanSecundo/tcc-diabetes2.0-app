import axios from '../../plugins/axios'
import { Loading, Notify } from 'quasar'

/*eslint-disable */
export default {
  state: {
    remedios: []
  },
  actions: {
    postRemedio ({dispatch}, json) {
      Loading.show()
      axios.post('/remedio', {
         composicao : json.composicao,
         data :  '2018-10-25T06:50:17.042Z',
         dataFim : json.dataFim,
         dataInicio : json.dataInicio,
         descricao: json.descricao,
         horario: 'nulo',
         nome : json.nome,
         periodicidade: json.periodicidade
      })
      .then(res => {
        console.log(res)
        Notify.create({
          message: 'Remédio cadastrado com sucesso!',
          type: 'positive',
          position: 'top'
        })
        dispatch('getRemedios')
        Loading.hide()
      })
      .catch(err => {
        console.log(err)
        Notify.create({
          message: 'Houve um erro ao cadastrar seu remédio',
          type: 'negative',
          position: 'top'
        })
        Loading.hide()
      })
    },
    getRemedios ({commit}) {
      axios.get('/remedio')
      .then(res => {
        console.log(res)
        commit('setRemedios', res.data)
      })
      .catch (err => {
        console.log(err)
        Notify.create({
          message: 'Houve um erro ao buscar seu histórico de remédios',
          type: 'negative',
          position: 'top'
        })
      })
    }
  },
  mutations: {
    setRemedios (state, data) {
      state.remedios = data.map(element => ({
        ...element,
        inicio: element.dataInicio.split('T')[0].split('-').reverse().join('/'),
        tipo: 'Remedio',
        hora: element.dataInicio.substring(11,16)
    }))
    }
  },
  getters: {
    getRemedios: (state) => {
      return state.remedios
    }
  }
}
