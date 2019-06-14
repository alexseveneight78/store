import Home from './Home.vue';
import Js from './content/Js.vue';
//-----components for JS-folder
import Arrays from './content/js/Arrays.vue';
import Objects from './content/js/Objects.vue';
import Functions from './content/js/Functions.vue';
//-----

import Vue from './content/Vue.vue';
//-----components for Vue-folder
import Notes from './content/vue/Notes.vue';
//-----

import Cmd from  './content/Cmd.vue';
//-----components for Cmd-folder
import GitBash from './content/cmd/GitBash.vue';
//-----



export const routes = [
    { path: '/', component: Home },
    { path: '/js', component: Js, children: [
        { path: 'arrays', component: Arrays },
        { path: 'objects', component: Objects },
        { path: 'functions', component: Functions }
    ] },
    { path: '/vue', component: Vue, children: [
        { path: 'notes', component: Notes }
    ] },
    { path: '/cmd', component: Cmd, children: [
        { path: 'git-bash', component: GitBash }
    ]}
]