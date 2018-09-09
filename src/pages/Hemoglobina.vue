<template>
  <div class="main">
    <d-header :nameScreen="name"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Média da hemoglobina glicada</span>
      </div>
      <div>
        <GChart type="LineChart" :data="chartData" :options="chartOptions"/>
      </div>
      <div>
        <span> <b>Última medição:</b> 08/08/2018</span>
      </div>
      <div class="flex-row">
        <q-icon size="6vw" name="notification_important" />
        <span style="margin-left: 2vw;">60 dias para próxima medição</span>
      </div>
    </q-card>
    <q-btn round color="blue-8" class="fixed" icon="add" style="right: 18px; bottom: 18px;"/>
  </div>
</template>

<script>
import dHeader from '../components/Header.vue'
import { GChart } from 'vue-google-charts'

export default {
  components: {
    'd-header': dHeader,
    GChart
  },
  data () {
    return {
      name: 'Hemoglobina glicada',
      chartData: [
        ['Mês', 'Sales'],
        ['Janeiro', 150],
        ['Fevereiro', 100],
        ['Março', 200]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      }
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
  background-color: white;
  padding: 1vh 0vw 3vh 8vw;
}
.header-card{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3vh 5vw 3vh 5vw;
}
.flex-row{
  display: flex;
  flex-direction: row;
  margin-top: 3vh;
}
</style>
