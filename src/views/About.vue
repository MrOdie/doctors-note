<script lang="ts">
import { defineComponent } from "vue";
import Layout from "../components/Layout.vue";
import * as _ from 'lodash';

export default defineComponent({
    methods: {
        handleScroll(event: any) {
            // Any code to be executed when the window is scrolled
            const isUserScrolling = (window.scrollY > 0);
            console.log("calling handleScroll");
        }
    },
    mounted() {
        window.addEventListener("scroll", _.debounce(this.handleScroll, 100));
    },
    beforeUnmount() {
        // I switched the example from `destroyed` to `beforeDestroy`
        // to exercise your mind a bit. This lifecycle method works too.
        window.removeEventListener("scroll", _.debounce(this.handleScroll, 100));
    },
    components: { Layout }
}
);
</script>

<template>
  <Layout :backgroundColor="'backgroundColorAbout'">
    <h3 class="h1">About Page, asshole.</h3>
  </Layout>
</template>

<style scoped lang="scss"></style>
