<template>
  <v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
  >
    <ToolBar />
    <v-container class="pt-0" style="margin-top: 12px;">
      <AppBar />
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

      <v-row 
        wrap
        justify="center"
      >
        <v-col xs="12" sm="6">
          <router-link
            :to="'/posts/media/' + videos[0].id"
          >
            <v-img
              :src="videos[0].thumbnail"
              class="media-cards"
            >
              <v-img
                color="white"
                size="57"
                class="media-icon"
                src="@/assets/play.png"
              />
              <div class="dark-div"></div>
            </v-img>
          </router-link>
        </v-col>


        <v-col xs="12" sm="6">
          <router-link
            :to="'/posts/media/' + videos[1].id"
          >
            <v-img 
              :to="'/posts/media/' + videos[1].id"
              :src="videos[1].thumbnail"
              class="media-cards"
            >
            <v-img
              color="white"
              size="57"
              class="media-icon"
              src="@/assets/play.png"
            />
              <div class="dark-div">
              </div>
            </v-img>
          </router-link>
        </v-col>

      </v-row>

      <v-img 
        height="120" 
        width="100%"
        rounded
        src="@/assets/images/saray.png"
        style="border-radius: 5px; margin-top: 20px;cursor: pointer;"
      >
      </v-img>


      <v-row no-gutters style="margin-top: 65px">
        <div 
          style="
            font-size: 16px;
            line-height: 16px;
            font-weight: 700;
            color: #212135;"
        >
          {{ $t('message.sergiDukan') }}
        </div>
        <v-spacer/>
        <v-btn 
          elevation="0" 
          color="#212135" 
          class="all-exhibition-btn"
          to="/exhibition/stores"
        >
          Hemmesini gör          
        </v-btn>
      </v-row>

      <v-row>
        <v-col cols="12" xl="2" md="3" sm="4" xs="6"
          v-for="card in stores"
          :key="card.name"
        >
          <v-card
            class="card mx-auto"
            max-width="285"
            :to="'/exhibition/stores/' +  card.id"
          >
            <v-img
              :src="card.thumbnail"
              height="190"
              width="100%"
            />

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
    
    <v-container style="padding-bottom: 0px;">
      <div 
        style="margin-top: 65px;font-size: 16px;font-weight: 700;color: #212135;"
      >
        <span>
          {{ $t('message.tazelik') }}
        </span>
      </div>

      <v-chip-group
        v-model="selection"
        active-class="chip-active"
        mandatory
        column
      >
          <v-chip
            text-color="#212135"
            class="chip"
            @click="getPostAnnouncements(-1)"
          >
            Ähli täzelikler
          </v-chip>

          <v-chip
            v-for="item in news"
            :key="item.title"
            text-color="#212135"
            class="chip"
            @click="getPostAnnouncements(item.id)"
          >
            {{ item.name }}
          </v-chip>
      </v-chip-group>
    </v-container>
    
    <v-container class="news-container">      

        <div class="slide-track">

          <div class="slide">
            <v-card
              v-for="item in news_cards"
              :key="item"
              :to="'/posts/messages/' + item.id"
              class="news-card-style mx-4"
              height="280"
              width="270"
              elevation="0"
              color="#EEEEEE"
            >
              <v-img
                :src="item.banner"
                width="100%"
                height="197"
              ></v-img>
              <v-row no-gutters style="margin-top: 10px;">
                <v-card-title class="news-card-title">{{ item.name }}</v-card-title>
              </v-row>
              <v-row no-gutters style="margin-top: 10px;">
                <v-card-title class="news-card-subtitle">{{ item.date_created }}</v-card-title>
                <v-spacer></v-spacer>
                <v-icon
                  color="#212135"
                  size="20"
                  class="mr-1"
                >
                  visibility
                </v-icon>
                <span
                  style="
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 14px;
                    color: #212135;
                    align-self: center;
                    letter-spacing: normal;"
                >
                  123
                </span>
              </v-row> 
              <v-row no-gutters><v-divider style="margin-top: 20px;"></v-divider></v-row>
            </v-card>
          </div>

        </div>

    </v-container>
    <FooterComponent />
  </v-app>
</template>

<script src="./HomePage.js"/>

<style scoped src="./HomePage.css"/>
