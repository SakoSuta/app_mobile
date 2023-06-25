<template>
  <ion-page>
    <Nav :background-color="'#24223E'"></Nav>
    <ion-content>
      <router-link to="/Category/sluggg" class="Go_BackBS">
        <img src="Icone/Go_Back.svg" alt="Return button" />
      </router-link>
      <div class="ImgPost">
        <img :src="Games.image" alt="Image du posts" />
        <div class="Download">
          <span>Download PC only</span>
        </div>
      </div>
      <div class="titleGames">
        <h1>{{Games.name}}</h1>
      </div>
      <div class="InfoPlus">
        <h2>DEVELOPPEMENT : {{Games.developpement}}</h2>
        <h2>EDITION: {{Games.edition}}</h2>
        <p>Date OF PUBLICATION : {{Games.date}}</p>
      </div>
      <div class="ContGames">
        <h3>{{Games.description}}</h3>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { parseISO, format } from 'date-fns';
import axios from 'axios';

export default {
  components: {
    IonContent,
    IonPage,
  },
  async mounted() {
      const response = await axios.get(`http://localhost:3000/api/games/${this.$route.params.slug}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.Games = response.data;
      const dateOnly = format(parseISO(response.data.dateSortie), 'dd/MM/yyyy');
      this.Games.date = dateOnly;
  },
  data() {
    return {
      Games: {
        name: "",
        image: "",
        date: "",
        developpement: "",
        edition: "",
        description:"",
      },
    };
  },
};

</script>

<style>
.Download {
  font-family: var(--font-gugi);
  font-size: 12px;
  color: #6a5fba;
  padding: 10px 20px;
  background-color: #9987ff;
  width: max-content;
  border-radius: 9px;
  position: fixed;
  left: 72%;
  top: 33%;
}
.titleGames {
  font-family: var(--font-gugi);
  font-size: 16px;
  color: #9987ff;
  padding: 0px 26px;
  margin-top: 21px;
  letter-spacing: 0.06em;
}
.InfoPlus {
  padding: 0px 26px;
  margin-top: 21px;
}
.InfoPlus h2 {
  font-family: var(--font-gugi);
  font-size: 12px !important;
  color: #5e5498;
  margin: 5px 0px;
}
.InfoPlus p {
  font-family: var(--font-gugi);
  font-size: 12px !important;
  color: #5e5498;
}
.ContGames {
  font-family: var(--font-gugi);
  font-size: 14px;
  color: #fff;
  padding: 0px 26px;
  margin-top: 21px;
  text-align: justify;
}
</style>
