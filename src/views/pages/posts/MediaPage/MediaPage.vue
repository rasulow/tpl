<template>
    <v-app 
        id="inspire" 
        :style="{background: $vuetify.theme.themes.dark.background}"
    >
        <ToolBar />
        <v-container style="margin-bottom: 80px;">
          <AppBarMedia />
          <v-row style="margin-top: 5px">
            <v-col cols="12" xl="8" md="9" xs="12">
                <video controls autoplay width="100%" height="auto" style="border-radius: 5px;">
                    <source :src="video.video" type="video/mp4">
                </video>
                <v-row no-gutters style="margin-top: 20px" class="d-flex align-start">
                  <div class="video-name">{{ video.name }}</div>
                </v-row>
                <v-row no-gutters class="d-flex align-center" style="margin-top: 10px">
                  <div class="video-date">{{ video.date_created }}</div>
                  <v-spacer/>
                  <v-icon color="#212135" size="20" class="mr-1">visibility</v-icon>
                  <span class="card-view">123</span>
                </v-row>
                <v-divider style="margin-top: 10px"/>
                <v-row no-gutters class="d-flex align-center" style="margin-top: 20px">
                  <div 
                    class="video-channel" 
                    @click="goToStore(video.content_object.id, video.content_type)"
                  >
                    {{ video.content_object ? video.content_object.name : 'TPL' }}
                  </div>
                  <div class="video-priority-div">GOLD</div>
                  <v-spacer/>
                  <div style="border-radius: 100%;background-color: #409DBA;height: 30px;width: 30px;">
                    <v-btn icon @click="likeDislike" height="30" width="30">
                      <v-icon color="#FFFFFF" size="18">{{ fav_icon }}</v-icon>
                    </v-btn>
                  </div>
                </v-row>

                <div class="video-description-style">{{ video.description }}</div>
                <v-img 
                  height="120" 
                  width="100%"
                  rounded
                  src="@/assets/images/saray.png"
                  style="border-radius: 5px; margin-top: 20px;cursor: pointer;"
                />
            </v-col>
            <v-col cols="12" xl="2" md="3" xs="12">
                <v-card
                    v-for="i in 3"
                    :key="i"
                    max-width="285"
                    color="#EEEEEE"
                    elevation="0"
                    style="cursor: pointer;"
                    :class="i == 1 ? 'mt-0' : 'mt-4'"
                >
                    <v-img
                    height="160"
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
                          Name
                      </v-card-title>
                    </v-row>

                    <v-row no-gutters style="margin-top: 10px;">
                    <v-card-title class="pa-0 card-date">
                        Date
                    </v-card-title>
                    <v-spacer/>
                    <v-icon color="#212135" size="20" class="mr-1">visibility</v-icon>
                    <span class="card-view">456</span>
                    </v-row>
                    <v-row no-gutters style="margin-top: 10px">
                    <v-card-title class="pa-0 card-channel">
                        YouTube channel
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

<script src="./MediaPage.js"/>

<style scoped src="./MediaPage.css"/>