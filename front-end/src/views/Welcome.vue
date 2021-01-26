<template>
  <div class="root">
    <div class="menubar-container">
      <div class="menubar">
        <router-link to="/">
          <img src="../../images/logo.png" />
        </router-link>
        <table class="login-table">
          <tbody class="login-table-body">
            <tr>
              <td class="table-data data-title">
                <label for="email">Email or Phone</label>
              </td>
              <td class="table-data data-title">
                <label for="pass">Password</label>
              </td>
            </tr>
            <tr>
              <td class="table-data">
                <input class="table-data-field" type="email" />
              </td>
              <td class="table-data">
                <input class="table-data-field" type="password" />
              </td>
              <td class="table-data-button">
                <label>
                  <button id="login-btn">
                    <router-link id="login-link" to="/home">Log In</router-link>
                  </button>
                </label>
              </td>
            </tr>
            <tr>
              <td class="table-data"></td>
              <td class="table-data">
                <div>
                  <router-link id="forgot-account" to="/"
                    >Forgot account?</router-link
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="wrapper">
      <div class="main-content">
        <div class="left-content">
          <h2>Connect with friends and the world around you on Facebook.</h2>
          <div class="title">
            <i class="far fa-newspaper"></i>
            <span class="desc-text">
              <span class="bolded-span">See photos and updates</span>
              from friends in News Feed.
            </span>
          </div>
          <div class="title">
            <i class="fas fa-tv"></i>
            <span class="desc-text">
              <span class="bolded-span">Share what's new</span>
              in your life on your Timeline.
            </span>
          </div>
          <div class="title">
            <i class="fas fa-search"></i>
            <span class="desc-text">
              <span class="bolded-span">Find more</span>
              of what you're looking for with Facebook Search.
            </span>
          </div>
        </div>
        <div class="right-content">
          <h2 class="sign-up-title">Sign Up</h2>
          <div class="sign-up-sub-title">It's quick and easy</div>
          <div class="form-container">
            <form>
              <div class="name-input-container">
                <input
                  class="sign-up-input first-name"
                  type="text"
                  placeholder="First name"
                />
                <input
                  class="sign-up-input last-name"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <input
                class="sign-up-input mobile-input"
                type="text"
                placeholder="Mobile number or email"
              />
              <input
                class="sign-up-input password-input"
                type="text"
                placeholder="New password"
              />
              <div id="birthday-wrapper">
                <div class="birthday-title">Birthday</div>
                <div class="birthday-data">
                  <span class="data-container">
                    <span>
                      <select
                        aria-label="Month"
                        name="birthday_month"
                        id="month"
                        title="Month"
                        class="select-input"
                      >
                        <option value="0">Month</option>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5" selected="1">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                      </select>
                      <select
                        aria-label="Day"
                        name="birthday_day"
                        id="day"
                        title="Day"
                        class="select-input"
                      >
                        <option value="0">Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28" selected="1">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <select
                        aria-label="Year"
                        name="birthday_year"
                        id="year"
                        title="Year"
                        class="select-input"
                      >
                        <option value="0">Year</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995" selected="1">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                        <option value="1929">1929</option>
                        <option value="1928">1928</option>
                        <option value="1927">1927</option>
                        <option value="1926">1926</option>
                        <option value="1925">1925</option>
                        <option value="1924">1924</option>
                        <option value="1923">1923</option>
                        <option value="1922">1922</option>
                        <option value="1921">1921</option>
                        <option value="1920">1920</option>
                        <option value="1919">1919</option>
                        <option value="1918">1918</option>
                        <option value="1917">1917</option>
                        <option value="1916">1916</option>
                        <option value="1915">1915</option>
                        <option value="1914">1914</option>
                        <option value="1913">1913</option>
                        <option value="1912">1912</option>
                        <option value="1911">1911</option>
                        <option value="1910">1910</option>
                        <option value="1909">1909</option>
                        <option value="1908">1908</option>
                        <option value="1907">1907</option>
                        <option value="1906">1906</option>
                        <option value="1905">1905</option>
                      </select>
                    </span>
                  </span>
                  <a href="#" class="question-mark">
                    <i class="fas fa-question-circle"></i>
                  </a>
                </div>
              </div>
              <div id="gender-wrapper">
                <div class="gender-title">Gender</div>
                <span class="gender-data">
                  <span class="gender-container-1">
                    <input
                      class="check-circle"
                      style="vertical-align: top"
                      type="radio"
                      name="sex"
                      value="1"
                    />
                    <label class="gender-label">Female</label>
                  </span>
                  <span class="gender-container-2">
                    <input
                      class="check-circle"
                      style="vertical-align: top"
                      type="radio"
                      name="sex"
                      value="0"
                    />
                    <label class="gender-label">Male</label>
                  </span>
                  <span class="gender-container-3">
                    <input
                      class="check-circle"
                      style="vertical-align: top"
                      type="radio"
                      name="sex"
                      value="0"
                    />
                    <label class="gender-label">Custom</label>
                  </span>
                  <a href="#" class="question-mark">
                    <i class="fas fa-question-circle"></i>
                  </a>
                </span>
              </div>
              <p class="terms-paragraph">
                By clicking Sign Up, you agree to our
                <a href="#" id="terms-link" rel="nofollow">Terms</a>,
                <a href="#" id="privacy-link">Data Policy</a> and
                <a href="#" id="cookie-use-link">Cookies Policy</a>. You may
                receive SMS Notifications from us and can opt out any time.
              </p>
              <div class="sign-up-btn-container">
                <button class="sign-up-btn">Sign Up</button>
              </div>
            </form>
          </div>
          <div class="create-container">
            <a href="#" class="create-link">Create a Page</a> for a celebrity,
            band or business.
          </div>
        </div>
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
              <a class="li-link" dir="ltr" href="#" title="French (France)"
                >Français (France)</a
              >
            </li>
            <li>
              <a
                class="li-link"
                dir="ltr"
                href="#"
                title="Simplified Chinese (China)"
                >中文(简体)</a
              >
            </li>
            <li>
              <a class="li-link" dir="rtl" href="#" title="Arabic">العربية</a>
            </li>
            <li>
              <a class="li-link" dir="ltr" href="#" title="Portuguese (Brazil)"
                >Português (Brasil)</a
              >
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
              <a class="li-link" href="#" title="Sign Up for Facebook"
                >Sign Up</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Log into Facebook">Log In</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Check out Messenger."
                >Messenger</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Facebook Lite for Android."
                >Facebook Lite</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our Watch videos."
                >Watch</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our people directory."
                >People</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our pages directory."
                >Pages</a
              >
            </li>
            <li>
              <a class="li-link" href="#">Page Categories</a>
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Check out popular places on Facebook."
                >Places</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Check out Facebook games."
                >Games</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our places directory."
                >Locations</a
              >
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Buy and sell on Facebook Marketplace."
                >Marketplace</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Browse our Groups directory."
                >Groups</a
              >
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Learn more about Portal from Facebook"
                >Portal</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Check out Instagram"
                >Instagram</a
              >
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Browse our Local Lists directory."
                >Local</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Donate to worthy causes."
                >Fundraisers</a
              >
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Browse our Facebook Services directory."
                >Services</a
              >
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Read our blog, discover the resource center, and find job opportunities."
                >About</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Advertise on Facebook."
                >Create Ad</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Create a Page">Create Page</a>
            </li>
            <li>
              <a class="li-link" href="#" title="Develop on our platform."
                >Developers</a
              >
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Make your next career move to our awesome company."
                >Careers</a
              >
            </li>
            <li>
              <a
                class="li-link"
                data-nocookies="1"
                href="#"
                title="Learn about your privacy and Facebook."
                >Privacy</a
              >
            </li>
            <li>
              <a
                class="li-link"
                href="#"
                title="Learn about cookies and Facebook."
                data-nocookies="1"
                >Cookies</a
              >
            </li>
            <li>
              <a
                class="li-link"
                data-nocookies="1"
                href="#"
                title="Learn about Ad Choices."
                >Ad Choices</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Review our terms and policies."
                >Terms</a
              >
            </li>
            <li>
              <a class="li-link" href="#" title="Visit our Help Center."
                >Help</a
              >
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

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

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

