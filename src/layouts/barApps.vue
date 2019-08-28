<template>
    <div>
        
        <router-view></router-view>
    <v-bottom-navigation app
    color="teal"
    fixed=""
    grow=""
    height="65"
  :absolute="false"
  
    
  >
    <v-btn to="/apps/" value="recent" exact="">
    <span>Accueil</span>
      <v-icon >home</v-icon>
    </v-btn>

    <v-btn to="/apps/search" value="favorites" exact="">
   <span>Recherche</span>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn to="/apps/message" value="nearby" exact="">
    <span>Messages</span>
       <Badge dot>
      <v-icon>message</v-icon>
       </Badge>
    </v-btn>
     <v-btn to="/apps/parametre" value="setting" exact="">
      <span>Parametre</span>
      <v-icon>mdi-settings</v-icon>
    </v-btn>
  </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    
}
</script>