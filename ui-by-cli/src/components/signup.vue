<template>
    <section id="signup-container">
        <modal name="signup" height="auto" width="90%" :max-width="maxWidth" :adaptive="true" @closed="closeSignupHandler()">
                <div @click="$store.commit('closesignup')" class="closebutton">
                    <i class="fas fa-times"></i>
                </div>
                <div id="signupForm" class="signup-form">
                    <div class="signup-header">
                        <h4>Welcome to <span style="display: inline-block" class="login-text animate__animated animate__bounce">Mixam</span><br> Register Here </h4>
                    </div>
                    <text-input @blur="validateSignupEmail()" @focus="clearSignupEmailValidity()" :validationsuccessful="signupEmailValid" :validationfailed="signupEmailNotValid" v-model="signupEmail" v-bind="emailOptionsSignup"></text-input>
                    <text-input @blur="validatePasswordSignupInit()" @focus="clearSignupPasswordValidityInit()" :validationfailed="signupPasswordInitNotValid" :validationsuccessful="signupPasswordInitValid" v-model="signupPasswordInit" v-bind="signupPasswordOptions" :showpassword="showPasswordSignup"></text-input>
                    <text-input @blur="validatePasswordSignupConfirm()" @focus="clearSignupPasswordValildityConfirm()" :validationfailed="signupPasswordConfirmNotValid" :validationsuccessful="signupPasswordConfirmValid" v-model="signupPasswordConfirm" v-bind="signupPasswordOptions" :showpassword="showPasswordSignup"></text-input>
                    <div class="util1-container">
                        <input type="checkbox" v-model="showPasswordSignup" class="show-password-style"> Show Password
                    </div>
                    <div class="util2-container">
                        <vs-button v-on:click="submitSignupForm()" class="login-btn" block>Sign Up</vs-button>
                    </div>
                    <div class="util3-container">
                        <p  class="new-acct-text">Have an Account? <span @click="switchToLogin()" class="new-acct-link">Login Here</span></p>
                    </div>
                </div>
            </modal>
            <p v-bind:signupstatus="signupStatus"></p>
            <v-dialog :adaptive="true" height="auto" :max-width="maxWidth" width="90%" />
    </section>
</template>