.login-table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  border-spacing: 2px;
  border-color: grey;
  margin-right: -85px;
}

.login-table-body {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}

.login-table-body tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

.table-data {
  width: 150px;
  height: 16px;
  padding: 0 0 0px 15px;
}

.table-data-button {
  width: 50px;
  height: 23.6px;
  padding-left: 14px;
}

.table-data-field {
  width: 150px;
  height: 22px;
  padding: 3px 3px 3px 4px;
}

.table-data-field:focus {
  text-decoration: none;
}

.data-title {
  color: #fff;
}

#login-btn {
  background-color: #4267b2;
  border: 1px solid #29487d;
  border-radius: 2px;
  width: 50px;
  height: 25px;
  padding: 2px 6px;
}

#lets-auth-btn {
  background-color: #4267b2;
  border: 1px solid #29487d;
  border-radius: 2px;
  width: 75px;
  height: 25px;
  padding: 2px 6px;
}

#login-link {
  color: white;
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
}

#forgot-account {
  color: #9cb4d8;
  font-weight: normal;
  cursor: pointer;
  text-decoration: none;
}

#forgot-account:hover {
  text-decoration: underline;
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

.left-content {
  width: 565px;
  height: 378px;
  margin-right: 16px;
}

.left-content h2 {
  font-size: 28px;
  font-family: "Freight Sans Bold", Helvetica, Arial, sans-serif !important;
  width: 456px;
  height: 72px;
  padding-top: 42px;
  padding-bottom: 24px;
}

