<template>
  <div class="animated fadeIn" >
    
<div>
  <img src="/img/ban.jpg" alt="">
</div>
   <div class="pa-3">
      <v-text-field
      flat=""
      clear-icon="mdi-close-circle"
      clearable=""
      rounded
      name="name"
      solo
      prepend-inner-icon="email"
      background-color="white"
      v-model="user.email"
      label="Adresse E-mail"
      id="id"
    ></v-text-field>
    <v-text-field
      rounded
    
    solo=""
     clear-icon="mdi-close-circle"
      clearable=""
      flat=""
    prepend-inner-icon="lock"
      name="pw"
      color="primary"
    background-color="white"
       v-model="user.password"
      placeholder="Mot de passe"
      type="password"
      maxlength="15"
      @keyup.enter="login"
    ></v-text-field>
  <v-btn id="primary--color" @click="login" rounded block="" large color="primary darken-5">
   <v-icon>mdi-login</v-icon> SE CONNECTER
  </v-btn>
  <br>
  <v-btn large to="/out/forget" text color="primary">
    Mot de passe oublié ?
  </v-btn>
<br>
  <div class="ui divider horizontal">
    <span>Se connecter via</span>
  </div>
<div>
  
  <v-btn  @click="loginFacebook" small="" color="blue" fab dark>
    <v-icon>mdi-facebook</v-icon>
  </v-btn>
</div>
<div class="pt-4">
  <v-btn id="secondary--color" rounded to="/out/register" color="orange"  large dark block="">
   <v-icon>add</v-icon> S'INSCRIRE
  </v-btn>
</div>
    </div>
  </div>
</template>

<script>
import { exists } from 'fs';
export default {
  data(){
    return{
      users:[],
      user :{
        email:'',
        password:'',
        auth:false,
      }

    }
  },
mounted(){


},
  apollo:{
    users :{
      query :require('../../graphql/Users.graphql'),
      update(data){

        console.log('Check users before')
        return data.jeunes
      }
    }
  },

  methods:{

    loginFacebook(){
      
      try{
        const FACEBOOK_PERMISSIONS = ['email'];

 this.$Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS }).then(result=>{



var FB =`https://graph.facebook.com/v4.0/${result.accessToken.userId}?fields=name,email,first_name,last_name,short_name&access_token=${result.accessToken.token}
`
  
 
fetch(FB,{
  headers:{
    "coontent-type":"application/json"
  }
}).then(res=>res.json()).then(profile=>{
  this.$vs.loading({color:'green',background:'white'})
  

  
    if(profile.email){
     
      var exist =false
      var client ={}
      if(this.users.length<1){
          var user ={
                nom :profile.name,
                email:profile.email,
                auth:'facebook'
              }


              this.$apollo.mutate({
                mutation:require('../../graphql/createFacebookUser.graphql'),
                variables:{
                  jeune:user
                }
              }).then(res=>{
               
                var user=res.data.createJeune.jeune
                this.$store.commit('session_start',user)
                this.$router.replace('/apps')
                setTimeout(()=>{
                     this.$vs.loading.close()
                     this.$Message.success(`Bienvenue ${this.$store.state.user.nom}`)
                     
                 },300)
              }).catch(err=>{
               
                   this.$vs.loading.close()
                   this.$Message.error('Service indisponible')
                   
              })
              return false
      }

      this.users.forEach((useri,i,list)=>{
          if(useri.email ==profile.email){
            
            exist =true
            client =useri

          } 

          if(i==list.length-1){

              //alert(exist)

            if(exist){
              // get users

              this.$store.commit('session_start',client)
              this.$router.replace('/apps')
              setTimeout(() => {
                this.$vs.loading.close() 
             }, 1200);


            } else {

              
              // create Users
              var user ={
                nom :profile.name,
                email:profile.email,
                auth:'facebook'
              }


              this.$apollo.mutate({
                mutation:require('../../graphql/createFacebookUser.graphql'),
                variables:{
                  jeune:user
                }
              }).then(res=>{
             //   alert(JSON.stringify(res))
                var user=res.data.createJeune.jeune
                this.$store.commit('session_start',user)
                this.$router.replace('/apps')
                setTimeout(()=>{
                     this.$vs.loading.close()
                     this.$Message.success(`Bienvenue ${this.$store.state.user.nom}`)
                     
                 },300)
              }).catch(err=>{
                //alert(err+"")
                   this.$vs.loading.close()
                   this.$Message.error('Service indisponible')
                   
              })

            }
          }
         

      })

    } else {
     this.$vs.loading.close()
    this.$Message.error(`Echec d'authorization au compte`)
    }


   



   this.$vs.loading.close()
  this.$Plugins.FacebookLogin.logout();
}).catch(err=>{

 this.$vs.loading.close()
  //alert(err)
})


});


      } catch(err){

        console.log(err)

      }


    },

    login(){
    this.$apollo.queries.users.refetch().then()
      this.$vs.loading({color:'green',background:'white'})
       // if(this.user.email=="" || this.user.password=="") return false
        
      var exist = new Promise((resolve,reject)=>{

     return this.users.forEach((user,i,array) => {
       
          if(user.email==this.user.email){
            
               return resolve({status:true,user:user})
          }

          if(i==array.length-1){
            return resolve({status:false}) 
          }
        });

        

      })

      exist.then(e=>{
              if(!e.status){
                 this.$vs.loading.close()
                  this.$Message.error(`Adresse email inconnue`)

              } else {

                    if(e.user.password==this.user.password){

                      this.$store.commit('session_start',e.user)
                      this.$router.replace('/apps')
              setTimeout(() => {
                this.$vs.loading.close()
             }, 1600);

                    } else {
                      this.$vs.loading.close()
                      this.$Message.warning('Mot de passe incorrect')
                    }
              
            
              }
      })
       
       

    },

   

  

  }

}
</script>