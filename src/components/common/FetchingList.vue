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
  import FetchingListMixin from './FetchingListMixin'

  export default {
    mixins: [FetchingListMixin],
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
    }
  }
</script>