.title {
  width: 565px;
  height: 56px;
  padding-bottom: 10px;
  margin-top: 14px;
  color: #adb9d3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.title i {
  font-size: 50px;
}

.desc-text {
  color: #666;
  font-size: 14px;
  margin-left: 15px;
}

.bolded-span {
  color: #333;
  font-family: "Freight Sans Bold", Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: bold;
  line-height: 22px;
  margin-right: 2px;
}

.right-content {
  width: 400px;
  height: 584px;
}

.form-container {
  width: 399px;
  height: 403px;
}

.sign-up-title {
  width: 399px;
  height: 43px;
  color: #333;
  font-family: "Freight Sans Bold", Helvetica, Arial, sans-serif;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 5px;
}

.sign-up-sub-title {
  width: 399px;
  height: 23px;
  color: #333;
  font-family: "Freight Sans", Helvetica, Arial, sans-serif;
  font-size: 19px;
  line-height: 1.26;
  margin-bottom: 20px;
}

.name-input-container {
  display: flex;
  justify-content: flex-start;
}

.sign-up-input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
  font-size: 18px;
}

.sign-up-input::placeholder {
  font-size: 18px;
  color: #999999;
}

.first-name,
.last-name {
  width: 174px;
  height: 18px;
}

.last-name {
  margin-left: 10px;
}

.mobile-input,
.password-input {
  width: 377px;
  height: 19px;
  margin-top: 7px;
  margin-bottom: 5px;
}

#birthday-wrapper,
#gender-wrapper {
  width: 399px;
  height: 56px;
  margin-top: 5px;
}

.birthday-title,
.gender-title {
  width: 399px;
  height: 21px;
  color: #90949c;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 5px;
}

.gender-title {
  margin-bottom: 10px;
}

.birthday-data {
  width: 399px;
  height: 30px;
}

.select-input {
  font-size: 13px;
  height: 30px;
  padding: 0px 5px;
  border: 1px solid lightgray;
}

.question-mark {
  margin-left: 10px;
}

.question-mark i {
  font-size: 16px;
  color: gray;
}

.gender-data {
  width: 278px;
  height: 31px;
}

.gender-container-1 {
  width: 94px;
  height: 21px;
  padding: 5px 0 5px 4px;
  margin-right: 4px;
}

.gender-container-2 {
  width: 72px;
  height: 21px;
  padding: 5px 0 5px 4px;
}

.check-circle {
  width: 12px;
  height: 12px;
  margin: 0px 3px 0 5px;
  align-items: flex-start;
}

.gender-label {
  color: #1d2129;
  font-size: 18px;
  font-weight: normal;
  line-height: 18px;
  padding: 0 10px 0 3px;
}

.terms-paragraph {
  width: 316px;
  height: 43px;
  color: #777;
  font-size: 11px;
  margin: 11px 0;
}

.terms-paragraph a {
  color: #385898;
  cursor: pointer;
  text-decoration: none;
}

.terms-paragraph a:hover {
  text-decoration: underline;
}

.sign-up-btn-container {
  width: 399px;
  height: 59px;
}

.sign-up-btn {
  background: linear-gradient(#67ae55, #578843);
  background-color: #69a74e;
  box-shadow: inset 0 1px 1px #a4e388;
  border-color: #3b6e22 #3b6e22 #2c5115;
  border: 1px solid black;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  letter-spacing: 1px;
  position: relative;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  margin: 10px 0px;
  width: 152px;
  height: 23px;
  padding: 7px 20px;
  font-weight: bold;
  font-size: 19px;
}

.create-container {
  width: 399px;
  height: 16px;
  padding-top: 15px;
  margin-top: 20px;
  border-top: 1px solid #dddfe2;
  color: #666;
  font-size: 13px;
  font-weight: bold;
}

.create-container a {
  color: #385898;
  cursor: pointer;
  text-decoration: none;
}

.create-container a:hover {
  text-decoration: underline;
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