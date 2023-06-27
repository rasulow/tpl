<template>
<v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
>
  <ToolBar />
  <v-container>
    <AppBarMall />
    <SearchComponent :placeholder="$t('search.product')"/>
    <v-row no-gutters>
      <div
        style="
          margin-top: 15px;
          font-size: 16px;
          line-height: 16px;
          font-weight: 700;
          letter-spacing: normal;
          color: #212135;
        "
      >
        {{ $t('appBarMall.product') }}
      </div>
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
      
      <!-- Category -->
      <v-col cols="12" md="3" sm="12">
        <v-expansion-panels flat>
          <!-- Category -->
          <v-expansion-panel>
            <v-expansion-panel-header style="font-weight: 700; font-size: 12px">
              {{ $t('appBar.bolum') }}
              <template v-slot:actions>
                  <v-icon color="#212135" size="14">
                    $expand
                  </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list flat>
                <v-list-item-group
                  v-model="selectedItem"
                >
                  <v-list-item
                    v-for="item in category"
                    :key="item"
                    active-class="category-active-style"
                    color="#FFFFFF"
                    @click="getProducts(item.id)"
                    class="category-style"
                  >
                  <v-menu
                    open-on-hover
                    centered
                    close-on-content-click
                    offset-x
                  >
                    <template v-slot:activator="{ on }">

                      <v-list-item-content v-on="on">
                        <v-row no-gutters>
                          <div class="category-text">{{ item.name }}</div>
                          <v-spacer/>
                          <!-- <div class="category-count">{{ item.subcategories.length }}</div> -->
                          <v-icon size="16" v-if="item.subcategories.length > 0">keyboard_arrow_right</v-icon>
                        </v-row>
                      </v-list-item-content>
                    </template>
                    <v-card 
                      width="100%" 
                      color="#FFFFFF" 
                      v-if="item.subcategories.length > 0" 
                      tile
                      elevation="0"
                      class="pa-3"
                    >
                      <!-- Subcategory -->
                      <v-list flat>
                        <v-list-item-group>
                          <v-list-item
                            v-for="subItem in item.subcategories"
                            :key="subItem"
                            active-class="category-active-style"
                            color="#FFFFFF"
                            class="category-style"
                            @click="getProducts(subItem.id)"
                          >
                            <v-list-item-content>
                              <v-row no-gutters>
                                <div class="category-text">{{ subItem.name }}</div>
                                <v-spacer/>
                                <v-icon size="16" v-if="subItem.subcategories.length > 0">keyboard_arrow_right</v-icon>
                              </v-row>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-card>
                  </v-menu>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-col>

      <!-- Products -->
      <v-col cols="12" md="9" sm="12">
        <v-row style="padding-left: 50px;">
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
                style="border-radius: 3px;"
              />
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
      </v-col>
    </v-row>
  </v-container>
<FooterComponent />
</v-app>
</template>
    
<script src="./ProductsPage.js"/>

<style scoped src="./ProductsPage.css"/>