<template>
  <div v-if="many" :class="className">
    <slot v-for="(item, index) in multiple.items" name="content" :item="item" :index="index"></slot>
    <slot v-if="multiple.items.length === 0" name="no-content" :is-loading="multiple.isLoading"></slot>
    <slot name="paginate-control" :page="multiple.page" :pages="multiple.pages" :per-page="multiple.perPage"
          :total="multiple.total"></slot>
  </div>
  <div v-else :class="className">
    <slot name="content" :item="single"></slot>
  </div>
</template>

<script>
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
    props: {
      className: [String, Object, Array],
      list: {
        type: String,
        required: true
      },
      many: Boolean,
      id: String,
      where: Object,
      select: String,
      sort: String
    },
    methods: {
      fetch () {
        if (this.many) {
          const {page, perPage, select, where, sort} = this
          Axios.get(`/api/lists/${list}`, {
            params: {
              page,
              per_page: perPage,
              ...(select ? {select} : {}),
              ...(where ? {where: JSON.stringify(where)} : {}),
              ...(sort ? {sort} : {}),
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
</script>
