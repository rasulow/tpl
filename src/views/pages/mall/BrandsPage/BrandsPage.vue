<template>
<v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
>
  <ToolBar />
  <v-container>
    <AppBarMall />
    <SearchComponent :placeholder="$t('search.brand')"/>
    <div
      style="
        margin: 0;
        padding: 0;
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: normal;
        color: #212135;
      "
    >
      Brendlar
    </div>

    <v-row style="margin-top: 1px;margin-bottom: 60px;">
      <v-col cols="12" xl="2" md="3" sm="4" xs="6"
        v-for="item in brands"
        :key="item"
      >
        <v-card
          max-width="285"
          height="50"
          elevation="0"
          color="#FFFFFF"
          class="d-flex align-center"
          style="padding: 15px"
          @click="goToBrand(item.id, item.name)"
        >
          <v-row no-gutters>
            <v-card-title class="brand-name pa-0">{{ item.name }}</v-card-title>
            <v-spacer/>
            <div class="brand-count">{{ item.products__count }}</div>
          </v-row>  
        </v-card>
      </v-col>
    </v-row>
  </v-container>
<FooterComponent />
</v-app>

</template>

<script src="./BrandsPage.js"/>

<style scoped src="./BrandsPage.css"/>