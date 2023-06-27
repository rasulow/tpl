<template>

<v-app 
      id="inspire" 
      :style="{background: $vuetify.theme.themes.dark.background}"
    >

        <ToolBar />
        <v-container class="pb-0">
          <AppBar />
        </v-container>

        <v-container 
          class="py-0" 
          style="
            margin-top: 30px;
            margin-bottom: 72px;"
        >
          <span
            style="
              font-size: 30px;
              line-height: 30px;
              font-weight: 700;
              color: #212135;
            "
          >
            Bildiriş goş
          </span>

          <v-card
            height="1269"
            width="1199"
            color="#FFFFFF"
            elevation="0"
            style="
              margin-top: 20px;
              padding: 20px;
            "
          >
            <v-row no-gutters>

              <v-col  md="4" sm="4"
                style="padding-right: 10px;"
              >
                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Marka
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      placeholder="Placeholder" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>

                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Reňki
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      placeholder="Ak" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>

                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Hereketlendiriji göwrümi
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="2.4" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>

                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Vin kod
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="Optima" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>
              </v-col>

              <v-col  md="4" sm="4" style="padding: 0 10px 0 10px;">
                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Model
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="Optima" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>

                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Menzil hasaplaýjy
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="Kilometr" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>

                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Tizligi geçiriji
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="Awtomat" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>

                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Ýeri
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="Aşgabat" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>
              </v-col>

              <v-col  md="4" sm="4" style="padding-left: 10px;">
                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Ýyly
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="2017" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>

                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Geçen menzili
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="100000" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>

                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Ýagdaýy
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="Täze" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>

                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Raýon
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-select 
                      :menu-props="{ style: {fontSize: '14px'} }"
                      placeholder="Parahat 2/1"
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                      append-icon="expand_more"
                    />
                  </v-row>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-switch
                class="switch-style"
                v-model="switch1"
                inset
                :ripple="false"
                color="#212135"
              >
                <template v-slot:label>
                  <span class="switch__label">Kredit berýän</span>
                </template>
              </v-switch>
              <v-switch
                v-model="switch2"
                inset
                style="margin-left: 36px"
                :ripple="false"
                color="#212135"
              >
                <template v-slot:label>
                  <span class="switch__label">Obmen edýän</span>
                </template>
              </v-switch>
            </v-row>

            <v-row no-gutters style="margin-top: 20px;">
              <v-col  md="4" sm="4"
                style="padding-right: 10px;"
              >
                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Bahasy
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-text-field 
                      placeholder="23000" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                    />
                  </v-row>
                </v-col>

                <v-col  md="4" sm="4"
                  style="padding-left: 10px;padding-right: 10px"
                >
                  <v-row no-gutters>
                    <v-card-title class="titles pa-0">
                      Telefon belgi
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters>
                    <v-text-field 
                      placeholder="+993" 
                      outlined
                      height="50"
                      width="100%"
                      color="#A2A2A2"
                      class="selects"
                    />
                  </v-row>
                </v-col>
            </v-row>

            <v-row no-gutters style="margin-top: 20px;">
              <v-card-title class="titles pa-0">
                Goşmaça
              </v-card-title>
            </v-row>
            <v-row no-gutters style="margin-top: 10px;">
              <v-col md="8" sm="8" style="padding-right: 10px;">
                <v-textarea 
                  full-width 
                  height="130" 
                  outlined 
                  color="#E8E8E8"
                  placeholder="230000"
                />
              </v-col>
            </v-row>

            <v-row no-gutters style="margin-top: 20px;">
              <v-card-title class="titles pa-0">
                Suratlary saýlaň
              </v-card-title>
            </v-row>
            <v-row no-gutters style="margin-top: 10px;" @click="openFileUpload">
              <v-col md="8" sm="8" style="padding-right: 10px;">
                <div @click="openFileInput" class="file-upload">

                  <span 
                    style="
                      position: absolute; 
                      top: 45%;
                      left: 45%;
                      color: #409DBA;
                      font-size: 14px;
                      line-height: 14px;
                      font-weight: 300;
                      letter-spacing: normal;
                    "
                  >
                    Suratlary saýlaň
                  </span>
                </div>
                <input ref="fileInput" type="file" multiple  hidden @change="onFileChange" />
              </v-col>
            </v-row>
            <v-checkbox v-model="checkbox" :ripple="false" color="#212135">
              <template v-slot:label>
                <div>
                  <span 
                    style="
                      color: #212135;
                      font-size: 14px;
                      line-height: 14px;
                      letter-spacing: normal;
                      font-weight: 300
                    "
                  > 
                    Bildiriş goşmak we düzgünleri bilen
                  </span>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <a
                        target="_blank"
                        href="https://vuetifyjs.com"
                        @click.stop
                        v-on="on"
                        style="
                          color: #409DBA;
                          font-size: 14px;
                          line-height: 14px;
                          letter-spacing: normal;
                          font-weight: 300
                        "
                      >
                        tasnyşdym
                      </a>
                    </template>
                    Opens in new window
                  </v-tooltip>
                  <br>
                  <span 
                    style="
                      color: #212135;
                      font-size: 14px;
                      line-height: 14px;
                      letter-spacing: normal;
                      font-weight: 300;
                    "
                  >
                    we kabul etdim
                  </span>
                </div>
              </template>
            </v-checkbox>

            
          </v-card>
        </v-container>
      <FooterComponent />
</v-app>

</template>

<script>
    import ToolBar from '@/components/main/ToolBar'
    import FooterComponent from '@/components/main/FooterComponent'
    import AppBar from '@/components/main/AppBar'

    export default {
      data () {
        return {
          tab: 2,
          files: [],
        }
      },
      methods: {
        openFileInput() {
          this.$refs.fileInput.click();
        },
       async onFileChange(event) {
          const toBase64 = file => new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = error => reject(error);
          })
          console.log(event.target.files); // You can handle the file(s) here
          let files =  event.target.files
          for(let i = 0; i< files.length; i++){
            console.log(await toBase64(files[i]))
            this.files.push(await toBase64(files[i]))
          }
        },
      },
        components: {
        ToolBar,
        FooterComponent,
        AppBar
      },
    }
</script>

<style scoped>
.tabs-item {
    text-transform: unset !important;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    height: 100%;
    padding: 0;
    margin-right: 30px;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
  }

  .v-tab {
    min-width: unset;
  }
.tabs-item::before {
  background-color: transparent !important;
}

.bilidiris_gos_btn {
    align-items: center;
    justify-content: center;
    background-color: #212135;
    border-radius: 3px;
    font-size: 15px;
    line-height: 15px;
    color: #FFFFFF;
    text-transform: unset !important;
    letter-spacing: normal;
    width: 200px;
    height: 40px;
    margin-bottom: 8px;
    margin-right: 5px;
    display: block;
}

.bilidiris_gos_btn_neg {
  display: none;
}


.logout_btn {
    align-items: center;
    justify-content: center;
    background-color: #CB3131;
    border-radius: 3px;
    font-size: 15px;
    line-height: 15px;
    color: #FFFFFF;
    text-transform: unset !important;
    letter-spacing: normal;
    width: 200px;
    height: 40px;
    margin-bottom: 8px;
}

.titles {
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: #212135;
  letter-spacing: normal;
}

.selects {
  margin-top: 10px;
}


.switch__label {
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: #212135;
  letter-spacing: normal;
}


.file-upload {
  cursor: pointer;
  border: 1.5px dashed #406DBA;
  display: inline-block;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  width: 100%;
  height: 150px;
  position: relative
}

.file-upload:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>