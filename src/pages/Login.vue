<template>
  <q-layout>
    <div class="box-logo shadow-3">
      <img src="../assets/logo.png" height="100vh" width="140vw">
    </div>
    <div class="form">
      <q-input color="white" v-model="identificador" type="text" float-label="Usuário" :before="[{icon: 'mail', handler () {}}]"/>
      <q-input color="white" v-model="senha" type="password" float-label="Senha" :before="[{icon: 'lock', handler () {}}]"/>
      <q-btn class="btn" @click="login()">Entrar</q-btn>
      <div class="password text-center">
        <q-btn flat color="white">Esqueceu sua senha?</q-btn>
      </div>
      <q-layout-footer class="footer text-center no-shadow">
        <span>Não possui cadastro ainda? <a style="color:orange" href="/register">Registre-se</a> </span>
      </q-layout-footer>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      identificador: '',
      senha: ''
    }
  },
  methods: {
    login () {
      let json = {
        identificador: this.identificador,
        senha: this.senha
      }
      this.$store.dispatch('login', json)
    }
  },
  created () {
    window.localStorage.clear('token')
  },
  computed: {
    getLogin () {
      return this.$store.getters.getLogin
    }
  }
}
</script>

<style>
body{
  background: linear-gradient(120deg, #8fc9e4 0%, #7199da 100%)
}
.box-logo{
  padding-top: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3vh;
  background: white;
}
.form{
  margin: 7vh 10vw 3vw 10vw;
}
.btn{
  margin-top: 3vh;
  background-color: #4481e4;
  color: white;
  width: 100%;
}
.password{
  margin-top: 2vh;
}
.footer{
  color: white;
  margin-bottom: 2vh;
}
.q-if-label, .q-if-addon, .q-if-control {
  color: white;
}
</style>
