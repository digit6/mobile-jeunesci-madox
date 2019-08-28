<template>
    <div style="position:relative;top:-10px;padding:0 0">
 <div class="ui segment basic">
        <p class="uk-text-left uk-text-uppercase caption  font-weight-bold">
          <v-icon small  color="primary">mdi-tag</v-icon>  {{type}}
        </p>


<div v-if="!isfetch">
    <div v-if="Object.keys(contenus).length>0 && contenus!==null" class="pa-1 ui two column  grid" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100;repeat: true" >
    <div v-for="(contenu,i) in contenus" :key="contenu.id"  class="pa-1 animated fadeIn  column">
        <div style="border-radius:1vh;overflow:hidden;" @click="$router.push({path:'/apps/slide',query:{start:i,end:contenus.length,contenu:JSON.stringify(contenu)}})" :data-src="$store.state.app.baseUrlFile+contenu.media.hash+contenu.media.ext" uk-img class="pa-0 uk-background-cover uk-position-relative  uk-height-medium  uk-card uk-card-large uk-card-default uk-card-body">
           <div style="">
                <div  id="opacity" class=" uk-height-1-1">
                <div id="desc" class="pa-1 uk-text-left uk-position-bottom-left uk-light">
                    <p id="titre" class="uk-h4 font-weight-bold">
                        {{contenu.titre}}
                    </p>
                    <p class="caption">
                     <v-icon size="14" color="white">mdi-web</v-icon>   {{contenu.updatedAt | moment("from", "now")}}
                    </p>
                </div>
            </div>
           </div>
        </div>
    </div>
</div>
<div v-else>
    
    <v-icon>info</v-icon> <br>
    Aucun résulat 

</div>


</div>
<div v-else>
    <van-skeleton title avatar :row="6" />

</div>
        </div>
      
    </div>
</template>
<script>
export default {

    data(){
        return{
            type:"Pour vous",
            isfetch:false,
            contenus:[]
        }

    },
    mounted(){
        
        this.$bus.on('filter',payload=>{
            this.isfetch=true
            this.onFilter(payload)
            if(payload!==""){
                this.type=payload
            } else {
                this.type="Pour vous"
            }
        })
    },

    apollo:{

        contenus:{
            prefetch:true,
            query:require('../graphql/contenu.graphql'),
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
            
            console.log(this.$store.state.contenus)
            this.contenus =this.$store.state.contenus.filter(e=>{
                if(e.categorie==null) return {}
               return e.categorie.includes(categorie)
            })
    this.isfetch=false
        }

    }
    
}
</script>

<style lang="css" scoped>

#titre{
    font-family: 'Fjalla One', sans-serif;

}
#opacity{
    overflow: hidden;
  

}

#desc{
    position:relative;
    z-index: 88;
}

#opacity::after{
  position: absolute;
    content: "";
    left: 0;
   height: 100%;
    width:100%;
   
    background:rgba(0, 0, 0, 0.502);

}
    
</style>