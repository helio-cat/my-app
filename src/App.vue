<template>
  <v-app>
    <Navbar />

    <v-content class="grey lighten-5">
      <router-view class="pa-4"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
  export default {
    name: "App",

    components: {
      Navbar
    },
    
    data: () => ({
      //
  })
};
</script>
