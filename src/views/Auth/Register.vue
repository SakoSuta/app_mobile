<template>
  <ion-page>
    <NavAuth></NavAuth>
    <ion-content :fullscreen="true">
      <div class="Go_Back" onclick="history.back()">
        <img src="Icone/Go_Back.svg" alt="Return button" />
      </div>
      <div class="FormuRegister">
        <form action="" class="formR">
          <h1 class="titleR">Register</h1>
          <input type="text" placeholder="Pseudo" class="inputR" />
          <input type="email" placeholder="Email" class="inputR" />
          <input type="password" placeholder="Password" class="inputR" />
          <router-link to="/login" class="aR"
            >You already have an account ?</router-link
          >
          <button class="buttonR">Register</button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
</script>

<style>
.FormuRegister {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #242131;
  padding: 10px 0px;
  width: 100vw;
  height: 100vh;
}

.titleR {
  font-family: var(--font-gugi);
  font-size: 28px !important;
}

.formR {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 50% !important;
}

.inputR {
  font-family: var(--font-gugi);
  width: 100%;
  height: 40px;
  margin: 5px !important;
  padding-left: 20px;
  border-radius: 9px;
  border: none;
  background-color: #2f2b45;
  color: #9987ff !important;
  font-size: 12px;
  padding: 20px;
}

.inputR::placeholder {
  color: #6459a2 !important;
  font-size: 12px;
}

.inputR:focus {
  outline: none;
}

.aR {
  font-family: var(--font-gugi);
  color: #9987ff !important;
  font-size: 14px;
  margin: 5px !important;
}

.buttonR {
  font-family: var(--font-gugi);
  width: 80%;
  margin: 18px;
  border-radius: 9px !important;
  border: none !important;
  background-color: #9987ff;
  color: #fff !important;
  font-size: 12px;
  padding: 10px;
}

.Go_Back {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
  background-color: #242131;
  padding-left: 25px;
}
</style>
