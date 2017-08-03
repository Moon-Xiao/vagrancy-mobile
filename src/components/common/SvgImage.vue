<template>
  <div ref="svg"></div>
</template>

<script>
  import Axios from 'axios'

  export default {
    props: {
      src: {
        type: String,
        required: true
      }
    },
    mounted () {
      const imgURL = this.src

      Axios(imgURL).then(response => {
        return response.data
      })
        .then(text => {
          const parser = new DOMParser()
          const xmlDoc = parser.parseFromString(text, 'text/xml')

          // Get the SVG tag, ignore the rest
          /**
           *
           * @type {SVGSVGElement}
           */
          const svg = xmlDoc.getElementsByTagName('svg')[0]

          svg.setAttribute('width', '100%')
          svg.setAttribute('height', '100%')

          this.$refs.svg.appendChild(svg)
        })
    }
  }
</script>
