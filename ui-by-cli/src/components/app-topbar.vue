<template>
    <header class="header-style" title="mixam-top-bar-container"> <!--custom container-->
    <!--I have two columns, one contains the logo and mixam's text, the second contains the hamburger menu-->
            <div class="headerwrapper" >
                <!--row for logo and hamburger-->
                <div class="header-block block01">
                    <div class="row no-margin">
                        <div class="col-10 no-padding">
                            <div class="content-container">
                                <p title="company name" class="company-name"><img class="mixamlogo" alt="Mixam Logo" title="awesome mixam logo" src="../assets/logo.png"> <span>Mixam</span> </p>
                            </div>
                        </div>
                        <div class="col-2 no_padding">
                            <div class="content-container">
                                <div class="tight ham-container">
                                   <tasty-burger-button
                                        :type = "ham.buttonType"
                                        :active = "ham.active"
                                        :size = "ham.size"
                                        :color = "ham.color"
                                        :active-color = "ham.activeColor"
                                        v-on:toggle ="onToggle()"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--row for displaying current page-->
                <div class="header-block block02">
                    <div class="row">
                        <div id="icon-container">
                            <div class="content-container ">
                                <i v-bind:class="iconNames[currentPage.object]"></i>
                            </div>
                        </div>
                        <div id="current-page-container">
                            <div class="content-container">
                                <p class="current-page">{{currentPage.presentable}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <section v-if="menuOpen" class="main-menu animate__animated animate__slideInRight">
            <div class="userLoggedInBox" v-if="userLoggedIn" title="user not logged in info with login button">
                <div class="row no-padding animate__animated animate__fadeIn"> <!--this is the row for a logged in user.-->
                    <div class="col-4 no-padding">
                        <div class="img-avatar-container" v-if="user.hasImage"><!--user has image***********************************************-->
                            <img class="user-img-avatar" v-bind:src="user.ImageLink">
                        </div>
                        <div v-if="!user.hasImage"><!--user doesn't have image-->
                            <div class="user-name-avatar">
                                <p>{{user.avatarCustomName}}A<br>Adefuy...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 no-padding">
                        <div class="content-container login-details">
                            <p class="semibold-text">{{user.fullname}}Diang Gana</p>
                            <p class="regular-text">Status : Logged In</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="userNotLoggedInBox" v-if="!userLoggedIn" title="user profile details">
                <div class="guest-user-area">
                    <p>You are using this site as a guest user and cannot access all the features such as posting, commenting, free learning etc.</p>
                    <div class="login-signup container">
                        <div class="row no-padding">
                            <div class="col-6 no-padding">
                                <!--custom made buttons for my login and sign up-->
                                <button @click="openLogin()" class="btn small login">Login</button>
                            </div>
                            <div class="col-6 no-padding">
                                <button @click="openSignup()" class="btn small signup">Sign Up</button>
                            </div>
                            <!--
                            <div class="col-6 no-padding">
                                <button class="btn theme">Button</button>
                            </div>
                            <div class="col-6 no-padding">
                                <button class="btn utils">Button</button>
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
            <nav class="menu nav">
                <ul>
                    <li class="nav-active"> <router-link to="/"><i class="fas fa-house-user icon-color1"></i>Home</router-link></li>
                    <li  v-if="userLoggedIn" > <router-link to="/my-page"><i class="fas fa-newspaper icon-color1"></i>My Page</router-link></li>
                    <li  v-if="userLoggedIn" > <router-link to="/learning"><i class="fas fa-book-open icon-color1"></i>Start Learning</router-link></li>
                    <li  v-if="userLoggedIn" > <router-link to="/community-feed"><i class="fas fa-users icon-color1"></i>Community</router-link></li>
                    <li  v-if="userLoggedIn" > <router-link to="/notification"><i class="fas fa-bell icon-color1"></i>Notification</router-link></li>
                    <li  v-if="userLoggedIn" > <router-link to="/account-settings"><i class="fas fa-user icon-color1"></i>Account Settings</router-link></li>
                    <li v-if="userLoggedIn" v-on:click="openBusinessMenu()"> <i class="fas fa-laptop icon-color1"></i>My Businesses <i v-if="businessMenuOpen" class="fas fa-caret-up"></i><i v-if="!businessMenuOpen" class="fas fa-caret-down"></i></li>
                    <li v-if="businessMenuOpen">
                        <div class="my-business-menu">
                            <p v-for="business in businessList" v-bind:key="business.id">
                                <router-link v-bind:to="business.link">{{business.type}}:{{business.name}}</router-link>
                            </p>
                            <p>
                                <router-link to="/now">VTU : spatak</router-link>
                            </p>
                             <p>
                                <router-link to="/now">VTU : spatak</router-link>
                            </p>
                            <vs-button v-on:click="openNewBusinessModal()">
                                <p class="no-border-bottom"><i class="fas fa-plus icon-color1"></i> Add new business</p>
                            </vs-button>
                        </div>
                    </li>
                    <li  v-if="userLoggedIn" > <router-link to="/manage-payments"><i class="fas fa-credit-card icon-color1"></i>Manage Payments</router-link></li>
                    <li> <router-link to="/feedback"><i class="fas fa-comment icon-color1"></i>Feedback/Complaint</router-link></li>
                </ul>
            </nav>
        </section>
        <p v-bind:user="userLoggedIn"></p>
    </header>
</template>
<script>

import { TastyBurgerButton } from "vue-tasty-burgers";

export default {
    data(){
        return {
            name : "topbar",
            ham : {
                buttonType : "elastic",
                active : false,
                size: "xs",
                color : "#1a7a7d",
                activeColor : "#1a7a7d"
            },
            iconNames : {
                "account-settings": "fas fa-user",
                "business-admin" : "fas fa-laptop",
                "business-config" : "fas fa-laptop",
                "business-tutorial" : "fas fa-laptop",
                "community-feed" : "fas fa-users",
                "community-post" : "fas fa-location-arrow",
                "feedback-complaint" : "fas fa-comment",
                home : "fas fa-house-user",
                "learning-courselist" : "fas fa-book-open",
                "learning-mycourses" : "fas fa-book-open",
                "learning-classroom" : "fas fa-book-open",
                "my-page" : "fas fa-newspaper",
                notification : "fas fa-bell",
                "manage-payments" : "fas fa-credit-cards"
            },
            businessMenuState : false,
            route : this.$route,
            menuState : false,
        }
    },
    methods : {
        onToggle : function(){
            //open app menu
            // update active state.
            this.menuOpen ? this.menuOpen = !this.menuState : this.menuOpen = !this.menuState;
        },
        openBusinessMenu : function(){
            // updates the business menuOpen state.
            this.businessMenuOpen ? this.businessMenuOpen = !this.businessMenuOpen  : this.businessMenuOpen = !this.businessMenuOpen;
        },
        openNewBusinessModal : function(){
            //closes menu and
            //openNewBusinessModal and Generates the link to their business page.
            // it simply updates the global store and the modal embeded in app.vue is updated "lol."
            return true;
        },
        openLogin : function () {
        this.$store.commit('openlogin');
        console.log(this.$store.state.loginOpen, "loginOpen");
        },
        openSignup : function (){
        this.$store.commit('opensignup');
        console.log(this.$store.state.loginOpen, "signupOpen");
        },
    },
    computed : {
        userLoggedIn : function (){
            // checks the global store and returns a result true or false.
            return this.$store.state.userLoggedIn;
        },
        currentPage : function (){
            // returns the current page of the app, gotten from the global store.
            //returns an object that contains a presentable variant, a js object matching variant and the normal i.e
            // {presentable : "", object : "" , normal : ""}
            console.log(this.route);
            return {object: "home" , presentable: "Home"};
        },
        hamIsActive : function () {
            return {
                  get : function (){
                      return this.ham.active;
                },
                set : function (value) {
                    this.ham.active = value;
                }
            }
        },
        businessMenuOpen : {
                get : function (){
                    return this.businessMenuState;
                },
                set : function(value){
                    this.businessMenuState = value
                }
        },
        businessList : function (){
            // perform request and updates the business list
            // return an array of objects containing info on which businesses the client has opened with us.
            return [];
        },
        user : function (){
            // checks the globalObject for the neccesary object containiing logged in users info.
            return {};
        },
        menuOpen : {
                get : function (){
                    return this.menuState
                },
                set : function (value){
                    return this.menuState = value
                }
            }
    },
    components : {
        "tasty-burger-button" : TastyBurgerButton
    }
}
</script>
<style lang="scss">

    .header-style
    {
        position: absolute;
        z-index: 1;
        width: 100%;
        box-sizing: border-box;
    }

    .company-name
    {
        font-family: $theme-header-font1;
        font-size : 23px;
        color: $theme-text-main;
    }

    .company-name span
    {
        @include padding-left8;
        position: relative;
        bottom: 1px;
    }

    [class~="ham-container"]{
        position: relative;
        bottom: -1px;
        left: 80%;
    }
    .mixam-logo
    {
        position : relative;
        top: 1px;
    }

    [class~="headerwrapper"]
    {
        background-color: white;
        box-shadow: 0px 0px 0px $theme-blue;
        position: fixed;
        z-index: 1;
        width: 100%;
    }

    #icon-container
    {
        padding-left: 18px;
        padding-right: 16px;
        padding-top: 8px;
        padding-right: 0px;
        max-width: 50px;
        min-width: 42px;
    }

    #current-page-container{
        @include padding-left8;
        background-color: white;
        @include padding-top8;
        @include padding-bottom8;
        flex: 1;
    }

    .current-page
    {
        font-family : $theme-view-font1-regular;
        padding-left: 0px;
        text-align: left;
    }

    .header-block.block01
    {
         box-sizing: border-box;
        @include padding-left1;
        @include padding-right1;
        @include padding-top8;
        @include padding-bottom8;
        box-shadow: 0px 0px 3px white;
    }
    .header-block.block02
    {
        box-shadow : 0px 0px 3px $theme-blue;
    }

    .headerwrapper p {
        width: 100% !important;
    }
    .main-menu
    {
        position: fixed;
    width: 100%;
    background-color: white;
    box-sizing: border-box;
    box-shadow: 0px 0px 2px #deecfe;
    padding: 16px;
    padding-top: 82px;
    height: 100vh;
    overflow-y: scroll;
        padding-right: 4px;
    }

    .main-menu li
    {
        list-style-type: none;
        @include padding-top8;
        @include padding-bottom8;
    }

    .main-menu li a
    {
        text-decoration: none;
        color: $theme-text-main;
    }

    ul{
        padding: 0px;
    }

    li i
    {
        @include padding-right8;
        font-size: 85%;
    }

    .my-business-menu
    {
        width: 100%;
        background-color: $theme-blue-shade2;
        border-radius: 10px;
    }

    .my-business-menu p{
        text-align: center;
        @include padding-top8;
        @include padding-bottom8;
        border-bottom: 1px solid white;
    }

    .no-border-bottom
    {
        border-bottom: 0px solid;
    }

    .my-business-menu button
    {
        background-color: rgb(251, 230, 159);
        border: 0px solid;
        margin: 9px 0% 9px 20%;
        border-radius: 5px;
        width: 70%;
        padding: 0px;
    }

    .menu.nav
    {
        margin-top : 16px;
    }

    [class~="nav-active"]
    {
        @include padding-left8;
        width: 100%;
        border-radius: 3px;
        background-color: $theme-blue;
        box-shadow: 0px 0px 1px #83c6ca;
    }

    [class~="img-avatar-container"]
    {
        box-sizing: border-box;
    }

    [class~="user-img-avatar"]
    {
        box-sizing: border-box;
    }

    .user-name-avatar
    {
        background-color: #91e18e;
        border-radius: 50%;
        height: 68px;
        width: 68px;
        border: 2px solid #9e9ee8;
        color: white;
    }

    .user-name-avatar p
    {
        text-align: center;
        margin-top: 13px;
        font-size: 70%;
        letter-spacing: 1.5px;
    }

    .guest-user-area
    {
        box-sizing: border-box;
        text-align: center;
        font-size: 90%;
        line-height: 23px;
    }

    .guest-user-area p{
        margin-bottom: 15px;
    }

    .userLoggedInBox
    {
        padding: 16px 16px 16px 16px;
        border-radius: 10px;
        background-color:$theme-blue;
        margin-bottom: 15px;
    }

    .userNotLoggedInBox
    {
        box-sizing: border-box;
        background-color: $theme-blue;
        border-radius: 10px;
        padding: 16px;
    }

    [class~="login-details"]
    {
        margin-top: 17px;
        color: $theme-text-main;
        font-size: 90%;
    }
    .no-border-bottom{
        border:0px solid;
    }
    .new-acct-text
    {
        text-align: center;
        padding: 10px;
    }
    .mixamlogo{
        width: 26px;
    }
    .row{
        margin : 0px !important;
    }
</style>