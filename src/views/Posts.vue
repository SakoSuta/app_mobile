<template>
  <ion-page>
    <Nav :background-color="'#24223E'"></Nav>
    <ion-content>
      <div class="AllContPost">
        <h1 class="titlePost">Actuality</h1>
        <div class="AllCardPosts">
          <router-link v-for="Post in Posts" :to="`/posts/${Post.slug}`">
            <ion-card class="CardPost">
              <div class="ContCardPost">
                <ion-card-header>
                  <h2>{{Post.title}}</h2>
                </ion-card-header>
                <ion-card-content>
                  <p>Publish at {{Post.publishedAt}}</p>
                  <p>By {{Post.author.pseudo}} alias {{ Post.author.name }}</p>
                </ion-card-content>
              </div>
            </ion-card>
          </router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardContent} from '@ionic/vue';
import { parseISO, format } from 'date-fns';
import axios from 'axios';

export default {
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardContent
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/api/posts');
    const allPosts = response.data;
    this.Posts = allPosts
        .filter(post => post.Actif === true)
        .map(post => {
          return {
            id: post.id,
            title: post.title,
            publishedAt: this.formatDate(post.publishedAt),
            author: post.author,
            slug: post.slug
          };
        });
  },
  methods: {
    formatDate(dateString : any) {
      const date = format(parseISO(dateString), 'dd/MM/yyyy');
      return date;
    }
  },
  data() {
    return {
      Posts: [],
    };
  },
};
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
