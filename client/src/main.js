import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

const BASE_URL = 'http://185.195.26.71:3000'

// Как рабочий вариант
/*const socket = require('socket.io-client')(BASE_URL)
socket.on('connect', function(){
    console.log("Socket.io client connected")
})

socket.on('broadcast',function(data) {
    console.log(data.description)
});*/

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