<script>
import axios from "axios";
import textInput from "../components/text-input.vue";
function validate (mail){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
        return (true);
    }
    return false;
}
export default {
    data : function (){
        return {
            name : "app-signup",
            maxWidth: 480,
            // signup data
             showPasswordSignup : false,
             signupEmailValid : false,
             signupEmailNotValid : false,
             signupPasswordInitValid : false,
             signupPasswordInitNotValid : false,
             signupPasswordConfirmValid : false,
             signupPasswordConfirmNotValid : false,
             signupEmail : "",
             signupPasswordInit : "",
             signupPasswordConfirm : "",

             // email options signup
                emailOptionsSignup : {
                labeltrue : true,
                label: "Email",
                iconstyleobj : {},
                inputicon : "",
                inputtype : "text",
                inputplaceholder: "eg : you@domain.com",
                successtext : "Email Valid",
                failuretext : "Please input a valid email",
                icontext : "@",
                icon : true,
                showpassword : false,
            },
            // password options forgot password
                signupPasswordOptions : {
                labeltrue : true,
                label : "Password",
                iconstyleobj : {},
                inputicon : "fas fa-lock",
                inputtype : "password",
                inputplaceholder : "Set your password",
                successtext : "Password Valid",
                failuretext : "Passwords must bee at least Six Characters Long...",
                icontext: "",
                icon : true
            },

        }
    },
    computed : {
        signupStatus : function () {
                let status = this.$store.state.signupOpen;
                return status;
        },
        updateSignupEmailValid : {
                get : function (){
                    return this.signupEmailValid;
                },
                set : function (value){
                    return this.signupEmailValid = value;
                }
        },
        updateSignupEmailNotValid : {
                get : function (){
                        return this.signupEmailNotValid
                },
                set : function (value){
                    return this.signupEmailNotValid = value;
                }
        },
        updateSignupPasswordInitValid : {
                get : function (){
                    return this.signupPasswordInitValid;
                },
                set : function (value){
                    return this.signupPasswordInitValid = value;
                }
        },
        updateSignupPasswordInitNotValid : {
                get : function (){
                    return this.signupPasswordInitNotValid;
                },
                set : function (value){
                    return this.signupPasswordInitNotValid = value;
                }
        },
        updateSignupPasswordConfirmValid :{
                get : function (){
                    return this.signupPasswordConfirmValid;
                },
                set : function (value){
                    return this.signupPasswordConfirmValid = value
                }
        },
        updateSignupPasswordConfirmNotValid : {
                get : function (){
                    return this.signupPasswordConfirmNotValid;
                },
                set : function (value){
                    return this.signupPasswordConfirmNotValid = value;
                }
        },
    },
    methods : {
        validateSignupEmail(){
            validate(this.signupEmail) ? this.updateSignupEmailValid = true : this.updateSignupEmailNotValid = true;
        },
        validatePasswordSignupInit(){
           this.signupPasswordInit.length > 5 ? this.updateSignupPasswordInitValid = true : this.updateSignupPasswordInitNotValid = true;
        },
        validatePasswordSignupConfirm(){
            this.signupPasswordConfirm.length > 5 ? this.updateSignupPasswordConfirmValid = true : this.updateSignupPasswordConfirmNotValid = true;
        },
        clearSignupEmailValidity (){
            this.updateSignupEmailValid = false;
            this.updateSignupEmailNotValid = false;
        },
        clearSignupPasswordValidityInit(){
            this.updateSignupPasswordInitValid = false;
            this.updateSignupPasswordInitNotValid = false;
        },
        clearSignupPasswordValildityConfirm(){
            this.signupPasswordConfirmValid = false;
            this.signupPasswordConfirmNotValid = false;
        },
        openSignup : function (){
            this.$modal.show("signup");
        },
        closeSignup : function (){
            this.$modal.hide("signup");
        },
        closeSignupHandler : function(){
               this.$store.commit('closesignup');
        },
        switchToLogin(){
               this.closeSignupHandler();
                setTimeout(()=>{
                   this.$store.commit('openlogin');
               },700)
        },
        signupFormValid : function () {
            let retObj = {
                isValid : false,
                msg : ""
            }
            if(!this.signupEmailValid){
                retObj.msg = "Input a Valid Email and try again"
                return retObj;
            }
            else{
                if(this.signupPasswordInit == this.signupPasswordConfirm && this.signupPasswordInitValid && this.signupPasswordConfirmValid){
                    retObj.isValid = true;
                    return retObj
                }
                else{
                    retObj.msg = "Passwords Inputed Does not match. Check your passwords and try again"
                    return retObj;
                }
            }
        },
        submitSignupForm(){
            let valid = this.signupFormValid();
            if(valid.isValid){
            this.$vs.loading({text : "Signing Up...., Please Wait.", scale : 0.5})
            let url = "/apiservice/signup";
            axios.get(url,{
                params : {
                    password : this.signupPasswordInit,
                    email : this.signupEmail,
                }
            }).then((response)=>{
                this.$vs.loading.close();
                let res = response.data;
                console.log(res);
                if(res.success){
                    this.closeSignupHandler();
                    console.log("login request success");
                        this.$modal.show("dialog",{
                            title : "200 SUCCESS",
                            text : JSON.stringify(res),
                            buttons : [
                            {
                                title : "okay",
                                handler : ()=>{
                                    this.$modal.hide('dialog');
                                }
                            }
                            ]
                        });
                       this.$store.commit('updateloginstatus');
                        console.log(this.$store.state.userLoggedIn, ": user login status")
                }
               else{
                   this.$modal.show("dialog",{
                        title : "500 failed server errors",
                        text : res.responseMessage,
                        buttons : [
                        {
                            title : "okay",
                            handler : ()=>{
                                this.$modal.hide("dialog");
                            }
                        }
                        ]
                    })
                }
            }).catch((error)=>{
                // client errors
                // open dialog to report error and next step is to close dialog but still leave signupmodal for users to try again.
                this.$vs.loading.close();
                this.$modal.show("dialog",{
                    text : error,
                    button : [
                    {
                        title : "okay",
                        handler: ()=>{
                            this.$modal.hide("dialog");
                        }
                    }
                    ]
                })
            }).then(()=>{
                console.log("request ended")
            })
            }
            else {
                // notify of what is invalid in the form.
                this.$modal.show("dialog",{
                    text : valid.msg,
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
        signupStatus (old,value) {
               this.signupStatus ? this.openSignup() : this.closeSignup();
               console.log("signup operation detected" , value);
           }
    },
    components : {
        textInput
    }
}
</script>

<style lang="scss">



</style>