<template>
  <ion-page>
    <ion-header>
        <div class="navPostS">
          <router-link to="/"><img src="Logo.png" alt="Logo"></router-link>
          <router-link to="/"><img src="Menu.png" alt="Menu"></router-link>
        </div>
    </ion-header>
    <ion-content>
      <router-link to="/posts" class="Go_BackBS">
        <img src="Go_Back.png" alt="Return button">
      </router-link>
      <div class="ImgPost"><img src="https://loremflickr.com/320/240" alt="Image du posts"></div>
      <div class="publishAt">
        <p>Publish at 20/07/2023 by Emilie Montpre</p>
      </div>
      <div class="titlePostBS"><h1>Titre hyper mega cool de tous les temps et de tous les univers interstellaire</h1></div>
      <div class="ContPostBS"><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at assumenda, quos doloremque cupiditate molestiae eligendi consequuntur repudiandae, ab nihil autem rerum nam similique? Ratione magni voluptatibus explicabo quisquam ipsam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo pariatur veniam dolor, asperiores, qui rem consectetur amet ipsa ab, quae labore at provident expedita eius et deleniti corporis error unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, perferendis! Inventore accusamus magni repudiandae, iure sunt expedita repellat optio, sequi cum culpa, tempore velit asperiores adipisci nesciunt? Dignissimos, possimus in.</h3></div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonHeader } from '@ionic/vue';
</script>

<style>
.navPostS{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  background-color: #24223E;
  /* background: linear-gradient(180deg, rgba(36,34,82,0.74) 0%, rgba(36,34,82,0.4) 100%); */
  padding: 0px 26px;
}
.Go_BackBS{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
  padding-left: 20px;
  position: absolute;
}
.Go_BackBS img{
  background-color: #24223E;
  padding: 5px;
  border-radius: 20px;
}
.ImgPost{
  width: 100%;
  height: 300px;
}
.ImgPost img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px 0px 20px 20px;
}
.publishAt{
  font-family: var(--font-gugi);
  font-size: 12px;
  color: #5E5498;
  padding: 0px 26px;
  margin-top: 21px;
}
.titlePostBS{
  font-family: var(--font-gugi);
  font-size: 16px;
  color: #9987FF;
  padding: 0px 26px;
  text-align: center;
  margin-top: 21px;
  letter-spacing: 0.06em;
}
.ContPostBS{
  font-family: var(--font-gugi);
  font-size: 14px;
  color: #fff;
  padding: 0px 26px;
  margin-top: 21px;
  text-align: justify;
  }
</style>
