<template>
<v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
>
<ToolBar />
  <v-container>
    <AppBarMall />
    <div
      style="
        margin-top: 15px;
        padding: 0;
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: normal;
        color: #212135;
      "
    >
        {{ $t('appBarMall.halanlarym') }}
    </div>

    <v-row style="margin-top: 1px; margin-bottom: 80px;">
        <v-col 
          xl="2"
          md="3" 
          sm="4" 
          xs="6"
          v-for="item in cards"
          :key="item"
        >
          <v-card 
            class="ma-0"
            style="padding: 10px; 
            cursor: pointer;
            border-radius: 5px;" 
            elevation="0"
            max-width="285"
            :to="'/mall/products/' + item.id"
          >
            <v-img
              :src="item.thumbnail"
              width="265"
              height="200"
              style="border-radius: 3px;"/>
            <v-card-title class="card-subtitle pa-0">{{ item.store.name }}</v-card-title>
            <v-card-title class="card-title pa-0">{{ item.name }}</v-card-title>
            <v-card-title class="card-price pa-0">{{ item.stocks[0].price }} TMT</v-card-title>
            <v-btn 
              class="to-basket-btn-style"
              width="100%"
              height="45"
              elevation="0"
              color="deep-purple"
              @click="item.inBasket = !item.inBasket"
              v-if="item.inBasket"
            >
              <v-icon color="#FFFFFF" size="20" class="mr-1">remove_circle_outline</v-icon>
              Sebetden aýyr
            </v-btn>
            <v-btn 
              class="to-basket-btn-style"
              width="100%"
              height="45"
              elevation="0"
              color="#212135"
              @click="item.inBasket = !item.inBasket"
              v-else
            >
              <v-icon color="#FFFFFF" size="20" class="mr-1">control_point</v-icon>
              Sebede goş
            </v-btn>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
  <FooterComponent />
</v-app>
</template>

<script src="./FavoritesPage.js"/>

<style scoped src="./FavoritesPage.css"/>