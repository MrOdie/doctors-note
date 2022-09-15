<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

  computed: {
    truncateDescription(str: string): any {
      console.log(str);

      return str;
    }
  }
});
</script>

<template>
  <section class="container__blog">
    <article class="row">
      <div class="col">
        <div class="blog__title">
          <h3 class="h1">Blog Page</h3>
        </div>
        <div class="blog__list">
          <div class="blogs">
            <p class="h6">Blog Title</p>
            <p>
              {{truncateDescription("Bacon ipsum dolor amet short ribs shoulder sausage, pork lointri-tip chuck t-bone pastrami chislic strip steak ground round shankle ham pork. Picanha pig salami strip steak meatloaf pork chop prosciutto tenderloin tongue. Buffalo shoulder venison hamburger. Short ribs venison kevin fatback hamburger prosciutto boudin. Sausage pork chop short ribs chuck venison, shoulder ground round beef ribs. Pancetta shankle cow tri-tip, frankfurter pig ham shoulder tenderloin buffalo.")}}
            </p>
            <button>View Blog</button>
          </div>
          <div class="blogs">
            <p class="h6">Blog Title</p>
            <p>
              Bacon ipsum dolor amet short ribs shoulder sausage, pork loin
              tri-tip chuck t-bone pastrami chislic strip steak ground round
              shankle ham pork. Picanha pig salami strip steak meatloaf pork
              chop prosciutto tenderloin tongue. Buffalo shoulder venison
              hamburger. Short ribs venison kevin fatback hamburger prosciutto
              boudin. Sausage pork chop short ribs chuck venison, shoulder
              ground round beef ribs. Pancetta shankle cow tri-tip, frankfurter
              pig ham shoulder tenderloin buffalo.
            </p>
            <button>View Blog</button>
          </div>
          <div class="blogs">
            <p class="h6">Blog Title</p>
            <p>
              Bacon ipsum dolor amet short ribs shoulder sausage, pork loin
              tri-tip chuck t-bone pastrami chislic strip steak ground round
              shankle ham pork. Picanha pig salami strip steak meatloaf pork
              chop prosciutto tenderloin tongue. Buffalo shoulder venison
              hamburger. Short ribs venison kevin fatback hamburger prosciutto
              boudin. Sausage pork chop short ribs chuck venison, shoulder
              ground round beef ribs. Pancetta shankle cow tri-tip, frankfurter
              pig ham shoulder tenderloin buffalo.
            </p>
            <button>View Blog</button>
          </div>
          <div class="blogs">
            <p class="h6">Blog Title</p>
            <p>
              Bacon ipsum dolor amet short ribs shoulder sausage, pork loin
              tri-tip chuck t-bone pastrami chislic strip steak ground round
              shankle ham pork. Picanha pig salami strip steak meatloaf pork
              chop prosciutto tenderloin tongue. Buffalo shoulder venison
              hamburger. Short ribs venison kevin fatback hamburger prosciutto
              boudin. Sausage pork chop short ribs chuck venison, shoulder
              ground round beef ribs. Pancetta shankle cow tri-tip, frankfurter
              pig ham shoulder tenderloin buffalo.
            </p>
            <button>View Blog</button>
          </div>
          <div class="blogs">
            <p class="h6">Blog Title</p>
            <p>
              Bacon ipsum dolor amet short ribs shoulder sausage, pork loin
              tri-tip chuck t-bone pastrami chislic strip steak ground round
              shankle ham pork. Picanha pig salami strip steak meatloaf pork
              chop prosciutto tenderloin tongue. Buffalo shoulder venison
              hamburger. Short ribs venison kevin fatback hamburger prosciutto
              boudin. Sausage pork chop short ribs chuck venison, shoulder
              ground round beef ribs. Pancetta shankle cow tri-tip, frankfurter
              pig ham shoulder tenderloin buffalo.
            </p>
            <button>View Blog</button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
.blog {
  &__list {
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    justify-content: space-around;

    .blogs {
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 28%;
      margin-bottom: 2rem;
      border: 2px solid #333;
      border-radius: 10px;
      padding: 15px;
    }
  }
}
</style>
