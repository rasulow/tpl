<template>
    <v-app 
      id="inspire" 
      :style="{background: $vuetify.theme.themes.dark.background}"
    >
      <ToolBar />
      <v-container>
        <AppBarMall />
        <SearchComponent />
        <v-img
            :src="storeAbout.banner"
            width="100%"
            height="300"
            style="border-radius: 3px"
        />
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
                      {{ storeAbout.name }}
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
                    >{{ storeAbout.view_count }}
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters style="margin-top: 10px;">
                    <v-card-title class="key pa-0">Bölümi:</v-card-title>
                    <v-card-title class="value pa-0">{{ storeAbout.category }}</v-card-title>
                  </v-row>
                  <v-row no-gutters style="margin-top: 5px;">
                    <v-card-title class="key pa-0">Status:</v-card-title>
                    <v-card-title class="value pa-0">{{ storeAbout.subscription }}</v-card-title>
                  </v-row>
                  <v-row no-gutters style="margin-top: 5px;">
                    <v-card-title class="key pa-0">Satyjynyň statusy:</v-card-title>
                    <v-card-title class="value pa-0">{{ storeAbout.business_type }}</v-card-title>
                  </v-row>
                  <v-row no-gutters style="margin-top: 25px;">
                    <v-card-text class="card-text">
                      {{ storeAbout.description }}
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
            
            
            <v-row no-gutters style="margin-top: 30px">
                <v-spacer/>
                <v-btn 
                    elevation="0"
                    color="#FFFFFF"
                    style="
                        font-size: 18px;
                        line-height: 18px;
                        text-emphasis-color: #212135;
                        text-transform: unset !important;
                        letter-spacing: normal;
                    "
                >   
                    <v-icon>swap_vert</v-icon>
                    Tertiple
                </v-btn>
            </v-row>

            <v-row no-gutters style="margin-top: 20px; margin-bottom: 80px">
                <!-- <v-col cols="12" md="3" sm="12">
                    <v-row no-gutters>
                    <span class="filtrler-span">Filtrler</span>
                    </v-row>
                    <v-row no-gutters style="margin-top: 15px">
                    <span class="jynsy-span">Jynsy</span>
                    </v-row>
                    <v-checkbox 
                    class="jyns-style"
                    :ripple="false"
                    color="#212135"
                    v-model="genderModel"
                    value="erkek"
                    >
                    <template v-slot:label>
                        <div class="jyns-label-style ml-n1">Erkek</div>
                    </template>
                    </v-checkbox>
                    <v-checkbox 
                    class="jyns-style"
                    :ripple="false"
                    color="#212135"
                    v-model="genderModel"
                    value="ayal"
                    >
                    <template v-slot:label>
                        <div class="jyns-label-style ml-n1">Aýal</div>
                    </template>
                    </v-checkbox>
                    <v-checkbox 
                    class="jyns-style"
                    :ripple="false"
                    color="#212135"
                    v-model="allGender"
                    value="hemmesi"
                    @click="jynsMethodAll"
                    >
                    <template v-slot:label>
                        <div class="jyns-label-style ml-n1">Hemmesi</div>
                    </template>
                    </v-checkbox>
                    <v-divider style="margin-top: 15px; margin-bottom: 20px"/>
                    <v-row no-gutters>
                    <span class="jynsy-span">Kategoriýa</span>
                    </v-row>
                    <v-row no-gutters style="margin-top: 10px" class="nothing">
                    <v-virtual-scroll
                        :items="category"
                        height="200"
                        item-height="30"
                    >
                        <template v-slot:default="{ item }">
                        <v-checkbox 
                            :ripple="false"
                            color="#212135"
                            v-model="categoryModel"
                            :value="item.title"
                            :key="item"
                        >
                            <template v-slot:label>
                            <div class="jyns-label-style ml-n1">{{ item.title }}</div>
                            </template>
                        </v-checkbox>
                        </template>
                    </v-virtual-scroll>
                    </v-row>
                    <v-divider style="margin-top: 10px; margin-bottom: 20px"/>
                    <v-row no-gutters>
                    <span class="jynsy-span">Razmerlar</span>
                    </v-row>
                    <v-row 
                    no-gutters 
                    class="d-flex justify-space-between" 
                    style="margin-top: 10px; margin-bottom: 20px"
                    >
                    <v-chip-group
                        v-model="sizeModel"
                        active-class="deep-purple accent-4 white--text"
                        column
                        multiple
                    >
                        <div style="width: 80%; display: flex;flex-wrap: wrap;">
                        <v-chip 
                            class="size-style"
                            v-for="size in sizes"
                            :key="size"
                            :value="size"
                        >
                            <span>{{ size }}</span>
                        </v-chip>
                        </div>
                    </v-chip-group>
                    </v-row>

                </v-col> -->

                  <v-row>
                    <v-col 
                        xl="3"
                        md="4" 
                        sm="5" 
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
            </v-row>

        </v-container>
<FooterComponent />

    </v-app>
</template>

<script src="./StorePage.js"/>

<style scoped src="./StorePage.css"/>