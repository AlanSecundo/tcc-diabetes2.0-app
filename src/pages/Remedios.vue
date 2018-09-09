<template>
  <div class="main">
    <d-header :nameScreen="name"/>
    <q-card class="card">
      <div class="header-card">
        <span id="title">Remédios</span>
        <q-select id="filter" inverted v-model="select" float-label="Filtro" radio :options="selectOptions"/>
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
      name: 'Remédios',
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
