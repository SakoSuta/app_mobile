<template>
  <ion-page>
    <!-- <Nav :background-color="'#242131'"></Nav> -->
    <ion-content>
      <div onclick="history.back()" class="Go_Back">
        <img src="Icone/Go_Back.svg" alt="Return button" />
      </div>
      <div class="AllContUser">
        <h1 class="titleUser">Hi, {{ UserData.name }}</h1>
        <div style="width: 100%;">
          <div class="CardUser" v-if="EditON">
            <img :src="UserData.image" alt="Profile Photo" class="UserPic" v-if="UserData.image"/>
            <img src="/image/PPDefault.png" alt="Profile Photo" class="UserPic" v-else/>
            <div class="UserInfo">
              <div class="UserName">
                <h2>{{ UserData.pseudo }}</h2>
                <span>{{ UserData.name }}</span>
              </div>
              <div class="OtherInfo">
                <h2>{{ UserData.email }}</h2>
                <h2 v-if="UserData.subscriptions.length > 0">Subscriptions : {{ UserData.subscriptions[0].plan[0].name }}</h2>
                <h2 v-else>Subscriptions : none</h2>
              </div>
              <div class="ContEdit">
                <button @click="EditON = !EditON" class="EditButton">Edit</button>
              </div>
            </div>
          </div>
          <div class="CardUser" v-else>
            <div class="ImageUser">
              <img src="https://loremflickr.com/320/240" alt="Profile Photo" class="UserPic"/>
              <router-link to="/Login" class="EditPict"><img src="Icone/Edit.svg" alt="Edit icone"></router-link>
            </div>
            <form action="" class="EditForm">
              <input type="text" placeholder="Name" :value="UserData.name" ref="name">
              <input type="text" placeholder="Pseudo" :value="UserData.pseudo" ref="pseudo">
              <input type="email" placeholder="Email" :value="UserData.email" ref="email">
              <div class="ContEditF">
                <button @click="EditON = !EditON" class="CancelButton">Cancel</button>
                <button type="submit" class="EditButton" @click="EditUser">Edit</button>
              </div>
            </form>
          </div>
        </div>
        <router-link to="/Login" class="LogoutButton" @click="presentLogoutAlert">Logout</router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { ConnecteUserData, presentLogoutAlert } from "@/function/utils";
import axios from "axios";
import { ref } from 'vue';

export default {
  components: {
    IonContent,
    IonPage,
  },
  methods: {
    async presentLogoutAlert() {
      await presentLogoutAlert();
    },
    async EditUser(event: Event) {
      event.preventDefault();

      try {
        
        const nameValue = this.$refs.name.value;
        const pseudoValue = this.$refs.pseudo.value;
        const emailValue = this.$refs.email.value;

        const response = await axios.put(
          `http://localhost:3000/api/auth/update/${this.$route.params.uuid}`,
          {
            name: nameValue,
            pseudo: pseudoValue,
            email: emailValue,
            // image: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        window.location.reload();
        console.log(this.$route.params.uuid);
      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    try {
      const userData = await ConnecteUserData();
      console.log(userData);
      this.UserData = userData;
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      EditON: ref(true),
      UserData: {
        name: "",
        pseudo: "",
        email: "",
        image: "",
        subscriptions: [
          {
            plan: [
              {
                name: "",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style>
.AllContUser {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  padding: 30px 26px;
}
.titleUser {
  font-family: var(--font-gugi);
  font-size: 28px;
  color: #ffffff;
  padding: 0px 24px;
  margin: 0px;
  margin-bottom: 30px;
  width: 100%;
}
.CardUser {
  border-radius: 9px;
  width: 100%;
  height: min-content;
  background-color: #24223e;
  padding: 0px 30px;
  padding-bottom: 17px;
}
.UserPic {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-size: cover;
  position: relative;
  bottom: 30px;
}
.UserInfo {
  display: flex;
  flex-direction: column;
}
.UserName {
  font-family: var(--font-gugi);
}
.UserName h2 {
  font-size: 16px !important;
  color: #ffffff;
  margin: 0px;
}
.UserName span {
  font-size: 12px !important;
  color: #5e549e;
}
.OtherInfo {
  font-family: var(--font-gugi);
  margin: 10px 0px;
}
.OtherInfo h2 {
  font-size: 16px !important;
  color: #ffffff;
  margin: 7px 0px;
}
.ContEdit {
  display: flex;
  justify-content: flex-end;
}
.EditButton {
  width: min-content;
  padding: 6px 26px;
  font-family: var(--font-gugi);
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #9987ff;
  color: #ffffff;
  border-radius: 9px;
}
.LogoutButton {
  font-family: var(--font-gugi);
  font-size: 16px;
  text-decoration: none;
  padding: 9px 44px;
  background-color: #24223e;
  color: #e42f2f;
  border-radius: 9px;
}

.ImageUser{
  display: flex;
}
.EditPict{
  position: relative;
  bottom: 30px;
  right: 62px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: rgba(153, 135, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.EditForm{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.EditForm input{
  background-color: #2F2C51;
  width: 100%;
  height: 40px;
  border-radius: 9px;
  border: none;
  padding: 0px 10px;
  margin: 10px 0px;
  color: #ffffff;
  font-family: var(--font-gugi);
  font-size: 12px;
}
.EditForm input::placeholder {
  color: #6459a2 !important;
  font-size: 12px;
}
.EditForm input:focus {
  outline: none;
}
.ContEditF{
  display: flex;
  justify-content: space-around;
  margin-top: 20px; 
  width: 100%;
}
.CancelButton{
  width: min-content;
  padding: 6px 16px;
  font-family: var(--font-gugi);
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #242252;
  color: #5E54A8;
  border-radius: 9px;
}
</style>
