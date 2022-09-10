<script setup lang="ts">
import Layout from "../components/Layout.vue";

const testing = () => {
  console.log("testing");
};
</script>

<template>
  <Layout :backgroundColor="'backgroundColorMain'">
    <div id="home-page">
      <h1>Home Page, Johnson.</h1>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
#home-page {
  background-color: green;
}
</style>

export default {
  components: {
    Layout
  }
}
