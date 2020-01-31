import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.teal.lighten4, // #E53935
                secondary: colors.blueGrey.darken3, // #FFCDD2
                accent: colors.green.accent2, // #3F51B5
            },
            dark: {
                primary: colors.blueGrey.darken3, // #E53935
                secondary: colors.teal.lighten4, // #FFCDD2
                accent: colors.green.accent2, // #3F51B5
            },
            success: colors.green.lighten1,
            info: colors.green.lighten5,
            error: colors.red.lighten2,
        },
    },
});
