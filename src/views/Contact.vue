<template>
  <ion-page>
    <Nav :background-color="'#242131'"></Nav>
    <ion-content>
      <div class="contactUs">
        <div class="Go_Back" onclick="history.back()">
          <img src="/Icone/Go_Back.svg" alt="Return button" />
        </div>
        <div class="ContentCont">
          <div class="ContCont">
            <h1 class="titleCont">Contact us</h1>
            <form class="formCont" @submit="ContactPlanet">
              <input
                type="text"
                placeholder="Name"
                class="inputCont"
                ref="name"
              />
              <input
                type="email"
                placeholder="Email"
                class="inputCont"
                ref="email"
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Message"
                class="textaCont"
                ref="message"
              ></textarea>
              <button class="buttonSend">Sending</button>
            </form>
          </div>
        </div>
      </div>

      <div class="allCard">
        <ion-card class="CardCont">
          <ion-card-header>
            <div class="ContIconCont">
              <img src="/Icone/MailW.svg" alt="Icone" />
            </div>
          </ion-card-header>

          <ion-card-content>
            <h2 class="titleCardCont">Mail us</h2>
            <p class="ContCardCont">EmilieMontpre@outlook.com</p>
          </ion-card-content>
        </ion-card>
        <ion-card class="CardCont">
          <ion-card-header>
            <div class="ContIconCont">
              <img src="/Icone/Phone.svg" alt="Icone" />
            </div>
          </ion-card-header>

          <ion-card-content>
            <h2 class="titleCardCont">Call us</h2>
            <p class="ContCardCont">06 73 22 01 37</p>
          </ion-card-content>
        </ion-card>
        <ion-card class="CardCont">
          <ion-card-header>
            <div class="ContIconCont">
              <img src="/Icone/Maps.svg" alt="Icone" />
            </div>
          </ion-card-header>

          <ion-card-content>
            <h2 class="titleCardCont">Visit us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.356384458011!2d2.363049900000007!3d48.870482300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0989542143%3A0x9384848c375ced98!2s%C3%89cole%20Webstart!5e0!3m2!1sfr!2sfr!4v1686136783090!5m2!1sfr!2sfr"
              width="600"
              height="450"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p class="ContCardCont">
              Webstart at Paris : 19 rue Yves Toudic 75010 Paris
            </p>
          </ion-card-content>
        </ion-card>
      </div>
      <Foot></Foot>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonIcon,
  IonCardContent,
} from "@ionic/vue";
import axios from "axios";
import { presentToast } from "/src/function/utils";

export default {
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonIcon,
    IonCardContent,
  },
  methods: {
    async ContactPlanet(event: Event) {
      event.preventDefault();
      try {
        const name = this.$refs.name.value;
        const email = this.$refs.email.value;
        const message = this.$refs.message.value;
        const subject = "Contact from the website";

        if (!name || !email || !message) {
          presentToast("Please fill in all fields.");
          return;
        }

        const response = await axios.post("http://localhost:3000/api/contact", {
          name,
          email,
          message,
          subject,
        });

        if (response.status === 200) {
          // Envoi réussi
          presentToast("E-mail sent successfully.");
        }
      } catch (error) {
        presentToast("Hmmm... Something went wrong, please try again later.");
      }
    },
  },
};
</script>

<style>
.Go_Back {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: #242131;
  padding-left: 25px;
}
.titleCont {
  font-family: var(--font-gugi);
  font-size: 28px !important;
}
.contactUs {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #242131;
  height: 100vh;
}
.ContentCont {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
}
.ContCont {
  display: flex;
  flex-direction: column;
  height: 80%;
}
.formCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 30px 0px;
}
.inputCont {
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

.inputCont::placeholder {
  color: #6459a2 !important;
  font-size: 12px;
}

.inputCont:focus {
  outline: none;
}
.textaCont {
  font-family: var(--font-gugi);
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  max-height: 300px !important;
  margin: 5px !important;
  padding-left: 20px;
  border-radius: 9px;
  border: none;
  background-color: #2f2b45;
  color: #9987ff !important;
  font-size: 12px;
  padding: 20px;
}
.textaCont::placeholder {
  color: #6459a2 !important;
  font-size: 12px;
}

.textaCont:focus {
  outline: none;
}
.buttonSend {
  font-family: var(--font-gugi);
  width: 80%;
  height: 34px !important;
  margin: 5px !important;
  border-radius: 9px;
  border: none;
  background-color: #9987ff;
  color: #fff !important;
  font-size: 12px;
  padding: 10px;
}
.allCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #242131;
  padding: 0px 20px;
}
.CardCont {
  background-color: #24223e;
  width: 100%;
}
.iconCont {
  width: 30px;
  height: 30px;
  /* background-color: #9987FF; */
  color: #9987ff !important;
}
.ContIconCont {
  background-color: #5e549e;
  padding: 10px;
  border-radius: 9px;
  width: max-content;
}
.titleCardCont {
  font-family: var(--font-gugi);
  font-size: 18px !important;
  margin: 10px 0px !important;
  color: #fff;
}
.ContCardCont {
  font-family: var(--font-gugi);
  width: max-content;
  font-size: 12px !important;
  margin: 10px 0px !important;
  color: #fff;
}
iframe {
  width: 100%;
  height: 100%;
  border-radius: 9px;
  border: none;
}
</style>
