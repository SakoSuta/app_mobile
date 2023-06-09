<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="navCont">
          <router-link to="/"><img src="Menu.png" alt="Menu"></router-link>
          <router-link to="/"><img src="long_item.png" alt="Logo"></router-link>
          <router-link to="/"><img src="search.png" alt="Search icon"></router-link>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <router-link to="/posts" class="Go_Back">
        <img src="Go_Back.png" alt="Return button">
      </router-link>
      <div class="AllContUser">
        <h1 class="Gugi titleUser">Hi, User</h1>
          <div class="CardUser">
            <img src="https://loremflickr.com/320/240" alt="Profile Photo" class="UserPic">
            <div class="UserInfo">
              <div class="UserName">
                <h2>Pseudo</h2>
                <span>User</span>
              </div>
              <div class="OtherInfo">
                <h2>EmilieMontpre@outlook.com</h2>
                <h2>Subscriptions : none</h2>
              </div>
              <div class="ContEdit">
                <router-link to="/Users/cvgbhjzdq5" class="EditButton">Edit</router-link>
              </div>
            </div>
          </div>
        <router-link to="/Login" class="LogoutButton">Logout</router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonHeader, IonToolbar } from '@ionic/vue';
</script>

<style>
.AllContUser{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 85%;
  padding: 30px 26px;
}
.titleUser{
  font-family: var(--font-gugi);
  font-size: 28px;
  color: #FFFFFF;
  padding: 0px 24px;
  margin: 0px;
  width: 100%;
}
.CardUser{
  border-radius: 9px;
  width: 100%;
  height: min-content;
  background-color: #24223E;
  padding: 0px 30px;
  padding-bottom: 17px;
}
.UserPic{
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-size: cover;
  position: relative;
  bottom: 30px;
}
.UserInfo{
  display: flex;
  flex-direction: column;
}
.UserName{
  font-family: var(--font-gugi);
}
.UserName h2{
  font-size: 16px !important;
  color: #FFFFFF;
  margin: 0px;
}
.UserName span{
  font-size: 12px !important;
  color: #5E549E;
}
.OtherInfo{
  font-family: var(--font-gugi);
  margin: 10px 0px;
}
.OtherInfo h2{
  font-size: 16px !important;
  color: #FFFFFF;
  margin: 7px 0px;
}
.ContEdit{
  display: flex;
  justify-content: flex-end;
}
.EditButton{
  width: min-content;
  padding: 6px 26px;
  font-family: var(--font-gugi);
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #9987FF;
  color: #FFFFFF;
  border-radius: 9px;
}
.LogoutButton{
  font-family: var(--font-gugi);
  font-size: 16px;
  text-decoration: none;
  padding: 9px 44px;
  background-color: #24223E;
  color: #E42F2F;
  border-radius: 9px;
}
</style>
