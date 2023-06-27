<template>
        
    <v-app-bar
      dense
      flat
      height="60"
      color="#EEEEEE"
      class="pa-0"
    >
      <router-link to="/">
      <v-toolbar-title class="ml-n15" style="cursor: pointer">
        <v-img src="@/assets/icons/telekechi_logo.png" height="100%" width="280"/>
      </v-toolbar-title>
      </router-link>
      <v-spacer/>
      
      
      <v-toolbar-items>
          <v-toolbar-title 
            style="align-self: center;padding: 0;"
          >
              <v-btn
                :ripple="false"
                class="app-bar-btn"
                text
                v-on="on"
                style="text-transform: unset !important;"
                to="/posts/media"
            >
                <span class="pointer">
                  {{ $t('appBarMedia.media') }}
                </span>
              </v-btn>
          </v-toolbar-title>
            

        <v-toolbar-title
          style="align-self: center;"
        >
          <v-btn
            :ripple="false"
            class="app-bar-btn"
            text
            v-on="on"
            style="text-transform: unset !important"
            to="/posts/messages/"
          >
          <span class="pointer">
            {{ $t('appBarMedia.habarlar') }}
          </span>
          </v-btn>
        </v-toolbar-title>

        <v-toolbar-title
          style="align-self: center;"
        >
          <v-btn
            :ripple="false"
            class="app-bar-btn"
            text
            v-on="on"
            style="text-transform: unset !important"
            @click="checkToken(1)"
          >
            <span class="pointer">
              {{ $t('appBarMedia.halanlarym') }}
            </span>
          </v-btn>
        </v-toolbar-title>

        <v-toolbar-title
          style="align-self: center;"
        >
          <v-btn
            :ripple="false"
            class="app-bar-btn"
            text
            v-on="on"
            style="text-transform: unset !important"
            to="/posts/business"
          >
            <span class="pointer">
              {{ $t('appBarMedia.biznes') }}
            </span>
          </v-btn>
        </v-toolbar-title>
      </v-toolbar-items>

      <div
        @click="locationDialog = true"
        style="
          background-color: white;
          width: 40px;
          height: 40px;
          border-radius: 3px;
          cursor: pointer;
        "
        class="py-0 mx-5"
      >
        <v-img 
          src="@/assets/icons/location.svg" 
          height="20" 
          width="20"
          style="top: 25%;left: 25%;"
        />
      </div>

      <v-dialog 
        v-model="locationDialog"
        max-width="250"
        :overlay-color="'#000000'"
        :overlay-opacity="0.9"
      >
        <v-card 
          width="100%"
          style="padding: 15px"
        >
          <div class="selected-location">{{ selectedLocation.name }}</div>
          <v-divider/>
          <div class="locations-group">
            <div
            v-for="loc in locations" 
              :key="loc"
              @click="setLocation(loc)"
              class="location" 
              >
              <router-link
                :to="{ name: home, query: { location: loc.id } }" 
                style="text-decoration: none"
              >
              <span class="location-text">
              {{ loc.name }}
              </span>
            </router-link>
            </div>
          </div>
        </v-card>
      </v-dialog>

      <div
        @click="checkToken(0)"
        style="
          background-color: white;
          width: 40px;
          height: 40px;
          border-radius: 3px;
          cursor: pointer;
        "
        class="py-0 mr-n4"
      >
        <v-img 
          src="@/assets/icons/user.svg" 
          height="21" 
          width="21"
          style="top: 25%;left: 25%;"
        />

        <v-dialog 
          v-model="dialog"
          max-width="420"
          :overlay-color="'#000000'"
          :overlay-opacity="0.9"
        >
          
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card
                color="#FFFFFF"
                style="
                  padding: 35px;
                "
              >
                <v-row no-gutters>
                  <v-spacer/>
                  <v-icon 
                    class="exit-from-auth"
                    @click="dialog = false"
                  >
                    close
                  </v-icon>
                </v-row>
                <v-row no-gutters justify="center">
                  <v-card-title class="login-header pa-0">
                    Hoş geldiňiz
                  </v-card-title>
                </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 10px;">
                    <div class="modal-secondary-text">
                      Dowam etmek üçin telefon belgiňizi giriziň we agza boluň
                    </div>
                  </v-row>

                  <v-row no-gutters justify="start" style="margin-top: 30px;">
                    <v-card-title 
                      class="pa-0"
                      style="
                        font-size: 14px;
                        line-height: 14px;
                        font-weight: 700;
                        color: #212135;
                        letter-spacing: normal;
                      "
                    >
                      Telefon belgi
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 10px;">
                    <div class="phone-number-div">
                      <div class="phone-number-prefix-div">
                        <div
                          style="
                            font-size: 14px;
                            line-height: 14px;
                            font-weight: 700;
                            color: #FFFFFF;
                            letter-spacing: normal;
                          "
                        >+993</div>
                      </div>
                      <input type="tel" class="input">
                    </div>
                  </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 15px;">
                    <div
                      @click="step++"
                      style="
                        font-size: 18px;
                        line-height: 18px;
                        font-weight: 700;
                        color: #409DBA;
                        letter-spacing: normal;
                        cursor: pointer;
                      "
                    >
                      E-mail arkaly girmek
                    </div>
                  </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 20px">
                    <v-btn
                      @click="step = 3"
                      color="#212135"
                      width="100%"
                      height="55"
                      style="
                        text-transform: unset !important;
                        font-size: 18px;
                        line-height: 18px;
                        font-weight: 700;
                        letter-spacing: normal;
                      "
                    >
                      <span style="color: #FFFFFF;">
                        Dowam et
                      </span>
                    </v-btn>
                  </v-row>
              </v-card>
            </v-window-item>

            <v-window-item :value="2">
              <v-card
                color="#FFFFFF"
                style="
                  padding: 35px;
                "
              >
              <v-row no-gutters>
                  <v-spacer/>
                  <v-icon 
                    class="exit-from-auth"
                    @click="dialog = false"
                  >
                    close
                  </v-icon>
                </v-row>
                  <v-row no-gutters justify="center">
                    <v-card-title class="login-header pa-0">
                      Hoş geldiňiz
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 10px;">
                    <div class="modal-secondary-text">
                      Dowam etmek üçin elektron poçtaňyzy giriziň we agza boluň
                    </div>
                  </v-row>

                  <v-row no-gutters justify="start" style="margin-top: 30px;">
                    <v-card-title 
                      class="pa-0"
                      style="
                        font-size: 14px;
                        line-height: 14px;
                        font-weight: 700;
                        color: #212135;
                        letter-spacing: normal;
                      "
                    >
                      Elektron poçta
                    </v-card-title>
                  </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 10px;">
                    <div class="phone-number-div">
                      <input type="email" class="input" v-model="emailValue" :rules="[emailRules]" required>
                    </div>
                  </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 15px;">
                    <div
                      @click="step--"
                      style="
                        font-size: 18px;
                        line-height: 18px;
                        font-weight: 700;
                        color: #409DBA;
                        letter-spacing: normal;
                        cursor: pointer;
                      "
                    >
                      Telefon belgi arkaly girmek
                    </div>
                  </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 20px">
                    <v-btn
                      @click="emailAuth"
                      color="#212135"
                      width="100%"
                      height="55"
                      style="
                        text-transform: unset !important;
                        font-size: 18px;
                        line-height: 18px;
                        font-weight: 700;
                        letter-spacing: normal;
                      "
                    >
                      <span style="color: #FFFFFF;">
                        Dowam et
                      </span>
                    </v-btn>
                  </v-row>
              </v-card>
            </v-window-item>

            <v-window-item :value="3">
              <v-card
                color="#FFFFFF"
                style="
                  padding: 35px;
                "
              >
                <v-row no-gutters>
                  <v-spacer/>
                  <v-icon 
                    class="exit-from-auth"
                    @click="dialog = false"
                  >
                    close
                  </v-icon>
                </v-row>
                  <v-row no-gutters justify="center">
                  <v-card-title 
                    class="pa-0"
                    style="
                      font-size: 30px;
                      line-height: 30px;
                      font-weight: 700;
                      color: #212135;
                      letter-spacing: normal;
                    "
                  >
                    Tassyklamak
                  </v-card-title>
                  </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 10px;">
                    <div class="modal-secondary-text">
                      Telefon belgiňize gelen sms kody giriziň
                    </div>
                  </v-row>

                  <v-row no-gutters justify="center" style="margin-top: 30px;">
                    <v-otp-input
                      length="6"
                      type="number"
                      v-model="otpValue"
                    />
                  </v-row>

                  <v-row no-gutters justify="center" style="margin-top: 15px;">
                    <div
                      @click="step = 1"
                      style="
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                        line-height: 14px;
                        font-weight: 300;
                        color: #409DBA;
                        letter-spacing: normal;
                        cursor: pointer;
                      "
                    >
                      <v-icon size="18" class="mr-1" color="#409DBA">cached</v-icon>
                      <span>Täze kod ugrat</span>
                    </div>
                  </v-row>
                  <v-row no-gutters justify="center" style="margin-top: 20px">
                    <v-btn
                      color="#212135"
                      width="100%"
                      height="55"
                      to="/"
                      @click="otpVerification(emailValue)"
                      style="
                        text-transform: unset !important;
                        font-size: 18px;
                        line-height: 18px;
                        font-weight: 700;
                        letter-spacing: normal;
                      "
                    >
                      <span style="color: #FFFFFF;">
                        Dowam et
                      </span>
                    </v-btn>
                  </v-row>
              </v-card>
            </v-window-item>

          </v-window>
        </v-dialog>


        <v-snackbar
          v-model="successSnackbar"
          timeout="2000"
          color="white"
          width="50"
        >
          <v-row no-gutters align="center" justify="center">
            <span style="color: #212135; font-weight: 700;">Siz üstünlikli girdiňiz!!!</span>
          </v-row>
        </v-snackbar>

        <v-snackbar
          v-model="logoutSnackbar"
          timeout="2000"
          color="white"
          width="50"
        >
          <v-row no-gutters align="center" justify="center">
            <span style="color: #212135; font-weight: 700;">Siz üstünlikli çykdyňyz!!!</span>
          </v-row>
        </v-snackbar>
      </div>
    </v-app-bar>

