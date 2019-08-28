<template>
    <div class="pt-2">
        <div class="pa-2">

<p>
    <img style="width:10%" src="/img/logo.png" alt="">
</p>
<p>
    Version 1.0.1
</p>
<br>

<div class="ui divider horizontal">
    à propos

</div>
            
<p>
    Le portail de la jeunesse ivoirienne <br>
    Toute l'info jeunesse au même endroit.
</p>

<div class="ui divider horizontal">Nous suivre</div>
<p>
   <v-btn @click="$Browser.open({url:'https://www.facebook.com/jeunesCIV'})" fab small color="blue" dark>
        <v-icon>mdi-facebook</v-icon>
   </v-btn> &nbsp;
    <v-btn @click="$Browser.open({url:'https://www.instagram.com/jeunesCIV'})" fab small color="brown darken-6" dark>
        <v-icon>mdi-instagram</v-icon>
   </v-btn>
    &nbsp;
    <v-btn @click="$Browser.open({url:'https://www.twitter.com/jeunesCIV'})" fab small color="blue darken-9">
        <v-icon>mdi-twitter</v-icon>
   </v-btn>
   <br>
 
</p>

        </div>
    </div>
</template>
