<template>
  <v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
  >
    <ToolBar />
    <v-container style="margin-bottom: 80px;">
      <AppBar />
      
      <!-- Search -->
      <SearchComponent :placeholder="$t('search.store')" @recieveData="logInput"/>

      <div class="business-text">{{ $t('message.sergiDukan') }}</div>
      <v-row style="margin-top: 1px">
        
        <v-col cols="12" md="3">
          <v-expansion-panels flat>
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
                
                <v-list-item-group
                  v-model="selectedItem"
                >
                  <v-list-item
                    v-for="item in category"
                    :key="item"
                  >
                    <v-list-item-content
                      @click="getExhibition(item.id)"
                    >
                      <v-row no-gutters class="d-flex align-center">
                        <div class="category-text">{{ item.name }}</div>
                        <v-spacer/>
                        <div class="category-count">{{ item.objects__count }}</div>
                        <v-icon size="16">keyboard_arrow_right</v-icon>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        
        <v-col cols="12" md="9">
            <v-row>
                <v-col cols="12" xl="3" md="4" sm="5" xs="6"
                    v-for="item in cards"
                    :key="item"
                >
                <v-card
                    class="card mx-auto"
                    max-width="285"
                    :to="'/exhibition/stores/' +  item.id"
                  >
                    <v-img
                      :src="item.thumbnail"
                      height="190"
                      width="100%"
                    />

                    <v-card-title
                      class="card-title"
                    >
                      {{ item.name }}
                    </v-card-title>
                  
                    <v-card-subtitle
                      class="card-subtitle"
                    >
                      {{ item.description }}
                    </v-card-subtitle>
                  
                    <div 
                      class="card-priority" 
                      :style="item.subscription === 'Gold' ? 'background-color: #FABB18;' 
                      :item.subscription === 'Silver' ? 'background-color: #C0C0C0;'
                      :'background-color: #AE7145;'
                    "
                    >
                      <span class="card-priority-text">{{ item.subscription }}</span>
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