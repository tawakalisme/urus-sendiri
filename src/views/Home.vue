<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Layanan  class="mb-5"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Layanan from "../components/LayananSection.vue";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Layanan,
    Footer
  },
};
</script>
