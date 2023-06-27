<template>
  <v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
  >
    <ToolBar />
    <v-container
      style="margin-bottom: 80px;"
    >
      <AppBarMall />
      <SearchComponent />
      
      <v-carousel
        cycle
        interval="3000"
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


      <v-img 
        height="120" 
        width="100%"
        rounded
        src="@/assets/images/saray.png"
        style="border-radius: 5px; margin-top: 20px;cursor: pointer;"
      >
      </v-img>

      <div
        style="margin-top: 65px;font-size: 16px;font-weight: 700;color: #212135;"
      >
        <span>
          Dükanlar
        </span>
      </div>

      <v-row style="margin-bottom: 60px;">
          <v-col xl="2" md="3" sm="4" xs="6"
            v-for="card in stores"
            :key="card.title"
          >
            <v-card
              class="card mx-auto"
              max-width="285"
              :to="'/mall/stores/' + card.id"
            >
              <v-img
                :src="card.thumbnail"
                height="190"
                width="100%"
              ></v-img>

              <v-card-title
                class="card-title"
              >
                {{ card.name }}
              </v-card-title>
            
              <v-card-subtitle
                class="card-subtitle"
              >
                {{ card.description }}
              </v-card-subtitle>
            
              <div 
                class="card-priority" 
                :style="card.subscription === 'Gold' ? 'background-color: #FABB18;' 
                :card.subscription === 'Silver' ? 'background-color: #C0C0C0;'
                :'background-color: #AE7145;'
              "
              >
                <span class="card-priority-text">{{ card.subscription }}</span>
              </div>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
    
    
    <FooterComponent />
  </v-app>
</template>

<script src="./MallPage.js"/>

<style scoped src="./MallPage.css"/>
