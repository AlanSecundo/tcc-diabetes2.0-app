<template>
  <div class="main">
    <d-header :nameScreen="name"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Alarmes</span>
        <q-select id="filter" inverted v-model="select" float-label="Filtro" radio :options="selectOptions"/>
      </div>
      <div class="alarm" v-for="alarme in getAlarmes" :key="alarme.id.value">
        <div class="text-center" style="width: 100%;">
          <div class="flex-row">
            <span style="color: #a3a5a8;" >Data: {{alarme.inicio}}</span>
            <span v-if="alarme.tipo === 'Consulta'" style="color: #a3a5a8; margin-right: 1rem;">DR: {{alarme.medico}}</span>
            <span v-else style="color: #a3a5a8; margin-right: 1rem;">REM: {{alarme.nome}}</span>
          </div>
        </div>
        <div class="flex-row">
          <div class="alarm-left">
            <q-icon name="access_alarm" size="7vw" color="grey" style="margin-right: 8px;" />
            <span class="hour"> <b> {{alarme.hora}} </b></span>
          </div>
          <div class="alarm-right">
            <span class="info-span"> <b>{{alarme.tipo}}</b> </span>
            <q-btn class="alarm-color" round inverted color="green"></q-btn>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import dHeader from '../components/Header.vue'
/*eslint-disable */

export default {
  components: {
    'd-header': dHeader
  },
  data () {
    return {
      name: 'Alarmes',
      select: '',
      selectOptions: [
        {
          label: 'Consultas',
          value: 'goog'
        },
        {
          label: 'Remédios',
          value: 'fb'
        }
      ],
      alarmes: []
    }
  },
  created () {
    this.$store.dispatch('getConsultas')
    this.$store.dispatch('getRemedios')
  },
  computed: {
    getConsultas () {
      return this.$store.getters.getConsultas
    },
    getRemedios () {
      return this.$store.getters.getRemedios
    },
    getAlarmes () {
      let alarmes = this.getConsultas.concat(this.getRemedios)
      console.log(alarmes)
      return alarmes
    }
  }
}
</script>

<style scoped>
.main{
  height: 100%;
  background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%);
}
.card{
  margin:  3vh 5vw 0 5vw;
  background-color: #fcfafa;
}
.header-card{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3vh 5vw 3vh 5vw;
}
.hour{
  font-size: 3.5vh;
  color: #a3a5a8;
}
.info-span{
  color: #a3a5a8;
  margin-right: 2vw;
}
.alarm{
  border-bottom: 1px solid #cfcdcd;
  margin-right: 4vw;
  margin-left: 4vw;
  margin-top: 2vh;
  padding-bottom: 2vh;
  margin-bottom: 3vh;
}
.alarm-color{
  height: 3vh;
  width: 5vw;
}
.alarm-left{
  display: flex;
  align-items: center;
  margin-left: 5vw;
}
.alarm-right{
  display: flex;
  align-items: center;
  margin-right: 5vw;
}
.flex-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2vh;
}
#filter{
  height: 7vh;
}
</style>
