import Home from './Home.vue';
import Js from './content/Js.vue';
import Vue from './content/Vue.vue';
import Cmd from  './content/Cmd.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/js', component: Js },
    { path: '/vue', component: Vue },
    { path: '/cmd', component: Cmd }
]