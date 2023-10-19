<template>
  <section class="hide-scrollbar-y">
    <div class="bg-[url('./assets/s1.png')] absolute sm:h-[600px] h-[400px] bg-cover">
      <div class="bg-[#1371B9] sm:h-[600px] h-[400px] bg-opacity-30">
        <p
          class="text-white font-bold sm:text-[23px] text-[16px] pt-[120px] ml-8 text-left sm:pt-[180px] sm:ml-[200px] sm:w-[32%]">
          SOCIÉTÉ D'EXPERTISE EN FORMATION, ASSISTANCE CONSEIL, ÉTUDE,
          RECRUTEMENT, EXTERNALISATION & SOLUTIONS INFORMATIQUES
        </p>
        <p class="text-white text-[18px] sm:mt-[4%] sm:text-[18px] ml-8 mt-6 sm:ml-[200px]">
          PLEIADE EXPERTISE INTERNATIONALE
        </p>
        <div class="sm:ml-[200px] ml-8 mt-[15px] sm:mt-[70px]">
          <button
            class="sm:w-[13%] w-[32%] h-[45px] sm:h-[48px] font-semibold hover:border-white hover:border-2 hover:bg-white hover:bg-opacity-0 bg-[#0988E9] text-white rounded-[18px]">
            <a href="/about" class="">En savoir plus</a>
          </button>
          <button
            class="sm:w-[13%] w-[32%] h-[45px] sm:h-[48px] font-semibold hover:bg-[#0988E9] hover:border-none sm:ml-4 ml-2 text-white border-white border-2 rounded-[18px]">
            <a href="#title" class="">Commencer</a>
          </button>
        </div>
      </div>
    </div>
    <img src="../assets/Vector2.png" alt=""
      class="relative sm:ml-[65%] ml-[53%] sm:h-[650px] sm:w-[240px] w-[45%] h-[520px] sm:mt-[-4px] mt-[-2px]" />
    <h1 id="title" class="fony-bold text-center sm:text-[25px] text-[20px] sm:mt-0 mt-[-80px] font-bold text-[#008C36]">
      Nos services
    </h1>
    <p class="text-center font-semibold sm:text-[20px] text-[18px] sm:mt-4 mt-2 text-[#1371B9]">
      Tous savoir sur les services offerts.
    </p>
    <div class="">
      <!-- debut du carousel ordi -->

      <div @mouseenter="hovered = true" @mouseleave="hovered = false"
        class="sm:block hidden transition-transform duration-1000  hide-scrollbar-x carousel transition-1 transform  overflow-x-auto whitespace-no-wrap  relative">
        <img src="../assets/left.svg" alt="" id="left-arrow" v-show="hovered"
          class="cursor-pointer transform -translate-y-1/2 absolute w-5 top-1/2 left-4">
        <img src="../assets/right.svg" alt="" id="right-arrow" v-show="hovered"
          class="cursor-pointer transform -translate-y-1/2 absolute w-5 right-4 top-1/2">
        <div class="flex sm:space-x-4 slides " ref="carousel">

          <div v-for="(card, index) in visibleCards" :key="index" class="sm:w-[33.33%] sm:p-3 slide" ref="carousel">

            <!-- Contenu de la carte -->
            <div class="  bg-white shadow-lg rounded-lg p-4">
              <img :src="card.imageUrl" alt="Card Image" class="w-full sm:h-44   object-cover mb-4 rounded-t-lg" />
              <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>
              <p class="text-gray-600">{{ card.describe }}</p>
              <a :href="card.liens" class="">
                <button
                  class="sm:mt-[34px] mt-7 w-[31%] h-[40px] ml-[65%] sm:ml-[55%]  sm:w-[39%] text-[15px] sm:h-[40px]  hover:bg-[#1371B9] bg-[#008C36] rounded-[16px] text-white font-semibold ">En
                  savoir plus </button></a>
            </div>
          </div>
        </div>
      </div>

      <!-- fin du carousel ordi -->

      <!-- debut du carousel telephone -->
      <div
        class="sm:hidden block ">
       <Carousel_mobile></Carousel_mobile>
      </div>
