<template>
  <div class="root">
    <div class="menubar-container">
      <div class="menubar">
        <router-link to="/">
          <img src="../../images/logo.png" />
        </router-link>
      </div>
    </div>
    <div class="wrapper">
      <div class="main-content">
        <center>
          <div class="sign-up">
            <h1>We just need a little more information to create your account.</h1>
            <div class="input-fields">
              <form v-on:submit.prevent="register" class="pure-form">
                <input v-model="firstName" placeholder="First name" />
              </form>
              <form v-on:submit.prevent="register" class="pure-form">
                <input v-model="lastName" placeholder="Last name" />
              </form>
            </div>
            <div class="register-button" @click="register()">
              <p>Register</p>
            </div>
          </div>
        </center>
      </div>
    </div>
    <div class="footer-container">
      <div class="footer">
        <div class="upper-list">
          <ul class="ul-list">
            <li id="english">English (US)</li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="Spanish">Español</a>
            </li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="French (France)">Français (France)</a>
            </li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="Simplified Chinese (China)">中文(简体)</a>
            </li>
            <li>
              <a class="li-link" dir="rtl" href="#" title="Arabic">العربية</a>
            </li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="Portuguese (Brazil)">Português (Brasil)</a>
            </li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="Korean">한국어</a>
            </li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="Italian">Italiano</a>
            </li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="German">Deutsch</a>
            </li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="Hindi">हिन्दी</a>
            </li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="Japanese">日本語</a>
            </li>
          </ul>
        </div>
        <div class="content-curve"></div>
        <div id="page-footer-children" aria-label="Facebook site links">
          <ul class="ul-list page-footer-link-list">
            <li>
              <a class="li-link" href="#" title="Sign Up for Facebook">Sign Up</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Log into Facebook">Log In</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Check out Messenger.">Messenger</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Facebook Lite for Android.">Facebook Lite</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our Watch videos.">Watch</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our people directory.">People</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our pages directory.">Pages</a>
            </li>
            <li>
              <a class="li-link" href="#">Page Categories</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Check out popular places on Facebook.">Places</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Check out Facebook games.">Games</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our places directory.">Locations</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Buy and sell on Facebook Marketplace.">Marketplace</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our Groups directory.">Groups</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Learn more about Portal from Facebook">Portal</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Check out Instagram">Instagram</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our Local Lists directory.">Local</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Donate to worthy causes.">Fundraisers</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our Facebook Services directory.">Services</a>
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Read our blog, discover the resource center, and find job opportunities."
              >About</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Advertise on Facebook.">Create Ad</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Create a Page">Create Page</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Develop on our platform.">Developers</a>
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Make your next career move to our awesome company."
              >Careers</a>
            </li>
            <li>
              <a
                class="li-link"
                data-nocookies="1"
                href="#"
                title="Learn about your privacy and Facebook."
              >Privacy</a>
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Learn about cookies and Facebook."
                data-nocookies="1"
              >Cookies</a>
            </li>
            <li>
              <a
                class="li-link"
                data-nocookies="1"
                href="#"
                title="Learn about Ad Choices."
              >Ad Choices</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Review our terms and policies.">Terms</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Visit our Help Center.">Help</a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <div>
            <span>Facebook © 2020</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    async register() {
      let response = await axios.post("/api/register", {
        firstName: this.firstName,
        lastName: this.lastName,
        sessionID: this.$root.$data.sessionID
      });
      console.log(response);
      if (response.status === 200) {
        this.$router.push({ path: "/home" });
      }
    }
  }
};
</script>

<style scoped>
.root {
  font-family: Helvetica, Arial, sans-serif;
}

.menubar-container {
  background-image: linear-gradient(#4d68a1, #3b5998);
  width: 100%;
  height: 82px;
  font-size: 12px;
}

.menubar {
  width: 988px;
  height: 77.8px;
  padding-top: 13px;
  margin: 0 269.9px;
  display: flex;
  justify-content: space-between;
}

.menubar img {
  width: 172px;
  height: 39px;
  margin-top: 16px;
}

.wrapper {
  background-color: #edf0f5;
  width: 100%;
  height: 624px;
}

.main-content {
  width: 980px;
  height: 584px;
  margin: 0 269px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  background-color: #edf0f5;
}

.sign-up {
  padding: 15px;
  border: 1px solid gray;
  border-radius: 10px;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.sign-up h1 {
  font-size: 24px;
}

.input-fields {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.input-fields input {
  margin-bottom: 20px;
  width: 300px;
  height: 30px;
}

.register-button {
  border: 1.5px solid #1877f2;
  border-radius: 15px;
  width: 100px;
  padding: 2px;
  cursor: pointer;
}

.register-button p {
  color: #1877f2;
  font-weight: 600;
}

.footer {
  width: 980px;
  height: 117px;
  margin: 0px 269px;
  color: #737373;
}

.upper-list {
  width: 980px;
  height: 28px;
  padding-top: 8px;
  margin-top: 20px;
}

.ul-list {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 12px;
}

.ul-list li {
  margin-left: 10px;
}

.li-link {
  color: #385898;
  cursor: pointer;
  text-decoration: none;
}

.li-link:hover {
  text-decoration: underline;
}

.content-curve {
  border-bottom: 1px solid #dddfe2;
  font-size: 1px;
  height: 8px;
  margin-bottom: 8px;
  margin-top: -10px;
}

.page-footer-children {
  width: 980px;
  height: 38px;
}

.page-footer-link-list li {
  margin-right: 11px;
  margin-bottom: 5px;
}

.copyright {
  width: 980px;
  height: 14px;
  margin: 20px 0px;
}

.copyright div span {
  margin-left: 13px;
}
</style>