<template>
  <ion-page>
    <NavAuth></NavAuth>
    <ion-content :fullscreen="true">
      <div class="Go_Back" onclick="history.back()">
        <img src="Icone/Go_Back.svg" alt="Return button" />
      </div>
      <div class="FormuRegister">
        <form class="formR">
          <h1 class="titleR">Register</h1>
          <input type="text" placeholder="Name" class="inputR" ref="name"/>
          <input type="text" placeholder="Pseudo" class="inputR" ref="pseudo"/>
          <input type="email" placeholder="Email" class="inputR" ref="email"/>
          <input type="password" placeholder="Password" class="inputR" ref="password"/>
          <router-link to="/login" class="aR">You already have an account ?</router-link>
          <button class="buttonR" @click="RegisterSubmit">Register</button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { presentToast } from "@/function/utils";
import axios from 'axios';

export default {
  components: {
    IonContent,
    IonPage,
  },
  methods: {
    async RegisterSubmit() {
      try {
        const name = this.$refs.name.value;
        const pseudo = this.$refs.pseudo.value;
        const email = this.$refs.email.value;
        const password = this.$refs.password.value;

        const response = await axios.post('http://localhost:3000/api/auth/register', {
          name,
          pseudo,
          email,
          password,
        });
        console.log(response);

        if (response.status === 201) {
          // Inscription réussie
          const responseData = response.data;
          const token = responseData.token;
          localStorage.setItem("token", token);
          this.$router.push('/home');
        }
        
      } catch (error) {
        const name = this.$refs.name.value;
        const pseudo = this.$refs.pseudo.value;
        const email = this.$refs.email.value;
        const password = this.$refs.password.value;
        if(!email || !password || !name || !pseudo) {
          presentToast('Please fill in all fields.');
          return;
        }
          if (error.response && error.response.status === 409){
            // Inscription échouée
            presentToast('Email already used');
          }
      }
    },
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.$router.push('/home');
    }
  },

};
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
