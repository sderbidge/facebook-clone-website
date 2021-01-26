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
          <div class="menu-button active">
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
        <div class="groups-title">
          <h1>Groups</h1>
          <div class="circle">
            <i class="fas fa-cog"></i>
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
                <i class="far fa-images"></i>
              </div>
              <span>Your Feed</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-binoculars"></i>
              </div>
              <span>Discover</span>
            </div>
          </div>
          <div class="new-group-container">
            <span>+ Create New Group</span>
          </div>
          <div class="thick-divider"></div>
          <div class="column-sub-title">
            <h2>Groups You Manage</h2>
          </div>
          <div class="group-button">
            <div class="rounded-square"></div>
            <div class="group-info">
              <span class="group-name">Group Name</span>
              <span class="last-active">Last Active 1 year ago</span>
            </div>
          </div>
          <div class="thick-divider"></div>
          <div class="column-sub-title">
            <h2>Your Groups</h2>
          </div>
          <div class="group-button">
            <div class="rounded-square"></div>
            <div class="group-info">
              <span class="group-name">Group Name</span>
              <span class="last-active">Last Active 1 day ago</span>
            </div>
          </div>
          <div class="group-button">
            <div class="rounded-square"></div>
            <div class="group-info">
              <span class="group-name">Group Name</span>
              <span class="last-active">Last Active 1 day ago</span>
            </div>
          </div>
          <div class="group-button">
            <div class="rounded-square"></div>
            <div class="group-info">
              <span class="group-name">Group Name</span>
              <span class="last-active">Last Active 2 days ago</span>
            </div>
          </div>
          <div class="group-button">
            <div class="rounded-square"></div>
            <div class="group-info">
              <span class="group-name">Group Name</span>
              <span class="last-active">Last Active a week ago</span>
            </div>
          </div>
          <div class="group-button">
            <div class="rounded-square"></div>
            <div class="group-info">
              <span class="group-name">Group Name</span>
              <span class="last-active">Last Active 2 weeks ago</span>
            </div>
          </div>
          <div class="group-button">
            <div class="rounded-square"></div>
            <div class="group-info">
              <span class="group-name">Group Name</span>
              <span class="last-active">Last Active 2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="main-column">
          <div class="recent-container">
            <span>RECENT ACTIVITY</span>
          </div>
          <div class="post-container post-shadow">
            <div class="post-header">
              <img
                src="https://s3.amazonaws.com/uifaces/faces/twitter/joannefournier/128.jpg"
              />
              <div class="post-header-middle">
                <h4>
                  Melody Mann
                  <i class="fas fa-caret-right"></i> Programming Memes
                </h4>
                <span>1 hr</span>
              </div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post-content">
              <span>
                Velit odit quidem laudantium. Ut molestiae adipisci molestias
                temporibus dicta. Placeat excepturi ipsum earum voluptates.
              </span>
              <img
                class="post-image"
                src="https://starecat.com/content/wp-content/uploads/doctors-googling-stuff-online-does-not-make-you-a-doctor-programmers-confused.jpg"
              />
            </div>
            <div class="post-bottom">
              <div class="reactions-container">
                <div class="reactions">
                  <img src="../../images/laughing.png" />
                  <img src="../../images/like.png" />
                  <img src="../../images/heart.png" />
                  <span>42</span>
                </div>
              </div>
              <div class="post-buttons">
                <div class="post-button">
                  <i class="far fa-thumbs-up"></i>
                  <span>Like</span>
                </div>
                <div class="post-button">
                  <i class="far fa-comment"></i>
                  <span>Comment</span>
                </div>
              </div>
            </div>
            <div class="bottom-buttons-bar"></div>
            <div class="write-comment-container">
              <img src="../../images/facebook-user.jpg" />
              <div class="comment-text-container">
                <input type="text" placeholder="Write a comment.." />
                <div class="comment-icon-container">
                  <i class="far fa-smile"></i>
                </div>
                <div class="comment-icon-container">
                  <i class="fas fa-camera"></i>
                </div>
                <div class="comment-icon-container">
                  <i class="far fa-square"></i>
                </div>
                <div class="comment-icon-container">
                  <i class="far fa-file-image"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="post-container post-shadow">
            <div class="post-header">
              <img
                src="https://s3.amazonaws.com/uifaces/faces/twitter/billyroshan/128.jpg"
              />
              <div class="post-header-middle">
                <h4>
                  Rowan O'Connell
                  <i class="fas fa-caret-right"></i> Programming Memes
                </h4>
                <span>2 hrs</span>
              </div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post-content">
              <span>
                Neque sed officiis ratione dolores. Laborum magnam amet adipisci
                iure iste quia. Aliquid inventore consequatur. Omnis esse animi
                soluta repudiandae aut enim voluptas quia omnis.
              </span>
              <img
                class="post-image"
                src="https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-56.png"
              />
            </div>
            <div class="post-bottom">
              <div class="reactions-container">
                <div class="reactions">
                  <img src="../../images/laughing.png" />
                  <img src="../../images/like.png" />
                  <span>93</span>
                </div>
              </div>
              <div class="post-buttons">
                <div class="post-button">
                  <i class="far fa-thumbs-up"></i>
                  <span>Like</span>
                </div>
                <div class="post-button">
                  <i class="far fa-comment"></i>
                  <span>Comment</span>
                </div>
              </div>
            </div>
            <div class="bottom-buttons-bar"></div>
            <div class="write-comment-container">
              <img src="../../images/facebook-user.jpg" />
              <div class="comment-text-container">
                <input type="text" placeholder="Write a comment.." />
                <div class="comment-icon-container">
                  <i class="far fa-smile"></i>
                </div>
                <div class="comment-icon-container">
                  <i class="fas fa-camera"></i>
                </div>
                <div class="comment-icon-container">
                  <i class="far fa-square"></i>
                </div>
                <div class="comment-icon-container">
                  <i class="far fa-file-image"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="post-container post-shadow">
            <div class="post-header">
              <img
                src="https://s3.amazonaws.com/uifaces/faces/twitter/hasslunsford/128.jpg"
              />
              <div class="post-header-middle">
                <h4>
                  Verla Murray
                  <i class="fas fa-caret-right"></i> Programming Memes
                </h4>
                <span>2 hrs</span>
              </div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post-content">
              <span>
                Quos quas recusandae voluptatem eius earum quam. Minus et
                distinctio autem aspernatur. Ipsam sunt consequatur ullam
                tenetur praesentium quibusdam omnis. Voluptatem perferendis
                repellat sit laboriosam sunt. Dolor ut voluptates earum laborum
                eius.
              </span>
              <img
                class="post-image"
                src="https://qph.fs.quoracdn.net/main-qimg-e6254d8b9a4a91ea16070fa278f8ee5a"
              />
            </div>
            <div class="post-bottom">
              <div class="reactions-container">
                <div class="reactions">
                  <img src="../../images/laughing.png" />
                  <img src="../../images/heart.png" />
                  <span>112</span>
                </div>
              </div>
              <div class="post-buttons">
                <div class="post-button">
                  <i class="far fa-thumbs-up"></i>
                  <span>Like</span>
                </div>
                <div class="post-button">
                  <i class="far fa-comment"></i>
                  <span>Comment</span>
                </div>
              </div>
            </div>
            <div class="bottom-buttons-bar"></div>
            <div class="write-comment-container">
              <img src="../../images/facebook-user.jpg" />
              <div class="comment-text-container">
                <input type="text" placeholder="Write a comment.." />
                <div class="comment-icon-container">
                  <i class="far fa-smile"></i>
                </div>
                <div class="comment-icon-container">
                  <i class="fas fa-camera"></i>
                </div>
                <div class="comment-icon-container">
                  <i class="far fa-square"></i>
                </div>
                <div class="comment-icon-container">
                  <i class="far fa-file-image"></i>
                </div>
              </div>
            </div>
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
        sessionID: this.$root.$data.sessionID,
      });

      if (response.status == 200) {
        this.$root.$data.sessionID = null;
        this.$router.push({ path: "/" });
        location.reload();
      }
    },
  },
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

