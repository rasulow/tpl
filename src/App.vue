<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    locations: []
  }),
  created() {
    this.setLocation()
  },
  methods: {
    async setLocation() {
      if (!localStorage.getItem('location')) {
        await axios.get('/locations/')
        .then(response => {
          this.locations = response.data
        })
        .catch(error => {
          console.log(error)
        })
        localStorage.setItem('location', JSON.stringify(this.locations[0]))
      }
    }
  },
  components: {
  }
};
</script>

<style>
.v-slide-group.v-item-group > .v-slide-group__prev{
  position: absolute !important;
  z-index: 99;
  height: 100%;
  background: linear-gradient(90deg, #FFFFFF -23%, rgba(255, 255, 255, 0) 100%);
}

.v-slide-group.v-item-group > .v-slide-group__next{
  position: absolute !important;
  left: 91.2%;
  z-index: 99;
  height: 100%;
  background: linear-gradient(270deg, #FFFFFF -23%, rgba(255, 255, 255, 0) 100%);
}
</style>
