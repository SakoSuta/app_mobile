<template>
  <ion-page>
    <!-- <Nav></Nav> -->
    <ion-content>
      <div>
        <h1 class="Title SouscritT">To love someone !</h1>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Jupiter</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <img src="/Planet/Jupiter.png" alt="" />
            <div class=""></div>
            <p>32 € / mois</p>
            <stripe-buy-button
              buy-button-id="buy_btn_1NMTRFGCQVv7qrCN4fC3qxSt"
              publishable-key="pk_test_51NESb6GCQVv7qrCNk4eCbXf6AhyYSaza5x79unKVeh1TDJr666hpCr8dOf54NDGqQ0UndyobgwMzPi9rGlzDrlIi00HpxnU5IC"
              success-event-name="payment-successful"
            >
            </stripe-buy-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/vue";
import { loadStripe } from "@stripe/stripe-js";
import { ConnecteUserData } from "/src/function/utils";

export default {
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
  },
  async mounted() {
    const userData = await ConnecteUserData();
    console.log(userData);
    this.UserData = userData;

    const stripePromise = loadStripe(
      "pk_test_51NESb6GCQVv7qrCNk4eCbXf6AhyYSaza5x79unKVeh1TDJr666hpCr8dOf54NDGqQ0UndyobgwMzPi9rGlzDrlIi00HpxnU5IC"
    );

    document.addEventListener("payment-successful", async (event) => {
      console.log("Paiement réussi !");
      const stripe = await stripePromise;
      const newSubscriber = {
        user: this.UserData.id,
      };

      // Envoyer les informations à votre API
      fetch("http://localhost:3000/api/subscriptions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newSubscriber),
      })
        .then((response) => response.json())
        .then((data) => {
          // Traitement de la réponse de l'API
          console.log("Inscription réussie :", data);
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error("Erreur lors de l'inscription :", error);
        });
    });
  },
  data() {
    return {
      UserData: {
        id: "",
      },
    };
  },
};
</script>
