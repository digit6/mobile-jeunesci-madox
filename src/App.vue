<template>
  <div id="app">
   <v-app>
     <v-content>
        <v-container class="pa-0" fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
     </v-content>
   </v-app>
  </div>
</template>


<script>
import { setTimeout } from 'timers';
export default {
  mounted(){
    
    setTimeout(()=>{
      this.$SplashScreen.hide()
    },2000)
    console.log('Splash creen hided')
  },
  
}
</script>

<style>
@import url('./assets/app.css');
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
