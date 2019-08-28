<template>
    <div>
          <v-app-bar  fixed="" color="primary" top  flat >
          
          
        <v-btn @click="$router.back()" text fab dark  small>
             <v-icon size="30" >mdi-arrow-left</v-icon>
        </v-btn>

    <v-spacer></v-spacer>
  
&nbsp;
    <v-btn @click="logOut" color="orange" fab small>
        <v-icon>mdi-power</v-icon>
    </v-btn>
</v-app-bar>

<br>
<div class="pt-12">
    <v-tabs
    
        color="primary"
    
        grow
        slider-color="primary"
    >
        <v-tab ripple>
          <v-icon>mdi-account-circle</v-icon>   &nbsp;MON COMPTE
        </v-tab>
         <v-tab ripple>
        <v-icon>mdi-menu</v-icon> Application
        </v-tab>
        
        <v-tab-item>
            <v-card flat>
               <compte></compte>
            </v-card>
        </v-tab-item>
         <v-tab-item>
            <v-card flat>
               <app></app>
            </v-card>
        </v-tab-item>
    </v-tabs>
</div>
    </div>
</template>


<script>
import compte from '@/components/compte'
import app from '@/components/application'
import { setTimeout } from 'timers';
export default {
    layout:'barApps',
    components:{app,compte},
    methods:{
        logOut(){
            this.$Plugins.FacebookLogin.logout();
            this.$store.commit('session_logout')
            this.$vs.loading({color:'green'})
            setTimeout(()=>{
this.$router.replace('/')
this.$vs.loading.close()

            },1700)
        }
    }
}
</script>