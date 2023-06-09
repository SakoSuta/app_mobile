<template>
  <ion-page>
    <ion-header>
        <div class="navPostS">
          <router-link to="/"><img src="Menu.png" alt="Menu"></router-link>
          <router-link to="/"><img src="long_item.png" alt="Logo"></router-link>
          <router-link to="/"><img src="search.png" alt="Search icon"></router-link>
        </div>
    </ion-header>
    <ion-content>
      <router-link to="/posts" class="Go_BackBS">
        <img src="Go_Back.png" alt="Return button">
      </router-link>
      <div class="ImgPost">
        <img src="https://loremflickr.com/320/240" alt="Image du posts">
        <div class="Download">
          <span>Download PC only</span>
        </div>
      </div>
      <div class="titleGames"><h1>Hogwarts Legacy : L'Héritage de Poudlard</h1></div>
      <div class="InfoPlus">
        <h2>DEVELOPPEMENT : Avalanche Software</h2>
        <h2>EDITION: Warner Bros. Games</h2>
        <p>Date OF PUBLICATION : 10/02/2023</p>
      </div>
      <div class="ContGames"><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at assumenda, quos doloremque cupiditate molestiae eligendi consequuntur repudiandae, ab nihil autem rerum nam similique? Ratione magni voluptatibus explicabo quisquam ipsam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo pariatur veniam dolor, asperiores, qui rem consectetur amet ipsa ab, quae labore at provident expedita eius et deleniti corporis error unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, perferendis! Inventore accusamus magni repudiandae, iure sunt expedita repellat optio, sequi cum culpa, tempore velit asperiores adipisci nesciunt? Dignissimos, possimus in.</h3></div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonHeader } from '@ionic/vue';
</script>

<style>
.Download{
  font-family: var(--font-gugi);
  font-size: 12px;
  color: #6A5FBA;
  padding: 10px 20px;
  background-color: #9987FF;
  width: max-content;
  border-radius: 9px;
  position: fixed;
  left: 72%;
  top: 33%;
}
.titleGames{
  font-family: var(--font-gugi);
  font-size: 16px;
  color: #9987FF;
  padding: 0px 26px;
  margin-top: 21px;
  letter-spacing: 0.06em;
}
.InfoPlus{
  padding: 0px 26px;
  margin-top: 21px;
}
.InfoPlus h2{
  font-family: var(--font-gugi);
  font-size: 12px !important;
  color: #5E5498;
  margin: 5px 0px;
}
.InfoPlus p{
  font-family: var(--font-gugi);
  font-size: 12px !important;
  color: #5E5498;
}
.ContGames{
  font-family: var(--font-gugi);
  font-size: 14px;
  color: #fff;
  padding: 0px 26px;
  margin-top: 21px;
  text-align: justify;
  }
</style>
