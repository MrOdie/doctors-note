<script setup lang="ts">
import Layout from "../components/Layout.vue";

const testing = () => {
  console.log("testing");
};
</script>

<template>
  <Layout :backgroundColor="'backgroundColorMain'">
    <div id="home-page">
      <h3 class="h1">Home Page, Johnson.</h3>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
#home-page {
  background-color: green;
}
</style>