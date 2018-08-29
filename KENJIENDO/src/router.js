import Vue from 'vue'
import Router from 'vue-router'
// import index from './views/Index.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import New from './components/New.vue'
import Album from './components/Album.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component:Home
        },{
            path: '/home',
            component: Home
        }, {
            path: '/about',
            component: About
        }, {
            path: '/new',
            component: New
        }, {
            path: '/album',
            component: Album
        },
        {
            path: '/*',
            component: NotFound
        }
    ]
})