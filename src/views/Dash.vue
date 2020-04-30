<template>
  <div class="dash">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              flat
              color="grey-lighten4"
              class="mr-1"
              @click="sortBy('title')"
              v-on="on"
            >
              <v-icon class="left small">mdi-folder</v-icon>
              <span class="caption text-lowercase px-2">by Title</span>
            </v-btn>
          </template>
          <span>Sort projects by Project Title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              flat
              color="grey-lighten4"
              class="mr-1"
              @click="sortBy('person')"
              v-on="on"
            >
              <v-icon class="left small">mdi-account</v-icon>
              <span class="caption text-lowercase px-2">by Person</span>
            </v-btn>
          </template>
          <span>Sort projects by Project Title</span>
        </v-tooltip>
      </v-row>
      <v-card
        outlined
        v-for="project in projects"
        :key="project.title"
        class="pl-3"
      >
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Due</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs4 md2>
            <div class="text-right mr-4">
              <v-chip
                small
                :color="`${project.status}`"
                class="v-chip--active white--text caption my-2"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Step 3: ???",
          person: "Helios",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Step 1: Learn how to make App",
          person: "Liv",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Step 2: Make App",
          person: "Kimono",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Step 4: Profit!",
          person: "Toenailz",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Finish this app",
          person: "Helios",
          due: "22nd Apr 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Start this app",
          person: "Helios",
          due: "3rd Feb 2020",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style>
.project.complete {
  border-left: 5px solid rgb(128, 197, 128);
}
.project.ongoing {
  border-left: 5px solid rgb(162, 209, 216);
}
.project.overdue {
  border-left: 5px solid rgb(197, 130, 128);
}
.v-chip.complete {
  background-color: rgb(128, 197, 128);
}
.v-chip.ongoing {
  background-color: rgb(84, 158, 167);
}
.v-chip.overdue {
  background-color: rgb(197, 130, 128);
}
</style>
