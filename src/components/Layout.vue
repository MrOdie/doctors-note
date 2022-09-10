<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // type inference enabled
    props: {
      backgroundColor: String,
  },
  computed: {
    backgroundColor(): any {
      const backgroundColor = 'child1'
     return [...backgroundColor]
    }
  },
  mounted() {
    this.backgroundColor // type: string | undefined
  }
});
</script>

<template>
  <section class="container" :class="[backgroundColor ? backgroundColor : '']">
    <article class="row">
      <div class="col">
        <slot></slot>
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/misc/colors.scss";
.container {
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 50px auto 50px;
  .row {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;

    .col {
      grid-column: 2;
      display: grid;

    }
  }
}
</style>