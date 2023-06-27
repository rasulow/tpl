<template>
<v-app 
    id="inspire" 
    :style="{background: $vuetify.theme.themes.dark.background}"
>
<ToolBar />
    <v-container>
      <AppBarMedia class="mt-4"/>
      <v-card
        elevation="0"
        width="100%"
        height="360"
        class="mt-4"
      >
        <v-img 
          src="@/assets/images/news_img1.png" 
          height="300" 
          width="100%"
          style="border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;"
        />
        <v-row no-gutters class="pa-3 d-flex align-center" style="height: 60px">
          <v-spacer/>
          <v-btn 
            color="#797979" 
            min-width="250" 
            class="report-btn" 
            @click="openReportDialog"
          >
            Nägilelik bildir
          </v-btn>
        </v-row>
      </v-card>
      <v-card style="margin-top: 20px; margin-bottom: 60px;" elevation="0">
        <v-row no-gutters>
          <v-col cols="12" md="6" sm="12" style="padding: 30px">
            <v-row no-gutters>
              <v-card-title class="business-name">{{ business.name }}</v-card-title>
              <v-spacer/>
              <v-icon color="#212135" size="20" class="mr-1">visibility</v-icon>
              <span class="business-view">{{ business.view_count }}</span>
            </v-row>
            <v-card-title class="business-subtitle">Hyzmat beriji</v-card-title>
            <v-divider style="margin-top: 10px"/>
            <v-card-title class="super-sub-title">Iş görnüşi</v-card-title>
            <v-card-title class="business-description">{{ business.description }}</v-card-title>
          </v-col>
          <v-col cols="12" md="6" sm="12" style="padding: 30px">
            <v-expansion-panels flat>
                <v-expansion-panel>
                  <v-expansion-panel-header style="font-weight: 700; font-size: 16px">
                    Giňişleýin maglumat
                    <template v-slot:actions>
                      <v-icon color="#212135" size="14">
                        $expand
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row no-gutters>
                      <v-card-title class="additional-info-key">Telefon belgi:</v-card-title>
                      <v-card-title class="additional-info-value">{{ business.phone }}</v-card-title>
                    </v-row>
                    <v-row no-gutters style="margin-top: 10px">
                      <v-card-title class="additional-info-key">Ýerleşýän ýeri:</v-card-title>
                      <v-card-title class="additional-info-value">{{ business.location }}</v-card-title>
                    </v-row>
                    <v-row no-gutters style="margin-top: 10px">
                      <v-card-title class="additional-info-key">Salgysy:</v-card-title>
                      <v-card-title class="additional-info-value">{{ business.address }}</v-card-title>
                    </v-row>
                    <v-row no-gutters style="margin-top: 10px">
                      <v-card-title class="additional-info-key">Bölümi:</v-card-title>
                      <v-card-title class="additional-info-value">{{ business.category }}</v-card-title>
                    </v-row>
                    <v-row no-gutters style="margin-top: 10px">
                      <v-card-title class="additional-info-key">Websaýt:</v-card-title>
                      <v-card-title class="additional-info-value"><a>{{ business.link }}</a></v-card-title>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
          </v-col>
        </v-row>
      </v-card>

      <!-- Report dialog -->
      <v-dialog 
        v-model="reportDialog"
        max-width="400"
        :overlay-color="'#000000'"
        :overlay-opacity="0.9"
      >
        <v-card 
          color="#FFFFFF"
          style="padding: 30px"
        >
          <v-select
            label="Report type"
            :items="reportTypes"
            v-model="reportModel"
            item-text="name"
            item-value="id"
            persistent-hint
            single-line
            outlined
          />
          <v-textarea
            v-model="reportText"
            outlined
            label="Report text"
          />
          <v-btn 
            width="100%" 
            color="#212135" 
            height="50"
            style="color: #FFFFFF;font-size: 18px; font-weight: 700;"
            @click="sendFeedback"
          >
            Send
          </v-btn>
        </v-card>
      </v-dialog>

      <v-snackbar
        v-model="successSnackbar"
        timeout="2000"
        color="white"
        top
        :width="250"
      >
        <div 
          class="d-flex align-center justify-center"
          style="font-weight: 700; color: #212135;"
        >
          Üstünlikli ugradyldy
        </div>
      </v-snackbar>
    </v-container>
<FooterComponent />
</v-app>
</template>

<script src="./BusinessPage.js"/>

<style scoped src="./BusinessPage.css"/>