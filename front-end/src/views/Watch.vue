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
          <div class="menu-button active">
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
        <div class="watch-title">
          <h1>Watch</h1>
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
                <i class="fas fa-tv"></i>
              </div>
              <span>Home</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-camera-retro"></i>
              </div>
              <span>Shows</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-video"></i>
              </div>
              <span>Live</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle">
                <i class="fas fa-bookmark"></i>
              </div>
              <span>Saved Videos</span>
            </div>
          </div>
          <div class="thick-divider"></div>
          <div class="watchlist-container">
            <span class="watchlist-title">Your Watchlist</span>
            <span class="manage-title">Manage</span>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle"></div>
              <span>Page 1</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle"></div>
              <span>Page 2</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle"></div>
              <span>Page 3</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle"></div>
              <span>Page 4</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle"></div>
              <span>Page 5</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle"></div>
              <span>Page 6</span>
            </div>
          </div>
          <div class="button-container">
            <div class="column-button">
              <div class="button-circle"></div>
              <span>Page 7</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="video-feed">
          <div class="main-title-container">
            <h2>Top Videos for You</h2>
          </div>
          <div class="video-post">
            <div class="upper-post-container">
              <div class="upper-post">
                <div class="post-circle"></div>
                <div class="post-info">
                  <div class="page-title">
                    <span class="page-name">DolorumNobis</span>
                    <span class="page-dot">·</span>
                    <span class="follow">Follow</span>
                  </div>
                  <div class="date">June 5th</div>
                </div>
                <div class="options">
                  <i class="fas fa-ellipsis-h"></i>
                </div>
              </div>
              <div class="caption-container">
                <div class="video-title">Video Title</div>
                <div class="video-caption">
                  Commodi facilis minima est nam harum non autem.....
                  <span class="see-more">See More</span>
                </div>
              </div>
            </div>
            <div class="video-content"></div>
            <div class="bottom-post">
              <div class="post-buttons">
                <div class="like-button">
                  <i class="far fa-thumbs-up"></i>
                  <span class="button-title">Like</span>
                </div>
                <div class="comment-button">
                  <i class="far fa-comment"></i>
                  <span class="button-title">Comment</span>
                </div>
                <div class="share-button">
                  <i class="fas fa-share"></i>
                  <span class="button-title">Share</span>
                </div>
              </div>
              <div class="reactions-and-comments">
                <div class="reactions">
                  <img src="../../images/laughing.png" />
                  <img src="../../images/like.png" />
                  <img src="../../images/heart.png" />
                  <span class="number-reactions">122k</span>
                  <span class="reactions-dot">·</span>
                </div>
                <div class="comments">
                  <span>524 Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="video-post">
            <div class="upper-post-container">
              <div class="upper-post">
                <div class="post-circle"></div>
                <div class="post-info">
                  <div class="page-title">
                    <span class="page-name">SequiEst</span>
                    <span class="page-dot">·</span>
                    <span class="follow">Follow</span>
                  </div>
                  <div class="date">June 3rd</div>
                </div>
                <div class="options">
                  <i class="fas fa-ellipsis-h"></i>
                </div>
              </div>
              <div class="caption-container">
                <div class="video-title">Video Title</div>
                <div class="video-caption">
                  Quam consectetur doloremque dolores et eos......
                  <span class="see-more">See More</span>
                </div>
              </div>
            </div>
            <div class="video-content"></div>
            <div class="bottom-post">
              <div class="post-buttons">
                <div class="like-button">
                  <i class="far fa-thumbs-up"></i>
                  <span class="button-title">Like</span>
                </div>
                <div class="comment-button">
                  <i class="far fa-comment"></i>
                  <span class="button-title">Comment</span>
                </div>
                <div class="share-button">
                  <i class="fas fa-share"></i>
                  <span class="button-title">Share</span>
                </div>
              </div>
              <div class="reactions-and-comments">
                <div class="reactions">
                  <img src="../../images/like.png" />
                  <img src="../../images/heart.png" />
                  <img src="../../images/hug.png" />
                  <span class="number-reactions">3k</span>
                  <span class="reactions-dot">·</span>
                </div>
                <div class="comments">
                  <span>2.2k Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="video-post">
            <div class="upper-post-container">
              <div class="upper-post">
                <div class="post-circle"></div>
                <div class="post-info">
                  <div class="page-title">
                    <span class="page-name">OfficiisLaudantium</span>
                    <span class="page-dot">·</span>
                    <span class="follow">Follow</span>
                  </div>
                  <div class="date">June 1st</div>
                </div>
                <div class="options">
                  <i class="fas fa-ellipsis-h"></i>
                </div>
              </div>
              <div class="caption-container">
                <div class="video-title">Video Title</div>
                <div class="video-caption">
                  Quasi dolores magnam voluptatem hic.....
                  <span class="see-more">See More</span>
                </div>
              </div>
            </div>
            <div class="video-content"></div>
            <div class="bottom-post">
              <div class="post-buttons">
                <div class="like-button">
                  <i class="far fa-thumbs-up"></i>
                  <span class="button-title">Like</span>
                </div>
                <div class="comment-button">
                  <i class="far fa-comment"></i>
                  <span class="button-title">Comment</span>
                </div>
                <div class="share-button">
                  <i class="fas fa-share"></i>
                  <span class="button-title">Share</span>
                </div>
              </div>
              <div class="reactions-and-comments">
                <div class="reactions">
                  <img src="../../images/like.png" />
                  <img src="../../images/heart.png" />
                  <span class="number-reactions">112k</span>
                  <span class="reactions-dot">·</span>
                </div>
                <div class="comments">
                  <span>556 Comments</span>
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

