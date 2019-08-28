<template>
    <div class="animated fadeIn">
        <v-app-bar flat>
            <v-btn to="/out"  fab text color="orange" small="">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </v-app-bar>
        <br>
        <div class="pa-2">
            <span>
                <img style="width:15%" src="/img/logo.png" alt="">
            </span>
            <h2 class="uk-h3">Créer un compte jeune</h2>
           <div>
               <VTextField
                       clear-icon="mdi-close-circle"
                       clearable
                v-model="jeuneUser.nom"
                    
                       outlined
                       label="Nom"
                       placeholder="Nom Complet"
                       />
                        <VTextField
                        v-model="jeuneUser.email"
                       outlined
                       clearable
                        clear-icon="mdi-close-circle"
                       placeholder="Entrer votre adresse e-mail"
                       label="Adresse E-mail"/>
                        <VTextField
                    clear-icon="mdi-close-circle"
                       outlined
                       placeholder="Entrer votre mot de passe"
                       clearable
                        v-model="jeuneUser.password"
                       type="password"
                       label="Mot de passe"/>
                       <br>
                       <v-btn dark @click="registerJeune" rounded color="orange" block="" large="">
                        <v-icon>mdi-plus</v-icon> &nbsp;CONFIRMER
                       </v-btn>
           </div>
        </div>

    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            jeuneUser:{
                nom:'',
                email:'',
                password:'',
            }
        }
    },
    

    methods:{
        registerJeune(){
          console.log(this.jeuneUser)
    if(this.jeuneUser.nom=="" || this.jeuneUser.email=="" || this.jeuneUser.password=="")
{
    return this.$Message.error('Renseigner les champs correctement')
    return false
}
            this.$vs.loading({color:'green',background:'white'})
            this.$apollo.mutate({
                mutation:require('../../graphql/inscription.graphql'),
                variables:{
                    jeune:this.jeuneUser
                }
            }).then(res=>{
                console.log(res)
                var user=res.data.createJeune.jeune
                 this.$store.commit('session_start',user)
                this.$router.replace('/apps')
                 setTimeout(()=>{
                     this.$vs.loading.close()
                     this.$Message.success(`Bienvenue ${this.$store.state.user.nom}`)
                     
                 },300)
            }).catch(err=>{
                 this.$vs.loading.close()
                console.log(err)
                err=err+""
                if(err.match(/(duplicate)/)){
                    
                    this.$Message.error(`Adresse E-mail existe`)
                } else {
                    this.$Message.warning('Service indisponible')
                }
            })
        }
    }
}
</script>