<template>
<v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
>
  <ToolBar />
  <v-container>
    <AppBar />
    <v-row 
      class="mt-1"
    >
        <v-col cols="12" md="6" sm="12">
            <v-img 
                style="border-radius: 5px"
                width="100%"
                :src="mainImg"
                height="400"
                @click="imgDialog = true"
            />
            <v-dialog 
              v-model="imgDialog"
              max-width="40%"
              :overlay-color="'#000000'"
              :overlay-opacity="0.9"
            >
              <v-img :src="mainImg"/>
            </v-dialog>
            <v-row no-gutters width="100%" style="margin-top: 10px;margin-bottom: 10px;">
              <v-slide-group
                  v-model="model"
                  center-active
                  width="100%"
                  show-arrows
              >
              <template v-slot:next>
                    <v-icon color="#212135" size="30" class="icon-left">chevron_right</v-icon>
              </template>
              <template v-slot:prev>
                  <v-icon color="#212135" size="30" class="icon-left">chevron_left</v-icon>
              </template>
                  <v-slide-item
                      v-for="(tinyImg, index) in publication.images"
                      :key="index"
                      :class="index == publication.images.length - 1 ? 'mx-0' : 'mr-4'"
                      v-slot="{ active, toggle }"
                  >
                      <v-card
                        :color="active ? '#FFFFFF' : '#FFFFFF'"
                        height="130"
                        width="190"
                        @click="toggle"
                      >
                        <v-img 
                          :src="tinyImg.path" 
                          height="100%" 
                          width="190"
                          @click="changeMainImg(tinyImg.path)"
                        />
                      </v-card>
                  </v-slide-item>
              </v-slide-group>
            </v-row>
            <v-row no-gutters>
              <v-img
                src="@/assets/images/grundfos.png"
                height="68"
                width="100%"
                style="border-radius: 5px;"
              />
            </v-row>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-row no-gutters class="mt-5">
            <div class="publication-name">{{ publication.name }}</div>
            <v-spacer/>
            <div style="border-radius: 100%;background-color: #409DBA;height: 30px;width: 30px;">
              <v-btn icon @click="likeDislike" height="30" width="30">
                <v-icon color="#FFFFFF" size="18">{{ fav_icon }}</v-icon>
              </v-btn>
          </div>
          </v-row>
          <v-row no-gutters style="margin-top: 5px">
            <div class="publication-price">{{ publication.price }}TMT</div>
            <v-spacer/>
            <v-icon color="#212135" size="20">visibility</v-icon>
            <span class="publication-view ml-1">{{ publication.view_count }}</span>
          </v-row>
          <v-row no-gutters style="margin-top: 10px;">
            <div class="publication-location">{{ publication.location }}</div>
          </v-row>
          <v-divider style="margin-top: 10px"/>
          <v-row no-gutters style="margin-top: 20px">
            <v-img src="@/assets/icons/comment.svg" width="19" height="19" style="position: absolute"></v-img>
            <div class="ml-6 publication-comment">7 comments</div>
          </v-row>
          <div class="publication-description">{{ publication.description }}</div>
          <v-card
            elevation="0"
            color="#FFFFFF"
            style="margin-top: 20px"
          >
            <div style="padding: 15px;" class="key-style">Giňişleýin maglumat</div>
            <v-divider/>
            <div style="padding: 15px 15px 15px 15px">
              <v-row no-gutters
                v-if="publication.subscription != '' || publication.is_vip"
              >
                <div class="key-style">Statusy:</div>
                <div class="value-style">
                  <v-row no-gutters>
                    <div
                      v-if="publication.subscription != ''" 
                      class="card-priority mr-2" 
                      :style="publication.subscription === 'Gold' ? 'background-color: #FABB18;' 
                      :publication.subscription === 'Silver' ? 'background-color: #C0C0C0;'
                      :publication.subscription === 'Bronze' ? 'background-color: #AE7145;'
                      :'background-color: #FFFFFF'"
                    >
                      <span class="card-priority-text">{{ publication.subscription }}</span>
                    </div>
                    <div class="vip-style" v-if="publication.is_vip">VIP</div>
                  </v-row>
                </div>
              </v-row>
              <v-row no-gutters
                v-for="(value, key) in publication.attributes"
                :key="key"
                style="margin-top: 20px" 
              >
                <div class="key-style">{{ key }}:</div>
                <div class="value-style">{{ value }}</div>
              </v-row>
            </div>
          </v-card>
        
          <v-row no-gutters class="d-flex justify-space-between" style="margin-top: 10px">
            <v-btn
              height="50" 
              elevation="0"
              color="#49AB41"
              class="horizontal-buttons"
              @click="openReportDialog"
            >
              Nägilelik bildir
            </v-btn>
            <v-btn 
              height="50" 
              elevation="0"
              color="#409DBA"
              class="horizontal-buttons"
              @click="commentDialog = true"
            >
              Teswir ýaz
            </v-btn>
          </v-row>
        </v-col>
    </v-row>

    <v-row no-gutters style="margin-top: 20px; margin-bottom: 10px">
      <div class="publication-name">Teswirler</div>
      <v-spacer/>
      <!-- Comment -->
      <v-dialog 
        v-model="commentDialog"
        max-width="400"
        :overlay-color="'#000000'"
        :overlay-opacity="0.9"
      >
        <v-card 
          color="#FFFFFF"
          style="padding: 30px"
        >
          <v-textarea
            v-model="commentText"
            outlined
            label="Comment text"
          />
          <v-btn 
            width="100%" 
            color="#212135" 
            height="50"
            style="color: #FFFFFF;font-size: 18px; font-weight: 700;"
            @click="sendComment"
          >Send</v-btn>
        </v-card>
      </v-dialog>

      <!-- Report -->
      <v-dialog 
        v-model="reportDialog"
        max-width="400"
        :overlay-color="'#000000'"
        :overlay-opacity="0.9"
      >
        <v-card 
          color="#FFFFFF"
          style="padding: 30px"
        >
          <v-select
            label="Report type"
            :items="reportTypes"
            v-model="reportModel"
            item-text="name"
            item-value="id"
            persistent-hint
            single-line
            outlined
          />
          <v-textarea
            v-model="reportText"
            outlined
            label="Report text"
          />
          <v-btn 
            width="100%" 
            color="#212135" 
            height="50"
            style="color: #FFFFFF;font-size: 18px; font-weight: 700;"
            @click="sendFeedback"
          >
            Send
          </v-btn>
        </v-card>
      </v-dialog>
      <v-snackbar
        v-model="successAlert"
        timeout="2000"
        color="white"
        top
        :width="250"
      >
        <div 
          class="d-flex align-center justify-center"
          style="font-weight: 700; color: #212135;"
        >
          Üstünlikli ugradyldy
        </div>
      </v-snackbar>
    </v-row>
      <div class="comment-style"
        v-for="item in comments"
        :key="item"
      >
        <div class="comment-username">{{ item.username }}</div>
        <div class="comment-text">{{ item.text }}</div>
        <v-divider style="margin-top: 5px;margin-bottom: 20px;"/>
      </div>

    <div class="publication-name" style="margin-top: 40px">Meňzeş bildirişler</div>
    <v-row style="margin-top: 1px; margin-bottom: 60px">
      <v-col xl="2"  md="3"  sm="6"  xs="6"
        v-for="i in 4"
        :key="i"
      >
        <v-card 
          class="ma-0"
          style="padding: 10px; 
          cursor: pointer;
          border-radius: 5px;" 
          elevation="0"
          max-width="285"
        >
          <v-img
            src="@/assets/images/sergi_card_img.png"
            width="265"
            height="200"
            style="border-radius: 3px;"/>
          <v-card-title class="similar-card-subtitle pa-0">Nike Store</v-card-title>
          <v-card-title class="similar-card-title pa-0">Nike Air Max</v-card-title>
          <v-card-title class="similar-card-price pa-0">635 TMT</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <FooterComponent />
</v-app>
</template>

<script src="./PublicationPage.js"/>

<style scoped src="./PublicationPage.css"/>