<template>
  <b-container>
    <b-row align-items-center>
      <b-col>
        <h2>Hubungi Kami</h2>
        <p>
          Anda memiliki pertanyaan atau kritik mengenai layanan kependudukan?
          Beritahu kami melalui formulir berikut atau hubungi kontak berikut
          ini:
        </p>
        <ul>
            <li>email</li>
            <li>phone</li>
            <li>address</li>
        </ul>
      </b-col>
      <b-col>
        <b-card>
          <b-form>
            <b-form-group
              id="input-group-name"
              label="Nama Lengkap"
              label-for="input-name"
            >
              <b-input
                id="input-name"
                v-model="form.name"
                type="text"
                required
                placeholder="Nama Lengkap"
              ></b-input>
            </b-form-group>
            <b-form-group
              id="input-group-phone"
              label="Nomor Telepon"
              label-for="input-phone"
            >
              <b-input
                id="input-phone"
                v-model="form.phone"
                type="text"
                required
                placeholder="Nomor Telepon"
              ></b-input>
            </b-form-group>
            <b-form-group
              id="input-group-message"
              label="Pesan"
              label-for="input-message"
            >
              <b-form-textarea
                id="input-message"
                v-model="form.message"
                rows="3"
                placeholder="Jelaskan masalah, kritik, atau saran Anda"
                required no-resize
              ></b-form-textarea>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        message: "",
      },
    };
  },
};
</script>

<style></style>
