<template>
  <section id="about" class="bg-gray-50 px-4 sm:px-8 py-20 text-gray-800">
    <div class="mx-auto w-full max-w-screen-xl space-y-24">
      <!-- Заглавие -->
      <div data-aos="fade-up" class="text-center px-4 sm:px-0">
        <h1 class="text-4xl font-bold text-[#003366] mb-2">Кои сме ние?</h1>
        <p class="text-lg text-gray-600">Надежден партньор в строителството.</p>
      </div>

      <!-- Секции -->
      <div
        v-for="(section, index) in sections"
        :key="index"
        :data-aos="section.aos"
        class="md:grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-md"
      >
        <!-- Текст -->
        <div
          :class="{
            'md:order-2': index % 2 === 1,
            'md:order-1': index % 2 === 0,
          }"
        >
          <h2 class="text-2xl font-semibold text-[#003366] mb-3">
            {{ section.title }}
          </h2>
          <p v-html="section.content"></p>
          <ul v-if="section.list" class="list-disc pl-6 space-y-1 mt-3">
            <li v-for="(item, i) in section.list" :key="i">{{ item }}</li>
          </ul>
        </div>

        <!-- Изображение -->
        <img
          :src="section.image"
          :alt="section.title"
          class="rounded-xl shadow-sm max-h-[400px] w-full object-cover"
          :class="{
            'md:order-1': index % 2 === 1,
            'md:order-2': index % 2 === 0,
          }"
        />
      </div>

      <!-- Финал -->
      <div
        data-aos="fade-up"
        class="text-center bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto"
      >
        <p class="text-lg font-medium">
          Доверете се на
          <span class="text-[#0056a3] font-bold">Bea Stroy</span> – защото
          доброто строителство е нашият стандарт.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});

const sections = ref([
  {
    title: "Какво правим",
    content: `Bea Stroy е утвърдена строителна компания, специализирана в изграждането и реновацията на жилищни и търговски обекти. Нашият екип се състои от висококвалифицирани инженери, архитекти и строителни специалисти, които споделят страст към качественото строителство и устойчивите решения.`,
    image: "/bea-stroy/weare.jpg",
    aos: "fade-right",
  },
  {
    title: "Нашият опит",
    content: `С над <strong class="font-semibold">10 години опит</strong> в индустрията, ние сме изградили репутация на надежден партньор, който винаги спазва срокове и надминава очакванията на клиентите. Работим по индивидуален подход към всеки проект, предлагайки иновативни решения, които съчетават функционалност, естетика и енергийна ефективност.`,
    image: "/bea-stroy/handshake.jpg",
    aos: "fade-left",
  },
  {
    title: "Нашата мисия",
    content: `Мисията ни е да създаваме пространства, които вдъхновяват, подобряват ежедневието и отразяват визията на нашите клиенти. Вярваме, че доброто строителство започва с добро планиране, прозрачна комуникация и безкомпромисен контрол на качеството.`,
    image: "/bea-stroy/planning.jpg",
    aos: "fade-up",
  },
  {
    title: "Основни ценности",
    content: ` `,
    list: [
      "Професионализъм и отговорност",
      "Качество без компромис",
      "Иновации и устойчиви решения",
      "Честност и прозрачност",
      "Дългосрочни партньорства",
    ],
    image: "/bea-stroy/view.jpg",
    aos: "zoom-in-up",
  },
]);
</script>
