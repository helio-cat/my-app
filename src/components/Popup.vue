<template>
    <v-dialog v-model="dialog" width="600">

        <template v-slot:activator="{ on }">
            <v-btn color="primary secondary--text" tile dark v-on="on">
                Add New Project
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
                New Project
            </v-card-title>
            <v-card-text>
                A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.
            </v-card-text>
            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" text @click="dialog = false">
                    I Accept
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>

<script>
export default {
    name: "popup",
    data () {
        return {
            dialog: false,
        }
    }
}
</script>