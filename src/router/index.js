import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/Container.vue'
import Home from '../components/Home.vue'
import Destination from '../components/Destinations.vue'
import Country from '../components/des/Country.vue'
import City from '../components/des/City.vue'
import Person from '../components/Person/Person.vue'

import Store from '../components/StoreApp/Store.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      component: Container,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'destination',
          component: Destination
        },
        {
          path: 'person',
          component: Person
        },
        {
          path: 'store',
          component: Store
        }
      ]
    },
    {
      path: '/country',
      component: Country
    },
    {
      path: '/city',
      component: City
    }
  ]
})
