<template>
  <div>
    <Navbar />
    <b-container class="text-center">
      <b-row class="about d-flex align-items-center" align-h="center">
        <b-col md="6">
          <h1 data-aos="fade-down">Cek Status</h1>
          <p data-aos="fade-down" data-aos-delay="300">
            Masukkan kode pengajuan untuk melihat proses pengajuan Anda
          </p>
          <b-form @submit="onSubmit" data-aos="fade-down" data-aos-delay="500">
            <b-form-group>
              <b-form-input
                v-model="searchPengajuan.kodepengajuan"
                id="kodepengajuan"
                placeholder="Masukkan Kode Pengajuan"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" size="lg"
              >Cek Proses</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "CekStatus",
  components: {
    Navbar,
  },
  data() {
    return {
      searchPengajuan: {
        kodepengajuan: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.searchPengajuan));
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  height: 90vh;
}
</style>
