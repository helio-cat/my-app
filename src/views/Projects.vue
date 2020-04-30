<template>
  <div class="projects">
    <h1 class="subheading grey--text">My Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels accordion multiple>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>  
            <v-expansion-panel-content> 
               <v-layout row :class="`pa-3 ${project.status}`">
                 <v-flex xs8 md10 pr-5>
                  <div class="font-weight-bold">due by {{ project.due }}</div>
                  <div>{{ project.content }}</div>
                </v-flex>
              
                <v-flex xs3 md2>
                  <div class="ml-4">
                    <v-chip
                      small
                      :color="`${project.status}`"
                      class="v-chip--active white--text caption my-2"
                      >{{ project.status }}</v-chip
                    >
                  </div>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
          title: "Test Project",
          person: "Helios",
          due: "30th Apr 2020",
          status: "overdue",
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
    }
    
  },
    computed: {
      myProjects(){
        return this.projects.filter(project => {
          return project.person === "Helios";
        })
      }
    }
}

</script>
