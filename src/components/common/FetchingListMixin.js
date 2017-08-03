import Axios from 'axios'

export default {
  data () {
    return {
      single: {},
      multiple: {
        items: [],
        page: 1,
        perPage: 10,
        pages: 1,
        total: 0,

        isLoading: false
      }
    }
  },
  methods: {
    fetch () {
      const {list, id} = this
      if (this.many) {
        const {page, perPage, select, where, sort} = this
        Axios.get(`/api/lists/${list}`, {
          params: {
            page,
            per_page: perPage,
            ...(select ? {select} : {}),
            ...(where ? {where: JSON.stringify(where)} : {}),
            ...(sort ? {sort} : {})
          }
        })
          .then(result => {
            let data = result.data
            console.info(`Items of ${list} fetched`, data)
            this.multiple.items = data.docs
            this.multiple.page = data.page
            this.multiple.perPage = data.perPage
            this.multiple.pages = data.pages
            this.multiple.total = data.total
          })
          .catch(error => {
            window.alert(`获取数据失败${error.toLocaleString()}`)
            this.multiple.items = []
          })
      } else {
        if (!this.id) {
          console.error('Needs id')
          return
        }
        Axios.get(`/api/lists/${list}/${id}`)
          .then(result => {
            let data = result.data
            console.info(`Item ${list}/${id} fetched`, data)
            this.single = data
          })
          .catch(error => {
            window.alert(`获取数据失败${error.toLocaleString()}`)
          })
      }
    }
  },
  created () {
    this.fetch()
  }
}
