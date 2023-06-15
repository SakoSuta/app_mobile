<template>
  <ion-page ref="page">
    <Nav></Nav>
    <ion-content>
      <div class="grade"></div>
      <div class="WelcomeSec">
        <h1 class="WelcomTitle">Discover all available subscriptions</h1>
        <div class="AllPlanet">
          <img src="Planet/Planet.png" alt="All Planet" class="Planet" />
        </div>
        <div class="Go_Down">
          <img src="Icone/Double_down_arrow.svg" alt="Go Down" />
        </div>
      </div>

      
      <div class="JupiterSec">
        <div class="MiniDetails">
          <h1 class="SubTitle">Jupiter</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="Jupiter">
          <img src="Planet/Jupiter.png" alt="Jupiter" />
          <div class="degraSubJ"></div>
          <div class="AllCategorySub">
            <ul>
              <li>Category</li>
              <li>Category</li>
              <li>Category</li>
              <li>Category</li>
            </ul>
            <span>And other...</span>
          </div>
        </div>
        <div class="ContSub">
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odio possimus laborum quam distinctio deleniti dolore ipsa? Aspernatur, maxime veniam sunt iste asperiores vitae dolor modi accusamus ea dolores temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla nisi autem mollitia, porro neque reiciendis esse magnam non, hic eveniet sit tempora, ab ducimus soluta eligendi laboriosam quae debitis. Lorem ipsum dolor sit amet
          </h3>
        </div>
      </div>

      <div class="MarsSec">
        <div class="MiniDetails">
          <h1 class="SubTitle">Mars</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="Mars">
          <img src="Planet/Mars.png" alt="Mars" />
          <div class="degraSubM"></div>
          <div class="AllCategorySub">
            <ul>
              <li>Category</li>
              <li>Category</li>
              <li>Category</li>
              <li>Category</li>
            </ul>
            <span>And other...</span>
          </div>
        </div>
        <div class="ContSub">
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odio possimus laborum quam distinctio deleniti dolore ipsa? Aspernatur, maxime veniam sunt iste asperiores vitae dolor modi accusamus ea dolores temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla nisi autem mollitia, porro neque reiciendis esse magnam non, hic eveniet sit tempora, ab ducimus soluta eligendi laboriosam quae debitis. Lorem ipsum dolor sit amet
          </h3>
        </div>
      </div>
      
      <div class="SaturnSec">
        <div class="MiniDetails">
          <h1 class="SubTitle">Saturn</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="Saturn">
          <img src="Planet/Saturn.png" alt="Saturn" />
          <div class="degraSubS"></div>
          <div class="AllCategorySubS">
            <ul>
              <li>Category</li>
              <li>Category</li>
              <li>Category</li>
            </ul>
            <span>And other...</span>
          </div>
        </div>
        <div class="ContSub">
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odio possimus laborum quam distinctio deleniti dolore ipsa? Aspernatur, maxime veniam sunt iste asperiores vitae dolor modi accusamus ea dolores temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla nisi autem mollitia, porro neque reiciendis esse magnam non, hic eveniet sit tempora, ab ducimus soluta eligendi laboriosam quae debitis. Lorem ipsum dolor sit amet
          </h3>
        </div>
      </div>

      <!-- <div>
        <strong>Where we go ?</strong><br />
        <router-link to="/Login">Login</router-link><br />
        <router-link to="/Register">Register</router-link><br />
        <router-link to="/Contact">Contact</router-link><br />
        <router-link to="/posts">Posts</router-link><br />
        <router-link to="/Posts/sluggg">PostBySlug</router-link><br />
        <router-link to="/Category/sluggg">Category</router-link><br />
        <router-link to="/Games/sluggg">Games</router-link><br />
        <router-link to="/Users/cvgbhjzdq5">User</router-link><br />
      </div> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
</script>

<style>
.WelcomTitle {
  font-family: var(--font-goldman);
  font-weight: 700;
}
.grade {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #242252 39.53%, rgba(36, 34, 82, 0) 100%);
  position: absolute;
  z-index: -1;
}
.NavHome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  background-color: #242252;
  padding: 0px 26px;
}
.WelcomeSec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: #24223E; */
  padding: 30px 0px;
  height: 100%;
  width: 100%;
}
.WelcomeSec h1 {
  text-align: center;
  color: #9987ff;
  width: 90%;
}
.AllPlanet {
  display: flex;
  justify-content: center;
  width: 90%;
}
@keyframes zoom {
  0% {
    transform: scale(1) translateY(0px);
  }
  50% {
    transform: scale(1.1) translateY(-15px);
  }
  100% {
    transform: scale(1) translateY(0px);
  }
}

@keyframes myAnim {
	0% {
		transform: translate(0);
	}

	20% {
		transform: translate(-3px, 3px);
	}

	40% {
		transform: translate(-3px, -3px);
	}

	60% {
		transform: translate(3px, 3px);
	}

	80% {
		transform: translate(3px, -3px);
	}

	100% {
		transform: translate(0);
	}
}
.Planet {
  animation: myAnim 5s linear 0s infinite reverse none;
}
.Go_Down{
  animation: zoom 2s infinite;
}

.JupiterSec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 46px 0px;
  height: 100vh;
}
.MiniDetails{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.SubTitle{
  font-family: var(--font-goldman);
  font-weight: 700;
  font-size: 24px;
  margin: 7px 0px;
  color: #9987FF;
}
.MiniDetails p{
  font-family: var(--font-gugi);
  text-align: center;
  color: #9987FF;
  margin: 0px;
}
.Jupiter{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 40%;
}
.Jupiter img{
  position: relative; 
  left: 90px;
}
.degraSubJ{
  width: 590px;
  height: 556px;
  background: radial-gradient(circle, rgba(153,135,255,0.21004898541447825) 0%, rgba(153,135,255,0) 70%);
  position: absolute; 
  left: 53px;
  z-index: -1;
}
.AllCategorySub{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 40%;
}
.AllCategorySub ul{
  font-family: var(--font-gugi);
  font-size: 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 100%;
}
.AllCategorySub span{
  font-family: var(--font-gugi);
  color: #61579E;
  font-size: 14px;
  width: 100%;
  text-align: end;
  margin: 10px 0px;
  margin-top: 30px;
}
.ContSub h3{
  font-family: var(--font-gugi);
  font-size: 14px;
  color: #61579E;
  padding-left: 20px;
  line-height: 21px;
}

.MarsSec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 46px 0px;
  height: 100vh;
}
.Mars{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 40%;
}
.degraSubM{
  width: 590px;
  height: 556px;
  background: radial-gradient(circle, rgba(153,135,255,0.21004898541447825) 0%, rgba(153,135,255,0) 70%);
  position: absolute; 
  left: -183px;
  z-index: -1;
}

.SaturnSec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 46px 0px;
  height: 100vh;
}
.Saturn{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 40%;
}
.AllCategorySubS{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 80%;
}
.AllCategorySubS ul{
  font-family: var(--font-gugi);
  font-size: 16px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 100%;
}
.AllCategorySubS span{
  font-family: var(--font-gugi);
  color: #61579E;
  font-size: 14px;
  width: 100%;
  text-align: end;
}
.degraSubS{
  width: 590px;
  height: 556px;
  background: radial-gradient(circle, rgba(153,135,255,0.21004898541447825) 0%, rgba(153,135,255,0) 70%);
  position: absolute; 
  top: 2040px;
  z-index: -1;
}
</style>
