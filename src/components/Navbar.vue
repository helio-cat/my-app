<template>
  <nav>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" tile></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Psyence</span>
        <span class="font-weight-bold">IO</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator=" { on }">
          <v-btn text tile v-on="on">
            <v-icon>mdi-menu-down</v-icon>
            <span>menu</span>
          </v-btn>
        </template>
        <v-list text color="primary white--text">
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title >{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
     
      <v-btn icon tile>
        <v-icon>mdi-alien</v-icon>
      </v-btn>

      <v-btn icon tile> 
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="secondary">
      <v-col class="text-center align-center">
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="https://api.adorable.io/avatars/285/Helios.png" alt />
          </v-avatar>
          <p class="white--text subheading mt-1">Helios</p>
        </v-flex>
        <v-flex my-3>
          <Popup />
        </v-flex>
      </v-col>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup';

export default {
  name: "navbar",
  
  components: {
    Popup
  },

  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" }
      ]
    };
  }
};
</script>