.watch-title {
  width: 328px;
  height: 17px;
  margin: 20px 16px 12px 16px;
  display: flex;
  align-items: center;
}

.watch-title h1 {
  color: #1c1e21;
  font-size: 24px;
  font-weight: 600;
}

.search-video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  margin-bottom: 15px;
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
  overflow-y: scroll;
  overflow-x: hidden;
  height: 84%;
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

.thick-divider {
  width: 328px;
  margin: 8px 16px;
  border-bottom: 1.5px solid #ced0d4;
}

.watchlist-container {
  width: 328px;
  height: 36px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.watchlist-title {
  font-weight: 600;
}

.manage-title {
  color: hsl(214, 89%, 52%);
  font-size: 14px;
}

.main-content {
  width: 1159px;
  height: 690px;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
}

.video-feed {
  width: 884px;
  height: 600px;
  margin-left: -25px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.main-title-container {
  width: 832px;
  height: 21px;
  padding-bottom: 16px;
  margin-top: 5px;
}

.main-title-container h2 {
  font-size: 20px;
}

.video-post {
  width: 820px;
  height: 626px;
  border-radius: 10px;
  background-color: #fff;
  margin-left: -8px;
  margin-bottom: 15px;
}

.upper-post-container {
  width: 796px;
  height: 101px;
  margin: 0 12px;
  padding-bottom: 16px;
}

.upper-post {
  width: 808px;
  height: 55px;
  margin: -6px;
  padding-top: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.post-circle {
  width: 48px;
  height: 48px;
  border-radius: 130px;
  margin-left: 5px;
  background-color: gray;
  margin-top: -5px;
}

.post-info {
  width: 704px;
  height: 32px;
  padding: 6px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.page-title {
  margin-top: -5px;
}

.page-name {
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.page-name:hover {
  text-decoration: underline;
}

.page-dot {
  font-size: 14px;
  font-weight: 600;
  margin: 0 5px;
}

.follow {
  font-size: 12px;
  font-weight: 600;
  color: #2370db;
  cursor: pointer;
}

.follow:hover {
  text-decoration: underline;
}

.date {
  margin-top: 5px;
  color: gray;
  font-size: 13px;
}

.date:hover {
  text-decoration: underline;
  cursor: pointer;
}

.options {
  cursor: pointer;
}

.options {
  margin-top: -15px;
}

.caption-container {
  margin-top: 10px;
}

.video-title {
  font-size: 16px;
  font-weight: 600;
}

.video-caption {
  margin-top: 5px;
  font-size: 12px;
  color: gray;
}

.see-more {
  cursor: pointer;
}

.see-more:hover {
  text-decoration: underline;
}

.video-content {
  width: 820px;
  height: 461px;
  background-color: black;
}

.bottom-post {
  width: 820px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
}

.post-buttons {
  width: 449px;
  height: 32px;
  display: flex;
  justify-content: flex-start;
  color: gray;
  margin-left: 10px;
}

.post-buttons span {
  font-size: 14px;
}

.like-button {
  width: 77px;
  height: 42px;
  padding: 0 2px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.comment-button {
  width: 112px;
  height: 42px;
  padding: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.share-button {
  width: 83px;
  height: 42px;
  padding: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.like-button:hover,
.comment-button:hover,
.share-button:hover {
  background-color: #f2f2f2;
}

.button-title {
  margin-left: 5px;
}

.reactions-and-comments {
  width: 346px;
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.reactions {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.reactions img {
  width: 18px;
  height: 18px;
}

.reactions span {
  margin-left: 3px;
  font-size: 14px;
  color: gray;
  cursor: pointer;
}

.reactions span:hover {
  text-decoration: underline;
}

.comments {
  margin-top: 15px;
  margin-left: 5px;
  font-size: 13px;
  color: gray;
}

.comments span {
  cursor: pointer;
}

.comments span:hover {
  text-decoration: underline;
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