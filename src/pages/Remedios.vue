<template>
  <div class="main" v-bind:style="{fontSize: size + '%' }">
    <d-header :nameScreen="name"  v-on:upSize="fontFunction"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Remédios</span>
      </div>
      <div class="timeline">
        <q-timeline responsive color="secondary">
          <!-- <q-timeline-entry v-for="x in 3" :key="x" title="Remédio: Paracetamol" subtitle="Ínicio em 02/08/2018" side="left">
            <div>
              <span> <b>Dose:</b> 1 comprimido de 12 em 12 horas.</span>
              <br>
              <br>
              <span><b>Composição:</b> ácido esteárico, amido, crospovidona, povidona, estearato de magnésio, hipromelose, macrogol</span>
            </div>
          </q-timeline-entry> -->
          <q-timeline-entry v-for="remedio in getRemedios" :key="remedio.nome" :title="remedio.nome" :subtitle="'Início em ' + remedio.inicio" side="left">
            <div class="row">
              <span> <b>Dose:</b> De {{remedio.periodicidade}} em {{remedio.periodicidade}} horas.</span>
              </div>
              <div class="row">
              <span><b>Composição:</b> {{remedio.composicao}}</span>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-card>
    <q-btn round  color="blue-8" class="fixed" icon="add" style="right: 18px; bottom: 18px;" @click="open = true"/>
    <q-modal v-model="open">
      <div class="row" style="padding: 0.7rem 0; background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%);">
        <div class="col-8">
          <q-btn flat icon="keyboard_arrow_left" label="Fechar" @click="zerarModal()"/>
        </div>
        <div class="col-4 text-right">
          <q-btn flat label="salvar" @click="postRemedio"/>
        </div>
      </div>
        <div style="padding: 1.4rem;">
          <q-input float-label="Nome" v-model="nome" />
          <q-select color="info" v-model="periodicidade" :options="valores" float-label="De quanto em quanto tempo?" />
          <q-input float-label="Composição" v-model="composicao"/>
          <q-datetime v-model="dataInicio" type="datetime" float-label="Data e horário da primeira dose" format="DD/MM/YYYY MM:SS"/>
          <q-datetime v-model="dataFim" type="date" float-label="Data da última dose" format="DD/MM/YYYY"/>
          <q-input float-label="Lembretes sobre a medicação" v-model="lembrete"/>
        </div>
    </q-modal>
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
      name: 'Remédios',
      size: 100,
      nome: '',
      open: false,
      composicao: '',
      dataFim: '',
      dataInicio: '',
      select: '',
      lembrete: '',
      periodicidade: null,
      valores: [
        {
          value: 4,
          label: '4 em 4 horas'
        },
        {
          value: 8,
          label: '8 em 8 horas'
        },
        {
          value: 12,
          label: '12 em 12 horas'
        },
        {
          value: 24,
          label: '1 vez por dia'
        }
      ]
    }
  },
  computed: {
    getRemedios () {
      return this.$store.getters.getRemedios
    }
  },
  created () {
    this.$store.dispatch('getRemedios')
  },
  methods: {
    zerarModal () {
      this.open = false
    },
    fontFunction () {
      if (this.size === 100) {
        this.size = 110
      } else if (this.size === 110) {
        this.size = 120
      } else if (this.size === 120) {
        this.size = 100
      }
    },
    createMedicine () {
      cordova.plugins.notification.local.schedule({
        title: 'Design team meeting',
        trigger: { in: 10, unit: 'second' }
      })
    },
    postRemedio () {
      let json = {
        composicao: this.composicao,
        dataFim: this.dataFim,
        dataInicio: this.dataInicio,
        nome: this.nome,
        periodicidade: this.periodicidade,
        descricao: this.lembrete
      }
      this.$store.dispatch('postRemedio', json)
      this.zerarModal()
      this.criarAlarmeCordova()
    },
    criarAlarmeCordova () {
      let data = this.formatarData()
      let nomeRemedio = this.nome
      let proximoDespertador = this.periodicidade
      let id = 1
      // this.alarmeId = id
      cordova.plugins.notification.local.schedule({
        id: id,
        title: `Hora de tomar o ${nomeRemedio}`,
        vibrate: true,
        sound: 'file://statics/alarm.mp3',
        trigger: { at: data },
        actions: [
        { id: 'yes', title: 'Tomado' },
        { id: 'no',  title: '+5 minutos' }
    ]
      })
      cordova.plugins.notification.local.on('yes', function (notification, eopts) {
        // this.$store.dispatch('postAlarmeTomado', this.alarmeId)
        cordova.plugins.notification.local.schedule({
          id: id,
          title: `Hora de tomar o ${nomeRemedio}`,
          vibrate: true,
          sound: 'file://statics/alarm.mp3',
          trigger: { in: proximoDespertador, unit: 'hour' },
          actions: [
          { id: 'yes', title: 'Tomado' },
          { id: 'no',  title: '+5 minutos' }
          ]
        })
      })
      cordova.plugins.notification.local.on('no', function (notification, eopts) {
        cordova.plugins.notification.local.schedule({
          id: id,
          title: `Hora de tomar o ${nomeRemedio}`,
          vibrate: true,
          sound: 'file://statics/alarm.mp3',
          trigger: { in: 5, unit: 'minutes' },
          actions: [
          { id: 'yes', title: 'Tomado' },
          { id: 'no',  title: '+5 minutos' }
          ]
        })
      })
    },
    formatarData () {
      let dataCompleta = new Date(this.dataInicio)
      let mes = this.dataInicio.split('-')
      let dia = mes[2].substring(0, 2)
      mes = parseInt(mes[1]) - 1
      dia = parseInt(dia)
      let dataFormatada = new Date(dataCompleta.getFullYear(), mes, dia, dataCompleta.getHours(), dataCompleta.getMinutes(), 10)
      return dataFormatada
    }
  }
}
</script>

<style scoped>
.main{
  height: auto;
  padding-bottom: 5%;
  background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%);
  font-size: 100%;
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
.timeline{
  margin-left: 5vw;
  margin-right: 5vw;
}
.button{
  margin-top: 2vh;
}
.padding{
  padding: 1rem;
}
.space-between{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
}
#filter{
  height: 7vh;
}
#title{
  font-size: 140%;
  text-transform: uppercase;
}
</style>
