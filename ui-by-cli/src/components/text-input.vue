<template>
<div class="input-container">
    <!--this input has a support for text input with Icons by the side. Validation text and label-->
    <label v-if="labelTrue" class="label">{{inputLabel}}</label>
    <div class="row nomargin">
        <div v-if="Icon" class="input-icon-container">
            <p v-bind:style="iconStyleObj"  class="icon-containerr"><i v-bind:class="[inputIcon,textIcon]">{{iconText}}</i></p>
        </div>
        <div class="text-input-container">
            <input v-on:blur="$emit('blur')" v-on:focus="$emit('focus')" class="input-style" v-bind:type="inputType" v-bind:placeholder="inputPlaceholder" v-on:input="$emit('input',$event.target.value)">
        </div>

    </div>
    <p class="vsuccess" v-if="validationSuccessful">{{successText}} <i class="fas fa-check"></i></p>
    <p class="vfailed" v-if="validationFailed">{{failureText}} <i class="fas fa-times"></i></p>
</div>
</template>
<script>
export default {
    name : "text-input",
    props : {
            labeltrue : Boolean,
            label : String,
            iconstyleobj : Object,
            inputicon: String,
            inputtype : String,
            inputplaceholder : String,
            validationsuccessful : Boolean,
            successtext: String,
            validationfailed : Boolean,
            failuretext: String,
            icontext : String,
            icon : Boolean,
            showpassword: Boolean,
        },
    computed : {
        labelTrue () {
            return this.labeltrue;
        },
        inputLabel () {
            return this.label;
        },
        iconStyleObj () {
            return this.iconstyleobj;
        },
        inputIcon () {
            return this.inputicon;
        },
        inputType () {
            if(this.inputtype == "text"){
                return "text";
            }
            console.log(this.showpassword ? "text" : "password");
                return this.showpassword ?  "text" :"password";

        },
        inputPlaceholder () {
            return this.inputplaceholder;
        },
        validationSuccessful () {
            return this.validationsuccessful;
        },
        successText () {
            return this.successtext;
        },
        validationFailed () {
            return this.validationfailed;
        },
        failureText () {
            return this.failuretext;
        },
        iconText () {
            return this.icontext;
        },
        Icon () {
            return this.icon;
        },
        textIcon(){
            console.log(this.iconText.length);
            return this.iconText.length>0 ? "text-icon" : "";
        }
    },
}
</script>
<style lang="scss">
    .input-container
    {
        @include padding-top8;
        @include padding-bottom8;
    }
    .label
    {
        font-family : "segoe ui";
        font-size : 12px;
        margin-bottom: 8px;
        display: block;
        color: #899094;
    }
    .icon-containerr
    {
        height: 22px;
    }
    .icon-containerr i
    {
        padding: 5px;
        position: relative;
        font-weight: 700;
        top:0px;
        color: #899094;
    }
    [class~="text-icon"]
    {
        position: relative;
        top: 4px !important;
    }
    .input-icon-container
    {
        width : max-content;
        display: block;
        margin: 0px;
        padding: 0px;
        border: 1px solid #899094;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
    [class~="nomargin"]
    {
        margin: 0px;
    }
    .text-input-container
    {
        flex : 1;
        padding: 0px;
        margin : 0px;
    }
    .input-style
    {
        width: 100%;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        color: #71777a;
        padding: 5px;
        border: 1px solid #899094;
        border-left: 0px;

    }
    .input-style:focus
    {
        box-shadow: 0px 0px 8px #c9f4f5;
        border-color: rgb(231, 227, 227);
    }

    .vsuccess
    {
        @include padding-top8;
        color : #0c8556;
    }

    .vfailed
    {
        color : rgb(201, 86, 86);
        @include padding-top8;
    }
</style>