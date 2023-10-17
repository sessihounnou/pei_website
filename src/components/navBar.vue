<template>
  <nav
    id="header"
    class="bg-white fixed w-full z-30 top-0 text-white drop-shadow-md scroll-auto"
  >
    <div
      class="text-[90%] w-full container mx-auto flex flex-wrap justify-start mt-0 py-2"
    >
      <div class="w-[70%] sm:w-auto pl-4 flex">
        <a
          class="toggleColour text-blue-900 no-underline hover:no-underline font-bold text-2xl sm:text-4xl"
          href="/"
        >
          <!--Icon from: http://www.potlabicons.com/ -->
          <img src="../assets/logo.svg" alt="" />
        </a>
      </div>

      <div class="block sm:hidden pr-4" @click="showNavContent()">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 rounded text-gray-500 hover:text-gray-800 appearance-none focus:outline-none"
        >
          <svg
            :class="menu === false ? 'text-primary-base' : 'text-red-900'"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17" cy="8" r="4" fill="primary-base" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 8C15 6.89543 15.8954 6 17 6C18.1046 6 19 6.89543 19 8H15ZM11 8C11 7.29873 11.1203 6.62556 11.3414 6H5C4.44772 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8H11ZM11.8027 11C12.2671 11.8028 12.9121 12.488 13.6822 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11.8027ZM5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H5Z"
              fill="currentcolor"
            />
          </svg>
        </button>
      </div>

      <div
        ref="menu"
        class="w-full sm:flex sm:items-center sm:w-auto h-screen sm:h-full my-[50%] mx-[20%] sm:m-auto sm:block sm:mt-0 sm:bg-white sm:bg-transparent text-black p-4 sm:p-0 z-20"
        :class="menu ? '' : 'hidden'"
      >
        <ul class="list-reset sm:flex justify-center flex-1 items-center">
          <li class="mr-3 mb-8 sm:mb-auto sm:mt-4">
            <a
              class="inline-block py-2 px-4 text-primary-base font-bold no-underline"
              @click="showNavContent()"
              href="/"
              >Accueil</a
            >
          </li>
          <li class="mr-3 mb-8 sm:mb-auto sm:mt-4">
            <a
              class="inline-block text-primary-base no-underline hover:text-primary-safe hover:text-underline py-2 px-4"
              @click="showNavContent()"
              href="about"
              >A propos
            </a>
          </li>
          <li class="mr-3 mb-8 sm:mb-auto sm:mt-4">
            <a
              class="inline-block text-primary-base no-underline hover:text-primary-safe hover:text-underline py-2 px-4"
              @click="showNavContent()"
              href="contact"
              >Contacts
            </a>
          </li>
          <li class="mr-3 mb-8 sm:mb-auto sm:mt-4">
            <a
              class="inline-block text-primary-base no-underline hover:text-primary-safe hover:text-underline py-2 px-4"
              @click="showNavContent()"
              href="blog"
              >Blog
            </a>
          </li>
        </ul>
        <button
          id="navAction"
          class="mx-auto sm:mt-[2%] hover:drop-shadow-md sm:mx-0 hover:no-underline bg-white text-primary-safe rounded-full mt-4 sm:mt-0 py-4 px-8 shadow"
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
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    showNavContent() {
      if (this.menu === true) {
        this.menu = false;
      } else {
        this.menu = true;
      }
    },
  },
};
</script>
