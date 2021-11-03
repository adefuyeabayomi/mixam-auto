<template>
  <div id="app">
    <app-topbar></app-topbar>
    <div class="page-container">
    <router-view/>
    </div>
    <!--utils for the site-->
    <app-login></app-login>
    <app-signup></app-signup>
    <app-forgotpassword></app-forgotpassword>
  </div>
  
</template>
<script>
import appTopbar from "./components/app-topbar.vue";
import appLogin from "./components/login.vue";
import appSignup from "./components/signup.vue";
import appForgotpassword from "./components/forgotpassword.vue";
export default {
  data(){
    return {
      name : "app",
    }
  },
  methods : {
    
    closeLogin : function () {
      this.$store.commit('closelogin');
    },
    closeSignup : function (){
      this.$store.commit('closesignuup');
    },
    openForgotPassword : function (){
      this.$store.commit('openforgotpassword');
    },
    closeForgotPassword : function (){
      this.$store.commit('closeforgotpassword')
    }
  },
  computed : {

  },
  components: {
    appTopbar,appLogin,appSignup,appForgotpassword
  },
} 
</script>
<style lang="scss">

@import "../public/main.scss";

.page-container
{
  position: absolute;
  margin-top: 72px;
  z-index: 0;
}
@font-face {
    font-family: "junegull";
    src: url("./assets/fonts/junegull.ttf");
}
@font-face {
    font-family: "signika-bold";
    src: url("./assets/fonts/Signika-Bold.ttf");
}
@font-face {
    font-family: "signika-light";
    src: url("./assets/fonts/Signika-Light.ttf");
}
@font-face {
    font-family: "signika-regular";
    src: url("./assets/fonts/Signika-Regular.ttf");
}
@font-face {
    font-family: "signika-semibold";
    src: url("./assets/fonts/Signika-Semibold.ttf");
}
.mock button {
  display: block;
  margin : 10px auto
}
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background-color: rgb(176, 176, 176);
}
::-webkit-scrollbar-thumb{
  background-color: rgb(59, 61, 62);
  border-radius: 20px;
  background-clip : content-box;
}
::-webkit-scrollbar-thumb:hover{
  box-shadow: 0px 0px 2px gray;
}
p{
  width: 100%;
}
body {
  overflow-x : hidden;
}
</style>
