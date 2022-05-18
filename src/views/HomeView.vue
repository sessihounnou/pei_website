<template>
  <section>
    <slide />
    <!-- <nave /> -->
  </section>
  <!-- Partenaires -->
  <section class="mt-56 mx-4 mt-4">
    <partenaire />
  </section>
   <!-- services -->
  <section class="mt-8 mx-4">
    <services />
  </section>
     <!-- footer  -->
  <section class="mt-8 mx-4">
    <footer />
  </section>
</template>
<script>
import NavBar from "../components/navBar.vue";
import partenaire from "../components/partner.vue";
import slide from '../components/slide.vue'
import nave from '../components/nav.vue'
import services from "../components/services.vue";
import footer from '../components/footer.vue'
// import bg_img from '../components/'
export default {
  name: "home",
  setup() {},
  components: {
    NavBar,
    partenaire,
    services,
    footer,
    nave,
    slide

  },
  methods: {
    // carroussel{
    // }
  },
};
</script>
<style>
.per-gradient-text {
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
}
</style>