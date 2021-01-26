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
          <div class="menu-button active">
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
      <div class="column left-column">
        <router-link to="/home">
          <div class="container-button top-button">
            <img class="profile-picture" src="../../images/facebook-user.jpg" />
            <span>Full Name</span>
          </div>
        </router-link>
        <div class="side-icon-buttons">
          <router-link to="/home">
            <div class="container-button">
              <img src="../../images/heart-badge.png" />
              <span>COVID-19 Information Center</span>
            </div>
          </router-link>
          <router-link to="/home">
            <div class="container-button">
              <img src="../../images/messenger.png" />
              <span>Messenger</span>
            </div>
          </router-link>
          <router-link to="/home">
            <div class="container-button">
              <img src="../../images/flag.png" />
              <span>Pages</span>
            </div>
          </router-link>
          <router-link to="/home">
            <div class="container-button">
              <img src="../../images/marketplace.png" />
              <span>Marketplace</span>
            </div>
          </router-link>
          <router-link to="/home">
            <div class="see-more-container">
              <div class="see-more-button">
                <span>See More</span>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
          </router-link>
          <div class="divider"></div>
        </div>
        <div class="shortcut">Shortcut</div>
        <router-link to="/home">
          <div class="container-button">
            <div class="rounded-edges"></div>
            <span>Group 1</span>
          </div>
        </router-link>
        <router-link to="/home">
          <div class="container-button">
            <div class="rounded-edges"></div>
            <span>Group 2</span>
          </div>
        </router-link>
        <router-link to="/home">
          <div class="container-button">
            <div class="rounded-edges"></div>
            <span>Group 3</span>
          </div>
        </router-link>
        <router-link to="/home">
          <div class="container-button">
            <div class="rounded-edges"></div>
            <span>Group 4</span>
          </div>
        </router-link>
        <router-link to="/home">
          <div class="container-button">
            <div class="rounded-edges"></div>
            <span>Group 5</span>
          </div>
        </router-link>
        <router-link to="/home">
          <div class="see-more-container">
            <div class="see-more-button">
              <span>See More</span>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </router-link>
        <div class="side-bar-links">
          <span dir="auto">
            <a href="#">Privacy</a>
            <span>
              &nbsp;
              <span aria-hidden="true">·&nbsp;</span>
            </span>
            <a href="#" role="link">Terms</a>
            <span>
              &nbsp;
              <span aria-hidden="true">·&nbsp;</span>
            </span>
            <a href="#" role="link">Advertising</a>
            <span>
              &nbsp;
              <span aria-hidden="true">·&nbsp;</span>
            </span>
            <a href="#" role="link" tabindex="0">Ad Choices</a>
            <span>
              &nbsp;
              <span aria-hidden="true">·&nbsp;</span>
            </span>
            <a href="#" role="link">Cookies</a>
            <span>
              &nbsp;
              <span aria-hidden="true">·&nbsp;</span>
            </span>
            <a href="#" role="link">More</a>
            <span>
              &nbsp;
              <span aria-hidden="true">·&nbsp;</span>
            </span> Facebook © 2020
          </span>
        </div>
      </div>
      <div class="main-content">
        <div class="main-column">
          <div class="stories">
            <router-link to="/home">
              <div class="story"></div>
            </router-link>
            <router-link to="/home">
              <div class="story"></div>
            </router-link>
            <router-link to="/home">
              <div class="story"></div>
            </router-link>
            <router-link to="/home">
              <div class="story"></div>
            </router-link>
            <router-link to="/home">
              <div class="story"></div>
            </router-link>
          </div>
          <div class="create-post post-shadow">
            <div class="top-create">
              <img src="../../images/facebook-user.jpg" />
              <input type="text" placeholder="What's on your mind?" />
            </div>
            <div class="bottom-create">
              <div class="create-button">
                <i id="live-video" class="fas fa-video"></i>
                <span>Live Video</span>
              </div>
              <div class="create-button">
                <i id="photo" class="far fa-images"></i>
                <span>Photo / Video</span>
              </div>
              <div class="create-button">
                <i id="feeling" class="fas fa-laugh"></i>
                <span>Feeling / Activity</span>
              </div>
            </div>
          </div>
          <div class="rooms-container post-shadow">
            <div class="top-rooms">
              <div class="video-container">
                <i class="fas fa-video"></i>
              </div>
              <div class="rooms-text-container">
                <span class="rooms-text">Rooms</span>
              </div>
              <div class="create-text-container">
                <span class="rooms-create-text">Create</span>
              </div>
            </div>
            <div class="bottom-rooms">
              <div class="circles-container">
                <img src="../../images/facebook-user.jpg" />
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/aoimedia/128.jpg" />
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/_dwite_/128.jpg" />
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/sebashton/128.jpg" />
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kylefoundry/128.jpg" />
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/vj_demien/128.jpg" />
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/andrewarrow/128.jpg" />
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/martip07/128.jpg" />
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/bpartridge/128.jpg" />
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/karlkanall/128.jpg" />
              </div>
            </div>
          </div>
          <div class="post-container post-shadow">
            <div class="post-header">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/okandungel/128.jpg" />
              <div class="post-header-middle">
                <h4>Dino Little</h4>
                <span>1 hr</span>
              </div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post-content">
              <span>
                Odit neque temporibus iusto. Dolores perferendis numquam minus sed quidem ab.
                Blanditiis molestiae minus voluptatum. Et ex ut sit dolor labore ab culpa quia
                voluptatem. Optio et aut suscipit vero ut non voluptatibus itaque et. Ut ex dolorem est iure.
              </span>
            </div>
            <div class="post-bottom">
              <div class="reactions-container">
                <div class="reactions">
                  <img src="../../images/like.png" />
                  <img src="../../images/heart.png" />
                  <span>14</span>
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
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/envex/128.jpg" />
              <div class="post-header-middle">
                <h4>Jamir Hane</h4>
                <span>1 hr</span>
              </div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post-content">
              <span>
                Nisi non repellat accusamus iusto odit quisquam ad minus illo.
                Mollitia quidem dignissimos ducimus eum. Deleniti omnis in veritatis
                sed accusamus tempora. Minima iusto provident.
              </span>
              <img class="post-image" src="https://miro.medium.com/max/1920/0*z1mm6izqSeDiKukb" />
            </div>
            <div class="post-bottom">
              <div class="reactions-container">
                <div class="reactions">
                  <img src="../../images/laughing.png" />
                  <img src="../../images/like.png" />
                  <img src="../../images/heart.png" />
                  <span>36</span>
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
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/isaacfifth/128.jpg" />
              <div class="post-header-middle">
                <h4>Roel Powlowski</h4>
                <span>2 hr</span>
              </div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post-content">
              <span>Ipsa alias iste ipsam totam et quia. Ut nesciunt aut. Est modi ut. Nisi accusamus est eius.</span>
              <img
                class="post-image"
                src="https://pics.me.me/writes-unmaintainable-code-leaves-company-quickmeme-com-programmer-memes-programming-50344201.png"
              />
            </div>
            <div class="post-bottom">
              <div class="reactions-container">
                <div class="reactions">
                  <img src="../../images/laughing.png" />
                  <img src="../../images/like.png" />
                  <span>24</span>
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
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg" />
              <div class="post-header-middle">
                <h4>Cleta Langosh</h4>
                <span>3 hr</span>
              </div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post-content">
              <span>Ipsa alias iste ipsam totam et quia. Ut nesciunt aut. Est modi ut. Nisi accusamus est eius.</span>
              <img
                class="post-image"
                src="https://qph.fs.quoracdn.net/main-qimg-3ad44e4e9b16cce7e941756d49eba556"
              />
            </div>
            <div class="post-bottom">
              <div class="reactions-container">
                <div class="reactions">
                  <img src="../../images/heart.png" />
                  <img src="../../images/laughing.png" />
                  <img src="../../images/like.png" />
                  <span>32</span>
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
      <div class="column right-column">
        <div class="column-title">Birthdays</div>
        <router-link to="/home">
          <div class="birthday-container-button">
            <img src="../../images/present.png" />
            <span class="birthday-text">
              <strong>Modesta Carroll</strong>'s birthday is today
            </span>
          </div>
        </router-link>
        <div class="divider"></div>
        <div class="contact-title-container">
          <div class="column-title contact-title">Contacts</div>
          <div class="contact-icons">
            <div>
              <i class="fas fa-video"></i>
            </div>
            <div>
              <i class="fas fa-search"></i>
            </div>
            <div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/victorDubugras/128.jpg" />
          <span class="contact-name">Leonora Rau</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/themrdave/128.jpg" />
          <span class="contact-name">Alexzander Streich</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/isnifer/128.jpg" />
          <span class="contact-name">Griffin Simonis</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/albertaugustin/128.jpg" />
          <span class="contact-name">Marty Schultz</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg" />
          <span class="contact-name">Nona Yost</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jpg" />
          <span class="contact-name">Bruce Hahn</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/dgajjar/128.jpg" />
          <span class="contact-name">Elenor Bechtelar</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg" />
          <span class="contact-name">Millie Wisozk</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/steynviljoen/128.jpg" />
          <span class="contact-name">Alessandro Harris</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/haydn_woods/128.jpg" />
          <span class="contact-name">Ashton Effertz</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/borantula/128.jpg" />
          <span class="contact-name">Armani Cole</span>
        </div>
        <div class="contact">
          <div class="green-dot"></div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/dingyi/128.jpg" />
          <span class="contact-name">Alyson Monahan</span>
        </div>
      </div>
    </div>
    <div id="messenger">
      <i class="fab fa-facebook-messenger"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignedIn",
  mounted: async function() {
    let continueLoop = true;
    while (continueLoop) {
      let revokeStatus = false;
      let logoutStatus = false;
      if (this.$root.$data.sessionID === null) {
        revokeStatus = await this.takeABreak();
      } else {
        revokeStatus = await this.checkRevoke(this.$root.$data.sessionID);
        logoutStatus = await this.checkLogin();
      }
      console.log("Log user out? ");
      console.log(!logoutStatus && this.$root.$data.loggedIn);
      if (revokeStatus || (!logoutStatus && this.$root.$data.loggedIn)) {
        this.logout();
      }
    }
  },
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
    },
    checkRevoke(idIn) {
      let promise = new Promise(function(resolve, reject) {
        setTimeout(
          async sessionID => {
            try {
              let response = await axios.get("/api/revoke/" + sessionID);
              resolve(response.data);
            } catch (error) {
              console.log(error);
              reject(false);
            }
          },
          3000,
          idIn,
          resolve,
          reject
        );
      });
      return promise;
    },
    async checkLogin() {
      let response = await axios.get(
        "/api/active/" + this.$root.$data.sessionID
      );
      return response.data;
    },
    takeABreak() {
      let promise = new Promise(function(resolve) {
        setTimeout(
          async () => {
            resolve(false);
          },
          3000,
          resolve
        );
      });
      return promise;
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

.column {
  width: 300px;
  height: 690px;
  flex-grow: 1;
  overflow-y: scroll !important;
  overflow-x: hidden !important;
}

.main-content {
  width: 815px;
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

@media only screen and (min-height: 800px) {
  .column {
    height: 800px;
  }

  .main-content {
    height: 800px;
  }
}

@media only screen and (max-width: 1200px) {
  .left-column {
    display: none;
  }
}

@media only screen and (max-width: 800px) {
  .right-column {
    display: none;
  }
}

.main-column {
  width: 590px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.stories {
  width: 590px;
  height: 194px;
  padding-top: 8px;
  padding-bottom: 24px;
  display: flex;
  padding-top: 8px;
  padding-bottom: 24px;
  margin-top: 15px;
  justify-content: space-around;
}

.story {
  width: 110px;
  height: 200px;
  background-color: gray;
  border-radius: 10px;
}

.post-shadow {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
}

.create-post {
  width: 558px;
  height: 97px;
  padding: 12px 16px 10px 16px;
  margin-bottom: 16px;
}

.top-create {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-create img {
  width: 40px;
  height: 40px;
  border-radius: 130px;
}

.top-create input {
  width: 486px;
  height: 40px;
  padding: 0 12px;
  border-radius: 100px;
  border: none;
  background: #f2f3f5;
  cursor: pointer;
}

.top-create input:hover {
  background-color: #e4e6e9;
}

.top-create input::placeholder {
  font-size: 16px;
  color: gray;
  align-items: center;
}

.bottom-create {
  margin-top: 12px;
  border-top: 1px solid #e4e6eb;
  padding: 8px;
  display: flex;
  justify-content: space-between;
}

.create-button {
  width: 170px;
  height: 20px;
  padding: 8px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.create-button:hover {
  background: #f2f3f5;
}

.create-button span {
  margin-left: 5px;
  font-size: 14px;
  color: #65676b;
}

.create-button i {
  font-size: 18px;
}

#live-video {
  color: red;
}

#photo {
  color: #399750;
}

#feeling {
  color: #f5c33b;
}

.rooms-container {
  width: 590px;
  height: 100px;
  margin-bottom: 15px;
}

.top-rooms {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 566px;
  height: 32px;
  padding: 12px 16px 0 16px;
  margin: -4px;
}

.video-container {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container i {
  color: purple;
}

.rooms-text-container {
  width: 475px;
  height: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rooms-text {
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
}

.create-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rooms-create-text {
  margin-left: 15px;
  font-size: 14px;
  color: hsl(214, 89%, 52%);
}

.bottom-rooms {
  width: 590px;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 50px;
}

.circles-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.circles-container img {
  width: 40px;
  height: 40px;
  border-radius: 130px;
  cursor: pointer;
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

.side-icon-buttons {
  width: 320px;
  height: 269px;
}

.top-button {
  margin-top: 15px;
}

.container-button {
  width: 290px;
  height: 52px;
  padding: 0px 8px;
  margin-left: 8px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.container-button:hover {
  background-color: #e3e5e8;
}

.container-button img {
  width: 36px;
  height: 36px;
}

.container-button span {
  margin-left: 12px;
  font-weight: 600;
  color: black;
  font-size: 14px;
}

.profile-picture {
  border-radius: 130px;
}

.see-more-container {
  width: 288px;
  height: 36px;
  padding: 8px 16px;
}

.see-more-button {
  width: 264px;
  height: 36px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e6eb;
  color: black;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
}

.see-more-button span {
  margin-right: 5px;
}

.see-more-button:hover {
  background-color: #d8dadf;
}

.divider {
  margin: 8px 16px 0 16px;
  width: 288px;
  border-bottom: 1px solid #ced0d4;
}

.shortcut {
  margin-top: 16px;
  margin-left: 16px;
  font-size: 16px;
  color: #65676b;
  font-weight: 600;
  padding-bottom: 8px;
}

.rounded-edges {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background-color: grey;
}

.side-bar-links {
  padding: 16px;
  width: 280px;
  height: 26px;
  font-size: 13px;
  color: gray;
}

.side-bar-links a {
  text-decoration: none;
  color: gray;
}

.side-bar-links a:hover {
  text-decoration: underline;
}

.column-title {
  margin-top: 24px;
  margin-left: 12px;
  font-size: 16px;
  color: #65676b;
  font-weight: 600;
  padding-bottom: 8px;
}

.birthday-container-button {
  width: 290px;
  height: 52px;
  padding: 0px 8px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.birthday-container-button:hover {
  background-color: #e3e5e8;
}

.birthday-container-button img {
  width: 36px;
  height: 36px;
}

.birthday-text {
  color: black;
  font-size: 15px;
  margin-left: 10px;
}

.contact-title-container {
  margin-top: 20px;
  margin-left: 12px;
  display: flex;
  justify-content: space-between;
}

.contact-title {
  margin: 0;
}

.contact-icons {
  width: 100px;
  display: flex;
  justify-content: space-between;
  color: #989ca2;
}

.contact-icons div {
  border-radius: 130px;
  width: 30px;
  height: 30px;
  margin-top: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.contact-icons div:hover {
  background-color: #e3e5e8;
}

.contact {
  width: 290px;
  height: 52px;
  padding: 0px 8px;
  margin-left: 8px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.contact:hover {
  background-color: #e3e5e8;
}

.contact img {
  width: 36px;
  height: 36px;
  border-radius: 130px;
  margin-left: -20px;
}

.contact span {
  font-size: 14px;
  margin-left: 10px;
  font-weight: 600;
}

.green-dot {
  background-color: #31a21c;
  border: 2px solid #fff;
  border-radius: 130px;
  width: 10px;
  height: 10px;
  transform: translateX(20px) translateY(15px);
}

#messenger {
  width: 48px;
  height: 48px;
  border-radius: 130px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 90%;
  left: 95%;
  cursor: pointer;
}

#messenger i {
  font-size: 24px;
}
</style>