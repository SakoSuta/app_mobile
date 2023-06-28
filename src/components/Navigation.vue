<template>
  <ion-menu contentId="main-content" class="NavMenu">
    <ion-header class="IntroMenu" v-if="LoginUser">
      <img :src="UserData.image" alt="Profile Photo" v-if="UserData.image" />
      <img src="/image/PPDefault.png" alt="Profile Photo" v-else />
      <p>Hi, {{ UserData.pseudo }}</p>
    </ion-header>
    <ion-header class="IntroMenu" v-else>
      <router-link to="/login" class="LoginMenu">Login</router-link>
    </ion-header>
    <ion-content>
      <div class="ContMenu">
        <router-link to="/" class="ItemMenu">
          <img src="/Icone/Home.svg" alt="Icon" />
          <span>Home</span>
        </router-link>
        <router-link
          :to="`/users/${UserData.uuid}`"
          class="ItemMenu"
          v-if="LoginUser"
        >
          <img src="/Icone/User.svg" alt="Icon" />
          <span>Account</span>
        </router-link>
        <router-link to="/login" class="ItemMenu" v-else>
          <img src="/Icone/User.svg" alt="Icon" />
          <span>Account</span>
        </router-link>
        <router-link to="/subscription" class="ItemMenu">
          <img src="/Icone/Subscription.svg" alt="Icon" />
          <span>Subscriptions</span>
        </router-link>
        <router-link to="/posts" class="ItemMenu">
          <img src="/Icone/News.svg" alt="Icon" />
          <span>All News</span>
        </router-link>
        <router-link to="/contact" class="ItemMenu">
          <img src="/Icone/Mail.svg" alt="Icon" />
          <span>Contact Us</span>
        </router-link>
        <router-link to="/" class="ItemMenu" @click="presentLogoutAlert">
          <img src="/Icone/Logout.svg" alt="Icon" />
          <span>Logout</span>
        </router-link>
      </div>
    </ion-content>
  </ion-menu>
  <ion-modal
    ref="modal"
    trigger="open-modal"
    :presenting-element="presentingElement"
    class="IonModalS"
  >
    <ion-header>
      <ion-toolbar>
        <ion-title class="TitleModalS">Search</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="dismiss()" class="CloseModalS">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding ContModalS">
      <ion-segment v-model="selectedSegment">
        <ion-segment-button value="Categories">
          <ion-label>Categories</ion-label>
        </ion-segment-button>
        <ion-segment-button value="Game">
          <ion-label>Game</ion-label>
        </ion-segment-button>
      </ion-segment>

      <div v-if="selectedSegment === 'Categories'" class="SearchContent">
        <ion-searchbar placeholder="Search your Categories"></ion-searchbar>
        <p class="CountResult">5 results found</p>
        <div class="AllResult">
          <router-link to="/Category/sluggg">
            <div class="ResultSearchCate">
              <div class="ContResultCate">
                <h2>Simulation</h2>
                <img src="/Category/simulation.svg" alt="Icone Category" />
              </div>
            </div>
          </router-link>
          <router-link to="/Category/sluggg">
            <div class="ResultSearchCate">
              <div class="ContResultCate">
                <h2>Race and flight</h2>
                <img src="/Category/racetrack.svg" alt="Icone Category" />
              </div>
            </div>
          </router-link>
          <router-link to="/Category/sluggg">
            <div class="ResultSearchCate">
              <div class="ContResultCate">
                <h2>strategy</h2>
                <img src="/Category/strategy.svg" alt="Icone Category" />
              </div>
            </div>
          </router-link>
          <router-link to="/Category/sluggg">
            <div class="ResultSearchCate">
              <div class="ContResultCate">
                <h2>Puzzle and mind games</h2>
                <img src="/Category/puzzle.svg" alt="Icone Category" />
              </div>
            </div>
          </router-link>
          <router-link to="/Category/sluggg">
            <div class="ResultSearchCate">
              <div class="ContResultCate">
                <h2>FPS</h2>
                <img
                  src="/Category/tabler_viewfinder.svg"
                  alt="Icone Category"
                />
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div v-if="selectedSegment === 'Game'" class="SearchContent">
        <ion-searchbar placeholder="Search your Game"></ion-searchbar>
        <p class="CountResult">5 results found</p>
        <div class="AllResult">
          <router-link to="/Games/sluggg">
            <div class="ResultSearchGame">
              <div class="ContResultGame">
                <h2>Forager</h2>
              </div>
            </div>
          </router-link>
          <router-link to="/Games/sluggg">
            <div class="ResultSearchGame">
              <div class="ContResultGame">
                <h2>Battlefield 2042</h2>
              </div>
            </div>
          </router-link>
          <router-link to="/Games/sluggg">
            <div class="ResultSearchGame">
              <div class="ContResultGame">
                <h2>Need for Speed™ Rivals: Complete Edition</h2>
              </div>
            </div>
          </router-link>
          <router-link to="/Games/sluggg">
            <div class="ResultSearchGame">
              <div class="ContResultGame">
                <h2>Superliminal</h2>
              </div>
            </div>
          </router-link>
          <router-link to="/Games/sluggg">
            <div class="ResultSearchGame">
              <div class="ContResultGame">
                <h2>Totally Accurate Battle Simulator</h2>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </ion-content>
  </ion-modal>
  <ion-header>
    <div class="Navigate" :style="navStyles" id="main-content">
      <ion-buttons slot="start">
        <ion-menu-button>
          <img src="/Icone/Menu.svg" alt="Menu" />
        </ion-menu-button>
      </ion-buttons>
      <router-link to="/">
        <img :src="logo" alt="Logo" />
      </router-link>
      <ion-buttons id="open-modal"
        ><img src="/Icone\search.svg" alt="Search"
      /></ion-buttons>
    </div>
  </ion-header>
