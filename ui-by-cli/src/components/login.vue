<template>
    <section id="login-container">
         <modal v-on:closed="closeLoginHandler()" name="login-modal" :adaptive="true" height="auto" :max-width="maxWidth" width="90%">
                <div v-on:click="$store.commit('closelogin')" class="closebutton">
                    <i class="fas fa-times"></i>
                </div>
                <div id="loginForm" class="login-form">
                    <div class="login-header">
                        <h4>Welcome to <span style="display: inline-block" class="login-text animate__animated animate__bounce">Mixam</span><br> Login Here</h4>
                    </div>
                    <text-input v-on:blur="validateLoginEmail()" v-on:focus="clearLoginEmailValidity()" v-bind:validationsuccessful="emailValidLogin" v-bind:validationfailed="emailNotValidLogin" v-bind="emailOptionsLogin" v-model="loginEmail"></text-input>
                    <text-input v-on:blur="validateLoginPassword()" v-on:focus="clearLoginPasswordValidity()" v-bind:validationsuccessful="passwordValidLogin" v-bind:validationfailed="passwordNotValidLogin" v-bind="passwordOptionsLogin" v-model="loginPassword" v-bind:showpassword="showPasswordLogin"></text-input>
                    <div class="util1-container">
                        <div class="row">
                            <div class="col-6">
                                <input type="checkbox" v-model="showPasswordLogin" class="show-password-style"> Show Password
                            </div>
                            <div class="col-6">
                                <p @click="switchToForgotPassword()" v-bind:title="loginStatus" class="forgotpassword-text">Forgot Password?</p>
                            </div>
                        </div>
                    </div>
                    <div class="util2-container">
                        <vs-button v-on:click="submitLoginForm()" class="login-btn" block>Login</vs-button>
                    </div>
                    <div class="util3-container">
                        <p  class="new-acct-text">New here? <span @click="switchToSignup()" class="new-acct-link">Create New Account.</span></p>
                    </div>
                </div>
            </modal>
            <p v-bind:loginstatus="loginStatus" ></p>
            <v-dialog :adaptive="true" height="auto" :max-width="maxWidth" width="90%" />
    </section>
</template>