.groups-title {
  width: 340px;
  height: 17px;
  margin: 20px 16px 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.groups-title h1 {
  color: #1c1e21;
  font-size: 24px;
  font-weight: 600;
}

.groups-title i {
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

.new-group-container {
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

.new-group-container span {
  color: #1877f2;
  font-weight: 600;
  font-size: 15px;
}

.new-group-container:hover {
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
  margin-top: 20px;
  margin-bottom: 10px;
}

.column-sub-title h2 {
  font-size: 16px;
  font-weight: 600;
}

.group-button {
  width: 328px;
  height: 76px;
  padding: 0 8px;
  margin-left: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.group-button:hover {
  background-color: #f2f2f2;
}

.rounded-square {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: gray;
}

.group-info {
  width: 256px;
  height: 42px;
  padding: 12px 0;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.group-name {
  font-size: 15px;
  font-weight: 600;
}

.last-active {
  font-size: 12px;
  color: gray;
}

.main-content {
  width: 1159px;
  height: 690px;
  height: 690px;
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}

.main-content::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}

.main-column {
  width: 590px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.post-shadow {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
}

.recent-container {
  margin-top: 25px;
  width: 100%;
  margin-bottom: 10px;
}

.recent-container span {
  color: dimgray;
  font-size: 14px;
  font-weight: 600;
}

.post-container {
  width: 590px;
  height: auto;
  margin-bottom: 15px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 0;
  margin-bottom: 10px;
  color: #65676b;
}

.post-header img {
  width: 40px;
  height: 40px;
  border-radius: 130px;
  cursor: pointer;
}

.post-header-middle {
  width: 474px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.post-header-middle h4 {
  font-size: 14px;
  color: black;
  cursor: pointer;
}

.post-header-middle h4 i {
  color: dimgray;
  text-decoration: none !important;
}

.post-header-middle span {
  width: 474px;
  font-size: 13px;
  color: #65676b;
  cursor: pointer;
}

.post-header-middle span:hover {
  text-decoration: underline;
}

.post-header i {
  cursor: pointer;
}

.post-content {
  padding: 4px 16px;
}

.post-image {
  margin-top: 10px;
  width: 100%;
  height: auto;
  cursor: pointer;
}

.post-bottom {
  width: 590px;
  height: 83px;
}

.reactions-container {
  width: 558px;
  height: 22px;
  padding: 10px 0;
  margin: 0 16px;
  border-bottom: 1px solid #ced0d4;
}

.reactions {
  width: 558px;
  height: 22px;
  display: flex;
  justify-content: flex-start;
}

.reactions img {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.reactions span {
  margin-left: 5px;
  color: #65676b;
}

.post-buttons {
  width: 558px;
  height: 32px;
  padding: 4px 0;
  margin: 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-button {
  width: 270px;
  height: 32px;
  background: #fff;
  color: #65676b;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.post-button span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-button:hover {
  background: #f2f3f5;
}

.post-button span {
  margin-left: 5px;
}

.bottom-buttons-bar {
  width: 558px;
  padding-top: 4px;
  border-top: 1px solid #ced0d4;
  margin: 0 16px;
}

.write-comment-container {
  width: 558px;
  height: 35px;
  padding: 4px 16px;
  display: flex;
  justify-content: flex-start;
}

.write-comment-container img {
  width: 32px;
  height: 32px;
  border-radius: 130px;
}

.comment-text-container {
  background-color: #f0f2f5;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 520px;
  height: 35px;
  margin-left: 5px;
}

.comment-text-container input {
  width: 384px;
  height: 16px;
  padding: 10px 12px 9px 12px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}

.comment-text-container input::placeholder {
  font-size: 15px;
}

.comment-icon-container {
  width: 16px;
  height: 16px;
  padding: 8px 6px;
}

.comment-icon-container i {
  width: 16px;
  height: 16px;
  color: #65676b;
  cursor: pointer;
}
</style>