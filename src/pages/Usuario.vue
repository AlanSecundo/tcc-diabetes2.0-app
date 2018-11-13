<template>
<div v-bind:style="{fontSize: size + '%' }">
  <d-header :nameScreen="name"  v-on:upSize="fontFunction"/>
  <div class="text-center" style="margin-top: 5%;">
    <q-icon name="fa fa-user-edit" size="60px" color="blue"/>
    <h4 style="margin-top: 3%;" v-bind:style="{fontSize: size + '%' }"><b>Editar usuário</b></h4>
  </div>
  <div style="padding: 0 6%;">
    <q-input v-model="getUsuario.nomeCompleto" float-label="Nome:"/>
    <q-input v-model="getUsuario.cep" float-label="CEP:"/>
    <q-input v-model="getUsuario.cidade" float-label="Cidade"/>
    <q-input v-model="getUsuario.estado" float-label="Paraná"/>
    <q-input v-model="getUsuario.peso" float-label="Peso"/>
    <q-input type="number" v-model="getUsuario.altura" float-label="Altura"/>
    <q-input v-model="getUsuario.telefone" float-label="Telefone"/>
    <br>
    <q-btn color="secondary" style="width: 100%; margin-bottom: 5%;" @click="putUsuario()">Alterar</q-btn>
  </div>
</div>
</template>

<script>
import dHeader from '../components/Header.vue'

export default {
  components: {
    'd-header': dHeader
  },
  data () {
    return {
      size: 100,
      name: 'Perfil'
    }
  },
  methods: {
    putUsuario () {
      this.$store.dispatch('putUsuario', this.getUsuario)
    },
    fontFunction () {
      if (this.size === 100) {
        this.size = 110
      } else if (this.size === 110) {
        this.size = 120
      } else if (this.size === 120) {
        this.size = 100
      }
    }
  },
  computed: {
    getUsuario () {
      return this.$store.getters.getUsuario
    }
  },
  created () {
    this.$store.dispatch('getUsuario')
  }
}
</script>

<style scoped>

</style>
