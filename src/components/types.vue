<template>
    <div class="pa-1">
        <carousel
        paginationActiveColor="#009688"
         paginationColor="#eee"
         :paginationSize="8"
 :paginationPadding="1" 
 :perPage="3">
  <slide>
    <div  @click="$bus.emit('filter','')" class="type">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/tout.png" uk-img>
        
            <div class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center">
                     <span class="uk-h6 uk-light uk-text-center caption font-weight-bold">
                        TOUT
                    </span>
                </div>
            </div>
        </div>
    </div>
  </slide>
  <slide>
    <div  @click="$bus.emit('filter','jtv')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/tv.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center">
                     <span class="uk-h6 uk-text-center caption uk-light font-weight-bold">
                        JTV
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>
<slide>
    <div  @click="$bus.emit('filter','actualites')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/newss.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center">
                     <span class="uk-h6 uk-light uk-text-center caption font-weight-bold">
                        ACTUALITES
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>

<slide>
    <div @click="$bus.emit('filter','formations')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/formation.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center uk-text-truncate">
                     <span class="uk-h6 uk-text-center caption uk-light font-weight-bold">
                        FORMATIONS
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>

<slide>
    <div @click="$bus.emit('filter','entrepreneuriat')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/job.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center uk-text-truncate">
                     <span class="uk-h6 uk-text-center caption uk-light font-weight-bold">
                        ENTREPRENEURIAT
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>
<slide>
    <div  @click="$bus.emit('filter','emplois')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/emploi.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center">
                     <span class="uk-h6 uk-text-center caption uk-light font-weight-bold">
                        EMPLOIS
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>
<slide>
    <div    @click="$bus.emit('filter','bourses')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/bourses.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center">
                     <span class="uk-h6 uk-text-center caption uk-light font-weight-bold">
                        BOURSES
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>
<slide>
    <div  @click="$bus.emit('filter','evenements')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/agenda.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center">
                     <span class="uk-h6 uk-text-center caption uk-light font-weight-bold">
                        AGENDA
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>

<slide>
    <div @click="$bus.emit('filter','engement_social')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/engagement.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center uk-text-truncate">
                     <span class="uk-h6 uk-text-center uk-light font-weight-bold">
                        ENGAGEMENT SOCIAL   
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>


<slide>
    <div  @click="$bus.emit('filter','sport')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/sport.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center uk-text-truncate">
                     <span class="uk-h6 uk-text-center caption uk-light font-weight-bold">
                        SPORT
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>

<slide>
    <div  @click="$bus.emit('filter','international')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/inter.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center uk-text-truncate">
                     <span class="uk-h6 caption uk-light uk-text-center font-weight-bold">
                        INTERNATIONAL
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>

<slide>
    <div  @click="$bus.emit('filter','culture')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/culture.png" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center uk-text-truncate">
                     <span class="uk-h6 uk-text-center caption uk-light font-weight-bold">
                        CULTURE   
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>

<slide>
    <div  @click="$bus.emit('filter','concours')" class="type ">
        <div  class="uk-background-cover uk-overflow-hidden uk-position-cover" data-src="/img/conf.jpg" uk-img>
        
            <div style="opacity:.9" class="uk-height-1-1   overflow-hidden uk-overlay uk-overlay-primary">
                 <div class="uk-position-center uk-text-truncate">
                     <span class="uk-h6 uk-text-center caption uk-light font-weight-bold">
                        CONCOURS  
                    </span>
                </div>
            </div>
        </div>
    </div>
</slide>




</carousel>
    </div>
</template>

<style lang="css">
.type{
    position: relative;
    height: 15vh;
    border-radius: 1.4vh;
    overflow:hidden;
    margin:0 3%;
    
    
}
    
</style>