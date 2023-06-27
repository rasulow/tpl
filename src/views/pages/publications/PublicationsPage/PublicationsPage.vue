<template>
<v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
>
  <ToolBar />
  <v-container height="100%">
    <AppBar />
    <div class="publications-text">Hemme bildirişler</div>

    <v-row style="margin-bottom: 120px; margin-top: 10px">
        
        <v-col cols="12" md="3">
            <v-expansion-panels flat>
                <!-- subscription filter -->
                <v-expansion-panel>
                    <v-expansion-panel-header class="jynsy-span">
                        Subscription
                        <template v-slot:actions>
                            <v-icon color="#212135" size="14">
                                $expand
                            </v-icon>
                        </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pa-0">
                        <div class="mt-n5 mb-2">
                            <v-checkbox 
                                v-for="item in subscriptions"
                                :key="item"
                                class="jyns-style"
                                :ripple="false"
                                color="#212135"
                                :value="item.id"
                                v-model="subscriptionModel"
                                @click="getPublications()"
                            >
                                <template v-slot:label>
                                    <div class="jyns-label-style ml-n1">{{ item.name }}</div>
                                </template>
                            </v-checkbox>

                            <v-checkbox 
                                class="jyns-style"
                                :ripple="false"
                                color="#212135"
                                :value="true"
                                v-model="isVipModel"
                                @click="getPublications()"
                            >
                                <template v-slot:label>
                                    <div class="jyns-label-style ml-n1">VIP</div>
                                </template>
                            </v-checkbox>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <!-- saylananlar filter -->
                <v-expansion-panel class="mt-3">
                    <v-expansion-panel-header class="jynsy-span">
                        Saýlananlar
                        <template v-slot:actions>
                            <v-icon color="#212135" size="14">
                                $expand
                            </v-icon>
                        </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pa-0">
                        <div class="mt-n5 mb-2">
                            <v-checkbox 
                                v-for="item in subCategories"
                                :key="item"
                                class="jyns-style"
                                :ripple="false"
                                color="#212135"
                                :value="item.id"
                                v-model="subcategoryModel"
                                @click="getPublications()"
                            >
                                <template v-slot:label>
                                    <div class="jyns-label-style ml-n1">{{ item.name }}</div>
                                </template>
                            </v-checkbox>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <!-- districts filter -->
                <v-expansion-panel class="mt-3">
                    <v-expansion-panel-header class="jynsy-span">
                        Districts
                        <template v-slot:actions>
                            <v-icon color="#212135" size="14">
                                $expand
                            </v-icon>
                        </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pa-0">
                        <div class="mt-n5 mb-2">
                            <v-row no-gutters style="margin-top: 10px" class="nothing">
                                <v-virtual-scroll
                                    :items="districts"
                                    max-height="300"
                                    item-height="30"
                                >
                                    <template v-slot:default="{ item }">
                                        <v-checkbox 
                                            :ripple="false"
                                            :value="item.id"
                                            :key="item"
                                            color="#212135"
                                            v-model="districtModel"
                                            @click="getPublications()"
                                        >
                                            <template v-slot:label>
                                            <div class="jyns-label-style ml-n1">{{ item.name }}</div>
                                            </template>
                                        </v-checkbox>
                                    </template>
                                </v-virtual-scroll>
                            </v-row>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            
          </v-expansion-panels>
        </v-col>
        
        <v-col cols="12" md="9">
            <v-row>
                <v-col
                    cols="12" xl="3" md="4" sm="5" xs="6"
                    v-for="item in publications"
                    :key="item"
                >
                    <v-card
                        max-width="285"
                        class="card"
                        elevation="0"
                        :to="'/publications/' + item.id"
                        :style="item.is_vip ? 'background-image: linear-gradient(to right, #ECECFE, #7951F9);' : '#FFFFFF'"
                    >
                    <div style="padding: 10px;">
                        <v-img 
                            :src="item.thumbnail" 
                            max-width="265"
                            height="190" 
                            style="border-radius: 3px;"
                        >   
                            <v-row no-gutters class="d-flex justify-end">
                                <div class="vip-style" v-if="item.is_vip">VIP</div>
                            </v-row>
                        </v-img>
                        <v-card-title class="pa-0 card-location">{{ item.location }}</v-card-title>
                        <v-card-title class="pa-0 card-name">{{ item.name }}</v-card-title>
                        <v-card-title class="pa-0 card-description">{{ item.name }}</v-card-title>
                        <v-row no-gutters style="margin-top: 10px">
                            <v-card-title class="pa-0 card-price">{{ item.price }} TMT</v-card-title>
                            <v-spacer/>
                        </v-row>
                    </div>
                        <div 
                            v-if="item.subscription != ''"
                            class="card-priority" 
                            :style="item.subscription === 'Gold' ? 'background-color: #FABB18;' 
                            :item.subscription === 'Silver' ? 'background-color: #C0C0C0;'
                            :item.subscription === 'Bronze' ? 'background-color: #AE7145;'
                            :item.is_vip ? 'background-color: #E2E3FE;'
                            :'background-color: #FFFFFF'"
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

<script src="./PublicationsPage.js"/>

<style scoped src="./PublicationsPage.css"/>