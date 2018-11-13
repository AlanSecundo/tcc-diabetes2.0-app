import axios from '../../plugins/axios'
import { Loading, Notify } from 'quasar'

/*eslint-disable */
export default {
  state: {
    usuario: {}
  },
  actions: {
    putUsuario ({ dispatch }, json) {
      axios.put('/api/usuario', {
        altura : json.altura,
        cep : json.cep,
        cidade : json.cidade,
        email : json.email,
        estado : json.estado,
        id : {
          value : json.id.value
        },
        nascimento : json.nascimento,
        nomeCompleto : json.nomeCompleto,
        nomeUsuario : json.nomeUsuario,
        peso : json.peso,
        senha : json.senha,
        sexo : json.sexo,
        telefone : json.telefone
      })
      .then(res => {
        Notify.create({
          message: 'Usuário cadastrado com sucesso!',
          type: 'positive',
          position: 'top'
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    getUsuario ({ commit }) {
      axios.get('/api/usuario')
      .then(res => {
        commit('setUsuario', res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    postUsuario ({ dispatch }, json) {
      Loading.show()
      axios.post('/api/usuario', {
         altura : json.altura,
         cep : json.cep,
         cidade : json.cidade,
         email : json.email,
         estado : json.estado,
         nascimento : json.dataNascimento,
         nomeCompleto : json.nome,
         nomeUsuario : json.nomeUsuario,
         peso : json.peso,
         senha : json.senha,
         sexo : json.sexo,
         telefone : json.telefone
      })
        .then(res => {
          Notify.create({
            message: 'Usuário cadastrado com sucesso!',
            type: 'positive',
            position: 'top'
          })
          this.$router.push('/')
          Loading.hide()

        })
        .catch(err => {
          Loading.hide()
          console.log(err)
        })
    }
  },
  mutations: {
    setUsuario (state, data) {
      state.usuario = data
    }
  },
  getters: {
    getUsuario: (state) => {
      return state.usuario
    }
  }
}
