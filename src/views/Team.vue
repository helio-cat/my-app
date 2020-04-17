<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-row wrap>
        <v-flex class="xs12 sm6 md4 lg3" v-show="welcome">
          <v-card id="welcomeCard" class="ma-3 primary wrap" height="291">
            <v-col class="text-right align-right">
              <v-btn
                text
                x-small
                class="secondary--text"
                :ripple="false"
                @click="welcome = !welcome"
              >
                <v-icon class>mdi-close</v-icon>
              </v-btn>
            </v-col>
            <h3 class="secondary--text pt-4 px-4 display-1 wrap">
              Get to know
              <br />the team.
            </h3>
            <div class="text-sm-center pa-4">
              <v-btn fab round class="secondary primary--text">
                <span class="headline font-weight-medium">IO</span>
              </v-btn>
            </div>
          </v-card>
        </v-flex>
        <v-flex
          class="xs12 sm6 md4 lg3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card outlined class="ma-3">
            <v-responsive class="pt-4 text-sm-center pl-4 pl-sm-0">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.dpURL" />
              </v-avatar>
            </v-responsive>

            <v-card-title subheading>{{ person.name }}</v-card-title>

            <v-card-subtitle caption>{{ person.role }}</v-card-subtitle>
            <v-card-text>Bio? Bio.</v-card-text>
            <v-card-actions>
              <v-btn text class="grey lighten-4">
                <v-icon class="small mr-1">mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcome: true,
      team: [
        {
          name: "Helios",
          role: "Lead",
          dpURL: "https://api.adorable.io/avatars/285/Helios.png"
        },
        {
          name: "Kimono",
          role: "Datas",
          dpURL: "https://api.adorable.io/avatars/285/Kimonos.png"
        },
        {
          name: "Toenailz",
          role: "Web developer",
          dpURL: "https://api.adorable.io/avatars/285/Toenailz.png"
        },
        {
          name: "Karen",
          role: "HR",
          dpURL: "https://api.adorable.io/avatars/285/Karen.png"
        },
        {
          name: "Liv",
          role: "Sales guru",
          dpURL: "https://api.adorable.io/avatars/285/Liv.png"
        },
        {
          name: "Ajoeman",
          role: "DROP DATABASE the_bass",
          dpURL: "https://api.adorable.io/avatars/285/Ajoeman.png"
        }
      ]
    };
  }
};
</script>
