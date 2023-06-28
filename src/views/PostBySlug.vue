<template>
  <ion-page>
    <Nav :background-color="'#24223E'"></Nav>
    <ion-content>
      <router-link to="/posts" class="Go_BackBS">
        <img src="/Icone/Go_Back.svg" alt="Return button" />
      </router-link>
      <div class="ImgPost">
        <img src="https://loremflickr.com/320/240" alt="Image du posts" />
      </div>
      <div class="publishAt">
        <p>
          Publish at {{ posts.publishedAt }} by {{ posts.author.name }} alias
          {{ posts.author.pseudo }}
        </p>
      </div>
      <div class="titlePostBS">
        <h1>
          {{ posts.title }}
        </h1>
      </div>
      <div class="ContPostBS">
        <h3>
          {{ posts.body }}
        </h3>
      </div>
      <Foot></Foot>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { formatDate } from "/src/function/utils";
import axios from "axios";

export default {
  components: {
    IonContent,
    IonPage,
  },
  async mounted() {
    const response = await axios.get(
      `http://localhost:3000/api/posts/${this.$route.params.slug}`
    );
    this.posts = response.data;
    this.posts.publishedAt = await formatDate(response.data.publishedAt);
  },
  data() {
    return {
      posts: {
        author: {
          name: "",
          pseudo: "",
        },
        title: "",
        image: "",
        publishedAt: "",
        body: "",
      },
    };
  },
};
</script>

<style>
.Go_BackBS {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
  padding-left: 20px;
  position: absolute;
}
.Go_BackBS img {
  background-color: #24223e;
  padding: 5px;
  border-radius: 20px;
}
.ImgPost {
  width: 100%;
  height: 300px;
}
.ImgPost img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px 0px 20px 20px;
}
.publishAt {
  font-family: var(--font-gugi);
  font-size: 12px;
  color: #5e5498;
  padding: 0px 26px;
  margin-top: 21px;
}
.titlePostBS {
  font-family: var(--font-gugi);
  font-size: 16px;
  color: #9987ff;
  padding: 0px 26px;
  text-align: center;
  margin-top: 21px;
  letter-spacing: 0.06em;
}
.ContPostBS {
  font-family: var(--font-gugi);
  font-size: 14px;
  color: #fff;
  padding: 0px 26px;
  margin-top: 21px;
  text-align: justify;
}
</style>
