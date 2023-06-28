<template>
  <ion-page>
    <NavAuth></NavAuth>
    <ion-content :fullscreen="true">
      <div class="Go_Back" onclick="history.back()">
        <img src="/Icone/Go_Back.svg" alt="Return button" />
      </div>
      <div class="FormuLogin">
        <form class="formL">
          <h1 class="titleL">Login</h1>
          <input type="email" placeholder="Email" class="inputL" ref="email" />
          <input
            type="password"
            placeholder="Password"
            class="inputL"
            ref="password"
          />
          <router-link to="/register" class="aL"
            >Not registered yet?</router-link
          >
          <button @click.prevent="LoginSubmit" class="buttonL">Connect</button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { ref } from "vue";
import { presentToast } from "/src/function/utils";
import axios from "axios";

export default {
  methods: {
    async LoginSubmit() {
      try {
        const email = this.$refs.email.value;
        const password = this.$refs.password.value;

        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          {
            email,
            password,
          }
        );

        if (response.status === 200) {
          // Connexion réussie
          const responseData = response.data;
          const token = responseData.token;
          localStorage.setItem("token", token);
          this.$router.push("/home");
        }
      } catch (error) {
        const email = this.$refs.email.value;
        const password = this.$refs.password.value;
        if (!email || !password) {
          presentToast("Please fill in all fields.");
          return;
        }
        if (error.response && error.response.status === 401) {
          // Connexion échouée
          presentToast("Password or email incorrect");
        }
      }
    },
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.$router.push("/home");
    }
  },
};
</script>

<style>
.FormuLogin {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #242131;
  padding: 10px 0px;
  width: 100vw;
  height: 100vh;
}

.titleL {
  font-family: var(--font-gugi);
  font-size: 28px !important;
}

.formL {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 40% !important;
}

.inputL {
  font-family: var(--font-gugi);
  width: 100%;
  height: 40px !important;
  margin: 5px !important;
  padding-left: 20px;
  border-radius: 9px;
  border: none;
  background-color: #2f2b45;
  color: #9987ff !important;
  font-size: 12px;
  padding: 20px;
}

.inputL::placeholder {
  color: #6459a2 !important;
  font-size: 12px;
}

.inputL:focus {
  outline: none;
}

.aL {
  font-family: var(--font-gugi);
  color: #9987ff !important;
  font-size: 14px;
  margin: 2px !important;
}

.buttonL {
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
