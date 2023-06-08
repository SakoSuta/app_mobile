<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="navPost">
          <router-link to="/"><img src="Logo.png" alt="Logo"></router-link>
          <router-link to="/"><img src="Menu.png" alt="Menu"></router-link>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="AllContPost">
        <h1 class="Gugi titlePost">Actuality</h1>
        <div class="AllCardPosts">
          <router-link to="/home">
            <ion-card class="CardPost">
              <div class="ContCardPost">
                <ion-card-header>
                  <h2 class="Gugi">Titre hyper mega cool de tous les temps et de tous les univers interstellaire</h2>
                </ion-card-header>
                <ion-card-content>
                  <p class="Gugi">Publish at 20/07/2023</p>
                  <p class="Gugi">By Emilie Montpre</p>
                </ion-card-content>
              </div>
            </ion-card>
          </router-link>
          <router-link to="/home">
            <ion-card class="CardPost">
              <div class="ContCardPost">
                <ion-card-header>
                  <h2 class="Gugi">Titre hyper mega cool de tous les temps et de tous les univers interstellaire</h2>
                </ion-card-header>
                <ion-card-content>
                  <p class="Gugi">Publish at 20/07/2023</p>
                  <p class="Gugi">By Emilie Montpre</p>
                </ion-card-content>
              </div>
            </ion-card>
          </router-link>
          <router-link to="/home">
            <ion-card class="CardPost">
              <div class="ContCardPost">
                <ion-card-header>
                  <h2 class="Gugi">Titre hyper mega cool de tous les temps et de tous les univers interstellaire</h2>
                </ion-card-header>
                <ion-card-content>
                  <p class="Gugi">Publish at 20/07/2023</p>
                  <p class="Gugi">By Emilie Montpre</p>
                </ion-card-content>
              </div>
            </ion-card>
          </router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonHeader, IonToolbar } from '@ionic/vue';
</script>

<style>
.Gugi{
  font-family: var(--font-gugi);
}
.navPost{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  background-color: #24223E;
  padding: 0px 26px;
}
.AllContPost{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.titlePost{
  font-size: 28px;
  color: #FFFFFF;
  margin: 30px 0px;
}
.AllCardPosts{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
}
.CardPost{
  border-radius: 9px;
  background-image: url('https://loremflickr.com/320/240');
  background-size: cover;
}
.CardPost ion-card-header{
  padding: 0px;
}
.CardPost ion-card-content{
  padding: 0px;
}
.ContCardPost{
  background-color: rgba(153, 135, 255, 0.5);
  padding: 20px;
}
.CardPost ion-card-header h2{
  text-align: center;
  font-size: 20px;
  margin: 5px 0px;
  color: #fff;
}
.CardPost ion-card-content p{
  text-align: left;
  font-size: 10px;
  margin: 2px 0px;
  color: #242252;
}
</style>
