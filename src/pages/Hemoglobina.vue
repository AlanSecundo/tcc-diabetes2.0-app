<template>
  <div class="main" v-bind:style="{fontSize: size + '%' }">
    <d-header :nameScreen="name"  v-on:upSize="fontFunction"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Média da hemoglobina glicada</span>
      </div>
      <div>
        <GChart v-if="haveData" type="LineChart" :data="chartData" :options="chartOptions"/>
      </div>
      <div>
        <span> <b>Última medição:</b> {{maiorData}}</span>
      </div>
      <div class="flex-row">
        <!-- <q-icon size="6vw" name="notification_important" />
        <span style="margin-left: 2vw;">60 dias para próxima medição</span> -->
      </div>
    </q-card>
    <q-btn round color="blue-8" class="fixed" @click="modal = true" icon="add" style="right: 18px; bottom: 18px;"/>

    <q-modal v-model="modal" minimized>
        <div class="modal-header">
          <span>Cadastrar Hemoglobina</span>
        </div>
        <div style="padding: 5%;">
          <q-input v-model="objetoHemoglobina.valor" float-label="Valor da hemoglobina"/>
          <q-datetime v-model="objetoHemoglobina.dataUltimaMedicao" float-label="Data da medição" format="DD/MM/YYYY"/>
          <div class="row buttons" style="padding-top: 10%">
            <div class="col-6">
              <q-btn color="orange" flat @click="modal = false" label="Fechar"/>
            </div>
            <div class="col-6" style="text-align: right;">
              <q-btn label="Cadastrar" color="orange" @click="postGlicose()"/>
            </div>
          </div>
        </div>
      </q-modal>
  </div>
</template>

<script>
/*eslint-disable */
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
      size: 100,
      maiorData: '',
      haveData: false,
      chartData: [],
      chartOptions: {
        chart: {
          title: 'Glicose'
        }
      },
      objetoHemoglobina: {
        valor: '',
        dataUltimaMedicao: ''
      }
    }
  },
  watch: {
    haveData: function (haveData) {
    }
  },
  created () {
    this.$store.dispatch('getGlicose')
    this.tratarDados()
  },
  computed: {
    getGlicose () {
      // eslint
      if (this.$store.getters.getGlicoses.length > 0){
        this.haveData = true
      }
      return this.$store.getters.getGlicoses
    }
  },
  methods: {
    fontFunction () {
      if (this.size === 100) {
        this.size = 110
      } else if (this.size === 110) {
        this.size = 120
      } else if (this.size === 120) {
        this.size = 100
      }
    },
    postGlicose () {
      this.$store.dispatch('postGlicose', this.objetoHemoglobina)
      this.modal = false
    },
    tratarDados () {
      let tamanho = this.getGlicose.length
      this.maiorData = this.getGlicose[tamanho - 1].dataUltimaMedicao
      let array = []
      array.push(['Data', 'Valor'])
      this.getGlicose.forEach(function (value) {
        array.push([value.dataUltimaMedicao, value.valor])
      })
      this.chartData = array
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
