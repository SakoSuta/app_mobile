<template>
    <footer>
      <div class="Footer">
        <div class="ImgFoot">
            <img src="/Logo/long_item.svg" alt="Logo" />
        </div>
        <div class="FootContent">
            <h2>Contact us</h2>
            <router-link to="/contact" class="LinkFoot">ContactUs</router-link>
        </div>
        <div class="FootContent">
            <h2>Legal</h2>
            <router-link to="/Legal_Notice" class="LinkFoot">Legal Notice</router-link>
            <router-link to="/Terms_Of_Service" class="LinkFoot">Terms_of_Sales</router-link>
            <router-link to="/Terms_Of_Sales" class="LinkFoot">Terms_of_Service</router-link>
        </div>
      </div>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
  
<style>
.Footer{
    padding: 20px 0px;
    padding-left: 20px;
    background-color: #242252;
}
.ImgFoot{
    margin: 20px 0px;
}
.FootContent{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.FootContent h2{
    font-family: var(--font-gugi);
    font-size: 18px;
    border-bottom: 1px solid #9987ff;
    padding: 10px;
    margin: 5px;
    width: max-content;
}
.LinkFoot{
    font-family: var(--font-gugi);
    font-size: 14px;
    padding: 10px;
    width: max-content;
    text-decoration: none;
    color: #fff;
}
</style>