</template>

<script lang="ts">
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonList,
  IonAvatar,
  IonImg,
  IonLabel,
  IonPage,
  IonMenu,
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { ConnecteUserData, presentLogoutAlert } from "/src/function/utils";

export default defineComponent({
  components: {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonAvatar,
    IonImg,
    IonLabel,
    IonPage,
    IonMenu,
    IonMenuButton,
    IonSegment,
    IonSegmentButton,
  },
  data() {
    return {
      presentingElement: null,
      selectedSegment: "Categories",
      UserData: {
        uuid: "",
        pseudo: "",
        image: "",
      },
    };
  },
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
    LoginUser() {
      return !!localStorage.getItem("token");
    },
  },
  methods: {
    dismiss() {
      this.$refs.modal.$el.dismiss();
    },
    async presentLogoutAlert() {
      await presentLogoutAlert();
    },
    // reloadContent() {
    // // Mettez à jour vos données ou effectuez d'autres actions pour recharger le contenu
    //   console.log("Contenu rechargé avec succès !");
    // },
  },
  async mounted() {
    const userData = await ConnecteUserData();
    if (userData) {
      this.UserData = userData;
    } else {
      this.LoginUser = false;
    }
  },
});
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
.LoginMenu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40px;
  border-radius: 20px;
  background-color: #9987ff;
  text-decoration: none;
  color: #ffffff;
  font-family: var(--font-gugi);
  font-size: 18px;
}

.IonModalS ion-toolbar {
  --background: #242252;
}
.IonModalS ion-content {
  --background: #242252;
}
.TitleModalS {
  font-family: var(--font-gugi);
  font-size: 18px;
  color: #9987ff;
}
.CloseModalS {
  --color: #9987ff;
}
.ContModalS ion-segment {
  margin: 15px 0px;
}
.ContModalS ion-segment-button {
  font-family: var(--font-gugi);
  --color-checked: #fff;
  --indicator-color: #6459a2;
}
.SearchContent ion-searchbar {
  font-family: var(--font-gugi);
  font-size: 10px;
  --color: #fff;
}
.CountResult {
  font-family: var(--font-gugi);
  font-size: 16px;
}
.AllResult {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 568px) {
  .AllResult {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
.ResultSearchGame {
  width: 140px;
  height: 150px;
  background-image: url("https://loremflickr.com/320/240");
  border-radius: 20px;
  margin: 13px;
}
.ContResultGame {
  background: linear-gradient(
    180deg,
    rgba(36, 33, 49, 0.5) 0%,
    rgba(36, 33, 49, 0.5) 49.42%,
    #242131 70.55%
  );
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0px 20px;
}
.ContResultGame h2 {
  font-family: var(--font-gugi);
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  width: 100%;
}

.ResultSearchCate {
  width: 140px;
  height: 150px;
  background-color: #2f2b45;
  border-radius: 20px;
  margin: 13px;
}
.ContResultCate {
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
}
.ContResultCate img {
  position: relative;
}
.ContResultCate {
  overflow: hidden;
}
.ContResultCate h2 {
  font-family: var(--font-gugi);
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  width: 100%;
}
</style>
