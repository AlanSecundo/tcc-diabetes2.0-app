import axios from '../../plugins/axios'
import { Loading, Notify } from 'quasar'

/*eslint-disable */
export default {
  state: {
    consulta: []
  },
  actions: {
    postConsulta ({dispatch}, json) {
      let horario = json.data.split('T')[1].split('Z')[0]
      console.log(horario)
      Loading.show()
      axios.post('/consulta', {
        data: json.data,
        horario: horario,
        local: json.local,
        medico: json.medico,
        motivo: json.nome
      })
      .then(res => {
        Notify.create({
          message: 'Consulta cadastrada com sucesso!',
          type: 'positive',
          position: 'top'
        })
        dispatch('getConsultas')
        Loading.hide()
      })
      .catch(err => {
        console.log(err)
        Notify.create({
          message: 'Houve um erro ao cadastras sua consulta',
          type: 'negative',
          position: 'top'
        })
        Loading.hide()
      })
    },
    getConsultas ({commit}) {
      axios.get('/consulta')
      .then(res => {
        commit('setConsulta', res.data)
      })
      .catch (err => {
        console.log(err)
        Notify.create({
          message: 'Houve um erro ao buscar suas consultas',
          type: 'negative',
          position: 'top'
        })
      })
    }
  },
  mutations: {
    setConsulta (state, data) {
      state.consulta = data.map(element => ({
        ...element,
        inicio: element.data.split('T')[0].split('-').reverse().join('/'),
        tipo: 'Consulta',
        hora: element.data.substring(11,16)
      }))
    }
  },
  getters: {
    getConsultas: (state) => {
      return state.consulta
    }
  }
}
