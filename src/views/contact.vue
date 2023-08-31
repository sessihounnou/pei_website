<template>
  <section
    class="relative sm:h-[712px] flex items-center bg-cover bg-center bg-opacity-70"
    style="background-image: url('pexels-andrea-piacquadio-37690211.png')"
  >
    <div class="absolute inset-0 bg-blue-500 opacity-50"></div>
    <div
      class="absolute top-1/2 left-40 transform -translate-y-1/2 text-center"
    >
      <p class="text-white text-base md:text-lg lg:text-xl mb-4">
        PLEIADE EXPERTISE INTERNATIONALE
      </p>
      <div class="mb-8"></div>
      <!-- Ajout d'une marge pour la distance verticale -->
      <h1 class="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
        CONTACTEZ-NOUS
      </h1>
    </div>
    <img
      class="absolute bottom-0"
      style="right: 200px; transform: translateY(30px)"
      src="../assets/Vector2.png"
      alt="Courbe"
    />
    <img
      class="absolute bottom-0"
      style="right: 240px; transform: translateY(60px)"
      src="../assets/Vector4.png"
      alt="Courbe"
    />
  </section>

  <section
    class="flex flex-col md:flex-row py-12 px-4 space-y-4 md:space-y-0 md:space-x-4 items-center mt-8"
  >
    <div class="w-full sm:w-2/5 h-auto sm:h-4/5">
      <div
        class="bg-blue-600 text-white p-2 mt-2 text-center w-full sm:w-[450px] h-auto sm:h-[220px]"
      >
        <h3 class="text-2xl sm:text-3xl font-semibold mb-4 mt-0 sm:mt-[55px]">
          <a href="#"
            ><i class="fas fa-at mr-2"></i>cabinet.pleiade@gmail.com</a
          >
        </h3>
        <h3 class="text-2xl sm:text-3xl font-semibold">
          <i class="fas fa-phone-alt mr-2"></i>21 32 32 03 / 91 99 30 20
        </h3>
      </div>
    </div>

    <div class="w-full sm:w-[700px]">
      <div
        class="border-4 border-blue-600 h-96 sm:h-[500px] sm:flex-grow rounded-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.8251846493223!2d2.4272561468278484!3d6.3677756634310905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023558aeb593fb9%3A0x8e241459a501f7a!2zQ29uc3VsYXQgZHUgU8OpbsOpZ2FsIMOgIENvdG9ub3U!5e0!3m2!1sfr!2sma!4v1692023172868!5m2!1sfr!2sma"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>
<script>
import NavBar from "../components/navBar.vue";
import footer from "../components/footer.vue";
// import bg_img from '../components/'
export default {
  name: "home",
  setup() {},
  components: {
    NavBar,
    footer,
  },
};
</script>
