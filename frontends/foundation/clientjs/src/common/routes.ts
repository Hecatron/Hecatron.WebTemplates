// Setup the routes for the different pages
const routes = [
    { path: '/', component: require('../pages/home.vue').default },
    { path: '/staticpage', component: require('../pages/staticpage/staticpage.vue').default },
    { path: '/counter', component: require('../pages/counter/counter.vue').default },
    { path: '/fetchdata', component: require('../pages/fetchdata/fetchdata.vue').default },
    { path: '/weather', component: require('../pages/weather/weather.vue').default },
]

export { routes }
