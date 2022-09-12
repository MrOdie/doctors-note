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

</style>