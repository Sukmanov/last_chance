import Main from "@/components/pages/Main";
import Login from "@/components/pages/Login"
import Registration from "@/components/pages/Registration"

import {createRouter, createWebHistory} from "vue-router";
import MovieCatalog from "@/components/pages/MovieCatalog.vue";
import FilmPage from "@/components/pages/FilmPage.vue"
import AchievementMain from "@/components/pages/AchievementMain.vue"
import DailyAchievementsCatalog from "@/components/pages/DailyAchievementsCatalog.vue"
import ConstAchievementsCatalog from "@/components/pages/ConstAchievementsCatalog.vue"
import ChangePassword from "@/components/pages/ChangePassword.vue";
import PersonalProfile from "@/components/pages/PersonalProfile.vue";
import Profile from "@/components/pages/Profile.vue"


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
        path: '/change-password',
        name: 'ChangePassword',
        component: ChangePassword,
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
    },
    {
        path: '/AchievementMain',
        name: 'AchievementMain',
        component: AchievementMain,
    },
    {
        path: '/DailyAchievementCatalog',
        name: 'DailyAchievementCatalog',
        component: DailyAchievementsCatalog,
    },
    {
        path: '/ConstAchievementCatalog',
        name: 'ConstAchievementCatalog',
        component: ConstAchievementsCatalog,
    },
    {
        path: '/PersonalProfile',
        name: 'PersonalProfile',
        component: PersonalProfile,
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile,
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;