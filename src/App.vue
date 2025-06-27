<template>
  <div class="min-h-screen bg-white text-gray-800">
    <!-- Header -->
    <header
      class="shadow-sm z-50 sticky top-0"
      style="background-color: #003366"
    >
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <!-- <div class="flex items-center space-x-3">
          <img src="/favicon.png" alt="Teres Fit Logo" class="h-8 w-8" />
          <h1 class="font-brand text-2xl text-emerald-600">Teres Fit</h1>
        </div> -->
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <img
            src="/favicon-transparent.png"
            alt="Teres Fit Logo"
            class="h-8 w-8"
          />
          <h1 class="text-2xl font-bold tracking-tight" style="color: white">
            BEA STROY
          </h1>
        </div>

        <!-- Desktop nav -->
        <nav class="hidden md:flex space-x-6 text-sm font-medium">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="hover:text-[white] transition"
            :class="
              $route.path === link.path
                ? 'text-[white] font-semibold underline'
                : 'text-[white]'
            "
          >
            {{ link.label }}
          </router-link>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="md:hidden"
          style="color: white"
          @click="showMenu = !showMenu"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile nav -->
      <div v-if="showMenu" class="md:hidden px-6 pb-4 space-y-2">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="block font-medium hover:text-[white]"
          style="color: white"
          :class="
            $route.path === link.path
              ? 'text-[white] font-semibold underline'
              : ''
          "
          @click="showMenu = false"
        >
          {{ link.label }}
        </router-link>
      </div>
    </header>

    <!-- Hero section -->
    <div v-if="$route.path === '/'" class="relative">
      <img
        src="/crane.jpg"
        alt="Фонова снимка строителство"
        class="w-full h-[500px] object-cover"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center"
      >
        <h2
          class="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4"
        >
          БЕА СТРОЙ
        </h2>
        <p class="text-lg md:text-xl text-gray-100 drop-shadow max-w-2xl px-4">
          Строителство на сгради и съоръжения с високо качество и експертност.
        </p>
      </div>
    </div>

    <!-- Main content -->
    <main
      :class="
        $route.path === '/' ? 'px-6 py-16 mx-auto' : 'px-6 py-10  mx-auto'
      "
    >
      <router-view />
    </main>

    <!-- Footer -->
    <footer
      class="text-center text-sm py-6 border-t"
      style="background-color: #003366; color: white"
    >
      <p>&copy; 2025 BEA Stroy. Всички права запазени.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showMenu = ref(false);

const navLinks = [
  { path: "/", label: "Начало" },
  { path: "/services", label: "Услуги" },
  { path: "/gallery", label: "Галерия" },
  { path: "/contact", label: "Контакти" },
];
</script>
