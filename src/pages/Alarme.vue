<template>
  <div class="main">
    <d-header :nameScreen="name"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Alarmes</span>
        <q-select id="filter" inverted v-model="select" float-label="Filtro" radio :options="selectOptions"/>
      </div>
      <div class="alarm" v-for="x in 8" :key="x">
        <div class="alarm-left">
          <q-icon name="access_alarm" size="10vw" color="grey" style="margin-right: 8px;" />
          <span class="hour"> <b> 14:00 </b></span>
        </div>
        <div class="alarm-right">
          <span class="info-span"> <b>Consulta</b> </span>
          <q-btn class="alarm-color" round inverted color="green"></q-btn>
        </div>
      </div>
    </q-card>
    <q-btn round color="blue-8" class="fixed" icon="add" style="right: 18px; bottom: 18px;"/>
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
      name: 'Alarmes',
      select: '',
      selectOptions: [
        {
          label: 'Todas',
          value: 'goog'
        },
        {
          label: 'Mês',
          value: 'fb'
        }
      ]
    }
  }
}
</script>

<style scoped>
.main{
  height: auto;
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
  font-size: 4vh;
  color: #a3a5a8;
}
.info-span{
  color: #a3a5a8;
  margin-right: 2vw;
}
.alarm{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
#filter{
  height: 7vh;
}
</style>
