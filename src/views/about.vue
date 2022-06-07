<template>
    <nav-bar />
    <div class="sm:flex my-8 py-8">
        <h2 class="w-[50%] ">Notre vision</h2>
        <p class="sm:py-24 sm:px-24 sm:w-[50%] bg-gray-200 sm:rounded-tr-full sm:rounded-bl-full ">Etre le partenaire de référence des administrations publiques, des entreprises et des institutions nationales et internationales africaines en matière de fourniture de services de conseil, d’études de formation, et de recrutement.</p>
    </div>
    <div>
        <h2>NOTRE MISSION</h2>
        <p>Offir à nos clients des services – solution de conseil, d’Etudes, de formation et de recrutement qui tiennent compte de leurs spécificités et leur garantissent une valeur ajoutée évidente.</p>
    </div>
    <div>
        <h2>NOTRE LEITMOTIV</h2>
        <p>Devenir le leader du conseil en Afrique.</p>
    </div>
    <div>
        <h2>NOS VALEURS</h2>
        <ul>
        <li>Objectivité</li>
        <li>Professionnalisme</li>
        <li>Qualité</li>
        <li>Responsabilité</li>
        <li>Singularité</li>
        <li>Transcendance</li>
        </ul>
    </div>
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