<template>
  <b-container class="layanan">
    <b-row>
      <b-col>
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
      <b-col>
        <div class="card-service card-ktp">
          <img src="@/assets/ktp.svg" alt="ktp" />
          <h4>Kartu Tanda Penduduk</h4>
          <p>Perekaman data baru, cetak kartu, perbaikan data dan kartu</p>
          <b-button class="btn-a">Buat Pengajuan</b-button>
        </div>
      </b-col>
      <b-col>
        <div class="card-service card-kk">
          <img src="@/assets/kk.svg" alt="ktp" />
          <h4>Kartu Keluarga</h4>
          <p>
            Cetak kartu baru, perbaikan data dan kartu, pelaporan pindah datang
          </p>
          <b-button class="btn-b">Buat Pengajuan</b-button>
        </div></b-col
      >
      <b-col>
        <div class="card-service card-akta">
          <img src="@/assets/akta.svg" alt="ktp" />
          <h4>Pencatatan Sipil</h4>
          <p>Akta kelahiran, akta kematian, dan perbaikan data</p>
          <b-button class="btn-c">Buat Pengajuan</b-button>
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
