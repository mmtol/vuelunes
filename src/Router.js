import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CollatzComponent from './components/CollatzComponent.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';

//array con las rutas
const rutas=
[
    {
        path:"/",
        component:HomeComponent
    },
    {
        path:"/collatz",
        component:CollatzComponent
    },
    {
        path:"/tablamultiplicar",
        component:TablaMultiplicar
    }
]

//variable para el router indicando tipo de navegacion y rutas
const router=createRouter(
    {
        history:createWebHistory(),
        routes:rutas
    })

//router es la que utiliza el fichero main.js, hay que exportarla
export default router;