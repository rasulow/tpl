<template>
    <v-app 
      id="inspire" 
      :style="{background: $vuetify.theme.themes.dark.background}"
    >
      <ToolBar />
      <v-container
        style="margin-bottom: 80px;"
      >
        <AppBar />

        <v-row no-gutters style="margin-top: 15px;">
            <v-col md="6" sm="12" xs="12">
                <v-img 
                    :src="productDatas.thumbnail"
                    width="100%"
                    height="400"
                    style="border-radius: 5px;"
                    @click="imgDialog = true"
                />

                <v-dialog 
                  v-model="imgDialog"
                  max-width="40%"
                  :overlay-color="'#000000'"
                  :overlay-opacity="0.9"
                >
                  <v-img :src="productDatas.thumbnail"/>
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
                          v-for="(tinyImg, index) in productDatas.images"
                          :key="index"
                          :class="index == productDatas.images.length - 1 ? 'mx-0' : 'mr-4'"
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
            <v-col md="6" sm="12" xs="12" style="padding: 30px;">
                <v-row no-gutters>
                    <div
                        style="
                            width: 75px;
                            height: 20px;
                            border-radius: 2px;
                            background-color: #409DBA;
                            position: relative;
                        "
                        v-if="productDatas.is_new"
                      
                    >
                        <span 
                          style="
                            color: #FFFFFF;
                            font-size: 12px;
                            position: absolute;
                            left: 12%;
                            top: 5%;"
                        >
                          Täze önüm
                        </span>
                    </div>
                </v-row>
                <v-row no-gutters style="margin-top: 10px;">
                  <span
                    style="
                      font-size: 30px;
                      line-height: 30px;
                      font-weight: 700;
                      color: #212135;
                    " 
                  >
                    {{ productDatas.name }}
                  </span>
                  <v-spacer/>
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
                    {{ productDatas.view_count }}
                  </span>
                </v-row>
                <v-row no-gutters style="margin-top: 10px;">
                  <span
                    style="
                      font-size: 25px;
                      line-height: 25px;
                      font-weight: 700;
                      color: #406DBA;
                      letter-spacing: normal;
                    "
                  >{{ productDatas.price }} TMT</span>
                </v-row>

                <v-divider style="margin: 20px 0px;" />

                <v-row no-gutters>
                  <div style="
                    width: 410px;
                    letter-spacing: normal;
                    padding: 0;
                    line-height: 23.4px;
                    font-weight: 300;
                    font-size: 18px;
                    width: 100%;
                    color: #333333;
                  ">    
                    {{ productDatas.description }}
                  </div>
                </v-row>

                <v-row no-gutters style="margin-top: 20px;">
                  <v-card
                    class="pa-0"
                    color="#FFFFFF"
                    min-height="179"
                    width="100%"
                    flat
                  >
                    <v-card-title class="card-info">Giňişleýin maglumat</v-card-title>
                    <v-divider/>
                    <v-row no-gutters style="margin-top: 5px;padding: 15px;">
                      <v-col cols="12" md="6" sm="6" xs="6">
                        <v-card-title class="card-info1">Bölüm:</v-card-title>
                        <v-card-title class="card-info1">Ýerleşýän ýeri:</v-card-title>
                        <v-card-title class="card-info1">Goýulan senesi:</v-card-title>
                      </v-col>
                      <v-col cols="12" md="6" sm="6" xs="6">
                        <v-card-title class="card-info2">{{ productDatas.store.category }}</v-card-title>
                        <v-card-title class="card-info2">{{ productDatas.store.location }}</v-card-title>
                        <v-card-title class="card-info2">{{ productDatas.date_created }}</v-card-title>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-row>
                <v-row no-gutters style="margin-top: 20px;">
                  <v-col cols="12" md="6" sm="6" xs="12" style="padding-right: 5px;">
                    <v-btn 
                      text 
                      class="card-button"
                      style="background-color: #797979;"
                      width="100%"
                      height="50"
                    >
                      Nägilelik bildir
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="6" sm="6" xs="12" style="padding-left: 5px;">
                    <v-btn 
                      text 
                      class="card-button"
                      style="background-color: #409DBA;"
                      width="100%"
                      height="50"
                    >
                      Halanlaryma goş
                    </v-btn>
                  </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row no-gutters style="margin-top: 80px;">
          <span
            style="
              font-size: 30px;
              line-height: 30px;
              color: #212135;
              font-weight: 700;
              letter-spacing: normal;
            "
          >Meňzeş bildirişler</span>
        </v-row>
        <v-row>
          <v-col
            xl="2" 
            md="3" 
            sm="6" 
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
              to="/bildirishler/sergi-dukan/product"
            >
              <v-img
                src="@/assets/images/sergi_card_img.png"
                width="265"
                height="200"
                style="border-radius: 3px;"/>
              <v-card-title class="card-subtitle pa-0">{{ item.subtitle }}</v-card-title>
              <v-card-title class="card-title pa-0">{{ item.title }}</v-card-title>
              <v-card-title class="card-price pa-0">{{ item.price }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <FooterComponent />
    </v-app>
  </template>
  
  <script src="./ProductPage.js"/>
  
<style src="./ProductPage.css" scoped/>
  