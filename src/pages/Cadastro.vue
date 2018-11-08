<template>
  <q-layout id="main">
    <div class="box-logo shadow-3">
      <div>
        <q-btn flat style="color: blue;" icon="keyboard_backspace" to="/"/>
      </div>
      <div style="padding-top: 1rem;">
        <img src="../assets/logo.png" height="50vh" width="70vw">
      </div>
      <div>
        <q-btn flat style="color: blue;" icon="keyboard_backspace" to="/"/>
      </div>
    </div>
    <div style="margin-top: 2rem;">
      <q-card class="step">
        <q-stepper class="margin" ref="stepper" contractable color="info" style="background-color: #fdfcfe">
        <q-step default title="Step 1" style="background-color: #fdfcfe">
          <q-input color="info" v-model="nome" float-label="Nome completo"/>
          <q-input color="info" v-model="nomeUsuario" float-label="Nome de usuário"/>
          <q-input color="info" v-model="email" float-label="E-mail"/>
          <q-input color="info" v-model="senha" float-label="Senha" type="password"/>
          <q-input color="info" v-model="confirmaSenha" float-label="Confirme sua senha" type="password"/>
          <q-stepper-navigation class="on-right on-left row justify-around" style="padding-top: 5%">
            <div class="col-6">
              <q-btn label="Cancelar" color="info" flat to="/home" />
            </div>
            <div class="col-6" style="text-align: right;">
              <q-btn label="Continuar" color="info" @click="validarSenha"/>
            </div>
         </q-stepper-navigation>
        </q-step>
        <q-step title="Step 2">
          <div>
            <q-datetime color="info" v-model="dataNascimento" float-label="Data de nascimento" type="date" />
            <q-input color="info" v-model="peso" float-label="Peso" suffix="KG" type="number" />
            <q-input color="info" v-model="altura" float-label="Altura" suffix="Metros" type="number" />
            <q-select color="info" v-model="selectSexo" :options="sexo" float-label="Genêro" />
          </div>
          <q-stepper-navigation class="on-right on-left row justify-around" style="padding-top: 5%">
            <div class="col-6">
              <q-btn label="Voltar" color="info" flat @click="$refs.stepper.previous()"/>
            </div>
            <div class="col-6" style="text-align: right;">
              <q-btn label="Continuar" color="info" @click="$refs.stepper.next()"/>
            </div>
          </q-stepper-navigation>
        </q-step>

        <q-step title="Step 3" subtitle="Review and submit">
          <q-input color="info" v-model="cep" float-label="CEP" />
          <q-input color="info" v-on:keyup="mascaraFone" v-model="telefone" float-label="Telefone" maxlength="15"/>
          <q-input class="input-register " v-model="cidade" float-label="Cidade" />
          <q-input class="input-register " v-model="estado" float-label="Estado" />
          <q-stepper-navigation class="on-right on-left row justify-around">
            <div class="col-6">
                <q-btn label="Voltar" color="info" flat @click="$refs.stepper.previous()"/>
              </div>
              <div class="col-6" style="text-align: right;">
                <q-btn label="Cadastrar" color="info" @click="register()"/>
              </div>
          </q-stepper-navigation>
        </q-step>
        <q-stepper-navigation>
        </q-stepper-navigation>
      </q-stepper>
      </q-card>
    </div>
  </q-layout>
</template>

<script>
/*eslint-disable */
export default {
  data () {
    return {
      nome: '',
      nomeUsuario: '',
      peso: null,
      altura: null,
      selectSexo: '',
      cep: '',
      cidade: '',
      estado: '',
      sexo: [
        {
          label: 'Masculino',
          value: 'Masculino'
        },
        {
          label: 'Feminino',
          value: 'Feminino'
        },
        {
          label: 'Outro',
          value: 'Outro'
        }
      ],
      senha: '',
      confirmaSenha: '',
      email: '',
      sangue: '',
      telefone: '',
      dataNascimento: ''
    }
  },
  methods: {
    mascaraFone () {
      let value = this.telefone
      value = value.replace(/\D/g, '')
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
      value = value.replace(/(\d)(\d{4})$/, '$1-$2')
      this.telefone = value
    },
    validarSenha () {
      if (this.nomeUsuario.length < 3) {
        this.$q.notify({
          message: 'Nome de usuário inválido, tente novamente por favor!',
          position: 'top',
          color: 'negative'
        })
      } else if (this.email.length < 7) {
        this.$q.notify({
          message: 'E-mail inválido, tente novamente por favor!',
          position: 'top',
          color: 'negative'
        })
      } else if (this.senha.length < 5 || this.senha !== this.confirmaSenha) {
        this.$q.notify({
          message: 'Senha inválida, tente novamente por favor!',
          position: 'top',
          color: 'negative'
        })
      } else {
        this.$refs.stepper.next()
      }
    },
    removeMask () {
      let tel = this.telefone
      tel = parseInt(tel.replace(/[^0-9]+/g, '')).toString()
      return tel
    },
    register () {
      let telefone = this.removeMask()
      let json = {
        cep: this.cep,
        cidade: this.cidade,
        estado: this.estado,
        nome: this.nome,
        nomeUsuario: this.nomeUsuario,
        peso: this.peso,
        altura: this.altura,
        sexo: this.selectSexo,
        senha: this.senha,
        telefone: telefone,
        dataNascimento: this.dataNascimento,
        email: this.email
      }
      this.$store.dispatch('postUsuario', json)
    }
  }
}
</script>


<style scoped>
#main{
  overflow: hidden;
  background: linear-gradient(120deg, #8fc9e4 0%, #7199da 100%)
}
.box-logo{
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.margin {
  margin: 2%;
  height: 90%;
}
</style>
