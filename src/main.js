import Vue from 'vue';
import App from './App.vue';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Calendar from 'primevue/components/calendar/calendar.common';

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Calendar', Calendar);

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
