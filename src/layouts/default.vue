<template>
  <div>
   <router-view/>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          <v-icon color="black">update</v-icon>&nbsp;
          Notice</v-card-title>

        <v-card-text>
         Nouvelle mise à jour disponible . <br>
         (30sec)
         
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
<v-btn
          dark
            color="black darken-1"
            
    text
            @click="dialog = false"
          >
            Annuler
          </v-btn>
          <v-btn
            color="primary darken-1"
            dark
            @click="update"
          >
            Mettre à jour
          </v-btn>

          
        </v-card-actions>
      </v-card>
    </v-dialog>

    <VFooter v-if="isOffline" fixed>
      <div class="pa-3 font-weight-thin">
      <v-icon >mdi-wifi</v-icon>  Oops ! problème de connection
      </div>
    </VFooter>
  </div>
</template>


<script>
export default {
  data(){
    return{
      dialog:false
    }
  },
  mounted(){
     this.$on('offline', () => {
            this.$vs.loading.close()
            this.$Message.warning(`Oops ! erreur connection`)
        })

     this.$on('online', () => {
            this.$vs.loading.close()
            this.$Message.success(`Connexion rétablie`)
        })
    console.log(this.$store.state.app.update)
    if(this.$store.state.app.update){
      console.log('update in App')
       this.dialog=true
    }
    
  },
    computed:{
      updateApp(){
        return this.$store.state.app.update
      }

  },
  watch:{
    updateApp(e){
      console.log('App new version ',e)
      this.dialog=true
    }
  },
  methods:{
    update(){
      window.location.reload()
    }
  }
}
</script>