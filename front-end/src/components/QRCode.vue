<template>
  <div>
    <div ref="qr_code_spot" />
    <input type="hidden" id="letsAuthenticateIdUUID" name="let'sAuthUserId" :value="this.uuid" />
    <input
      type="hidden"
      id="letsAuthenticateIdDomain"
      name="let'sAuthDomain"
      :value="this.totalUrl"
    />
    <input
      type="hidden"
      id="letsAuthenticateIdClient"
      name="let'sAuthClientId"
      :value="this.clientID"
    />
  </div>
</template>

<script>
import qrcode from "qrcode-generator";
import axios from "axios";
export default {
  name: "qrcode",
  data: function() {
    return {
      uuid: "",
      totalUrl: "",
      authenticated: false,
      clientID: "hellothere"
    };
  },
  created: function() {
    this.totalUrl = "http://192.168.2.7:3000/api/login"; //CHANGE ME WHEN YOU'RE DONE
  },
  mounted: async function() {
    let response;
    try {
      if (this.$root.$data.sessionID === null) {
        console.log("Getting sessionID now");
        response = await axios.get("/api/sessionID");
        console.log("Response: ", response);
        console.log(response.data.sessionID);
        this.$root.$data.sessionID = response.data.sessionID;
      }
      this.uuid = this.$root.$data.sessionID;
    } catch (e) {
      console.log(e);
      console.log("Something broke in getting the UUID");
    }
    console.log("TotalURL: ", this.totalUrl);
    let typeNumber = 0; //auto-detection
    let errorCorrectionLevel = "Q"; //quartile (25% of surface can be distorted before becoming useless; might be able to change to L)
    let item = {
      url: this.totalUrl,
      uuid: this.uuid,
      clientID: "hellothere" //I'm guessing that we don't need this any more
    };
    console.log(item);
    let qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(JSON.stringify(item));
    qr.make();
    this.$refs.qr_code_spot.innerHTML = qr.createImgTag(4);
    for (let i = 0; i < 30; i++) {
      let loggedIn = await this.checkLogin(response.data.sessionID);
      console.log("Going into switch is: " + loggedIn + " with i = " + i); //remove after debugging
      switch (loggedIn) {
        case true:
          i = 31;
          this.login();
          break;
        case false:
          break;
        case "register":
          i = 31;
          this.register();
          break;
      }
      console.log(i);
      if (i === 29) {
        let response = await axios.post("/api/logout", {
          sessionID: this.$root.$data.sessionID
        });
        console.log(response.status);
        this.$root.$data.sessionID = null;
        this.$root.$data.sessionTimedOut = true;
      }
    }
  },
  methods: {
    checkLogin(idIn) {
      let promise = new Promise(function(resolve) {
        setTimeout(
          async sessionID => {
            let response = await axios.get("/api/active/" + sessionID);
            console.log(response.data);
            resolve(response.data);
          },
          3000,
          idIn,
          resolve
        );
      });
      return promise;
    },
    login() {
      this.$store.commit("login");
      this.$router.push({ path: "/home" });
    },
    register() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>