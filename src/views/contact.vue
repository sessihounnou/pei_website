<template>
    <nav-bar />
    <footer />
</template>
<script>
import NavBar from "../components/navBar.vue";
import footer from '../components/footer.vue';
// import bg_img from '../components/'
export default {
  name: "home",
  setup() {},
  components: {
    NavBar,
    footer,
  },
}
</script>