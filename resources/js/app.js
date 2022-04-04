/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// importacion vue por default
// window.Vue = require('vue').default;

// otra forma de importar vue
import vue from 'vue'
window.Vue = vue;

// importamos el componente principal
import App from './components/App.vue';

// importamos Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

// importamos y configuramos el Vue-router
import VueRouter from 'vue-router';
import { routes } from './routes';

// global para el proyecto
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// instanciamos VueRouter
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

//finalmente, definimos nuestra app de Vue
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
