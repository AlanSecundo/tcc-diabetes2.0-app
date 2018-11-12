<template>
<div>
  <d-header :nameScreen="name"  v-on:upSize="fontFunction"/>
  <div class="text-center" style="margin-top: 5%;">
    <q-icon name="fa fa-user-edit" size="60px" color="blue"/>
    <h4 style="margin-top: 3%;"><b>Editar usuário</b></h4>
  </div>
  <div style="padding: 0 6%;">
    <q-input v-model="getUsuario.nomeCompleto" float-label="Nome:"/>
    <q-input v-model="getUsuario.cep" float-label="CEP:"/>
    <q-input v-model="getUsuario.cidade" float-label="Cidade"/>
    <q-input v-model="getUsuario.estado" float-label="Paraná"/>
    <q-input v-model="getUsuario.peso" float-label="Peso"/>
    <q-input v-model="getUsuario.altura" float-label="Altura"/>
    <q-input v-model="getUsuario.telefone" float-label="Telefone"/>
  </div>
</div>
</template>

<script>
import dHeader from '../components/Header.vue'

export default {
  components: {
    'd-header': dHeader
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
