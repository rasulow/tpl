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
        <v-row no-gutters style="margin-top: 20px;">
            <v-card
                color="#FFFFFF"
                style="padding: 10px;"
                width="100%"
                height="60"
                flat
            >
            <v-card-actions class="mt-n2 ml-n2">
                <v-tabs
                    v-model="tab"
                    color="#212135"
                    style="
                        margin-left: 10px;
                        height: 100%;
                        background-color: green;
                        align-items: center;
                        justify-self: center;
                    "
                >
                    <v-tabs-slider color="accent" class="mt-n3" style="width: 100%; height: 1px;"></v-tabs-slider>
                    <v-tab class="tabs-item mt-n1" :ripple="false">Meniň hasabym</v-tab>
                    <v-tab class="tabs-item mt-n1" :ripple="false">Halanlarym</v-tab>
                    <v-tab class="tabs-item mt-n1" :ripple="false">Meniň bildirişlerim</v-tab>
                    <!-- <v-tab class="tabs-item mt-n1" :ripple="false">Tölegler</v-tab>
                    <v-tab class="tabs-item mt-n1" :ripple="false">Teswirler</v-tab> -->
                </v-tabs>
                <v-btn :class="tab === 2 ? 'bilidiris_gos_btn' : 'bilidiris_gos_btn_neg'" 
                    flat
                    text
                    @click="openCatDialog"
                >
                  <span class="mt-2">Bilidiriş goş</span>
                </v-btn>

                <v-btn class="logout_btn mr-n1"
                  @click="logout"
                    flat
                    text
                >Ulgamdan çyk</v-btn>
            </v-card-actions>
            </v-card>

            <v-dialog 
              v-model="categoryDialog"
              max-width="250"
              :overlay-color="'#000000'"
              :overlay-opacity="0.9"
            >
            <v-progress-circular
              :size="70"
              :width="7"
              color="#212135"
              indeterminate 
              v-model="loading"
            />
            </v-dialog>

        </v-row>
        <v-tabs-items v-model="tab" style="margin-top: 20px;">
          <!-- Menin hasabym -->
            <v-tab-item>
              <v-card color="#FFFFFF">
                <v-row align="start" justify="start" style="padding: 20px">

                  <v-col cols="12" md="4" sm="6" class="pl-10 pt-4">
                    <v-row no-gutters>
                      <v-card-title class="avatar-titles">Ulanyjy adyňyz</v-card-title>
                      <div class="bordered-input">
                        XAMARS213Q
                      </div>
                    </v-row>
                  </v-col>

                  <v-col cols="12" md="4" sm="6" class="pt-4">
                    <v-row no-gutters>
                      <v-card-title class="avatar-titles">Email</v-card-title>
                      <div class="bordered-input">
                        {{ email }}
                      </div>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>


          <!-- Halanlarym -->
            <v-tab-item>
              <v-card color="#EEEEEE" elevation="0">
                <v-row>
                    <v-col
                        cols="12" xl="2" md="3" sm="4" xs="6"
                        v-for="item in cards"
                        :key="item"
                    >
                        <v-card
                            max-width="285"
                            class="card"
                            elevation="0"
                            color="#FFFFFF"
                            :to="'/publications/' + item.id"
                        >
                        <div style="padding: 10px;">
                            <v-img 
                                :src="item.thumbnail" 
                                max-width="265"
                                height="190" 
                                style="border-radius: 3px;"
                            />
                            <v-card-title class="pa-0 card-location">{{ item.location }}</v-card-title>
                            <v-card-title class="pa-0 card-name">{{ item.name }}</v-card-title>
                            <v-card-title class="pa-0 card-description">{{ item.name }}</v-card-title>
                            <v-card-title class="pa-0 card-price">{{ item.price }}TMT</v-card-title>
                        </div>
                            <div 
                                class="card-priority" 
                                :style="item.subscription === 'Gold' ? 'background-color: #FABB18;' 
                                :item.subscription === 'Silver' ? 'background-color: #C0C0C0;'
                                :'background-color: #AE7145;'"
                            >
                                <span class="card-priority-text">{{ item.subscription }}</span>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
              </v-card>
            </v-tab-item>


          <!-- Menin bilidirislerim -->
            <v-tab-item>
              <v-card color="#EEEEEE">
                <v-row>
                  <v-col 
                    xl="2"
                    md="3" 
                    sm="4" 
                    xs="6"
                    v-for="item in cards"
                    :key="item"
                  >
                    <v-card 
                      style="padding: 10px;
                      cursor: pointer;
                      border-radius: 5px;" 
                      elevation="0"
                      max-width="285"
                      height="299"
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
              </v-card>
            </v-tab-item>

          <!-- Tolegler -->
            <v-tab-item>
              <v-row no-gutters style="background-color: #EEEEEE;padding-bottom: 1px;">
                <v-col cols="12" md="6" sm="6" xs="12">
                  <v-card
                    style="
                      padding: 30px;
                      margin-right: 10px;
                    "
                    height="692"
                    elevation="0"
                  >
                    <v-row no-gutters>
                      <v-card-title class="pa-0" style="color: #212135">Edilmeli tölegler</v-card-title>
                    </v-row>

                      <v-row 
                        no-gutters 
                        style="margin-top: 20px;"
                        v-for="item in toleg_card"
                        :key="item"
                      >
                        <v-card
                          elevation="2"
                          style="padding: 15px;"
                          width="100%"
                        >
                          <v-row no-gutters style="margin-bottom: 15px;">
                            <v-card-title class="card-info1">Bölüm:</v-card-title>
                            <v-spacer></v-spacer>
                            <v-card-title class="card-info2">{{ item.title1 }}</v-card-title>
                          </v-row>
                          <v-row no-gutters style="margin-bottom: 15px;">
                            <v-card-title class="card-info1">Ýerleşýän ýeri:</v-card-title>
                            <v-spacer></v-spacer>
                            <v-card-title class="card-info2">{{ item.title2 }}</v-card-title>
                          </v-row>
                          <v-row no-gutters>
                            <v-card-title class="card-info1">Goýulan senesi:</v-card-title>
                            <v-spacer></v-spacer>
                            <v-card-title class="card-info2">{{ item.title3 }}</v-card-title>
                          </v-row>
                          <v-row no-gutters style="margin-top: 15px;">
                            <v-btn 
                                text
                                flat
                                width="100%"
                                height="50"
                                class="edilmeli-tolegler-btn"
                              >
                                  Töle
                              </v-btn>
                          </v-row>
                        </v-card>
                      </v-row>
                  </v-card>
                </v-col>
                
                <v-col cols="12" md="6" sm="6" xs="12">
                  <v-card
                    style="
                      padding: 30px;
                      margin-left: 10px;
                    "
                    height="692"
                    elevation="0"
                  >
                    <v-row no-gutters>
                      <v-card-title class="pa-0" style="color: #212135">Tölegleriň taryhy</v-card-title>
                      <v-spacer/>
                      <v-btn 
                        text
                        class="arassala-btn"
                      >Arassala</v-btn>
                    </v-row>

                      <v-row 
                        no-gutters 
                        style="margin-top: 15px;"
                        v-for="item in toleg_taryh_card"
                        :key="item"  
                      >
                        <v-card
                          elevation="2"
                          style="padding: 15px;"
                          width="100%"
                        >
                          <v-row no-gutters style="margin-bottom: 5px;">
                            <v-card-title class="card-info2">{{ item.store }}</v-card-title>
                            <v-spacer></v-spacer>
                            <v-card-title class="card-info1">{{ item.location }}</v-card-title>
                          </v-row>
                          <v-row no-gutters style="margin-bottom: 15px;">
                            <v-card-title class="card-info1">{{ item.date }}</v-card-title>
                          </v-row>
                          <v-row no-gutters>
                            <v-col md="9" sm="9" align-self="center">
                                <v-card-title class="card-info2">{{ item.info }}</v-card-title>
                            </v-col>
                            <v-col md="3" sm="3">
                              <v-row no-gutters class="ma-0">
                                <v-spacer/>
                                <v-card-subtitle 
                                  :class="item.status === 0 ? 'info-pay1' : 'info-pay1-green'"
                                >
                                  {{ item.status_text }}
                                </v-card-subtitle>
                              </v-row>
                              <v-row no-gutters class="ma-0">
                                <v-spacer/>
                                <v-card-subtitle :class="item.status === 0 ? 'info-pay2' : 'info-pay2-green'">
                                  {{ item.price }}
                                </v-card-subtitle>
                                <div 
                                  :class="item.status === 0 ? 'custom-badge-red' : 'custom-badge-green'"
                                ></div>
                              </v-row>
                            </v-col>
                          </v-row>
                          <v-row no-gutters style="margin-top: 15px;">
                            <v-btn 
                                text
                                flat
                                width="100%"
                                height="50"
                                class="tolegler-taryhy-btn"
                              >
                                  Aýyr
                              </v-btn>
                          </v-row>
                        </v-card>
                      </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>

          <!-- Teswirler -->
            <v-tab-item>
              <v-row no-gutters style="background-color: #EEEEEE;padding-bottom: 1px;">
                <v-col cols="12" md="6" sm="6" xs="12">
                  <v-card
                    style="
                      padding: 30px;
                      margin-right: 10px;
                    "
                    height="692"
                    elevation="0"
                  >
                    <v-row no-gutters>
                      <v-card-title class="card-info2 pa-0" style="font-size: 20px">Girýän</v-card-title>
                    </v-row>
                    <v-row 
                      no-gutters 
                      style="margin-top: 20px;"
                      v-for="item in input_comments"
                      :key="item"
                    >
                      <v-card
                        elevation="2"
                        width="100%"
                        height="139"
                      >
                        <v-row no-gutters style="padding: 15px 0 0 15px;">
                          <v-card-title class="card-info2">{{ item.code }}</v-card-title>
                        </v-row>
                        <v-row no-gutters style="padding-left: 15px;margin-top: 5px">
                          <v-card-title class=" card-info1">{{ item.datetime }}</v-card-title>
                        </v-row>
                        <v-divider style="margin-top: 5px"/>
                        <v-row no-gutters style="padding-left: 15px;margin-top: 10px;">
                          <v-col cols="12" md="8">
                            <v-card-title class="card-info1">{{ item.comment }}</v-card-title>
                          </v-col>
                        </v-row>
                        <v-row 
                          no-gutters 
                          style="
                          padding: 0px 15px;margin-top: 20px;"
                          align="center"
                          justify="end"
                        >
                          <v-spacer/>
                          <v-img 
                            src="@/assets/icons/like.svg" 
                            height="20px" 
                            width="16px"
                            style="
                              position: absolute;
                              color: #212135;
                              cursor: pointer;
                              margin-right: 30px;
                            "
                          />
                          <v-img 
                            src="@/assets/icons/dislike.svg" 
                            height="20px" 
                            width="16px"
                            style="
                              position: absolute;
                              color: #212135;
                              cursor: pointer;
                            "
                          />
                        </v-row>
                      </v-card>
                    </v-row>
                  </v-card>
                </v-col>
                
                <v-col cols="12" md="6" sm="6" xs="12">
                  <v-card
                    style="
                      padding: 20px 30px 30px 30px;
                      margin-right: 10px;
                    "
                    height="692"
                    elevation="0"
                  >
                    <v-row no-gutters class="mb-n2">
                      <v-card-title 
                        class="card-info2 pa-0" 
                        style="font-size: 20px"
                      >
                        Çykýan
                      </v-card-title>
                      <v-spacer/>
                      <v-btn 
                        text
                        class="arassala-btn"
                      >Arassala</v-btn>
                    </v-row>
                    <v-row 
                      no-gutters 
                      style="margin-top: 20px;"
                      v-for="item in input_comments"
                      :key="item"
                    >
                      <v-card
                        elevation="2"
                        width="100%"
                        height="139"
                      >
                        <v-row no-gutters style="padding: 15px 0 0 15px;">
                          <v-card-title class="card-info2">{{ item.code }}</v-card-title>
                        </v-row>
                        <v-row no-gutters style="padding-left: 15px;margin-top: 5px">
                          <v-card-title class=" card-info1">{{ item.datetime }}</v-card-title>
                        </v-row>
                        <v-divider style="margin-top: 5px"/>
                        <v-row no-gutters style="padding-left: 15px;margin-top: 10px;">
                          <v-col cols="12" md="8">
                            <v-card-title class="card-info1">{{ item.comment }}</v-card-title>
                          </v-col>
                        </v-row>
                        <v-row 
                          no-gutters 
                          style="
                          padding: 0px 15px;margin-top: 20px;"
                          align="center"
                          justify="end"
                        >
                          <v-spacer/>
                          <v-img 
                            src="@/assets/icons/like.svg" 
                            height="20px" 
                            width="16px"
                            style="
                              position: absolute;
                              color: #212135;
                              cursor: pointer;
                              margin-right: 30px;
                            "
                          />
                          <v-img 
                            src="@/assets/icons/dislike.svg" 
                            height="20px" 
                            width="16px"
                            style="
                              position: absolute;
                              color: #212135;
                              cursor: pointer;
                            "
                          />
                        </v-row>
                      </v-card>
                    </v-row>
                  </v-card>
                </v-col>

              </v-row>
            </v-tab-item>
      </v-tabs-items>
    </v-container>
    <FooterComponent />
    </v-app>
</template>
  
<script src="./FavoritePage.js"/>
  
<style src="./FavoritePage.css" scoped/>
  

    