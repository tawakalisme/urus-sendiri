<template>
  <b-container class="layanan" id="list-layanan">
    <b-row>
      <b-col data-aos="fade-up" >
        <h2 class="text-center">Mulai Buat Dokumen Anda dengan Mudah</h2>
        <p class="text-center mb-5 px-5">
          Kami melayani kebutuhan dokumen kependudukan Anda sepanjang hari dan
          sepanjang waktu. Pastikan untuk melengkapi seluruh poin persyaratan
          dan mengisi formulir dengan benar. Hubungi layanan telepon kami untuk
          bantuan
        </p>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col class="mb-4" lg="4">
        <div class="card-service card-ktp" data-aos="fade-up" data-aos-delay="300">
          <img src="@/assets/ktp.svg" alt="ktp" />
          <h4>Kartu Tanda Penduduk</h4>
          <p>Perekaman data baru, cetak kartu, perbaikan data dan kartu</p>
          <div class="bottom-block">
            <b-button variant="blue">Buat Pengajuan</b-button>
          </div>
        </div>
      </b-col>
      <b-col class="mb-4" lg="4">
        <div class="card-service card-kk" data-aos="fade-up"  data-aos-delay="500">
          <img src="@/assets/kk.svg" alt="ktp" />
          <h4>Kartu Keluarga</h4>
          <p>
            Cetak kartu baru, perbaikan data dan kartu, pelaporan pindah datang
          </p>
          <div class="bottom-block">
            <b-button variant="purple">Buat Pengajuan</b-button>
          </div>
        </div></b-col
      >
      <b-col class="mb-4" lg="4">
        <div class="card-service card-akta" data-aos="fade-up"  data-aos-delay="700">
          <img src="@/assets/akta.svg" alt="ktp" />
          <h4>Pencatatan Sipil</h4>
          <p>Akta kelahiran, akta kematian, dan perbaikan data</p>
          <div class="bottom-block">
            <b-button variant="orange">Buat Pengajuan</b-button>
          </div>
        </div></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "LayananSection",
};
</script>

<style lang="scss"></style>
