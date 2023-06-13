<template>
  <ion-menu contentId="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
  <ion-header>
    <div class="Navigate" :style="navStyles" id="main-content">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
            <router-link to="/"><img :src="logo" alt="Logo"></router-link>
            <router-link to="/"><img src="search.png" alt="Search icon"></router-link>
    </div>
  </ion-header>
</template>

<script>
export default {
  props: {
    logoPath: {
      type: String,
      default: 'long_item.png'
    },
    backgroundColor: {
      type: String,
      default: '#242252'
    }
  },
  computed: {
    logo() {
      return this.logoPath || 'long_item.png';
    },
    navStyles() {
      return {
        backgroundColor: this.backgroundColor || '#242252'
      };
    }
  }
}
</script>

<style>
.Navigate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 0px 26px;
}
</style>
