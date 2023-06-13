<template>
  <ion-page>
    <Nav :background-color="'#24223E'"></Nav>
    <ion-content>
      <div class="AllContPost">
        <h1 class="titlePost">Actuality</h1>
        <div class="AllCardPosts">
          <router-link to="/posts/sluug">
            <ion-card class="CardPost">
              <div class="ContCardPost">
                <ion-card-header>
                  <h2>Titre hyper mega cool de tous les temps et de tous les univers interstellaire</h2>
                </ion-card-header>
                <ion-card-content>
                  <p>Publish at 20/07/2023</p>
                  <p>By Emilie Montpre</p>
                </ion-card-content>
              </div>
            </ion-card>
          </router-link>
          <router-link to="/posts/sluug">
            <ion-card class="CardPost">
              <div class="ContCardPost">
                <ion-card-header>
                  <h2>Titre hyper mega cool de tous les temps et de tous les univers interstellaire</h2>
                </ion-card-header>
                <ion-card-content>
                  <p>Publish at 20/07/2023</p>
                  <p>By Emilie Montpre</p>
                </ion-card-content>
              </div>
            </ion-card>
          </router-link>
          <router-link to="/posts/sluug">
            <ion-card class="CardPost">
              <div class="ContCardPost">
                <ion-card-header>
                  <h2>Titre hyper mega cool de tous les temps et de tous les univers interstellaire</h2>
                </ion-card-header>
                <ion-card-content>
                  <p>Publish at 20/07/2023</p>
                  <p>By Emilie Montpre</p>
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
import { IonContent, IonPage, IonHeader, IonCard, IonCardHeader, IonCardContent} from '@ionic/vue';
</script>

<style>
.AllContPost{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.titlePost{
  font-family: var(--font-gugi);
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
  font-family: var(--font-gugi);
  padding: 0px;
}
.CardPost ion-card-content{
  font-family: var(--font-gugi);
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
  font-size: 11px;
  margin: 2px 0px;
  color: #242252;
}
</style>
