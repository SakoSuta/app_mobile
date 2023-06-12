<template>
  <ion-page>
    <ion-header>
      <Nav :background-color="'#24223E'"></Nav>
    </ion-header>
    <ion-content>
      <div class="AllContCate">
        <h1 class="titleCate">FPS Game</h1>
        <div class="AllGameCate">
          <router-link to="/Games/sluggg">
            <div class="Game">
              <div class="ContGame">
                <h2>FPS gamqzdqdddddddddddddddddddddddz</h2>
              </div>
            </div>
          </router-link>
          <router-link to="/Games/sluggg">
            <div class="Game">
              <div class="ContGame">
                <h2>FPS game AHH</h2>
              </div>
            </div>
          </router-link>
          <router-link to="/Games/sluggg">
            <div class="Game">
              <div class="ContGame">
                <h2>FPS game AHH</h2>
              </div>
            </div>
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
.AllContCate{
  padding: 0px 26px;
}

.AllGameCate{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 568px) {
  .AllGameCate{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .AllGameCate{
    grid-template-columns: repeat(4, 1fr);
  }
}

.titleCate{
  font-family: var(--font-gugi);
  font-size: 28px;
  color: #FFFFFF;
  margin: 30px 0px;
}
.Game{
  width: 140px;
  height: 150px;
  background-image: url('https://loremflickr.com/320/240');
  border-radius: 20px;
  margin: 15px;
}
.ContGame{
  background: linear-gradient(180deg, rgba(36, 34, 82, 0.5) 0%, rgba(36, 34, 82, 0.5) 49.42%, #242252 70.55%);  
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: end;
}
.ContGame h2{
  font-family: var(--font-gugi);
  font-size: 12px;
  text-align: center;
  color: #FFFFFF;
  width: 100%;
}
</style>
