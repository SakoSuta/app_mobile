<template>
  <ion-header>
    <div class="NavigateAuth">
      <router-link to="/"><img src="Logo/Very_long_item.svg" alt="Logo"/></router-link>
    </div>
  </ion-header>
</template>

<script lang="ts">
import { IonHeader } from "@ionic/vue";

export default {
  components: {
    IonHeader,
  },
};
</script>

<style>
.NavigateAuth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 74px;
  background-color: #24223e;
}
</style>
