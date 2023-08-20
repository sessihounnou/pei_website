<template>
  <nav
    id="header"
    class="bg-white fixed w-full z-30 top-0 text-white drop-shadow-md scroll-auto"
  >
    <div
      class="text-[90%] w-full container mx-auto flex flex-wrap justify-start mt-0 py-2"
    >
      <div class="pl-4 flex">
        <a
          class="toggleColour text-blue-900 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          <!--Icon from: http://www.potlabicons.com/ -->
          <img src="../assets/logo.svg" alt="" />
        </a>
      </div>

      <div class="block lg:hidden pr-4" @click="showNavContent()">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      >
        <ul class="list-reset lg:flex justify-center flex-1 items-center">
          <li class="mr-3">
            <a
              class="inline-block py-2 px-4 text-primary-base font-bold no-underline"
              @click="showNavContent()"
              href="#"
              >Qui sommes-nous ?</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-primary-base no-underline hover:text-primary-safe hover:text-underline py-2 px-4"
              @click="showNavContent()"
              href="#"
              >Nos formations
            </a>
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-primary-base no-underline hover:text-primary-safe hover:text-underline py-2 px-4"
              @click="showNavContent()"
              href="#"
              >Nos Opportunités
            </a>
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-primary-base no-underline hover:text-primary-safe hover:text-underline py-2 px-4"
              @click="showNavContent()"
              href="#"
              >Contactez-nous
            </a>
          </li>
        </ul>
        <button
          id="navAction"
          class="mx-auto hover:drop-shadow-md lg:mx-0 hover:no-underline bg-white text-primary-safe rounded-full mt-4 lg:mt-0 py-4 px-8 shadow"
        >
          Notre Catalogue
        </button>
      </div>
    </div>
  </nav>
  <div class="mt-[4%]">
    <slot />
  </div>
  <section>
    <footer-component />
  </section>
</template>
<script>
// dom element variable
let navContent = document.getElementById("nav-content");

let navMenu = document.getElementById("home");
let home = document.getElementById("presentation");
let services = document.getElementById("services");
let contact = document.getElementById("contact");

// navContent.onclick = function() {showNavContent()}

import logo from "../assets/logo.svg";
import footerComponent from "../components/footer.vue";
export default {
  name: "navbar",
  setup() {},
  components: {
    footerComponent,
  },
  methods: {
    showNavContent() {
      // navContent.style.visibility=visible;
      console.log("1");
    },
  },
};
</script>
