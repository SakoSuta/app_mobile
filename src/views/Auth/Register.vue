<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="navlog"><img src="Very_long_item.png" alt="Long Logo"></div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="Go_Back" onclick="history.back()">
        <img src="Go_Back.png" alt="Return button">
      </div>
      <div class="FormuLogin">
        <form action="" class="formR">
          <h1 class="Gugi titleR">Register</h1>
          <input type="text" placeholder="Pseudo" class="Gugi inputR">
          <input type="email" placeholder="Email" class="Gugi inputR">
          <input type="password" placeholder="Password" class="Gugi inputR">
          <router-link to="/login" class="gugi aR">You already have an account ?</router-link>
          <button class="Gugi buttonR">Register</button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/vue';
</script>

<style>
.Gugi{
  font-family: var(--font-gugi);
}

.navlog{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 74px;
  background-color: #24223E;
}

.FormuLogin{
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100%;
  background-color: #242131;
  padding: 10px 0px;
  width: 100vw;
  height: 100vh;
}

.titleR{
  font-size: 28px !important;
}

.formR{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 50% !important;
}

.inputR{
  width: 100%;
  height: 40px;
  margin: 5px !important;
  padding-left: 20px;
  border-radius: 9px;
  border: none;
  background-color: #2F2B45;
  color: #9987FF !important;
  font-size: 12px;
  padding: 20px;
}

.inputR::placeholder{
  color: #6459A2 !important;
  font-size: 12px;
}

.inputR:focus{
  outline: none;
}

.aR{
  color: #9987FF !important;
  font-size: 14px;
  margin: 5px !important;
}

.buttonR{
  width: 80%;
  margin: 18px;
  border-radius: 9px !important;
  border: none !important;
  background-color: #9987FF;
  color: #fff !important;
  font-size: 12px;
  padding: 10px;
}

.Go_Back{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
  background-color: #242131;
  padding-left: 25px;
}
</style>
