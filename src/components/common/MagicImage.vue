<template>
  <div ref="container" class="magic-image-container">
    <div class="magic-image" :style="{backgroundImage: `url('${src}')`, transform: `translateY(${-top}${floatUnit})`, height: imageHeight}"></div>
  </div>
</template>

<script>
  const listeners = []
  let windowHeight = window.innerHeight
  window.addEventListener('scroll', event => {
    let top = document.body.scrollTop
    for (let listener of listeners) {
      listener.scroll(top)
    }
  })

  window.addEventListener('resize', () => {
    windowHeight = window.innerHeight
  })

  export default {
    data () {
      return {
        offsetTop: 0,
        height: 0,
        top: 0,
        floatUnit: '%',
        floatSize: 0
      }
    },
    props: {
      src: [String],
      float: {
        type: [String, Number],
        default: '50%'
      }
    },
    mounted () {
      function offset (element) {
        const offest = {
          top: -20,
          left: 0
        }

        let _position

        getOffset(element, true)

        return offest

        // 递归获取 offset, 可以考虑使用 getBoundingClientRect
        function getOffset (node, init) {
          // 非Element 终止递归
          if (node.nodeType !== 1) {
            return
          }
          _position = window.getComputedStyle(node)['position']

          // position=static: 继续递归父节点
          if (typeof init === 'undefined' && _position === 'static') {
            getOffset(node.parentNode)
            return
          }
          offest.top = node.offsetTop + offest.top - node.scrollTop
          offest.left = node.offsetLeft + offest.left - node.scrollLeft

          // position = fixed: 获取值后退出递归
          if (_position === 'fixed') {
            return
          }

          getOffset(node.parentNode)
        }
      }
      this.height = parseInt(getComputedStyle(this.$refs.container).height)
      this.offsetTop = offset(this.$refs.container).top
      this.floatSize = parseInt(this.float)
      this.floatUnit = /%$/.test(this.float) ? '%' : 'px'
      listeners.push(this)
    },
    beforeDestroy () {
      listeners.splice(listeners.indexOf(this), 1)
    },
    methods: {
      scroll (top) {
        if (top >= this.offsetTop - this.height - windowHeight && top < this.offsetTop + this.height) {
          let per = 0.5 - (top - this.offsetTop + this.height) / (windowHeight + this.height)
          this.top = per * this.floatSize
        }
      }
    },
    computed: {
      imageHeight () {
        if (this.floatUnit === '%') {
          return this.floatSize * 2 + 100 + '%'
        } else {
          return this.height + this.floatSize * 2 + 'px'
        }
      }
    }
  }
</script>
<style scoped>

  div.magic-image-container {
    overflow: hidden;
    z-index: 0;
    position: relative;
  }

  div.magic-image {
    width: 100%;
    background-size: cover;
    background-position: center;
  }
</style>