<!-- fin du carousel telephone -->
    </div>

    <div class="d1 sm:mt-10 mt-[20px] h-[2300px] sm:h-[1100px] bg-cover">
      <h1 class="text-center sm:text-[30px] pt-[90px] text-[30px] sm:pt-[90px] font-bold text-white">
        Nos cibles
      </h1>
      <div class="sm:flex sm:mt-20 mt-[40px]">
        <div class="shadow-lg sm:pb-0 pb-5 sm:w-[25%]  w-[80%] h-auto mx-auto sm:h-[390px] rounded-[20px] bg-white">
          <img src="../assets/public.png" alt="" class="sm:h-[220px] w-full" />
          <h1 class="sm:text-[18px] text-[19px] mt-6 text-center font-bold sm:mt-6">
            SECTEUR PUBLIC
          </h1>
          <a href="./publicsociety" class="">
            <button
              class="w-[71%]    mx-[14%] mt-[15%] sm:mt-12  sm:px-[10px] sm:py-2.5 py-2 sm:mx-11 sm:mr-2  hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2  hover:no-underline font-bold bg-white text-[#6A6B6C] border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] ">
              En savoir plus
            </button></a>
        </div>
        <div
          class="shadow-lg sm:pb-0 pb-5 sm:mt-0 mt-8 mx-auto sm:w-[25%] w-[80%] h-auto sm:h-[390px] rounded-[20px] bg-white">
          <img src="../assets/prive.png" alt="" class="sm:h-[220px] w-full" />
          <h1 class="sm:text-[18px] text-[19px] mt-6 text-center font-bold sm:mt-6">
            SECTEUR PRIVE
          </h1>
          <a href="./privatesociety" class="">
            <button
              class="w-[71%]    mx-[14%] mt-[15%] sm:mt-12  sm:px-[10px] sm:py-2.5 py-2 sm:mx-11 sm:mr-2  hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2  hover:no-underline font-bold bg-white text-[#6A6B6C] border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] ">
              En savoir plus
            </button></a>
        </div>
        <div
          class="shadow-lg sm:pb-0 pb-5 mt-8 sm:mt-0 mx-auto w-[80%] h-auto sm:w-[25%] sm:h-[390px] rounded-[20px] bg-white">
          <img src="../assets/ins.png" alt="" class="sm:h-[220px] w-full" />
          <h1 class="sm:text-[18px] text-[19px] mt-6 text-center font-bold sm:mt-6">
            INSTITUTIONS <br class="" />
            INTERNATIONALES
          </h1>
          <a href="./institution" class="">
            <button
              class="w-[71%]    mx-[14%] mt-[15%] sm:mt-5  sm:px-[10px] sm:py-2.5 py-2 sm:mx-11 sm:mr-2  hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2  hover:no-underline font-bold bg-white text-[#6A6B6C] border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] ">
              En savoir plus
            </button></a>
        </div>
      </div>
      <div class="sm:flex sm:mt-10">
        <div
          class="shadow-lg sm:pb-0 pb-5 mt-8 sm:mt-0 sm:w-[25%] w-[80%] h-auto sm:ml-[53px] mx-auto sm:h-[390px] rounded-[20px] bg-white">
          <img src="../assets/societe.png" alt="" class="sm:h-[220px] w-full" />
          <h1 class="sm:text-[18px] text-[19px] mt-6 text-center font-bold sm:mt-6">
            SOCIÉTÉ CIVILES NATIONALES <br class="" />
            ET INTERNATIONALES
          </h1>
          <a href="./society" class="">
            <button
              class="w-[71%]    mx-[14%] mt-[15%] sm:mt-6  sm:px-[10px] sm:py-2.5 py-2 sm:mx-11 sm:mr-2  hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2  hover:no-underline font-bold bg-white text-[#6A6B6C] border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] ">
              En savoir plus
            </button></a>
        </div>
        <div
          class="shadow-lg sm:pb-0 pb-5 mt-8 sm:mt-0 mx-auto w-[80%] h-auto sm:ml-[-390px] sm:w-[25%] sm:h-[390px] rounded-[20px] bg-white">
          <img src="../assets/part.png" alt="" class="sm:h-[220px] w-full" />
          <h1 class="sm:text-[18px] text-[19px] mt-6 text-center font-bold sm:mt-6">
            PARTICULIERS
          </h1>
          <a href="./particulary" class="">
            <button
              class="w-[71%]    mx-[14%] mt-[15%] sm:mt-12  sm:px-[10px] sm:py-2.5 py-2 sm:mx-11 sm:mr-2  hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2  hover:no-underline font-bold bg-white text-[#6A6B6C] border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] ">
              En savoir plus
            </button></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>



