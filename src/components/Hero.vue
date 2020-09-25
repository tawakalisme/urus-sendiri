<template>
  <div>
    <div class="hero">
      <div class="waves" data-aos="fade-down"></div>
      <div class="container">
        <b-row class="align-items-center">
          <b-col data-aos="fade-right" data-aos-delay="300">
            <h1>
              Urus
              <VueTyper
                :text="layanan"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="64"
                :type-delay="100"
                :pre-erase-delay="2000"
                :erase-delay="32"
                erase-style="backspace"
                :erase-on-complete="true"
                caret-animation="smooth"
              />
              <br />Tanpa Ribet
            </h1>
            <p>
              Mulai urus dokumen kependudukan Anda hanya dengan beberapa klik
              saja!
            </p>
            <b-button
              variant="primary"
              size="lg"
              v-scroll-to="{ el: '#list-layanan', offset: -100 }"
              >Mulai Sekarang</b-button
            >
          </b-col>
          <b-col class="d-none d-md-block" data-aos="fade-left" data-aos-delay="500">
            <img src="@/assets/Getting Coffee-pana.svg" alt="" />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Hero",
  components: {
    VueTyper,
  },
  data() {
    return {
      layanan: [
        "Kartu Tanda Penduduk",
        "Kartu Keluarga",
        "Akta Kelahiran",
        "Akta Kematian",
        "Lapor Pindah Datang",
        "Kartu Identitas Anak",
      ],
    };
  },
};
</script>

<style lang="scss">
button {
  text-transform: uppercase;
}
</style>
