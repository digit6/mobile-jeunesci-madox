<template>
    <div class="pt-2">
        

        <div class="pa-4">
       <div class="animated fadeIn" v-if="!editpass">
           <VTextField
                 
                  flat
                outlined
                readonly
                background-color="white"
                 :placeholder="$store.state.user.nom"
                 
                 label="Nom"/>
       

                   <VTextField
                 
                flat
                
                background-color="white"
                
                 outlined
                 readonly
                 :placeholder="$store.state.user.email"
                 
                 label="Adresse E-mail"/>
                  <VTextField
                 
                flat
                
                background-color="white"
                
                 outlined
                 v-model="user.contact"
                
                 :placeholder="$store.state.user.contact"
                 
                 label="Contact / Téléphone"/>

       </div>
                
         <div class="animated fadeIn">
                 

  <VTextField v-if="editpass && $store.state.user.auth!=='facebook'"
                 
                flat
                
                background-color="white"
                
                 outlined
                 type="password"
               
                 v-model="user.password"
                 label="Nouveau mot de passe"/>
                 <VBtnToggle v-if="$store.state.user.auth!=='facebook'" mandatory v-model="value">
                 
                   <VBtn v-if="!editpass" @click="editpass=true" text value="edit">
                   <v-icon color="primary">edit</v-icon>  Modifider mot de passe
                   </VBtn>
                   <VBtn v-if="editpass" dark @click="editpass=false" color="orange" value="annuler">
                    <v-icon color="white">close</v-icon> Annuler 
                   </VBtn>
                 </VBtnToggle>
         </div>
                 <br><br>
                 <v-btn id="primary--color" @click="openDialog"  large color="primary"> &nbsp;
                     <v-icon>save</v-icon> Sauvegarder 
                 </v-btn>
                 
        </div>

        <div>
          
        </div>

  <v-dialog
      v-model="dialog"
      
    >
      <v-card>
        <v-card-title class="headline">
          <v-icon>mdi-shield</v-icon> Sécurité
        </v-card-title>

        <v-card-text class="subtitle-3">
       

        </v-card-text>
              <div class="pa-3">
                <v-text-field
                name="name"
                outlined=""
                v-model="user.password_tmp"
                type="password"
                label="Mot de passe actuel"
                
              ></v-text-field>
              </div>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn id="secondary--color"
            color="orange darken-1"
            @click="dialog = false"
          >
            Annuler
          </v-btn>

          <v-btn id="primary--color"
            color="primary"
            dark
            @click="update"
          >
            Confirmer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    </div>
</template>


<script>
export default {
  data(){
    return{
      dialog:false,
      value:'edit',
      editpass:false,
      
      user_tmp:this.$store.state.user,
      user:{
        contact :'',
        password:'',
        password_tmp:''
      }
    }
  },
  mounted(){
    console.log(this.$store.state.user)
    this.user.contact=this.$store.state.user.contact
  },

  computed:{
    contact(){
      return this.$store.state.user.contact
    }
  },
  watch:{
    contact(e){
      this.user.contact=e
    }
  },

 methods:{
   openDialog(){
     if(this.$store.state.user.auth=='facebook'){
      return this.update()
     }
     this.dialog=true
   },
    update(){
     
      if(this.editpass){
        if(this.user.password!=="") return false
         if( this.user.password_tmp!==this.$store.state.user.password) return this.$Message.error('Mot de passe incorrect')
        
        this.$vs.loading({color:'green',background:'white'})
         this.$apollo.mutate({
        mutation:require('../graphql/updatePassword.graphql'),
        variables:{
          id:this.$store.state.user.id,
          password:this.user.password

        }
    }).then((res)=>{
    var user =res.data.updateJeune.jeune
    this.$store.commit('session_start',user)
    this.dialog=false
     this.$vs.loading.close()
     this.$Message.success('Mot de passe modifié')
     this.user.password_tmp==""
    }).catch(err=>{
      console.log('err =>',err)
      this.$vs.loading.close()
      this.dialog=false
       this.user.password_tmp==""
      this.$Message.error('Service indisponible')
    })

      } else {

        if(this.user.contact!==""){
         if(this.$store.state.user.auth=='facebook') {

         } else {
             if( this.user.password_tmp!==this.$store.state.user.password) return this.$Message.error('Mot de passe incorrect')
         }
        
          this.$apollo.mutate({
            mutation:require('../graphql/updateContact.graphql'),
            variables:{
              id:this.$store.state.user.id,
              contact:this.user.contact
            }
          }).then(res=>{
            console.log(res)
            var user =res.data.updateJeune.jeune
    this.$store.commit('session_start',user)
    this.dialog=false
    this.$Message.success('Contact modifié')
 this.user.password_tmp==""
          }).catch(err=>{
            console.log('err',err)
             this.dialog=false
            this.$Message.error('Service Indisponible')
             this.user.password_tmp==""
          })
        }

        
      }

     
   
  }
 }
}
</script>