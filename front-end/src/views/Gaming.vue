<template>
  <div class="root">
    <div class="nav-bar">
      <div class="logo-search-container">
        <router-link to="/home">
          <img src="../../images/circle-logo.png" />
        </router-link>
        <div class="search-container">
          <i class="fas fa-search"></i>
          <input class="search" type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div class="logout-button" @click="logout()">
        <p class="sign-out-text">Sign Out</p>
      </div>
      <div class="icon-menu-container">
        <router-link class="menu-link" to="/home">
          <div class="menu-button">
            <i class="fas fa-home"></i>
          </div>
        </router-link>
        <router-link class="menu-link" to="/watch">
          <div class="menu-button">
            <i class="fas fa-tv"></i>
          </div>
        </router-link>
        <router-link class="menu-link" to="/marketplace">
          <div class="menu-button">
            <i class="fas fa-store"></i>
          </div>
        </router-link>
        <router-link class="menu-link" to="/groups">
          <div class="menu-button">
            <i class="fas fa-users"></i>
          </div>
        </router-link>
        <router-link class="menu-link" to="/gaming">
          <div class="menu-button active">
            <i class="fab fa-gofore"></i>
          </div>
        </router-link>
      </div>
      <div class="right-icon-container">
        <div class="profile-title">
          <img src="../../images/facebook-user.jpg" />
          <span>Name</span>
        </div>
        <div class="circle first-icon">
          <i class="fas fa-plus"></i>
        </div>
        <div class="circle">
          <i class="fab fa-facebook-messenger"></i>
        </div>
        <div class="circle">
          <i class="fas fa-bell"></i>
        </div>
        <div class="circle">
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="left-column">
        <div class="gaming-title">
          <h1>Gaming</h1>
          <div class="circle">
            <i class="fas fa-bell"></i>
          </div>
        </div>
        <div class="divider"></div>
        <div class="scrollable-column">
          <div class="button-container">
            <div class="column-button active-button">
              <div class="button-circle">
                <i class="fas fa-play"></i>
              </div>
              <span>Gaming Video</span>
            </div>
          </div>
          <div class="inset-button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-file-video"></i>
              </div>
              <span>Browse Games</span>
            </div>
          </div>
          <div class="inset-button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-user"></i>
              </div>
              <span>Browse Streamers</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-gamepad"></i>
              </div>
              <span>Live</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-trophy"></i>
              </div>
              <span>Tournaments</span>
            </div>
          </div>
          <div class="thick-divider"></div>
          <div class="column-rec-button column-active">
            <span>
              <i class="fas fa-video"></i> Go Live
            </span>
          </div>
          <div class="column-rec-button">
            <span>
              <i class="fas fa-user"></i> Streamer Dashboard
            </span>
          </div>
          <div class="column-rec-button">
            <span>
              <i class="fas fa-trophy"></i> Create Tournament Event
            </span>
          </div>
          <div class="thick-divider"></div>
          <div class="column-sub-title">
            <h2>Live Esports</h2>
          </div>
        </div>
      </div>
      <div class="main-content"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignedIn",
  methods: {
    async logout() {
      let response = await axios.post("/api/logout", {
        sessionID: this.$root.$data.sessionID
      });

      if (response.status == 200) {
        this.$root.$data.sessionID = null;
        this.$router.push({ path: "/" });
        location.reload();
      }
    }
  }
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ced0d4;
  border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ced0d4;
}

.root {
  font-family: Helvetica, Arial, sans-serif;
}

textarea:focus,
input:focus {
  outline: none;
}

.router-link-active {
  text-decoration: none;
}

.nav-bar {
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 3px solid rgba(233, 233, 233, 0.904);
  display: flex;
  justify-content: space-between;
}

