import Main from "@/components/pages/Main";
import Login from "@/components/pages/Login"
import Registration from "@/components/pages/Registration"

import {createRouter, createWebHistory} from "vue-router";
import MovieCatalog from "@/components/pages/MovieCatalog.vue";
import FilmPage from "@/components/pages/FilmPage.vue"


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration,
    },
    {
        path: '/MovieCatalog',
        name: 'MovieCatalog',
        component: MovieCatalog,
    },
    {
        path: '/FilmPage',
        name: 'FilmPage',
        component: FilmPage,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;