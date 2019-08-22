<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui'
//import {config} from '../firebaseConfig';

export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/about',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>

<style lang="css">
</style>
