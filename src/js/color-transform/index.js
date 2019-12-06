var app = new Vue({
  el: '#app',
  data: {
    inputColor: '',
    outputRGBColor: ''
  },
  methods: {
    color2RGB () {
      const color = tinycolor(this.inputColor)
      this.outputRGBColor = color.toRgbString()
    }
  }
})