import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginOpen : false,
    signupOpen : false,
    forgotpasswordOpen : false,
    userLoggedIn : false,
    _userEmail : "",
    _userPassword : "",
    _userUsername : "",
    _loginType : "",
    _imageLink : "",
    _imagePlaceholderText : "",
  },
  mutations: {
    openlogin : function(state){
      state.loginOpen = true;
    },
    closelogin : function(state){
      state.loginOpen = false;
    },
    opensignup : function (state){
      state.signupOpen = true;
    },
    closesignup : function (state){
      state.signupOpen = false;
    },
    openforgotpassword : function (state){
      state.forgotpasswordOpen = true;
    },
    closeforgotpassword : function (state){
      state.forgotpasswordOpen = false;
    },
    updateloginstatus : function (state){
      state.userLoggedIn = !state.userLoggedIn;
    },
    
    // mutations for userState.
  },
  actions: {
  },
  modules: {
  }
})
