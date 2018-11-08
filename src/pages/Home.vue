<template>
<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
  <q-layout  v-bind:style="{fontSize: size + '%' }">
    <div class="header">
      <q-btn flat style="color: grey;" icon="view_headline" @click="drawer = !drawer"/>
      <q-btn flat style="color: grey;" icon="remove_red_eye" @click="fontFunction"/>
    </div>
    <div class="box-logo">
      <img src="../assets/logo.png" height="100vh" width="140vw">
    </div>
    <div class="text-center title">
      <span>Informações gerais</span>
    </div>
    <div>
      <GChart type="LineChart" :data="chartData"/>
    </div>
    <div>
      <q-carousel class="text-center" infinite :autoplay="5000" color="transparent" height="30vh">
      <q-carousel-slide style="font-size: 90%;">
        <p><b>Aprenda sobre a doença</b></p>
        <span>
          É preciso saber que o diabetes não é uma sentença de morte. Pelo contrário! Seguindo as recomendações para deixar os níveis de glicose controlados, a vida continua normalmente.
        </span>
      </q-carousel-slide>
      <q-carousel-slide style="font-size: 90%;">
        <p><b>Diga não ao sedentarismo!</b></p>
        <span>
          A atividade física é essencial no tratamento do diabetes para manter os níveis de açúcar no sangue controlados. A prática deve ser realizadas de três a cinco vezes na semana.
        </span>
      </q-carousel-slide>
      <q-carousel-slide style="font-size: 90%;">
        <p><b>Aprenda sobre a doença</b></p>
        <span>
          É preciso saber que o diabetes não é uma sentença de morte. Pelo contrário! Seguindo as recomendações para deixar os níveis de glicose controlados, a vida continua normalmente.
        </span>
      </q-carousel-slide>
    </q-carousel>
    </div>
      <q-layout-footer class="footer no-shadow text-center" >
        <div class="row">
          <div class="col-3 box bg-blue-4" @click="$router.push('/alarmes')">
            <q-icon name="alarm_on" />
            <span class="box-span">Alarmes</span>
          </div>
          <div class="col-3 box bg-deep-purple-12" @click="$router.push('/consultas')">
            <q-icon name="calendar_today" />
            <span class="box-span">Consultas</span>
          </div>
          <div class="col-3 box bg-indigo-12" @click="$router.push('/remedios')">
            <q-icon name="local_hospital" />
            <span class="box-span">Remédios</span>
          </div>
          <div class="col-3 box bg-deep-purple-6" @click="$router.push('/hemoglobina')">
            <q-icon name="control_point" />
            <span class="box-span">Hemoglob.</span>
          </div>
        </div>
      </q-layout-footer>
      <q-layout-drawer v-model="drawer" side="left">
        <q-btn to="/" @click="window.localStorage.clear('token')">Sair</q-btn>
      </q-layout-drawer>
  </q-layout>
</transition>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  components: {
    GChart
  },
  data () {
    return {
      drawer: false,
      size: 100,
      chartData: [
        ['Mês', 'Hemoglobina'],
        ['Janeiro', 10],
        ['Fevereiro', 50],
        ['Março', 20]
      ]
    }
  },
  computed: {
    getHemoglobina () {
      return this.$store.getters.getHemoglobinas
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
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');
.main{
  height: 100vh;
  font-family: 'Nunito', sans-serif;
  background: white;
  font-size: 100%;
   /* background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%); */
}
.main1{
  height: 100vh;
  font-size: 120%;
  font-family: 'Nunito', sans-serif;
  background: white;
   /* background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%); */
}
.main2{
  height: 100vh;
  font-family: 'Nunito', sans-serif;
  background: white;
   /* background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%); */
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.box-logo{
  padding-top: 0vh;
  margin: 0vh 5vw 0 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3vh;
  border-bottom: solid 0.5px #cfcfcf;
}
.box-info{
  min-height: 22vh;
}
.title{
  margin-top: 2vh;
  color: #424242;
  text-transform: uppercase;
  font-size: 2.5vh;
}
.footer{
  justify-content: space-between;
  margin: 2vw 2vh 2vw 2vh;
}
.box{
  display: flex;
  flex-direction: column;
  color: white;
  padding: 2vw 2vh 2vw 2vh;
}
.box-span{
  font-size: 2vh;
}
.box-box{
  display: flex;
  flex-direction: column;
}
.flex-row{
  display: flex;
  flex-direction: row;
}
.box-title{
  margin-top: 2vh;
}
#dica{
  margin-top: 2vh;
}
</style>
