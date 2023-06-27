<template>
  <v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
  >
    <ToolBar />
    <v-container style="margin-bottom: 80px;">
      <AppBarMedia />
      <SearchComponent />
      <div class="business-text">Biznes sahypalar</div>
      <v-row style="margin-top: 20px">
        
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
                      @click="getBusiness(item.id)"
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
                        max-width="285"
                        elevation="0"
                        style="cursor: pointer"
                        :to="'/posts/business/' + item.id"
                    >
                        <div style="padding: 10px">
                            <v-img 
                                :src="item.thumbnail"
                                width="265"
                                height="200"
                                style="border-radius: 3px;"
                            />
                            <v-card-title class="card-category pa-0">{{ item.category ? item.category : 'Some category' }}</v-card-title>
                            <v-card-title class="card-name pa-0">{{ item.name }}</v-card-title>
                        </div>
                        <div 
                            class="card-priority" 
                            :style="item.subscription === 'Gold' ? 'background-color: #FABB18;' 
                            :item.subscription === 'Silver' ? 'background-color: #C0C0C0;'
                            :'background-color: #AE7145;'
                            "
                            >
                                {{ item.subscription }}
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

<script src="./BusinessPages.js"/>
<style scoped src="./BusinessPages.css"/>