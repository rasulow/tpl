<template>
      <v-carousel
        :cycle="2000"
        hide-delimiters 
        height="400"
        next-icon="mdi-arrow-right"
        prev-icon="mdi-arrow-left"
        style="margin: 20px 0; border-radius: 5px;cursor: pointer;"
      >
        <template v-slot:prev="{ on, attrs }">
          <v-btn
            class="carousel-btn"
            v-bind="attrs"
            v-on="on"
            height="40"
            width="40"
            flat
          >
            <v-icon size="30" style="color:#212135;">chevron_left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn
            class="carousel-btn"
            v-bind="attrs"
            v-on="on"
            height="40"
            width="40"
            flat
          >
            <v-icon size="30" style="color:#212135;">chevron_right</v-icon>
          </v-btn>
        </template>
        <v-carousel-item
          v-for="(item,i) in carouselItems"
          :key="i"
          :src="item.image"
          :href="'https://' + item.link"
        />
      </v-carousel>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        carouselItems: []
    }),
    created() {

    },
    methods: {
        async getCarousel() {
        try {
          const response = await axios.get('/commercials/advertisements/')
          this.carouselItems = response.data
        }catch(e) {
          console.log(e)
        } 
      }
    }
}
</script>

<style scoped>
.carousel-btn {
  width: 40px;
  height: 40px;
  min-width: unset !important;
  background: rgba(255, 255, 255, 0.25) !important;
  backdrop-filter: blur(10px);
  border-radius: 3px;
}
.v-window__prev,.v-window__next{
  background: transparent;
}

</style>