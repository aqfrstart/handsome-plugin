/**
 * 依赖于冷狗短链接 http://dogdwz.cn/
 */
const BASE_CONFIG = {
  TOKEN_URL: 'http://dogdwz.cn/user/info',
  GET_SHORT_URL: 'http://pay.jump-api.cn/tcn/web/test'
}
var app = new Vue({
  el: '#app',
  data: {
    longUrl: '',
    shortUrl: ''
  },
  methods: {
    long2Short () {
      axios.get(BASE_CONFIG.TOKEN_URL)
        .then((response) => {
          const { uid, username, role, fid, token, site_id } = response.data
          axios.post(BASE_CONFIG.GET_SHORT_URL, {
            url_long: this.longUrl,
            uid: uid,
            username: username,
            role: role,
            fid: fid,
            token: token,
            site_id: site_id
          })
          .then((res) => {
            this.shortUrl = res.data
          })
          .catch(function (err) {
            console.log(err + ':生成短网址失败！检查接口')
          })
        })
        .catch(function (error) {
          console.log(error + ':请求token失败！！检查接口')
        })
    }
  }
})