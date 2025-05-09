import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
axios.get('/api/test')
  .then(function (response) {
    // 处理成功情况
    console.log(response)
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error)
  })
  .finally(function () {
    // 总是会执行
  })

new Vue({
  render: h => h(App),
}).$mount('#app')
