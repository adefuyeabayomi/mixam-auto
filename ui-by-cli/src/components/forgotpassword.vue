<template>
    <section id="forgotpassword-section">
        <modal name="forgotpassword" height="auto" width="90%" :max-width="maxWidth" :adaptive="true" @closed="closeForgotpasswordHandler()">
                 <div @click="$store.commit('closeforgotpassword')" class="closebutton">
                    <i class="fas fa-times"></i>
                </div>
                <div class="forgotpassword-container">
                     <div class="signup-header">
                        <h4>Recover your password here.</h4>
                    </div>
                    <p class="recovery-instruction">Kindly fill in the email you used to register the account below</p>
                    <text-input @blur="validateForgotPaswordEmail()" @focus="clearForgotpasswordEmailValidity()" :validationfailed="forgotpasswordEmailNotValid" :validationsuccessful="forgotpasswordEmailValid" v-model="forgotpasswordEmail" v-bind="emailOptionsForgotPassword"></text-input>
                    <div class="util2-container">
                        <vs-button v-on:click="submitRecoveryForm()" class="login-btn" block>Proceed</vs-button>
                    </div>
                </div>
            </modal>
            <p v-bind:forgotpasswordstatus="forgotpasswordStatus"></p>
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
    data : function (){
        return {
            name : "app-forgotpassword",
            maxWidth : 480,

            //forgotpassword data section.
            forgotpasswordEmail : "",
            forgotpasswordEmailValid : false,
            forgotpasswordEmailNotValid : false,

            // forgotpassword email options
            emailOptionsForgotPassword: {
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
                showpassword : false,
             },
        }
    },
    computed : {
        forgotpasswordStatus : function () {
            let status = this.$store.state.forgotpasswordOpen;
            console.log("forgotpassword status from app auth ", status);
            return status;
        },
        updateForgotpasswordEmailValidity : {
            get : function (){
                return this.forgotpasswordEmailValid;
            },
            set : function(value){
                return this.forgotpasswordEmailValid = value;
            }
        },
    },
    methods : {
        validateForgotPaswordEmail(){
            validate(this.forgotpasswordEmail) ? this.forgotpasswordEmailValid = true : this.forgotpasswordEmailNotValid = true;
        },
        clearForgotpasswordEmailValidity(){
            this.forgotpasswordEmailValid = false;
            this.forgotpasswordEmailNotValid = false;
        },
        openForgotpassword : function (){
            this.$modal.show("forgotpassword");
        },
        closeForgotpassword : function(){
            this.$modal.hide("forgotpassword");
        },
        closeForgotpasswordHandler : function (){
               this.$store.commit('closeforgotpassword')
        },
        submitRecoveryForm(){
                // needs to be checked and analyzed cos quite frankly, it needs to have a
               // check form validity
               if(this.forgotpasswordEmailValid){
                   this.$vs.loading();
                   let url = "/apiservice/forgotpassword/";
                   axios.get(url,{
                       params : {
                           email : this.forgotpasswordEmail,
                       }
                   }).then((response)=>{
                       this.$vs.loading.close();
                   let res = JSON.parse(response);
                   if(res.success){
                        // report to user and close the forgotpassword modal.
                        this.closeForgotpasswordHandler();
                        this.modal.show("dialog",{
                            title : "changed password successfully",
                            text : response,
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
                   else{
                        //server error
                        this.modal.show("dialog", {
                            title : "500 server error, unable to process request",
                            text : response,
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
                   //client error
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
                   console.log("request ended");
               })
               }
               else{
                   // invalid form error
                   this.$modal.show("dialog",{
                       text : "check the email you filled again and make sure it is correct before you can proceed",
                       button :[
                       {
                           title : "okay",
                           handler : ()=>{
                               this.$modal.hide("dialog");
                           }
                       }
                       ]
                   })
               }
            }
    },
    watchers : {
        forgotpasswordStatus (old,value){
            this.forgotpasswordStatus ? this.openForgotpassword() : this.closeForgotpassword();
            console.log("forgotpassword operation detected ", value);
        }
    },
    components : {
        textInput
    }
}
</script>