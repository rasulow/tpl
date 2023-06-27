<template>
  <v-sheet color="#212135" >
    <v-container 
      class="pa-0" 
      height="40"
    >
      <v-toolbar
        dense 
        flat 
        color="#212135" 
        dark 
        height="40"

      >
        <v-spacer class="toolbar-spacer"/>
        <v-toolbar-items
          class="v-toolbar-items"
        >
          <v-toolbar-title
            class="btn mt-1 ml-12" 
            height="40"
          >
            <router-link
              
              to="/" 
              tag="span" 
              class="pointer" 
        
            >
              {{ $t('toolbar.bildirish') }}
              <v-span 
                style="color: #cb3131; 
                margin-left: 3px"
              >
                99
              </v-span>
            </router-link>
          </v-toolbar-title>

          <v-toolbar-title
            class="btn mt-1 ml-12" 
            height="40"
          >
            <router-link
              
              to="/mall" 
              tag="span" 
              class="pointer" 
        
            >
              {{ $t('toolbar.bazar') }}
              <v-span 
                style="color: #cb3131; 
                margin-left: 3px"
              >
                99
              </v-span>
            </router-link>
          </v-toolbar-title>

          <v-toolbar-title
            class="btn mt-1 ml-12" 
            height="40"
          >
            <router-link
              
              to="/posts/media" 
              tag="span" 
              class="pointer" 
        
            >
              {{ $t('toolbar.habar') }}
              <v-span 
                style="color: #cb3131; 
                margin-left: 3px"
              >
                99
              </v-span>
            </router-link>
          </v-toolbar-title>
          
          <v-toolbar-title>
            <v-icon 
              class="sound-icon-style mt-1 ml-5"
              :color="sound_icon_color"
              @click="changeSoundIcon"
              :ripple="false"
            >
                {{ sound_icon }}</v-icon>
          </v-toolbar-title>

        </v-toolbar-items>
        <v-divider 
          vertical 
          class="mr-n1"
        />
        <v-menu 
          tile 
          absolute
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#212135"
              v-bind="attrs"
              small
              flat
              depressed
              tile
              height="40"
              class="mx-1"
              v-on="on"
            >
            {{ $t('message.language') }}
            </v-btn>
          </template>
          <v-list class="py-0" 
            color="#212135"
            dark
          >
            <v-list-item
              v-for="lang in languages"
              :key="lang"
              @click="changeButtonName(lang.abbr)"
            >
              <v-list-item-title
                style="font-size: smaller;"
              >
                {{ lang.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-divider 
          vertical 
          class="mx-n1"
        />
      </v-toolbar>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    sound_icon: 'volume_up',
    sound_icon_color: '#FFFFFF',
    buttonName: 'tm',
    expand: false,
    links: [
      { title: "Bildirişler", count: 99, link_to: '/' },
      { title: "Bazar", count: 99, link_to: '/bazar' },
      { title: "Habarlar & Media", count: 99, link_to: '/habarlar' },
    ],
    languages: [
      { name: 'Türkmençe', abbr: 'tk'  },
      { name: 'Русский', abbr: 'ru'  },
    ]
  }),
  methods: {
    changeButtonName(lang) {
      localStorage.setItem('lang', lang)
      location.reload()
      this.$i18n.locale = lang
      console.log(lang)
    },
    changeSoundIcon () {
      if (this.sound_icon == 'volume_up') {
        this.sound_icon = 'volume_off'
        this.sound_icon_color = '#BDBDBD'
      }else {
        this.sound_icon = 'volume_up'
        this.sound_icon_color = '#FFFFFF'
      }
    }
  },
};
</script>

<style scoped>

.sound-icon-style::after {
  background-color: transparent !important;
}


.btn {
  text-transform: unset !important;
}
.pointer {
  align-self: center;
  color: #BDBDBD; 
  font-size: small;
  cursor: pointer;
}

.v-toolbar-items {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  margin-right: 20px;
  margin-left: 45px;
}

.router-link-exact-active{
  color: white;
}


@media screen and (max-width: 480px){
  .toolbar-spacer {
    display: none
  }
  .v-toolbar-items {
    margin: 0
  }
  .v-application .ml-12 {
    margin: 0 !important
  }
}
</style>
