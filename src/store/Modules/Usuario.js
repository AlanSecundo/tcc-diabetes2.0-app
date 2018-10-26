import axios from '../../plugins/axios'
import { Loading, Notify } from 'quasar'

/*eslint-disable */
export default {
  actions: {
    postUsuario ({ dispatch }, json) {
      Loading.show()
      console.log(json)
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
          this.$router.push('/login')
          Loading.hide()

        })
        .catch(err => {
          Loading.hide()
          console.log(err)
        })
    }
  },
  mutations: {
  },
  getters: {
  }
}