import Carousel_mobile from '../components/carousel_mobile.vue'
export default {
  components: { Carousel_mobile },
  name: "slide",
  setup() { },
  data() {
    return {
      cards: [
        {
          imageUrl: "/src/assets/formation2.png",
          title: "Formation",
          describe:
            "Avec des méthodes andragogiques les plus adaptées aux adultes et des outils de formations. ",
          liens: "/formation",
        },
        {
          imageUrl: "/src/assets/etude.png",
          title: "Etudes et Sondages",
          describe:
            " Boostez vos activités et garantissez-vous le succès à travers nos études et sondages en ........  ",
          liens: "/study",
        },
        {
          imageUrl: "/src/assets/genie.png",
          title: "Ingenierie financière",
          describe:
            "Avec nos experts, nous vous accompagnons dans vos projets d’investissement, de mobilisation de ....... ",
          liens: "/engineering",
        },
        {
          imageUrl: "/src/assets/externe.png",
          title: "Externalisation",
          describe:
            "Parce que nous sommes des professionnels et forts de nos expériences, faites-nous confiance pour ....... ",
          liens: "/externalization",
        },
        {
          imageUrl: "/src/assets/audit.png",
          title: "Audit-Comptabilité",
          describe:
            "Nous offrons à nos clients en services ponctuels et/ou en accompagnement permanent ....... ",
          liens: "/audit",
        },
        {
          imageUrl: "/src/assets/gestion.png",
          title: "Recrutement et gestion d’intérims ",
          describe:
            "Parce que les Ressources Humaines constituent le capital le plus précieux de votre ....... ",
          liens: "/recrutements",
        },
        {
          imageUrl: "/src/assets/conseil.png",
          title: "Assistance et conseil",
          describe:
            "Vous avez des difficultés dans votre entreprise ! Nous avons la solution à vos problèmes .......",
          liens: "/assistance",
        },
        {
          imageUrl: "/src/assets/solution.png",
          title: "Solutions informatiques",
          describe:
            "Vous voulez vous rendre visibles ! Vous voulez automatiser toutes vos taches ....... ",
          liens: "/computerservices",
        },
      ],
      visibleCards: [],
      currentIndex: 0,
      hovered: false,
      isMobile: false,
    };
  },

  computed: {
    carouselStyle() {
      const cardWidth = this.isMobile ? 100 : 33.33;
      const translateX = -this.currentIndex * (100 / this.visibleCards.length) + "%";
      return { transform: `translateX(${translateX})` };
    },
  },
  mounted() {
    // Au moment du montage, affichez les trois premières cartes
    this.visibleCards = this.cards.slice(0, 3);
    const left = document.querySelector("#left-arrow")
    const right = document.querySelector("#right-arrow")

    left.addEventListener("click", this.nextSlide)
    right.addEventListener("click", this.prevSlide)
  },

  // boutton
  methods: {
    nextSlide() {
      if (this.currentIndex < this.cards.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Revenir à la première diapositive lorsque vous atteignez la fin
      }
      this.visibleCards = this.cards.slice(this.currentIndex, this.currentIndex + 3);
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.cards.length - 1; // Revenir à la première diapositive lorsque vous atteignez la fin
      }
      if (this.currentIndex >= 2) {
        this.visibleCards = this.cards.slice(this.currentIndex - 2, this.currentIndex + 1);
      } else if (this.currentIndex === 1) {
        this.visibleCards = this.cards.slice(this.currentIndex - 1, this.currentIndex + 2);
      } else {
        // When this.currentIndex is 0, show the last two cards along with the first card
        this.visibleCards = this.cards.slice(-2).concat(this.cards.slice(0, 1));
      }
    }
  },




}

</script>

<style>
.d1 {
  background-image: url("../assets/d1.png");

}

.hide-scrollbar-x::-webkit-scrollbar {
  display: none;
}
</style>
