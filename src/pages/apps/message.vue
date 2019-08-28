<template>
    <div>
        <v-app-bar fixed color="primary" flat>
           <v-toolbar-title>
           <v-btn text dark>
                 <v-icon >mdi-message</v-icon> &nbsp; Messages
           </v-btn>
           </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn text @click="$router.back()" fab small  dark>
         <v-icon fab>
            mdi-arrow-left
            </v-icon>
    </v-btn>
        </v-app-bar>
        <br>
        <div class="pt-10 pa-1">

          <div v-if="!isfetch">
               <div v-for="message in messages" :key="message.id">
              <div class="uk-text-left pa-5 uk-card uk-card-large uk-card-default uk-card-body">
                <h3 class="uk-text-left uk-h4">
                    {{message.titre}}
                </h3>
                <p class="uk-text-left">
                    {{message.contenu}}
                </p>
                <span>
                     {{message.updatedAt | moment("from", "now")}}
                </span>
            </div>

           </div>
            
          </div>
            <div v-if="isfetch">
                
                <van-skeleton title avatar :row="6" />
            </div>
        </div>
    </div>
</template>


<script>
export default {
    layout:'barApps',
    data(){
        return{
            isfetch:false,
            messages:[]
        }
    },
    apollo:{
        messages:{
            query:require('../../graphql/notification.graphql'),
            update(data){
            //console.log(data.notifications)
            return data.notifications
        },
           watchLoading (isLoading, countModifier) {

      this.isfetch=isLoading
   
           
  },
        },
        
    }
    
}
</script>