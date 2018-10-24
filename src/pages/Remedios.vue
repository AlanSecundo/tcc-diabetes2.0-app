<template>
  <div class="main">
    <d-header :nameScreen="name"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Remédios</span>
      </div>
      <div class="timeline">
        <q-timeline responsive color="secondary">
          <q-timeline-entry v-for="x in 3" :key="x" title="Remédio: Paracetamol" subtitle="Ínicio em 02/08/2018" side="left">
            <div>
              <span> <b>Dose:</b> 1 comprimido de 12 em 12 horas.</span>
              <br>
              <br>
              <span><b>Composição:</b> ácido esteárico, amido, crospovidona, povidona, estearato de magnésio, hipromelose, macrogol</span>
              <q-btn class="button">Mais informações</q-btn>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-card>
    <q-btn round color="blue-8" class="fixed" icon="add" style="right: 18px; bottom: 18px;" @click="opened = true"/>
    <q-modal v-model="opened" position="left">
      <div class="padding">
        <div class="text-center">
          <q-icon size="2rem" color="blue" name="local_hospital" />
          <span>Cadastro de remédio</span>
        </div>
        <div>
          <q-input float-label="Nome" v-model="nameMedicine" />
          <q-input float-label="Composição" v-model="composition"/>
          <q-datetime color="purple" v-model="date" type="datetime" float-label="Data da primeira dose" />
          <q-datetime color="purple" v-model="date" type="date" float-label="Último dia do remédio" />
        </div>
        <div class="space-between">
          <q-btn flat color="primary" @click="opened = false" label="Fechar"/>
          <q-btn label="Salvar" color="green" @click="createMedicine"/>
        </div>
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
      name: 'Remédios',
      opened: false,
      nameMedicine: '',
      composition: '',
      date: '',
      select: ''
    }
  },
  methods: {
    createMedicine () {
      cordova.plugins.notification.local.schedule({
        title: 'Design team meeting',
        trigger: { in: 10, unit: 'second' }
      })
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
  font-size: 3vh;
  text-transform: uppercase;
}
</style>
