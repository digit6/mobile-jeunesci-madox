<template>
  <div>
<div id="type" class="ui ">
      <hooper :centerMode="true" :itemsToShow="2"  style="height:100%;outline:none;padding:0 1%;" pagination="no" >
        <slide style="width:50%">
          <div
            @click="$bus.emit('filter','')"
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/tout.png') no-repeat center;background-size:cover"
          >
            <div class="uk-position-center">
              Tout
            </div>
          </div>
        </slide>

        <slide style="width:40%">
          <div
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/newss.png') no-repeat center;background-size:100% 100%;"
          >
            <div class="uk-position-center text-truncate" @click="$bus.emit('filter','actualites')">
              Actualités
            </div>
          </div>
        </slide>
        <slide style="width:40%">
          <div
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/formation.png') no-repeat center;background-size:100% 100%"
          >
            <div class="uk-position-center uk-text-truncate" @click="$bus.emit('filter','formations')">
           Formations
             
            </div>
          </div>
        </slide>
        <slide style="width:50%">
          <div
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/job.png') no-repeat center;background-size:100% 100%;"
          >
            <div class="uk-position-center uk-text-truncate" @click="$bus.emit('filter','entrepreneuriat')">
            
              Entrepreneuriat
            
            </div>
          </div>
        </slide>
        <slide style="width:40%">
          <div
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/emploi.png') no-repeat center;background-size:100% 100%;"
          >
            <div class="uk-text-truncate uk-position-center" @click="$bus.emit('filter','emplois')">
              Emplois
            </div>
          </div>
        </slide>
        <slide style="width:40%">
          <div
            @click="$bus.emit('filter','bourses')"
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/bourses.png') no-repeat center;background-size:100% 100%;"
          >
            <div class="uk-text-truncate uk-position-center">
              Bourses
            </div>
          </div>
        </slide>
        <slide style="width:40%">
          <div
            @click="$bus.emit('filter','evenements')"
            id="slide"
            style="border-radius:3px;font-weight:bold;color:white;background:url('/img/agenda.png') no-repeat center;background-size:cover;"
          >
            <div class="uk-text-truncate uk-position-center">
              Agenda
            </div>
          </div>
        </slide>
        <slide style="width:40%">
          <div
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/tv.png') no-repeat center;background-size:cover;"
          >
            <div class="uk-text-truncate uk-position-center" @click="$bus.emit('filter','jtv')">
              <!-- <Icon size="40" type="ios-easel"/> -->
              JTV
            </div>
          </div>
        </slide>
          <slide style="width:67%">
          <div
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/engagement.png') no-repeat center;background-size:cover;"
          >
            <div class="uk-text-truncate uk-position-center" @click="$bus.emit('filter','engement_social')">
              <!-- <Icon size="40" type="ios-easel"/> -->
              Engagement Social
            </div>
          </div>
        </slide>
        <slide style="width:40%">
          <div
            @click="$bus.emit('filter','sport')"
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/sport.png') no-repeat center;background-size:100% 100%;"
          >
            <div class="uk-text-truncate uk-position-center">
            Sport
            </div>
          </div>
        </slide>
        <slide style="width:40%">
          <div
            id="slide"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/inter.png') no-repeat center;background-size:100% 100%;"
            @click="$bus.emit('filter','international')"
          >
            <div class="uk-text-truncate uk-position-center">
            International
            </div>
          </div>
        </slide>
        <slide style="width:40%">
          <div
            id="slide"
            @click="$bus.emit('filter','culture')"
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/culture.png') no-repeat center;background-size:100% 100%;"
          >
            <div class="uk-text-truncate uk-position-center">
              Culture
            </div>
          </div>
        </slide>
        <slide style="width:40%">
          <div
            style="border-radius:6px;font-weight:bold;color:white;background:url('/img/bu.jpg') no-repeat center;background-size:cover;"
            id="slide"
            @click="$bus.emit('filter','concours')"
          >
            <div class="uk-text-truncate uk-position-center">
              Concours
            </div>
          </div>
        </slide>
     
      </hooper>
    </div>
    
  </div>
</template>

<script>
import 'hooper/dist/hooper.css';
import { Hooper, Slide } from 'hooper';
export default {
    components: {
      Hooper,
      'slide':Slide
    }
    
}
</script>
<style lang="css" scoped>
div span {
  font-weight: 200;
  position: relative;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  opacity: 0.9;
}

div span:hover {
  opacity: 1;
  color: #11998e;
}

#type {
  color: rgba(0, 0, 0, 0.767);
  font-size: calc(1vw + 1vw);
}
#slide >div{
    z-index:33;
    position: relative;
    font-size: calc(2vw + 3vw);
}

#slide:after{
    content:"  ";
    width:100%;
    left:0;
    height: 100%;
    position: absolute;
    top:0;
    background:rgba(0, 0, 0, 0.322);
    border-radius: 5%;
}


#slide {
    
  font-size: 16px;
  height: 15vh;
  text-align: center;
  font-family: "Arial", sans-serif;
  margin: 3%;
  position: relative;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5%;
}
</style>


