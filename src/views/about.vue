<template>
    <div class="w-full sm:h-[712px] h-[500px] bg-about-primary bg-cover bg-no-repeat">
        <div class="bg-blue-500 sm:h-[712px] h-[500px] bg-opacity-50">
            <div class="flex">
                <div class="mt-24 sm:w-[778px] w-[500px] sm:h-[148] h-[100px] sm:py-[233px] py-[170px] sm:px-[22px] px-[20px]">
                    <p class="text-center sm:text-[32px] text-[15px] text-white">
                        PLEIADE EXPERTISE INTERNATIONALE
                    </p>
                    <h1 class="text-center text-3xl sm:text-[32px] text-[15px] text-white  sm:px-[190px] px-[14px] sm:mt-[40px] mt-[20px] text-[14px] font-semibold sm:text-[24px]">
                        Vous souhaitez en savoir plus sur nous ?
                    </h1>
                </div>
                <img src="../assets/Vector2.png" alt="" class="sm:ml-[70px] ml-[-160px] sm:h-[870px] h-[550px] sm:mt-[-50px] mt-[-20px]">

            </div>
        </div>
    </div>
    <img src="../assets/Vector4.png" alt="" class="sm:ml-[1080px] ml-[280px] sm:mt-[20px]">
    <div class="sm:ml-12 sm:mr-12 sm:flex" >
        <div class="sm:w-[600px] sm:h-[300px] sm:ml-12 ml-[10px] sm:mr-12 sm:mt-12">
            <p class="text-left  text-[15px]  sm:text-3xl text-[#1371B9]">
                Etre le partenaire de référence des administrations publiques, des entreprises et des institutions nationales et internationales africaines en matière de fourniture de services de conseil, d’études de formation, et de recrutement.
            </p>
        </div>
        <div class="sm:ml-28 ml-[130px] sm:w-[400px] w-[200px] h-[190px] sm:h-[300px] rounded bg-frame-14">
            <p class="sm:display-center pt-[70px] sm:pt-0 font-bold text-white text-center sm:mt-32 mt-[5px] my-auto">
                NOTRE VISION
            </p>
        </div>
    </div>
    <img src="../assets/Vector6-1.png" alt="" class="sm:ml-[300px] ml-[60px] sm:h-[160px] h-[60px] sm:mt-[-50px] mt-0">
    <div class="sm:ml-12 sm:mr-12 sm:flex" >
        <div class="sm:ml-12 ml-[10px] sm:mr-16 sm:w-[400px] w-[200px] h-[190px] rounded sm:h-[300px] bg-frame-15">
            <p class="display-center pt-[70px] sm:pt-0 font-bold text-white text-center sm:mt-32">
                NOTRE MISSION
            </p>
        </div>
        <div class="sm:w-[600px] sm:h-[300px] sm:ml-12 ml-6 sm:mr-12 mt-[5px] sm:mt-12">
            <p class="text-left  text-[15px] sm:text-3xl text-[#1371B9]">
                Offir à nos clients des services – solution de conseil, d’Etudes, de formation et de recrutement qui tiennent compte de leurs spécificités et leur garantissent une valeur ajoutée évidente.
            </p>
        </div>
    </div>
    <img src="../assets/Vector7.png" alt="" class="sm:ml-[280px] ml-[40px] sm:h-[180px] h-[60px] sm:mt-[-48px] mt-0">
    <div class="sm:ml-12 sm:mr-12 mr-[5px] flex" >
        <div class="sm:w-[600px] w-[140px] sm:h-[300px] sm:ml-12 ml-3 sm:mr-12 mr-1 sm:mt-28 mt-[60px] ">
            <p class="text-left text-[15px]  sm:text-3xl text-[#1371B9]">
                Devenir le leader du conseil en Afrique.
            </p>
        </div>
        <div class="sm:ml-20 sm:w-[400px] rounded w-[200px] h-[190px]  sm:h-[300px] bg-frame-16">
            <p class="display-center pt-[70px] sm:pt-0 font-bold text-white text-center sm:mt-32">
                NOTRE LEITMOTIV
            </p>
        </div>
    </div>
    <img src="../assets/Vector8.png" alt="" class="sm:ml-[280px] ml-[60px] sm:h-[180px] h-[60px] sm:mt-[-115px] mt-0">
    <div class="sm:ml-12 sm:mr-12 flex" >
        <div class="sm:ml-12 ml-[10px] sm:mr-16 sm:w-[400px]  rounded w-[200px] h-[190px] sm:h-[300px] bg-frame-15">
            <p class="display-center pt-[70px] sm:pt-0 font-bold text-white text-center sm:mt-32">
                NOS VALEURS
            </p>
        </div>
        <div class="sm:w-[600px] sm:h-[300px] sm:ml-12 ml-[30px]  sm:mr-12 sm:mt-12 mt-[18px]">
            <ul class="list-disc text-left text-[15px] sm:text-3xl text-[#1371B9]">
                <li>Objectivité</li>
                <li>Professionnalisme</li>
                <li>Qualité</li>
                <li>Responsabilité</li>
                <li>Singularité</li>
                <li>Transcendance</li>

            </ul>

        </div>
    </div>
    <img src="../assets/Vector9.png" alt="" class="sm:ml-[280px] ml-[90px] sm:h-[180px] h-[60px] sm:mt-[-48px] mt-0">

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