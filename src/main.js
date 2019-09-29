import Vue from 'vue'
import App from './App.vue'
import Content from './components/Content.vue'

Vue.component("Content", Content)

new Vue({
  el: '#app',
  render: h => h(App)
})
