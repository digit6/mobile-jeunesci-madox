<template>
<div>
   <v-app-bar height="60" fixed color="primary"  flat="">
    <v-text-field
       hide-details=""
       color="white"
       
       dark
       large
       flat=""
       background-color="primary"
       v-model="search"
    
        solo
        placeholder="Rechercher ...."
        clearable=""
        prepend-inner-icon="search"
        clear-icon="mdi-close-circle"
       
      ></v-text-field>
       <v-spacer></v-spacer> 
       <v-btn @click="$router.back()" color="white" text fab small>
      <v-icon >mdi-arrow-left</v-icon>
   </v-btn>
   

  </v-app-bar>
  <br><br>

    <div class="pt-3" style="position:relative;">
 <div class="ui segment basic">
       
<div v-if="!isfetch">
    <div v-if="Object.keys(contenus).length>0" class="pa-2 ui two column  grid" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100;repeat: true" >
    <div v-for="(contenu,i) in contenus" :key="contenu.id"  class="pa-1 animated fadeIn  column">
        <div @click="$router.push({path:'/apps/slide',query:{start:i,end:contenus.length,contenu:JSON.stringify(contenu)}})" :data-src="$store.state.app.baseUrlFile+contenu.media.hash+contenu.media.ext" uk-img class="pa-0 uk-background-cover  uk-height-medium uk-border-rounded  uk-card uk-card-large uk-card-default uk-card-body">
            <div  class="uk-overlay uk-border-rounded uk-overlay-primary uk-height-1-1">
                <div class="pa-1 uk-text-left uk-position-bottom-left uk-light">
                    <p id="titre" class="uk-h4 font-weight-bold">
                        {{contenu.titre}}
                    </p>
                    <p class="font-weight-thin uk-text-h6 caption">
                        {{contenu.updatedAt | moment("from", "now")}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div v-else>
    
  <div class="pt-2 pa-2">
    
   <p class="uk-h5">
      <v-icon large color="primary">info</v-icon> <br><br>
      Aucun résulat  ne correspond à votre recherche
   </p>

  </div>
</div>


</div>
<div v-else>
    <van-skeleton title avatar :row="6" />

</div>
        </div>
        <h4>&nbsp;</h4>
    </div>
</div>
</template>
<script>
export default {
 layout:'barApps',

    data(){
        return{
            search:'',
            isfetch:false,
            contenus:[]
        }

    },
    watch:{
      search(e){
       // console.log(e)
        this.onSearch()
      }


    },
    mounted(){
        
        this.$bus.on('filter',payload=>{
            this.isfetch=true
            this.onFilter(payload)
        })
    },

    apollo:{

        contenus:{
            query:require('../../graphql/contenu.graphql'),
            update(data){
                this.$store.commit('cacheContenus',data.contenus)
               return data.contenus
            },
    watchLoading (isLoading, countModifier) {

      this.isfetch=isLoading
   
           
  },
        }

    },
    methods:{
        onFilter(categorie){
            
            this.contenus =this.$store.state.contenus.filter(e=>{
               return e.categorie.includes(categorie)
            })
    this.isfetch=false
        },
        onSearch(){
          if(this.search!==null) if(this.search.replace(/\s/g,'')=="") this.search=''
           this.contenus =this.$store.state.contenus.filter(e=>{
              
               return e.titre.includes(this.search)
            })
        }

    }
    
}
</script>

<style lang="css" scoped>

#titre{
    font-family: 'Fjalla One', sans-serif;

}
    
</style>