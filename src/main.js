import Vue from 'vue'
import App from './App.vue'
//引入mockjs拦截请求
//注意，引入后：
//Mock.js 通过覆盖和模拟原生 XMLHttpRequest 的行为来拦截 Ajax 请求，
//不再依赖于第三方 Ajax 工具库（例如 jQuery、Zepto 等）
//所以代码中用到原生XMLHttpRequest的地方会变成MockHttpRequest
require('./mock/index.js')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
