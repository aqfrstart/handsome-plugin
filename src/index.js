const TYPE_URL_MAP = {
  'color': 'src/html/color-transform.html',
  'url': 'src/html/short-url.html'
} 

var app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
    goToDetailPage (type) {
      // 打开新tab页
      chrome.tabs.create({url: TYPE_URL_MAP[type]})
    }
  }
})