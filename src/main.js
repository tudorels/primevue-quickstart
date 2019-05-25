import Vue from 'vue';
import App from './App.vue';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

Vue.component('InputText', InputText);
Vue.component('Button', Button);

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
