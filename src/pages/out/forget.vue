<template>
    <div>
<v-app-bar  fixed>
<v-btn id="primary--color" @click="$router.back()" fab text color="white" dark small>
    <v-icon >mdi-arrow-left</v-icon>
</v-btn>
</v-app-bar>
<h1></h1>
<div v-if="!successfully">
    <div class="uk-position-center pa-2">
  <div v-if="!request">
        <p class="uk-h4">Rénitiallisation mot de passe</p>
    <br>
    <VTextField
            outlined
            clearable="" clear-icon="mdi-close-circle"
            label='Adresse E-mail'
            v-model="user.email"
            placeholder="Entrer votre adresse E-mail"
            />

            <v-btn id="primary--color" @click="sendRequest" rounded color="primary" large="">
             <i class="ui icon send"></i>   ENVOYER LA DEMANDE
            </v-btn>
  </div>

  <div v-if="request" class="ui segment basic">
      <div class="font-weight-thin subtitle-4">
           Rénitialisation de votre mot de passe
      </div>
      <br>
      <v-text-field v-model="user.code" clearable="" clear-icon="mdi-close-circle" outlined="" label="CODE" placeholder="Code de rénitialisation"></v-text-field>
      <v-text-field v-model="user.password" type="password" maxlength="10"  prepend-inner-icon="lock" outlined="" label="Mot de passe" placeholder="Nouveau mot de passe"></v-text-field>
   <v-btn id="primary--color" @click="resetPassword" rounded="" color="primary" large block="">
      CONFIRMER
  </v-btn>
<br>
  <v-btn  @click="validRequest" outlined >
   <v-icon>send</v-icon> &nbsp;  Renvoyer le code
  </v-btn>
  </div>

</div>
</div>

<div v-if="successfully">


<div class="uk-position-center">
    <v-icon color="primary" size="60">check_circle</v-icon>
    <div class="pa-4 font-weight-regular">
        Success , votre mot de passe à été mis à jour
    </div>
    <br>
    <v-btn id="primary--color" to="/" color="primary" large dark rounded="" >
    <v-icon>mdi-login</v-icon>   &nbsp; Espace connexion
    </v-btn>
</div>
</div>

    </div>
</template>


<script>
const rand = require("random-key");
export default {
    autoStorage: ["client"],
    data(){
        return{
            users:[],
            request:false,
            successfully:false,
            client:{},
            user:{
                email:'',
                password:'',
                code:''
            }
        }
    },
    mounted(){
      
    },
    apollo:{
        
        users:{
            prefetch:true,
            query:require('../../graphql/listEmail.graphql'),
            update(data){
            return data.jeunes
          }
        },
        
    },
    methods:{

        resetPassword(){
            try{
                if(this.$cookie.get('code')!==this.user.code){
                    return this.$Message.error('Code incorrect')
                }
            } catch(err){

                return false

            }

            this.$vs.loading({color:'green',background:'white'})
            this.$apollo.mutate({
                mutation:require('../../graphql/updatePassword.graphql'),
                variables:{
                    id:this.client.id,
                    password:this.user.password
                }
            }).then(res=>{

                this.$vs.loading.close()
                this.successfully=true

            }).catch(err=>{
                 this.$vs.loading.close()
                this.$Message.error('Service indisponible')
            })

        },
        sendRequest(){
            
            if(this.user.email!==""){
                var exist =false
                var client={}

                this.users.forEach((user,i,array) => {
                    if(user.email ==this.user.email) {
                        client=user
                        exist=true
                    }
                    if(i==array.length-1){
                        
                        if(!exist) return this.$Message.error('Adresse E-mail iconnue')
                        if(client.auth=='facebook') return this.$Message.info('Impossible , Votre compte est associé à facebook')
                        this.client=client
                        this.validRequest()
                  }
                    
                });

               

            }

        },
    validRequest(){
    this.$vs.loading({color:'green',background:'white'})
    this.$cookie.set('code',rand.generateDigits(6))
    Email.send({
    Host : "smtp.sendgrid.net",
    Username : "SMTP USER",
    Password : "SMTP PASS",
    To : this.client.email,
    From : "JeunesCI <no-reply@jeunes.ci>",
    Subject : "Rénitialisation mot de passe",
    Body : `
    Bonjour <b>${this.client.nom}</b> <br><br>
    <div>
    Votre code de rénitialisation est : ${this.$cookie.get('code')}
    </div>
    `
}).then(
  message => {

      
      if(message.match(/(OK|ok)/)){
           this.request=true
            this.$vs.loading.close()
          this.$Message.success('Demande envoyée à votre adresse')
         

      } else {
           this.$vs.loading.close()
           this.$Message.error('Service indisponible')
      }
      
      
  }
).catch(err=>{
     this.$vs.loading
    console.log(err)
})
            
        }


    }
    
}
</script>