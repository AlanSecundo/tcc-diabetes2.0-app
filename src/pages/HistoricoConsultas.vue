<template>
  <div class="main" v-bind:style="{fontSize: size + '%' }">
    <d-header :nameScreen="name"  v-on:upSize="fontFunction"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Consultas</span>
      </div>
      <div class="timeline">
        <q-timeline responsive color="secondary">
            <q-timeline-entry v-for="consulta in getConsultas" :key="consulta.id.value" :title=" 'Doutor(a): ' + consulta.medico" :subtitle="'Local: ' + consulta.local + ' no dia ' + consulta.inicio" side="left">
            <div>
              <span>{{consulta.motivo}}</span>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-card>
    <q-btn round color="blue-8" @click="open = true" class="fixed" icon="add" style="right: 18px; bottom: 18px;"/>
    <q-modal v-model="open">
      <div class="row" style="padding: 0.7rem 0; background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%);">
        <div class="col-8">
          <q-btn flat icon="keyboard_arrow_left" label="Fechar" @click="zerarModal()"/>
        </div>
        <div class="col-4 text-right">
          <q-btn flat label="salvar" @click="postConsulta"/>
        </div>
      </div>
      <div style="padding: 1.4rem;">
        <q-datetime v-model="alarme" float-label="Data e horário da Consulta" type="datetime" :before="[{icon: 'alarm_on', handler () {}}]" format="DD/MM/YYYY MM:SS"/>
        <q-input color="primary" v-model="local" :before="[{icon: 'room', handler () {}}]" float-label="Local"/>
        <q-input color="primary" v-model="medico" :before="[{icon: 'face', handler () {}}]" float-label="Medico"/>
        <q-input color="primary" v-model="nome" :before="[{icon: 'local_hospital', handler () {}}]" float-label="Considerações do médico"/>
      </div>
  </q-modal>
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
      name: 'Histórico de consultas',
      open: false,
      alarme: null,
      local: '',
      medico: '',
      nome: '',
      select: '',
      size: 100,
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
  },
  computed: {
    getConsultas () {
      return this.$store.getters.getConsultas
    }
  },
  created () {
    this.$store.dispatch('getConsultas')
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
    postConsulta () {
      let json = {
        data: this.alarme,
        local: this.local,
        medico: this.medico,
        nome: this.nome
      }
      // this.criarAlarmeCordova()
      this.$store.dispatch('postConsulta', json)
      this.zerarModal()
    },
    zerarModal () {
      this.open = false
      this.alarme = null
      this.local = ''
      this.medico = ''
      this.nome = ''
    },
    criarAlarmeCordova () {
      let data = this.formatarData()
      let msg = 'Consulta com o Dr(a).' + this.medico
      let id = 1
      // this.alarmeId = id
      cordova.plugins.notification.local.schedule({
        id: id,
        title: msg,
        vibrate: true,
        sound: 'file://statics/alarm.mp3',
        trigger: { at: data }
      })
    },
    formatarData () {
      let dataCompleta = new Date(this.alarme)
      let mes = this.alarme.split('-')
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
.timeline{
  margin-left: 5vw;
  margin-right: 5vw;
}
.button{
  margin-top: 2vh;
}
#filter{
  height: 7vh;
}
#title{
  font-size: 3vh;
  text-transform: uppercase;
}
</style>
