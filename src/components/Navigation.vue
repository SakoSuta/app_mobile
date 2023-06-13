<template>
  <ion-menu contentId="main-content" class="NavMenu">
    <ion-header class="IntroMenu">
      <img src="https://loremflickr.com/320/240" alt="Profile Picture" />
      <p>Hi, User</p>
    </ion-header>
    <ion-content>
      <div class="ContMenu">
        <router-link to="/users/dqz45" class="ItemMenu">
          <img src="Icone/User.svg" alt="Icon" />
          <span>Account</span>
        </router-link>
        <router-link to="/posts" class="ItemMenu">
          <img src="Icone/News.svg" alt="Icon" />
          <span>All News</span>
        </router-link>
        <router-link to="/" class="ItemMenu">
          <img src="Icone/Subscription.svg" alt="Icon" />
          <span>Subscription</span>
        </router-link>
        <router-link to="/contact" class="ItemMenu">
          <img src="Icone/Mail.svg" alt="Icon" />
          <span>Contact Us</span>
        </router-link>
        <router-link to="/" class="ItemMenu">
          <img src="Icone/Logout.svg" alt="Icon" />
          <span>Logout</span>
        </router-link>
      </div>
    </ion-content>
  </ion-menu>
  <ion-header>
    <div class="Navigate" :style="navStyles" id="main-content">
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <router-link to="/"><img :src="logo" alt="Logo" /></router-link>
      <router-link to="/"
        ><img src="Icone/search.svg" alt="Search icon"
      /></router-link>
    </div>
  </ion-header>
</template>

<script>
export default {
  props: {
    logoPath: {
      type: String,
      default: "Logo/long_item.svg",
    },
    backgroundColor: {
      type: String,
      default: "#242252",
    },
  },
  computed: {
    logo() {
      return this.logoPath || "Logo/long_item.svg";
    },
    navStyles() {
      return {
        backgroundColor: this.backgroundColor || "#242252",
      };
    },
  },
};
</script>

<style>
.Navigate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 0px 26px;
}
.IntroMenu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #242252;
  padding: 30px 0px;
  height: 30%;
}
.IntroMenu img {
  height: 77px;
  width: 77px;
  border-radius: 50%;
  border: 3px solid #5e54a8;
}
.IntroMenu p {
  font-family: var(--font-gugi);
  font-size: 24px;
  color: #ffffff;
  margin: 0px;
}
ion-menu.NavMenu::part(container) {
  box-shadow: 6px 0px 4px #9987ff;
  border-radius: 0px 20px 20px 0px;
}
.ContMenu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 0px;
  padding-bottom: 50px;
  align-items: flex-end;
  background-color: #242252 !important;
  height: 100%;
}
.ItemMenu {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  width: 80%;
}
.ItemMenu img {
  height: 24px;
  width: 24px;
}
.ItemMenu span {
  font-family: var(--font-gugi);
  text-align: center;
  font-size: 18px;
  padding: 0px 10%;
}
</style>
