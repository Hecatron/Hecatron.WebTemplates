// Setup the routes for the different pages
const routes = [
    { path: '/', component: require('../pages/home.vue').default },
    { path: '/counter', component: require('../pages/counter/counter.vue').default },
]

export { routes }
