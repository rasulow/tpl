<template>
  <v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
  >
    <ToolBar />
    <v-container
      style="margin-bottom: 80px;"
    >
      <AppBarMedia />
      <v-row style="margin-top: 5px">
        <v-col cols="12" xl="8" md="9" xs="12">
          <v-img :src="news.banner" width="100%" max-height="500" style="border-radius: 5px;"/>
          <v-row no-gutters style="margin-top: 15px">
            <div class="category-div">
              category
            </div>
          </v-row>  
          <v-row no-gutters style="margin-top: 10px" class="d-flex align-start">
            <div class="news-name">{{ news.name }}</div>
          </v-row>
          <v-row no-gutters class="d-flex align-center" style="margin-top: 10px">
            <div class="news-date">{{ news.date_created }}</div>
            <v-spacer/>
            <v-icon color="#212135" size="20" class="mr-1">visibility</v-icon>
            <span class="news-view">{{ news.view_count }}</span>
          </v-row>
          <v-divider style="margin-top: 10px; margin-bottom: 10px"/>
          <v-row no-gutters>
            <v-spacer/>
            <div style="border-radius: 100%;background-color: #409DBA;height: 30px;width: 30px;">
              <v-btn icon @click="likeDislike" height="30" width="30">
                <v-icon color="#FFFFFF" size="18">{{ fav_icon }}</v-icon>
              </v-btn>
            </div>
          </v-row>
          <div class="news-description-style" v-html="news.content"></div>
          <v-card-title class="pa-0 tags-head-style">Tegler</v-card-title>
          <div class="tags-group">
            <div class="tag" v-for="tag in news.tags" :key="tag">#{{ tag }}</div>
          </div>
        </v-col>
        <v-col cols="12" xl="2" md="3" xs="12">
          <v-card
            v-for="i in 3"
            :key="i"
            max-width="285"
            color="#EEEEEE"
            elevation="0"
            style="cursor: pointer"
            :class="i == 1 ? 'mt-0' : 'mt-4'"
          >
            <v-img
              height="160"
              src="@/assets/images/apple_brand.png"
              class="media-img"
            />
            <v-row no-gutters style="margin-top: 10px">
              <v-card-title class="pa-0 card-name">
                Name
              </v-card-title>
            </v-row>

            <v-row no-gutters style="margin-top: 10px;">
              <v-card-title class="pa-0 card-date">
                Date
              </v-card-title>
              <v-spacer/>
              <v-icon color="#212135" size="20" class="mr-1">visibility</v-icon>
              <span class="card-view">123</span>
            </v-row>
            <v-divider style="margin-top: 10px"/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FooterComponent />
  </v-app>
</template>

<script src="./MessagePage.js"/>

<style scoped src="./MessagePage.css"/>