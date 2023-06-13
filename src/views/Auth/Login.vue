<template>
  <ion-page>
      <NavAuth></NavAuth>
    <ion-content :fullscreen="true">
      <div class="Go_Back" onclick="history.back()">
        <img src="Go_Back.png" alt="Return button">
      </div>
      <div class="FormuLogin">
        <form action="" class="formL">
          <h1 class="titleL">Login</h1>
          <input type="email" placeholder="Email" class="inputL">
          <input type="password" placeholder="Password" class="inputL">
          <router-link to="/register" class="aL">Not registered yet?</router-link>
          <button class="buttonL">Connect</button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage } from '@ionic/vue';
</script>

<style>
.FormuLogin{
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #242131;
  padding: 10px 0px;
  width: 100vw;
  height: 100vh;
}

.titleL{
  font-family: var(--font-gugi);
  font-size: 28px !important;
}

.formL{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 40% !important;
}

.inputL{
  font-family: var(--font-gugi);
  width: 100%;
  height: 40px !important;
  margin: 5px !important;
  padding-left: 20px;
  border-radius: 9px;
  border: none;
  background-color: #2F2B45;
  color: #9987FF !important;
  font-size: 12px;
  padding: 20px;
}

.inputL::placeholder{
  color: #6459A2 !important;
  font-size: 12px;
}

.inputL:focus{
  outline: none;
}

.aL{
  font-family: var(--font-gugi);
  color: #9987FF !important;
  font-size: 14px;
  margin: 2px !important;
}

.buttonL{
  font-family: var(--font-gugi);
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
