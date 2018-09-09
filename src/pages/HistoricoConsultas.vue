<template>
  <div class="main">
    <d-header :nameScreen="name"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Consultas</span>
        <q-select id="filter" inverted v-model="select" float-label="Filtro" radio :options="selectOptions"/>
      </div>
      <div class="timeline">
        <q-timeline responsive color="secondary">
          <q-timeline-entry title="28 de Agosto de 2018" subtitle="Consulta" side="left">
            <div>
              <span>Glicemia em nível normal, foi ressaltado que o paciente deve cuidar do colesterol também.</span>
              <q-btn class="button">Mais informações</q-btn>
            </div>
          </q-timeline-entry>
          <q-timeline-entry title="28 de Agosto de 2018" subtitle="Consulta" side="left">
            <div>
              <span>Glicemia em nível normal, foi ressaltado que o paciente deve cuidar do colesterol também.</span>
              <q-btn class="button">Mais informações</q-btn>
            </div>
          </q-timeline-entry>
          <q-timeline-entry title="28 de Agosto de 2018" subtitle="Consulta" side="left">
            <div>
              <span>Glicemia em nível normal, foi ressaltado que o paciente deve cuidar do colesterol também.</span>
              <q-btn class="button">Mais informações</q-btn>
            </div>
          </q-timeline-entry>
        </q-timeline>
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
      name: 'Histórico de consultas',
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
