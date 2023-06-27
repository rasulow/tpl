import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import i18n from '@/i18n'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
    icons: {
        iconfont: 'fa' || 'md'
    },
    theme: {
        themes: {
            dark: {
                background: '#EEEEEE'
            }
        }
    }
});
