<template>
  <div class="Navigate" :style="navStyles">
    <router-link to="/"><img src="Menu.png" alt="Menu"></router-link>
    <router-link to="/"><img :src="logo" alt="Logo"></router-link>
    <router-link to="/"><img src="search.png" alt="Search icon"></router-link>
  </div>
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
