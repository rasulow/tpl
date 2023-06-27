<template>
<v-app
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
>
  <ToolBar />
  <v-container>
    <AppBarMall />
    <v-row no-gutters style="margin-top: 15px">
      <v-col cols="12" md="6" sm="12">
        <v-img 
          :src="productData.thumbnail"
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
          <v-img :src="productData.thumbnail"/>
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
                  v-for="(tinyImg, index) in productData.images"
                  :key="index"
                  :class="index == productData.images.length - 1 ? 'mx-0' : 'mr-4'"
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
        
        <v-row no-gutters style="margin-top: 20px;">
          <v-card
            color="#FFFFFF"
            width="100%"
            min-height="200"
            elevation="0"
            style="padding: 20px; cursor: pointer"
            class="store-style"
            :to="'/mall/stores/' + productData.store.id"
          >
            <v-card-title 
              class="pa-0 font-18px-style"
              style="margin-bottom: 10px;"
            >
              Satyjy
            </v-card-title>
            <div class="horizontal">
              <v-img 
                :src="productData.store.thumbnail"
                max-width="200"
                max-height="130"
                height="100%"
                style="border-radius: 5px;"
              />

              <div class="horizontal-text-div">
                <v-card-title class="pa-0 horizontal-text">{{ productData.store.name }}</v-card-title>
                <v-row no-gutters style="margin-top: 5px">
                  <v-card-title class="horizontal-text-key">Bölümi:</v-card-title>
                  <v-card-title class="horizontal-text-value">{{ productData.store.category }}</v-card-title>
                </v-row>
                <v-row no-gutters style="margin-top: 5px">
                  <v-card-title class="horizontal-text-key">Status:</v-card-title>
                  <v-card-title class="horizontal-text-value">{{ productData.store.subscription }}</v-card-title>
                </v-row>
                <v-row no-gutters style="margin-top: 5px">
                  <v-card-title class="horizontal-text-key">Satyjynyň statusy:</v-card-title>
                  <v-card-title class="horizontal-text-value">{{ productData.store.business_type }}</v-card-title>
                </v-row>
                <v-row no-gutters style="margin-top: 5px">
                  <v-card-title class="horizontal-text-key">Ýerleşýän ýeri:</v-card-title>
                  <v-card-title class="horizontal-text-value">{{ productData.store.location }}</v-card-title>
                </v-row>
              </div>
              <v-spacer/>
              <v-icon size="30" class="store-right-icon">keyboard_arrow_right</v-icon>
            </div>
          </v-card>
        </v-row>
      </v-col>
      
      
      <v-col cols="12" md="6" sm="12" style="padding: 20px">
        
        <v-row no-gutters>
          <div class="is-new-style" v-if="productData.is_new">Täze önüm</div>
          <div class="discount-style" v-if="productData.discount_percent">-{{ productData.discount_percent }}%</div>
          <v-spacer/>
          <div style="border-radius: 100%;background-color: #409DBA;height: 30px;width: 30px;">
              <v-btn icon @click="likeDislike" height="30" width="30">
                <v-icon color="#FFFFFF" size="18">{{ fav_icon }}</v-icon>
              </v-btn>
          </div>
        </v-row>
        
        <v-row no-gutters style="margin-top: 10px">
          <div class="product-name-style">{{ productData.name }}</div>
          <v-spacer/>
          <v-icon size="18" color="#212135">visibility</v-icon>
          <div class="view-count-style">{{ productData.view_count }}</div>
        </v-row>
        
        <v-row 
          no-gutters 
          style="margin-top: 10px;"
          v-if="productData.discount_percent"
        >
          <div class="old-price-style">{{ productData.stocks[0].price }}TMT</div>
        </v-row>
        
        <v-row no-gutters style="margin-top: 10px;">
          <div 
            class="product-price-style"
            v-if="productData.discount_percent"
          >
            {{ productData.stocks[0].price - productData.discount }} TMT
          </div>

          <div 
            class="product-price-style"
            v-else
          >
            {{ productData.stocks[0].price }} TMT
          </div>
          <v-spacer/>
          <v-rating
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half"
            readonly
            :value="productData.rating"
            small
          />
        </v-row>
        <v-divider style="margin: 20px 0px"/>
        <div class="font-18px-style">Ölçegi saýlaň</div>
        
        <v-row 
          no-gutters 
          class="d-flex justify-space-between" 
          style="margin-top: 10px; margin-bottom: 20px"
        >
          <v-chip-group
            v-model="sizeModel"
            active-class="deep-purple accent-4 white--text"
            column
            mandatory
          >
              <v-chip 
                class="size-style"
                v-for="size in 8"
                :key="size"
                :value="size"
              >
                <span>XL</span>
              </v-chip>
          </v-chip-group>
        </v-row>
        <v-divider style="margin: 20px 0px 30px 0"/>
        
        <v-row no-gutters class="d-flex justify-space-between" style="margin-top: 10px">
          <v-btn 
            width="49%"
            height="50"
            elevation="0"
            color="#49AB41"
            class="horizontal-buttons"
          >
            Teswir ýaz
          </v-btn>
          <v-btn 
            width="49%"
            height="50"
            elevation="0"
            color="#212135"
            class="horizontal-buttons"
          >
            Sebede goş
          </v-btn>
        </v-row>

        <v-card
          elevation="0"
          style="margin-top: 30px"
          color="#FFFFFF"
        >
          <v-card-title
            style="
              font-size: 16px;
              line-height: 16px;
              font-weight: 700;
              color: #212135;
              padding: 15px;
            "
          >
            Giňişleýin maglumat
          </v-card-title>
          <v-divider/>
          <div class="additional-info">
            <div class="additional-info-key">
              <v-card-title class="additional-info-key-text">Harydyň kody:</v-card-title>
              <v-card-title class="additional-info-key-text">Ýerleşýän ýeri:</v-card-title>
              <v-card-title class="additional-info-key-text">Öndürilen ýurdy:</v-card-title>
              <v-card-title class="additional-info-key-text">Brend:</v-card-title>
            </div>
            <div class="additional-info-value">
              <v-card-title class="additional-info-value-text">{{ productData.code }}</v-card-title>
              <v-card-title class="additional-info-value-text">Ashgabat</v-card-title>
              <v-card-title class="additional-info-value-text">{{ productData.country }}</v-card-title>
              <v-card-title class="additional-info-value-text">{{ productData.brand }}</v-card-title>
            </div>
          </div>
        </v-card>
        <v-row no-gutters style="margin-top: 20px">
          <v-img src="@/assets/icons/comment.svg" width="19" height="19" style="position: absolute"></v-img>
          <div class="ml-6 font-18px-style">7 comments</div>
        </v-row>
      </v-col>
    </v-row>

    <v-row 
      no-gutters
      class="d-flex justify-space-between"
      style="margin-top: 60px"
    >
      <v-col cols="12" md="3" sm="4" xs=12 style="margin-top: 20px">
        <div class="additional-info-title">
          Düzümi
        </div>
        <div class="additional-info-body">
          {{ productData.description }}
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="4" xs=12 style="margin-top: 20px">
        <div class="additional-info-title">
          Maglumat
        </div>
        <div class="additional-info-body">
          {{ productData.description }}
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="4" xs=12 style="margin-top: 20px">
        <div class="additional-info-title">
          Aýratynlyklary
        </div>
        <div class="additional-info-body">
          {{ productData.description }}
        </div>
      </v-col>
    </v-row>
    <v-divider style="margin: 40px 0px 80px 0px"/>

    <v-row no-gutters>
      <span style="font-size: 30px;line-height: 30px;color: #212135;font-weight: 700;letter-spacing: normal;">Meňzeş bildirişler</span>
    </v-row>
        <v-row style="margin: 10px 0px 80px 0px" no-gutters>
          <v-col xl="2" md="3" sm="6" xs="6"
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
              <v-card-title class="card-price pa-0">{{ item.stocks[0].price }}TMT</v-card-title>
            </v-card>
          </v-col>
        </v-row>
  </v-container>
<FooterComponent />
</v-app>
</template>

<script src="./ProductPage.js"/>

<style scoped src="./ProductPage.css"/>