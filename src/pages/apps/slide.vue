<template>
    <div >
      <div v-touch:swipe.right="onSwipeRight" v-touch:swipe.left="onSwipeLeft"  v-hammer:tap="onTap">
            <v-app-bar fixed flat style="background:transparent" >
            
                      <v-btn @click="shareSlide(contenu)" dark text fab small>
                            <v-icon color="white">share</v-icon>
                      </v-btn>
                          <v-spacer></v-spacer>
                       <v-btn @click="$router.back()" color="white" text fab small >
                            <v-icon>close</v-icon>
                       </v-btn>
          
        </v-app-bar>
   <div v-if="contenu !==undefined && contenu.infos!==undefined" id="slide">
       <div  v-for="(info,i) in contenu.infos" :key="info.id">
         <div v-if="info.media!==null || info.media!==undefined" class="uk-background-cover uk-position-cover" :data-src="$store.state.app.baseUrlFile+info.media.hash+info.media.ext" uk-img>
               <div style="z-index:9" class="pa-4 uk-text-justify uk-text-center uk-position-center" v-show="i==index">

              <div class="uk-text-center">
                <v-btn rounded large color="primary">
            <span class="font-weight-bold uk-text-uppercase"> {{info.titre}}</span>
              </v-btn>
              
              </div>
                <div class="pt-5"  v-html="info.description">
                    
                </div>
           </div>
         </div>
   </div>
   </div>
<div v-if="contenu !==undefined && contenu.infos!==undefined"  class="uk-position-bottom pa-1">
    <span  v-for="(info,i) in contenu.infos" :key="info.id">
        <v-icon size="12" :class="{'green--text':i==index,'white--text':i!==index}" >mdi-circle</v-icon>
   </span>

</div>
    
      </div>
    </div>
</template>


<script>
import { setTimeout } from 'timers';
import { async } from 'q';
export default {
    data(){
         return{
             contenu:{},
             index:0,
             entry:0,

         }
    },
    mounted(){


        this.contenu=JSON.parse(this.$route.query.contenu)
        this.entry=parseInt(this.$route.query.start)
        //console.log('entry', this.entry)

     
    },
    methods:{
        shareSlide(contenu){

            console.log()
                this.$Share.share({
                 title: '--www.jeunes.ci---',
                  text: contenu.titre,
                 url: contenu.partage,
                 dialogTitle: 'jeunes.ci'
            })

        },
        onSwipeLeft(e){
               this.$vs.loading({color:'green',background:'black'})
                 var length = this.$store.state.arraycontenus.length
                 var i =this.entry+1
          this.$sleep(600).then(()=>{
             
           
           if(i<length){
             // console.log(this.entry+1)
               this.contenu = this.$store.state.arraycontenus[i]
               this.entry=i
               
           }

           //console.log(this.contenu)
          //  console.log('Moving left')
              setTimeout(()=>{
                this.$vs.loading.close()
           },100)
          })
            
        },
         onSwipeRight(e){
         //console.log('Moving right')
         var i =this.entry-1
           this.$vs.loading({color:'green',background:'black'})
           var length = this.$store.state.arraycontenus.length
this.$sleep(600).then(()=>{

           if(i<0){
           } else {
                this.contenu = this.$store.state.arraycontenus[i]
                this.entry=i
           }


        
          
           setTimeout(()=>{
                this.$vs.loading.close()
           },100)
            
})
            
        },

        onTap(e){
// y 75
var screenHalf = window.innerWidth/2
var position =e.center.x

if(position>screenHalf){ // next
    if(this.index<this.contenu.infos.length-1) this.index++

} else { // previous
   if(this.index>0) this.index--
}



        }
    }
}
</script>


<style scoped>
#slide{
    color: white;
    background:black;
    height: 100vh;
}
</style>
