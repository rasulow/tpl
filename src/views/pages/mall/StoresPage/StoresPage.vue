<template>
    <v-app 
      id="inspire" 
      :style="{background: $vuetify.theme.themes.dark.background}"
    >
      <ToolBar />
      <v-container
        style="margin-bottom: 80px;"
      >
        <AppBarMall />
        <SearchComponent :placeholder="$t('search.store')"/>
        <div 
          style="font-size: 16px;font-weight: 700;color: #212135;"
        >
          <span>
            {{ $t('message.dukanlar') }}
          </span>
        </div>
  
        <v-row style="margin-bottom: 60px;">
          
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
                      >
                        <v-list-item-content
                          @click="getStores(item.id)"
                        >
                          <v-row no-gutters class="d-flex align-center">
                            <div class="category-text">{{ item.name }}</div>
                            <v-spacer/>
                            <!-- <div class="category-count">{{ item.subcategories }}</div> -->
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          
          
          <v-col cols="12" md="9" sm="12">
            <v-row>
              <v-col  
                xl="3"
                md="4" 
                sm="5" 
                xs="6"
                v-for="card in stores"
                :key="card"
              >
                <v-card
                  class="card mx-auto"
                  max-width="285"
                  
                  :to="'/mall/stores/' + card.id"
                >
                  <v-img
                    :src="card.thumbnail"
                    height="190"
                    width="100%"
                  ></v-img>

                  <v-card-title
                    class="card-title"
                  >
                    {{ card.name }}
                  </v-card-title>
                
                  <v-card-subtitle
                    class="card-subtitle"
                  >
                    {{ card.description }}
                  </v-card-subtitle>
                
                  <div 
                    class="card-priority" 
                    :style="card.subscription === 'Gold' ? 'background-color: #FABB18;' 
                    :card.subscription === 'Silver' ? 'background-color: #C0C0C0;'
                    :'background-color: #AE7145;'
                  "
                  >
                    <span class="card-priority-text">{{ card.subscription }}</span>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-container>
      
      
      <FooterComponent />
    </v-app>
  </template>
  
  <script src="./StoresPage.js"/>
  
  <style scoped src="./StoresPage.css"/>
  