// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api, {baseURL} from './api'
import moment from 'moment'

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    logged () {
      return this.$store.state.user.logged
    },
    userInfo () {
      return this.$store.state.user.info
    },
    baseUrl () {
      return baseURL
    }
  },
  methods: {
    async updateInfo (infos) {
      let formData = new FormData()
      let data = {}
      for (let key of Object.keys(infos)) {
        if (infos[key] instanceof File) {
          formData.append(key, infos[key])
        } else {
          data[key] = infos[key]
        }
      }
      formData.append('$data', JSON.stringify(data))
      await api.updateItem({url: 'lists/users'}, this.userInfo._id, formData, {headers: {'Content-Type': 'multipart/form-data'}})
      store.dispatch('user/getUserInfo')
    },
    async createItem (type, infos) {
      let formData = new FormData()
      let data = {}
      for (let key of Object.keys(infos)) {
        if (infos[key] instanceof File) {
          formData.append(key, infos[key])
        } else {
          data[key] = infos[key]
        }
      }
      formData.append('$data', JSON.stringify(data))
      await api.createItem({url: `lists/${type}`}, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    async deleteItem (type, id) {
      await api.deleteItem({url: `lists/${type}`}, id)
    },
    formatDate (date, format) {
      return moment(date).format(format || 'll')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