<script>
import textInput from "../components/text-input.vue";
import axios from "axios";
function validate (mail){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
        return (true);
    }
    return false;
}
export default {
    data : function () {
        return {
            name : "app-login",
            maxWidth : 480,

             //login data
             emailValidLogin : false,
             emailNotValidLogin : false,
             passwordNotValidLogin : false,
             passwordValidLogin : false,
             loginEmail:"",
             loginPassword:"",
             showPasswordLogin: false,

             // email options login
            emailOptionsLogin :  {
                labeltrue : true,
                label : "Email",
                iconstyleobj : {},
                inputicon: "",
                inputtype : "text",
                inputplaceholder : "eg : you@domain.com",
                successtext: "Email Valid",
                failuretext: "Please Input a Valid Email...",
                icontext : "@",
                icon : true,
                showpassword: false,
            },

            // password options login
             passwordOptionsLogin : {
                labeltrue : true,
                label : "Password",
                iconstyleobj : {},
                inputicon: "fas fa-lock",
                inputtype : "password",
                inputplaceholder : "Your password",
                successtext: "Password Valid",
                failuretext: "Passwords must be at least Six characters Long...",
                icontext : "",
                icon : true
            },
        }
    },
    computed : {
            loginStatus : function () {
               let status = this.$store.state.loginOpen;
               console.log("login Status from app auth", status)
               return status;
           },
           updateLoginEmailValid :{
               get : function (){
                   return this.emailValidLogin;
               },
               set : function (value){
                   this.emailValidLogin = value;
               }
           },
            updateLoginPasswordValid : {
                get : function () {
                    return this.passwordValidLogin
                },
                set : function (value) {
                    return this.passwordValidLogin = value;
                }
            },
            updateLoginEmailNotValid  : {
                get : function (){
                    return this.emailNotValidLogin;
                },
                set : function (value){
                    this.emailNotValidLogin = value
                }
            },
            updateLoginPasswordNotValid : {
                get : function (){
                    return this.passwordNotValidLogin
                },
                set : function (value){
                    this.passwordNotValidLogin = value;
                }
            },
            loginFormValid : function (){
                if (this.emailValidLogin && this.passwordValidLogin){
                    return true;
                }
                return false;
            },
    },
    methods : {
           validateLoginEmail : function () {
                validate(this.loginEmail) ? this.updateLoginEmailValid = true : this.updateLoginEmailNotValid = true;
           },
           clearLoginEmailValidity : function () {
               this.updateLoginEmailValid = false;
               this.updateLoginEmailNotValid = false;
           },
           validateLoginPassword : function () {
               this.loginPassword.length > 5 ? this.updateLoginPasswordValid = true : this.updateLoginPasswordNotValid = true;
           },
           clearLoginPasswordValidity : function () {
               this.passwordNotValidLogin = false;
               this.passwordValidLogin = false;
           },
           openLogin : function () {
               this.$modal.show("login-modal");
           },
           closeLogin : function () {
               this.$modal.hide("login-modal");
           },
           closeLoginHandler : function () {
               this.$store.commit('closelogin');
           },
           switchToForgotPassword : function () {
               this.closeLoginHandler();
               setTimeout(()=>{
                   this.$store.commit('openforgotpassword');
               },700)
           },
           switchToSignup(){
                this.closeLoginHandler();
               setTimeout(()=>{
                   this.$store.commit('opensignup');
               },700)
           },
           submitLoginForm(){
               let valid = this.loginFormValid;
               if (valid){
                    this.$vs.loading({text: "Logging You In......, Please Wait", scale: 0.5});
                    let url = "/apiservice/login/";
                    axios.get(url,{
                        params: {
                            email : this.loginEmail,
                            password : this.loginPassword
                        }
                    }).then( (response)=>{
                        this.$vs.loading.close();
                        this.closeLoginHandler();
                        let res = response.data;
                        console.log(res);
                        if(res.success){
                            this.$modal.show("dialog",{
                                title : "200 SUCCESS",
                                text : res,
                                buttons : [
                                {
                                    title : "okay",
                                    handler  : ()=>{
                                        this.$modal.hide('dialog');
                                    }
                                }
                                ]
                            });
                            this.$store.commit('updateloginstatus');
                        }
                        else {
                            this.$modal.show("dialog",{
                                title : "500 FAILED",
                                text : res,
                                buttons : [
                                {
                                    title : "Login Again",
                                    handler : ()=> {
                                        this.$modal.hide("dialog");
                                            this.$store.commit("openlogin");
                                    }
                                }
                                ]
                            })
                            console.log("login request failed");
                        }
                    }).catch((error)=>{
                        this.$vs.loading.close();
                        this.$modal.show("dialog",{
                            text : error,
                            buttons : [
                            {
                                title : "okay",
                                handler: ()=> {
                                    this.$modal.hide("dialog");
                                }
                            }
                            ]
                        })
                    }).then(()=>{
                            console.log("request ended");
                        });
               }
               else{
                    this.$modal.show("dialog",{
                       text : "Check your email and password to make sure they are correct before you can continue",
                       buttons : [
                       {
                           title : "okay",
                           handler : ()=> {
                               this.$modal.hide("dialog");
                           }
                       }
                       ]
                   })
               }
           },

    },
    watch : {
           loginStatus (old,value) {
               this.loginStatus == true ? this.openLogin() : this.closeLogin();
               console.log("old",old,"login operation detected" , value);
           },
    },
    components : {
        textInput,
    }
}
</script>

<style lang="scss">

    .login-form, .signup-form, .forgotpassword-container
    {
        @include padding1;
    }
    .forgotpassword-container h4{
        @include padding-bottom1
    }
    .recovery-instruction{
        text-align: center;
    }
    [class~="login-text"]{
        color: rgb(3, 164, 238);
        font-size : 120%;
    }
    [class~="login-header"], .signup-header{
        font-size: 18px;
        text-align: center;
        word-spacing: 2px;
        @include padding-top8;
        @include padding-bottom8;
    }
    .closebutton
    {
        background-color: gray;
        width: 20px;
        height: 20px;
        padding: 2px 0px 0px 5px;
        border-radius: 50%;
        position: absolute;
        right: 0px;
        top: 0px;

    }
    .closebutton i{
        color : white
    }
    .util1-container
    {
        @include padding-top8;
        @include padding-bottom8;
        color: #4285f4;
    }

    .forgotpassword-text
    {
        text-align: right;
        font-weight: 500;
    }
    .login-btn
    {
        width: 100%;
        display: block;
        margin: 15px auto;
        border-radius: 15px;
        height: 30px;

    }
    .new-acct-link
    {
        color: #4285f4;
        font-weight: 600;
    }

</style>