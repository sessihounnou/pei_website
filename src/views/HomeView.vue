<template>
  <section class="hide-scrollbar-y">
    <div
      class="bg-[url('./assets/s1.png')] absolute sm:h-[600px] h-[400px] bg-cover"
    >
      <div class="bg-[#1371B9] sm:h-[600px] h-[400px] bg-opacity-30">
        <p
          class="text-white font-bold sm:text-[23px] text-[16px] pt-[120px] ml-8 text-left sm:pt-[180px] sm:ml-[200px] sm:w-[32%]"
        >
          SOCIÉTÉ D'EXPERTISE EN FORMATION, ASSISTANCE CONSEIL, ÉTUDE,
          RECRUTEMENT, EXTERNALISATION & SOLUTIONS INFORMATIQUES
        </p>
        <p
          class="text-white sm:text-[14px] text-[18px] sm:mt-[4%] sm:text-[18px] ml-8 mt-6 sm:ml-[200px]"
        >
          PLEIADE EXPERTISE INTERNATIONALE
        </p>
        <div class="sm:ml-[200px] ml-8 mt-[15px] sm:mt-[70px]">
          <button
            class="sm:w-[13%] w-[32%] h-[45px] sm:h-[48px] font-semibold hover:border-white hover:border-2 hover:bg-white hover:bg-opacity-0 bg-[#0988E9] text-white rounded-[18px]"
          >
            <a href="/about" class="">En savoir plus</a>
          </button>
          <button
            class="sm:w-[13%] w-[32%] h-[45px] sm:h-[48px] font-semibold hover:bg-[#0988E9] hover:border-none sm:ml-4 ml-2 text-white border-white border-2 rounded-[18px]"
          >
            <a href="#title" class="">Commencer</a>
          </button>
        </div>
      </div>
    </div>
    <img
      src="../assets/Vector2.png"
      alt=""
      class="relative sm:ml-[65%] ml-[53%] sm:h-[650px] sm:w-[240px] w-[45%] h-[520px] sm:mt-[-4px] mt-[-2px]"
    />
    <h1
      id="title"
      class="fony-bold text-center sm:text-[25px] text-[20px] sm:mt-0 mt-[-80px] font-bold text-[#008C36]"
    >
      Nos services
    </h1>
    <p
      class="text-center font-semibold sm:text-[20px] text-[18px] sm:mt-4 mt-2 text-[#1371B9]"
    >
      Tous savoir sur les services offerts.
    </p>
    <!-- debut du carousel -->
    <div class="overflow-x-auto">
      <div class="flex space-x-4">
        <div
          v-for="(card, index) in visibleCards"
          :key="index"
          class="w-[33.33%] p-4"
        >
          <!-- Contenu de la carte -->
          <div class="bg-white shadow-lg rounded-lg p-4">
            <img
              :src="cards.imageUrl"
              alt="Card Image"
              class="w-full h-32 object-cover mb-4 rounded-t-lg"
            />
            <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>
            <p class="text-gray-600">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- fin du carousel -->

    <div class="d1 sm:mt-10 mt-[20px] h-[2300px] sm:h-[1100px] bg-cover">
      <h1
        class="text-center sm:text-[30px] pt-[90px] text-[30px] sm:pt-[90px] font-bold text-white"
      >
        Nos cibles
      </h1>
      <div class="sm:flex sm:mt-20 mt-[40px]">
        <div
          class="shadow-lg sm:pb-0 pb-5 sm:w-[25%] w-[80%] h-auto mx-auto sm:h-[390px] rounded-[20px] bg-white"
        >
          <img src="../assets/public.png" alt="" class="sm:h-[220px]" />
          <h1
            class="sm:text-[18px] text-[19px] mt-3 text-center font-bold sm:mt-6"
          >
            SECTEUR PUBLIC
          </h1>
          <a href="./publicsociety" class="">
            <button
              class="mx-[40px] mt-[17%] px-[21%] sm:px-[80px] sm:py-2.5 py-2 hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2 sm:mx-8 hover:no-underline font-bold bg-white text-[#6A6B6C] sm:mr-2 border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] sm:mt-12"
            >
              En savoir plus
            </button></a
          >
        </div>
        <div
          class="shadow-lg sm:mt-0 mt-8 mx-auto sm:w-[25%] w-[80%] h-[330px] sm:h-[390px] rounded-[20px] bg-white"
        >
          <img src="../assets/prive.png" alt="" class="sm:h-[220px]" />
          <h1
            class="sm:text-[18px] text-[19px] mt-3 text-center font-bold sm:mt-6"
          >
            SECTEUR PRIVE
          </h1>
          <a href="./privatesociety" class="">
            <button
              class="mx-[10%] sm:mt-0 mt-[16%] py-2 mt-8 hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2 sm:mx-8 hover:no-underline font-bold bg-white text-[#6A6B6C] sm:mr-2 border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] mt-4 sm:mt-12 sm:py-2.5 px-16 sm:px-[80px]"
            >
              En savoir plus
            </button></a
          >
        </div>
        <div
          class="shadow-lg mt-8 sm:mt-0 mx-auto w-[80%] h-[330px] sm:w-[25%] sm:h-[390px] rounded-[20px] bg-white"
        >
          <img src="../assets/ins.png" alt="" class="sm:h-[220px]" />
          <h1
            class="sm:text-[18px] text-[19px] mt-3 text-center font-bold sm:mt-6"
          >
            INSTITUTIONS <br class="" />
            INTERNATIONALES
          </h1>
          <a href="./institution" class="">
            <button
              class="mx-[10%] sm:mt-0 mt-[8%] py-2 hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2 sm:mx-8 hover:no-underline font-bold bg-white text-[#6A6B6C] sm:mr-2 border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] mt-4 sm:mt-6 sm:py-2.5 px-16 sm:px-[80px]"
            >
              En savoir plus
            </button></a
          >
        </div>
      </div>
      <div class="sm:flex sm:mt-10">
        <div
          class="shadow-lg mt-8 sm:mt-0 sm:w-[25%] w-[80%] h-[330px] sm:ml-[53px] mx-auto sm:h-[390px] rounded-[20px] bg-white"
        >
          <img src="../assets/societe.png" alt="" class="sm:h-[220px]" />
          <h1
            class="sm:text-[18px] text-[19px] mt-3 text-center font-bold sm:mt-6"
          >
            SOCIÉTÉ CIVILES NATIONALES <br class="" />
            ET INTERNATIONALES
          </h1>
          <a href="./society" class="">
            <button
              class="mx-[10%] mt-[7%] py-2 hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2 sm:mx-8 hover:no-underline font-bold bg-white text-[#6A6B6C] sm:mr-2 border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] sm:mt-6 sm:py-2.5 px-16 sm:px-[80px]"
            >
              En savoir plus
            </button></a
          >
        </div>
        <div
          class="shadow-lg mt-8 sm:mt-0 mx-auto w-[80%] h-[330px] sm:ml-[-390px] sm:w-[25%] sm:h-[390px] rounded-[20px] bg-white"
        >
          <img src="../assets/part.png" alt="" class="sm:h-[220px]" />
          <h1
            class="sm:text-[18px] text-[19px] mt-3 text-center font-bold sm:mt-6"
          >
            PARTICULIERS
          </h1>
          <a href="./particulary" class="">
            <button
              class="mx-[10%] sm:mt-0 mt-[16%] py-2 mt-8 hover:bg-[#F1C40F] hover:text-white hover:border-[#F1C40F] hover:border-2 sm:mx-8 hover:no-underline font-bold bg-white text-[#6A6B6C] sm:mr-2 border-2 rounded-l-[15px] rounded-br-[15px] border-[#008C36] mt-4 sm:mt-12 sm:py-2.5 px-16 sm:px-[80px]"
            >
              En savoir plus
            </button></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "slide",
  setup() {},
  data() {
    return {
      cards: [
        {
          imageUrl: "../assets/formation2.png",
          title: "Formation",
          describe:
            "Avec des méthodes andragogiques les plus adaptées aux adultes et des outils de formations. ",
        },
        {
          imageUrl: "../assets/etude.png",
          title: "Etudes et Sondages",
          describe:
            " Boostez vos activités et garantissez-vous le succès à travers nos études et sondages en ........  ",
        },
        {
          imageUrl: "../assets/genie.png",
          title: "Ingenierie financière",
          describe:
            "Avec nos experts, nous vous accompagnons dans vos projets d’investissement, de mobilisation de ....... ",
        },
        {
          imageUrl: "../assets/externe.png",
          title: "Externalisation",
          describe:
            "Parce que nous sommes des professionnels et forts de nos expériences, faites-nous confiance pour ....... ",
        },
        {
          imageUrl: "../assets/audit.png",
          title: "Audit-Comptabilité",
          describe:
            "Nous offrons à nos clients en services ponctuels et/ou en accompagnement permanent ....... ",
        },
        {
          imageUrl: "../assets/gestion.png",
          title: "Recrutement et gestion d’intérims ",
          describe:
            "Parce que les Ressources Humaines constituent le capital le plus précieux de votre ....... ",
        },
        {
          imageUrl: "../assets/conseil.png",
          title: "Assistance et conseil",
          describe:
            "Vous avez des difficultés dans votre entreprise ! Nous avons la solution à vos problèmes .......",
        },
        {
          imageUrl: "../assets/solution.png",
          title: "Solutions informatiques",
          describe:
            "Vous voulez vous rendre visibles ! Vous voulez automatiser toutes vos taches ....... ",
        },
      ],
      visibleCards: [],
    };
  },
  mounted() {
    // Au moment du montage, affichez les trois premières cartes
    this.visibleCards = this.cards.slice(0, 3);
  },
};
</script>

<style>
.d1 {
    background-image: url("../assets/d1.png");

   
}
</style>
