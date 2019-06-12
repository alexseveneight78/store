import Home from './Home.vue';
import Js from './content/Js.vue';
import Vue from './content/Vue.vue';
import Cmd from  './content/Cmd.vue';
import Arrays from './content/js/Arrays.vue';
import Objects from './content/js/Objects.vue';
import Functions from './content/js/Functions.vue';
import NonObviousness from './content/vue/NonObviousness.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/js', component: Js, children: [
        { path: 'arrays', component: Arrays },
        { path: 'objects', component: Objects },
        { path: 'functions', component: Functions }
    ] },
    { path: '/vue', component: Vue, children: [
        { path: 'nonObviousness', component: NonObviousness }
    ] },
    { path: '/cmd', component: Cmd }
]