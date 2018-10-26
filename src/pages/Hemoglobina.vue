<template>
  <div class="main">
    <d-header :nameScreen="name"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Últimas taxas de hemoglobina glicada</span>
      </div>
      <div>
        <GChart type="LineChart" :data="chartData" :options="chartOptions"/>
      </div>
      <div>
        <span> <b>Última medição:</b> {{getHemoglobina[getHemoglobina.length - 1].dataUltimaMedicao.split('T')[0].split('-').reverse().join('/')}}</span>
      </div>
      <div class="flex-row">
        <q-icon size="6vw" name="notification_important" />
        <span style="margin-left: 2vw;"></span>
      </div>
    </q-card>
    <q-btn round color="blue-8" class="fixed" @click="modal = true" icon="add" style="right: 18px; bottom: 18px;"/>

    <q-modal v-model="modal">
        <div class="modal-header">
          <span>Cadastrar Hemoglobina</span>
        </div>
        <div style="padding: 5%;">
          <q-input v-model="objetoHemoglobina.valor" float-label="Valor da hemoglobina"/>
          <q-datetime v-model="objetoHemoglobina.dataUltimaMedicao" float-label="Data da medição" format="MM/DD/YYYY"/>
          <div class="row buttons" style="padding-top: 10%">
            <div class="col-6">
              <q-btn color="orange" flat @click="modal = false" label="Fechar"/>
            </div>
            <div class="col-6" style="text-align: right;">
              <q-btn label="Cadastrar" color="orange" @click="postHemoglobina()"/>
            </div>
          </div>
        </div>
      </q-modal>
    <div v-for="hemoglobina in getHemoglobina" :key="hemoglobina.id.value">
    </div>
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
      modal: false,
      name: 'Hemoglobina glicada',
      dataUltimaMedicao: '',
      chartData: [
        ['Mês', 'Hemoglobina'],
        ['Janeiro', 0],
        ['Fevereiro', 0],
        ['Março', 0]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      },
      objetoHemoglobina: {
        valor: '',
        dataUltimaMedicao: ''
      }
    }
  },
  created () {
    this.$store.dispatch('getHemoglobina')
    this.tratarDados()
  },
  computed: {
    getHemoglobina () {
      return this.$store.getters.getHemoglobinas
    }
  },
  methods: {
    postHemoglobina () {
      this.$store.dispatch('postHemoglobina', this.objetoHemoglobina)
      this.modal = false
    },
    tratarDados () {
      this.dataUltimaMedicao = this.getHemoglobina.dataUltimaMedicao
      let tamanho = this.getHemoglobina.length
      console.log(tamanho)
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
