<template>
  <q-layout class="main">
    <div class="header">
      <q-btn flat style="color: grey;" icon="view_headline" @click="drawer = !drawer"/>
      <q-btn flat style="color: grey;" icon="remove_red_eye"/>
    </div>
    <div class="box-logo">
      <img src="../assets/logo.png" height="100vh" width="140vw">
    </div>
    <div class="text-center title">
      <span>Informações gerais</span>
    </div>
    <div style="margin-left: 5vw; margin-right: 5vw; margin-top: 2vh; opacity: 0.9;">
      <div class="box-info row text-center">
        <div class="box-box col-6 bg-deep-purple-12">
          <span class="box-title"> Última média da hemoglobina glicada</span>
          <h3><b>7,33%</b></h3>
        </div>
        <div class="box-box col-6 bg-indigo-12">
          <span class="box-title">Próxima consulta</span>
          <span style="margin-top: 4vh;">Segunda-feira</span>
          <h3 style="margin-top:0;"> <b> 10/09 </b></h3>
        </div>
      </div>
      <div class="box-info row text-center">
        <div class="box-box col-6 bg-indigo-12">
          <span class="box-title">Remédio diário</span>
          <h4> <b>2 restantes </b></h4>
        </div>
        <div class="box-box col-6 bg-deep-purple-12">
          <span class="box-title">Dica do dia</span>
          <span id="dica"><b>Diga não ao sedentarismo</b></span>
          <q-btn flat>Saiba mais</q-btn>
        </div>
      </div>
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
        <q-btn to="/login">Sair</q-btn>
      </q-layout-drawer>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
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
   /* background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%); */
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.box-logo{
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
  display: flex;
  flex-direction: row;
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