.logo-search-container {
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-search-container img {
  margin-right: 8px;
  width: 43px;
  height: 43px;
}

.search-container {
  width: 240px;
  height: 40px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}

.search-container i {
  margin-right: 10px;
  color: gray;
}

.search {
  height: 30px;
  width: 200px;
  background-color: #f0f2f5;
  border: none;
}

.search::placeholder {
  font-size: 14px;
}

.logout-button {
  width: 100px;
  height: 30px;
  margin-top: 15px;
  border: 2px solid #1877f2;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: -120px;
}

.sign-out-text {
  font-weight: 600;
  color: #1877f2;
}

.icon-menu-container {
  display: flex;
  justify-content: space-around;
  margin-left: -160px;
}

.menu-link {
  text-decoration: none;
}

.menu-link i {
  font-size: 24px;
  color: #606266;
}

.menu-button {
  width: 112px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-button:hover {
  background-color: #f0f2f5;
  border-radius: 10px;
}

.active i {
  color: #1877f2;
}

.active {
  border-bottom: 3px solid #1877f2;
}

.active:hover {
  background-color: #fff;
  border-radius: 0;
}

.right-icon-container {
  width: 320px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.profile-title {
  width: 80px;
  height: 36px;
  border-radius: 30px;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.profile-title img {
  border-radius: 130px;
  width: 28px;
}

.profile-title span {
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
}

.profile-title:hover {
  background-color: #f0f2f5;
}

.first-icon {
  margin-left: 15px;
}

.circle {
  width: 40px;
  height: 40px;
  background-color: #e4e6eb;
  border-radius: 115px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.circle i {
  font-size: 18px;
}

.circle:hover {
  background-color: #d8dadf;
}

.wrapper {
  background-color: #f0f2f5;
  display: flex;
  justify-content: space-between;
}

.left-column {
  width: 360px;
  height: 690px;
  background-color: #fff;
  border-right: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.gaming-title {
  width: 340px;
  height: 17px;
  margin: 20px 16px 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gaming-title h1 {
  color: #1c1e21;
  font-size: 24px;
  font-weight: 600;
}

.gaming-title i {
  color: #5b626a;
}

.divider {
  width: 328px;
  margin: 0 16px;
  margin-bottom: 5px;
  border-bottom: 1px solid #ced0d4;
}

.scrollable-column {
  height: 84%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.button-container {
  width: 344px;
  height: 52px;
  padding: 0 8px;
}

.inset-button-container {
  width: 335px;
  height: 52px;
  padding: 0 8px;
  margin-left: 10px;
  font-size: 14px;
}

.column-button {
  width: 328px;
  height: 52px;
  padding: 0 8px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.button-circle {
  border-radius: 130px;
  background-color: #e4e6eb;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-circle i {
  color: #606770;
  font-size: 15px;
}

.column-button span {
  margin-left: 10px;
  font-weight: 600;
}

.column-button:hover {
  background-color: #f2f2f2;
}

.active-button {
  background-color: #e9f3ff;
}

.active-button .button-circle {
  background-color: #1877f2;
}

.active-button i {
  color: #fff;
}

.active-button:hover {
  background-color: #e9f3ff;
}

.column-rec-button {
  background-color: #e4e6eb;
  width: 304px;
  height: 36px;
  padding: 0 12px;
  margin-left: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 10px;
}

.column-rec-button:hover {
  background-color: #d8dadf;
}

.column-active {
  background-color: #e9f3ff;
}

.column-active span {
  color: #1877f2;
  font-weight: 600;
  font-size: 15px;
}

.column-active:hover {
  background-color: #dbe7f2;
}

.thick-divider {
  width: 328px;
  margin: 8px 16px;
  border-bottom: 1.5px solid #ced0d4;
}

.column-sub-title {
  width: 328px;
  height: 12px;
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.column-sub-title h2 {
  font-size: 16px;
  font-weight: 600;
}

@media only screen and (min-height: 800px) {
  .left-column {
    height: 800px;
  }

  .main-content {
    height: 800px;
  }
}
</style>