</template>

<script>
import axios from 'axios'
import is_have from '@/utils/haveToken'
export default {
  data: () => ({
    category: [],
    dialog: false,
    locationDialog: false,
    successSnackbar: false,
    logoutSnackbar: false,
    loggedInEmail: '',
    step: 1,
    otpValue: 0,
    emailValue: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    locations: [],
    selectedLocation: JSON.parse(localStorage.getItem('location'))
  }),
  created(){
    this.emailAuth(),
    this.otpVerification(),
    this.getLocations()
  },
  methods: {
    async emailAuth() {
      await axios.post('/code/email/', { email: this.emailValue })
        .then(response => {
          console.log(response.data)
          this.step = 3
        })
          .catch(error => {
            console.log(error.response.data)
          })
    },
    async otpVerification(emailValue) {
      console.log(emailValue)
      await axios.post('/token/', { username: emailValue, code: this.otpValue })
        .then(response => {
          this.dialog = false
          this.successSnackbar = true
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('email', emailValue)
          this.loggedInEmail = emailValue
          console.log(response.data)
        })
          .catch(error => {
            console.log(error.response.data)
            this.otpValue = ''
            this.emailValue = ''  
          })
    },

    openLoginDialog() {
      const token = localStorage.getItem('token')
      if (token) {
        this.loggedInDialog = true
        this.loggedInEmail = localStorage.getItem('email')
      }else{
        this.step = 1
        this.dialog = true
      }
    },

    async getLocations() {
      await axios.get('/locations/')
      .then(response => {
        console.log(response.data)
        this.locations = response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
    setLocation (location) {
      localStorage.setItem('location', JSON.stringify(location))
      this.locationDialog = false
      this.selectedLocation = location
      this.$router.go(0)
    },
    checkToken(id) {
      if(is_have())
        {
          this.$router.push('/posts/favorites?tab=' + id)
        }else{
          this.dialog = true
        }
    }
  },
  
}
</script>

<style scoped>

.pointer {
cursor: pointer;
font-size: 16px;
font-weight: 700;
text-transform: unset !important;
letter-spacing: normal;
}

.category-title {
font-size: 18px;
line-height: 18px;
font-weight: 300;
color: #212135;
letter-spacing: normal;
padding: 0;
cursor: pointer;
}

.category-badge {
font-size: 14px;
line-height: 14px;
font-weight: 500;
color: #CB3131;
margin-left: 10px;
margin-top: 3px;
}

.app-bar-btn::before {
background-color: transparent !important;
}

.modal-secondary-text {
font-size: 16px;
line-height: 16px;
font-weight: 300;
color: #333333;
letter-spacing: normal;
max-width: 250px;
text-align: center;
}

.phone-number-div {
width: 100%;
height: 50px;
border-radius: 3px;
border: 1px solid #E8E8E8;
display: inline-flex
}

.phone-number-prefix-div {
width: 18%;
height: 50px;
border-top-left-radius: 3px;
border-bottom-left-radius: 3px;
background-color: #212135;
display: flex;
align-items: center;
justify-content: center;
}

.input {
height: 50px;
width: 100%;
border: none;
outline: none;
padding-left: 5px;
font-size: 14px;
}


.exit-from-auth {
cursor: pointer
}

.login-header {
font-size: 30px;
line-height: 30px;
font-weight: 700;
color: #212135;
letter-spacing: normal;
}

.loged-in-header {
font-size: 25px;
line-height: 25px;
font-weight: 700;
color: #212135;
letter-spacing: normal;
}



.location {
display: flex;
align-items: center;
justify-content: center;
font-size: 17px;
line-height: 17px;
font-weight: 700;
height: 50px;
cursor: pointer;
border-radius: 3px;
}

.location:hover {
background-color: #212135;
color: #FFFFFF
}

.location:hover .location-text {
color: #FFFFFF
}

.location-text {
color: #212135
}

.selected-location{
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
line-height: 20px;
font-weight: 700;
height: 50px;
color: #212135;
margin-bottom: 15px
}
</style>
