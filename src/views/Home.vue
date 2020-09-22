<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Layanan  class="mb-5"/>
    <ContactUs class="mb-5"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Layanan from "../components/LayananSection.vue";
import ContactUs from "../components/ContactUs.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Layanan,
    ContactUs
  },
};
</script>
