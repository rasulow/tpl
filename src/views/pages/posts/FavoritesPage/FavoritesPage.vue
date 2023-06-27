<template>
<v-app 
  id="inspire" 
  :style="{background: $vuetify.theme.themes.dark.background}"
>
  <ToolBar />
  <v-container>
    <AppBarMedia />
    <div
      style="
        margin-top: 15px;
        padding: 0;
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: normal;
        color: #212135;
      "
    >
        {{ $t('appBarMall.halanlarym') }}
    </div>

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
                        align-items: center;
                        justify-self: center;
                    "
                >
                    <v-tabs-slider color="accent" class="mt-n3" style="width: 100%; height: 1px;"></v-tabs-slider>
                    <v-tab class="tabs-item mt-n1" :ripple="false">Media</v-tab>
                    <v-tab class="tabs-item mt-n1" :ripple="false">Habarlar</v-tab>
                </v-tabs>
            </v-card-actions>
        </v-card>
    </v-row>

        <v-tabs-items v-model="tab" style="margin-top: 20px;margin-bottom: 80px;">
            <!-- Media -->
            <v-tab-item>
                <v-card color="#EEEEEE" elevation="0">
                    <v-row>
                        <v-col
                            cols="12" xl="2" sm="6" md="3" xs="12"
                            v-for="item in videos"
                            :key="item"
                        >
                        <v-card
                            max-width="285"
                            color="#EEEEEE"
                            elevation="0"
                            style="cursor: pointer"
                            :to="'/posts/media/' + item.id"
                        >
                            <v-img
                            height="160"
                            :src="item.thumbnail"
                            class="media-img"
                            >
                            <v-img
                                color="white"
                                class="media-icon"
                                src="@/assets/play.png"
                            />  
                            <div class="dark-div"></div>
                            </v-img>
                            <v-row no-gutters style="margin-top: 10px">
                            <v-card-title class="pa-0 media-name">
                                {{ item.name }}
                            </v-card-title>
                            </v-row>

                            <v-row no-gutters style="margin-top: 10px;">
                            <v-card-title class="pa-0 media-date">
                                {{ item.date_created }}
                            </v-card-title>
                            <v-spacer/>
                            <v-icon color="#212135" size="20" class="mr-1">visibility</v-icon>
                            <span class="media-view">{{ item.view_count }}</span>
                            </v-row>
                            <v-row no-gutters style="margin-top: 10px">
                            <v-card-title class="pa-0 media-channel">
                                {{ item.content_object ? item.content_object.name : 'TPL' }}
                            </v-card-title>
                            <v-spacer/>
                            <div class="media-priority-div">
                                <v-card-title class="pa-0 media-priority-name">GOLD</v-card-title>
                            </div>
                            </v-row>
                            <v-divider style="margin-top: 10px"/>
                        </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-tab-item>

            <!-- Announcements -->
            <v-tab-item>
                <v-card color="#EEEEEE" elevation="0">
                    <v-row>
                        <v-col
                        cols="12" xl="2" sm="6" md="3" xs="12"
                        v-for="item in news"
                        :key="item"
                        >
                        <v-card
                            max-width="285"
                            color="#EEEEEE"
                            elevation="0"
                            style="cursor: pointer"
                            :to="'/posts/messages/' + item.id"
                        >
                            <v-img
                            height="160"
                            :src="item.banner"
                            class="media-img"
                            />
                            <v-row no-gutters style="margin-top: 10px">
                            <v-card-title class="pa-0 news-name">
                                {{ item.name }}
                            </v-card-title>
                            </v-row>

                            <v-row no-gutters style="margin-top: 10px;">
                            <v-card-title class="pa-0 news-date">
                                {{ item.date_created }}
                            </v-card-title>
                            <v-spacer/>
                            <v-icon color="#212135" size="20" class="mr-1">visibility</v-icon>
                            <span class="news-view">123</span>
                            </v-row>
                            <v-divider style="margin-top: 10px"/>
                        </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
  </v-container>
<FooterComponent />
</v-app>
</template>

<script src="./FavoritesPage.js"/>

<style scoped src="./FavoritesPage.css"/>