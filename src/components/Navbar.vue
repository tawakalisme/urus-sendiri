<template>
  <div>
    <b-navbar
      fixed="top"
      :sticky="currentPath !== '/'"
      toggleable="lg"
      :class="scrollPosition > 768 ? 'bg-light' : 'yellow-nav'"
    >
      <b-container>
        <b-navbar-brand href="#"><span>urus</span>sendiri</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">
          <template v-slot:default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" :active="currentPath == '/'">Beranda</b-nav-item>
            <b-nav-item to="/cek-status" :active="currentPath == '/cek-status'"
              >Cek Status</b-nav-item
            >
            <b-nav-item href="#">Bantuan</b-nav-item>
            <b-nav-item href="#">Tentang</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return { scrollPosition: null };
  },
  methods: {
    scrolled() {
      this.scrollPosition = window.scrollY;
    },
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrolled);
  },
};
</script>

<style lang="scss" scoped>
</style>
