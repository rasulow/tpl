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
        <SearchComponent />
        <v-card
            width="100%"
            height="360"
            color="white"
            flat
        >
            <v-img
                :src="about_us.banner"
                width="100%"
                height="300"
            >
            </v-img>
            <v-card-actions>
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
                  <v-tabs-slider color="accent" class="mt-n2" style="width: 100px; height: 1px;"></v-tabs-slider>
                  <v-tab class="tabs-item" :ripple="false">Ähli harytlar</v-tab>
                  <v-tab class="tabs-item" :ripple="false">Dükan barada</v-tab>
              </v-tabs>
            </v-card-actions>
        </v-card>
        <v-card 
            flat
            style="
                margin-top: 20px;
            "
        >
          <v-tabs-items v-model="tab">
              <v-tab-item flat>
                <v-card color="#EEEEEE">
                  <v-row>
                    <v-col 
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
                        :to="'/exhibition/products/' + item.id"
                      >
                        <v-img
                          :src="item.thumbnail"
                          width="265"
                          height="200"
                          style="border-radius: 3px;"/>
                        <v-card-title class="card-subtitle pa-0">{{ item.store.name }}</v-card-title>
                        <v-card-title class="card-title pa-0">{{ item.name }}</v-card-title>
                        <v-card-title class="card-price pa-0">{{ item.price }} TMT</v-card-title>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>

              <v-tab-item>
                  <v-card flat>
                    <v-row no-gutters style="padding: 30px;">
                      <v-col cols="12" md="6" sm="12">
                        <v-row no-gutters>
                          <v-card-title
                            style="
                              color: #212135;
                              font-size: 30px;
                              line-height: 30px;
                              font-weight: 700;
                              letter-spacing: normal;
                              padding: 0;">
                            {{ about_us.name }}
                          </v-card-title>
                          <v-spacer/>
                          <v-icon
                              size="18"
                              color="#212135"
                              style="margin-left: 25px;"
                              class="mr-1 mt-2"
                            >
                              visibility
                            </v-icon>

                            <v-card-title
                            style="
                              padding: 0;
                              font-size: 14px;
                              line-height: 14px;
                              color: #212135;
                              font-weight: 700;
                              margin-top: 8px;
                              margin-right: 20px
                            "
                          >{{ about_us.view_count }}
                          </v-card-title>
                        </v-row>
                        <v-row no-gutters style="margin-top: 10px;">
                          <v-card-title class="key pa-0">Bölümi:</v-card-title>
                          <v-card-title class="value pa-0">{{ about_us.category }}</v-card-title>
                        </v-row>
                        <v-row no-gutters style="margin-top: 5px;">
                          <v-card-title class="key pa-0">Status:</v-card-title>
                          <v-card-title class="value pa-0">{{ about_us.subscription }}</v-card-title>
                        </v-row>
                        <v-row no-gutters style="margin-top: 5px;">
                          <v-card-title class="key pa-0">Satyjynyň statusy:</v-card-title>
                          <v-card-title class="value pa-0">{{ about_us.business_type }}</v-card-title>
                        </v-row>
                        <v-row no-gutters style="margin-top: 25px;">
                          <v-card-text class="card-text">
                            {{ about_us.description }}
                          </v-card-text>
                        </v-row>
                      </v-col>

                      <v-col cols="12" md="6" sm="12"
                        class="mt-n1"
                      >
                        <v-expansion-panels
                          flat
                          width="100%"
                        >
                        
                          <v-expansion-panel
                            v-for="(item,i) in expansion_data"
                            :key="i"
                          >
                            <v-expansion-panel-header
                              style="
                                font-size: 16px;
                                line-height: 16px;
                                font-weight: 700;
                                color: #212135;
                                letter-spacing: normal;
                              "
                            >
                            <template v-slot:actions>
                              <v-icon color="#212135" size="14">
                                $expand
                              </v-icon>
                            </template>
                              {{ item.title }}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content
                              style="color: #212135;font-size: 16px;"
                            >
                              <v-list v-if="i == 0 || i == 1">
                                <v-list-item v-for="(key, value) in item.content" :key="value" style="min-height: 30px">
                                  <v-list-item-title class="pa-0" v-if="i == 0">
                                    <span style="font-weight: 700">{{ value }}</span> <span>{{ key }}</span>
                                  </v-list-item-title>
                                  <v-list-item-title class="pa-0" v-else>
                                    <span style="font-weight: 700">{{ value }}:</span> <span>{{ key }}</span>
                                  </v-list-item-title>
                                </v-list-item>
                              </v-list>
                              <span v-else>{{ item.content }}</span>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-col>
                    </v-row>
                  </v-card>
              </v-tab-item>
          </v-tabs-items>

        </v-card>
      </v-container>
      <FooterComponent />
    </v-app>
  </template>
  
<script src="./StorePage.js"/>
  
<style src="./StorePage.css" scoped/>