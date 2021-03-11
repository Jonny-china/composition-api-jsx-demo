import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueCompositionApi from '@vue/composition-api'

Vue.use(FnbElementUI)
import FnbElementUI from './index'

Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false
Vue.use(VueCompositionApi)
new Vue({
  render: h => h(App)
}).$mount('#app')
