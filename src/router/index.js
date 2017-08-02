import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/Container.vue'
import Home from '../components/Home.vue'
import Destination from '../components/Destinations.vue'
import Country from '../components/des/Country.vue'
import City from '../components/des/City.vue'
import Person from '../components/Person/Person.vue'
import Register from '../components/Person/Register.vue'
import Login from '../components/Person/Login.vue'
import Setting from '../components/Person/Manage/Setting.vue'
import Message from '../components/Person/Manage/Message.vue'
import EditInfo from '../components/Person/Manage/EditInfo.vue'
import Sign from '../components/Person/Index/Sign.vue'
import Schedules from '../components/Person/Index/NavIcon/Schedules.vue'
import CreateSchedule from '../components/Person/Index/NavIcon/Schedule/CreateSchedule.vue'
import Collection from '../components/Person/Index/NavIcon/Collection.vue'
import Travels from '../components/Person/Index/NavIcon/Mytravels.vue'
import Orders from '../components/Person/Index/NavStrip/Orders.vue'
import Coupons from '../components/Person/Index/NavStrip/Coupons.vue'
import Feet from '../components/Person/Index/NavStrip/Feet.vue'
import Other from '../components/Person/Others/Person.vue'

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
      path: '/country'
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/person/sign',
      component: Sign
    },
    {
      path: '/person/edit-info',
      component: EditInfo
    },
    {
      path: '/person/setting',
      component: Setting
    },
    {
      path: '/person/travels',
      component: Travels
    },
    {
      path: '/person/message',
      component: Message
    },
    {
      path: '/person/collection',
      component: Collection
    },
    {
      path: '/person/schedules',
      component: Schedules
    },
    {
      path: '/person/schedules/create-schedule',
      component: CreateSchedule
    },
    {
      path: '/person/orders',
      component: Orders
    },
    {
      path: '/person/coupons',
      component: Coupons
    },
    {
      path: '/person/feet',
      component: Feet
    },
    {
      path: '/person/other',
      component: Other
    },
    {
      path: '/person/travels',
      component: Travels
    },
    {
      path: '/city',
      component: City
    }
  ]
})
