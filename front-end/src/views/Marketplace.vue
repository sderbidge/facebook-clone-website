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
          <div class="menu-button active">
            <i class="fas fa-store"></i>
          </div>
        </router-link>
        <router-link class="menu-link" to="/groups">
          <div class="menu-button">
            <i class="fas fa-users"></i>
          </div>
        </router-link>
        <router-link class="menu-link" to="/gaming">
          <div class="menu-button">
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
        <div class="marketplace-title">
          <h1>Marketplace</h1>
          <div class="circle">
            <i class="fas fa-bell"></i>
          </div>
        </div>
        <div class="search-video-container">
          <div class="search-video">
            <i class="fas fa-search"></i>
            <input class="search" type="text" placeholder="Search videos" />
          </div>
        </div>
        <div class="divider"></div>
        <div class="scrollable-column">
          <div class="button-container">
            <div class="column-button active-button">
              <div class="button-circle">
                <i class="fas fa-store"></i>
              </div>
              <span>Browse All</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-users"></i>
              </div>
              <span>Groups</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-shopping-bag"></i>
              </div>
              <span>Store</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-user"></i>
              </div>
              <span>Your Account</span>
            </div>
          </div>
          <div class="new-listing-container">
            <span>+ Create New Listing</span>
          </div>
          <div class="thick-divider"></div>
          <div class="filter-button">
            <span>Provo, Utah · Within 40 miles</span>
          </div>
          <div class="thick-divider"></div>
          <div class="column-sub-title">
            <h2>Categories</h2>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-car"></i>
              </div>
              <span>Vehicles</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-home"></i>
              </div>
              <span>Property Rentals</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-tshirt"></i>
              </div>
              <span>Apparel</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-tag"></i>
              </div>
              <span>Classifieds</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <span>Electronics</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-video"></i>
              </div>
              <span>Entertainment</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-heart"></i>
              </div>
              <span>Family</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-tags"></i>
              </div>
              <span>Free Stuff</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-leaf"></i>
              </div>
              <span>Garden &amp; Outdoor</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-pencil-alt"></i>
              </div>
              <span>Hobbies</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-home"></i>
              </div>
              <span>Home Goods</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-wrench"></i>
              </div>
              <span>Home Improvement Supplies</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-home"></i>
              </div>
              <span>Home Sales</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-guitar"></i>
              </div>
              <span>Musical Instruments</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-tag"></i>
              </div>
              <span>Office Supplies</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-paw"></i>
              </div>
              <span>Pet Supplies</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-running"></i>
              </div>
              <span>Sporting Goods</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-gamepad"></i>
              </div>
              <span>Toys &amp; Supplies</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-tag"></i>
              </div>
              <span>Deals</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="blue-notif">
          <div class="blue-notif-inside">
            <div class="blue-notif-left-container">
              <div class="blue-notif-title">
                <span>COVID-19 Buyers and Sellers</span>
              </div>
              <div class="blue-notif-desc">
                <span>Please follow local guidelines about physical distancing and staying home.</span>
              </div>
              <div class="blue-notif-button" role="button">
                <span>Learn More</span>
              </div>
            </div>
            <img src="../../images/blue-boxes.png" />
          </div>
        </div>
      </div>
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

.marketplace-title {
  width: 340px;
  height: 17px;
  margin: 20px 16px 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.marketplace-title h1 {
  color: #1c1e21;
  font-size: 24px;
  font-weight: 600;
}

.marketplace-title i {
  color: #5b626a;
}

.search-video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  margin-bottom: 10px;
  margin-top: 5px;
}

.search-video {
  width: 300px;
  height: 40px;
  padding: 0 16px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
}

.search-video input {
  margin-left: 5px;
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

.column-button {
  width: 328px;
  height: 52px;
  padding: 0 8px;
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

.new-listing-container {
  background-color: #e9f3ff;
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
}

.new-listing-container span {
  color: #1877f2;
  font-weight: 600;
  font-size: 15px;
}

.new-listing-container:hover {
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

.filter-button {
  width: 344px;
  height: 27px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.filter-button span {
  font-size: 15px;
  font-weight: 600;
  color: #1877f2;
}

.filter-button:hover {
  background-color: #f2f2f2;
}

.main-content {
  width: 1159px;
  height: 362px;
}

.blue-notif {
  width: 94%;
  height: 131px;
  padding: 8px 0;
  margin: 0 16px;
  background-color: #1877f2;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.blue-notif-inside {
  width: 100%;
  height: 100%;
  margin: 16px;
  display: flex;
  justify-content: flex-start;
}

.blue-notif-inside img {
  width: 238px;
  height: 118px;
  margin-top: -15px;
}

.blue-notif-left-container {
  width: 76%;
}

.blue-notif-title {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}

.blue-notif-desc {
  color: #fff;
  font-size: 16px;
  margin-top: 5px;
}

.blue-notif-button {
  width: 77px;
  height: 36px;
  padding: 0 12px;
  background-color: #fff;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-weight: 600;
  font-size: 14px;
  color: black;
  cursor: pointer;
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