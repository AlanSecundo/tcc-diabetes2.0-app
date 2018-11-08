<template>
    <div class="header">
      <div>
        <q-btn flat style="color: blue;" icon="keyboard_backspace" to="/home"/>
        <span id="name-header">{{nameScreen}}</span>
      </div>
      <q-btn flat style="color: grey;" icon="remove_red_eye"  v-on:click="upSize"/>
    </div>
</template>

<script>
export default {
  props: {
    nameScreen: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    upSize () {
      this.$emit('upSize')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');
.main{
  min-height: 100vh;
  font-family: 'Nunito', sans-serif;
   background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%);
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2vh;
  padding-bottom:2vh;
  background: white;
}
#name-header{
  text-transform: uppercase;
}
</style>
