import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'


//Firebase
import * as firebase from 'firebase/app'
import "firebase/auth"
import {config} from './firebaseConfig'

Vue.config.productionTip = false

Vue.use(VueRouter)

// new Vue({
//   router,
//   el: '#app',
//   render: h => h(App)
// });


new Vue({
  router,
  created () {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/about')
      } else {
        this.$router.push('/login')
      }
     });
    },
  el: '#app',
  render: h => h(App)
});
