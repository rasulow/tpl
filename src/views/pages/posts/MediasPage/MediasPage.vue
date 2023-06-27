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
      <SearchComponent :placeholder="$t('search.media')"/>
      <!-- <v-dialog 
        v-model="popupDialog"
        width="400"
        :overlay-color="'#000000'"
        :overlay-opacity="0.9"
      >
        <v-img :src="popup.file"/>
      </v-dialog> -->
      <v-row>
        <v-col
          cols="12" xl="2" sm="6" md="3" xs="12"
          v-for="item in cards"
          :key="item"
        >
          <v-card
            max-width="285"
            color="#EEEEEE"
            elevation="0"
            style="cursor: pointer"
            :to="'/posts/media/' + item.id"
          >
            <v-img
              height="160"
              :src="item.thumbnail"
              class="media-img"
            >
              <v-img
                color="white"
                class="media-icon"
                src="@/assets/play.png"
              />  
              <div class="dark-div"></div>
            </v-img>
            <v-row no-gutters style="margin-top: 10px">
              <v-card-title class="pa-0 card-name">
                {{ item.name }}
              </v-card-title>
            </v-row>

            <v-row no-gutters style="margin-top: 10px;">
              <v-card-title class="pa-0 card-date">
                {{ item.date_created }}
              </v-card-title>
              <v-spacer/>
              <v-icon color="#212135" size="20" class="mr-1">visibility</v-icon>
              <span class="card-view">{{ item.view_count }}</span>
            </v-row>
            <v-row no-gutters style="margin-top: 10px">
              <v-card-title class="pa-0 card-channel">
                {{ item.content_object ? item.content_object.name : 'TPL' }}
              </v-card-title>
              <v-spacer/>
              <div class="card-priority-div">
                <v-card-title class="pa-0 card-priority-name">GOLD</v-card-title>
              </div>
            </v-row>
            <v-divider style="margin-top: 10px"/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FooterComponent />
  </v-app>
</template>

<script src="./MediasPage.js"/>

<style scoped src="./MediasPage.css"/>