<template>
  <ion-page>
    <ion-header>
        <div class="NavHome">
          <router-link to="/"><img src="Menu.png" alt="Menu"></router-link>
          <router-link to="/"><img src="long_item.png" alt="Logo"></router-link>
          <router-link to="/"><img src="search.png" alt="Search icon"></router-link>
        </div>
    </ion-header>

    <ion-content>
      <div class="grade"></div>
      <div class="WelcomeSec">
        <h1 class="Goldman">Discover all available subscriptions</h1>
        <div class="AllPlanet">
          <img src="Planet.png" alt="Planet Saturne" class="Planet">
        </div>
        <div>
          <img src="Double_down_arrow.png" alt="Go Down">
        </div>
      </div>
      
      <div>
        <strong>Where we go ?</strong><br>
        <router-link to="/Login">Login</router-link><br>
        <router-link to="/Register">Register</router-link><br>
        <router-link to="/Contact">Contact</router-link><br>
        <router-link to="/posts">Posts</router-link><br>
        <router-link to="/Posts/sluggg">PostBySlug</router-link><br>
        <router-link to="/Category/sluggg">Category</router-link><br>
        <router-link to="/Games/sluggg">Games</router-link><br>
        <router-link to="/Users/cvgbhjzdq5">User</router-link><br>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style>
.Goldman{
  font-family: var(--font-goldman);
  font-weight: 700;
}
.Goldman700{
  font-family: var(--font-goldman-bold);
}
.grade{
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #242252 39.53%, rgba(36, 34, 82, 0) 100%);  position: absolute;
  z-index: -1;
}
.NavHome{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  background-color: #242252;
  padding: 0px 26px;
}
.WelcomeSec{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: #24223E; */
  padding: 30px 0px;
  height: 100%;
  width: 100%;
}
.WelcomeSec h1{
  text-align: center;
  color: #9987FF;
  width: 90%;
}
.AllPlanet{
  display: flex;
  justify-content: center;
  width: 90%;
}
@keyframes zoom {
  0% {
    transform: scale(1) translateY(0px);
  }
  50% {
    transform: scale(1.1) translateY(-30px);
  }
  100% {
    transform: scale(1) translateY(0px);
  }
}

.Planet {
  animation: zoom 5s infinite;
}
</style>
