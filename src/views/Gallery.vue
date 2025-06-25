<template>
  <section id="gallery" class="bg-white px-6 py-10">
    <div class="mx-auto max-w-6xl">
      <!-- Заглавие -->
      <h1 class="text-3xl font-bold text-[#003366] mb-2">Галерия</h1>
      <p class="text-gray-600 mb-8">
        Тук можете да разгледате някои от нашите завършени проекти и строителни
        обекти.
      </p>

      <!-- Галерия -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="project in projects"
          :key="project.alt"
          class="rounded-lg bg-white shadow-sm overflow-hidden"
        >
          <img
            :src="project.src"
            :alt="project.alt"
            class="aspect-[4/3] w-full object-cover"
          />
          <div class="p-3 font-medium text-sm text-gray-800">
            {{ project.alt }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  { src: "https://via.placeholder.com/500", alt: "Проект 1" },
  { src: "https://via.placeholder.com/500", alt: "Проект 2" },
  { src: "https://via.placeholder.com/500", alt: "Проект 3" },
  { src: "https://via.placeholder.com/500", alt: "Проект 4" },
];
</script>
