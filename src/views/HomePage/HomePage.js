  import ToolBar from '@/components/main/ToolBar'
  import FooterComponent from '@/components/main/FooterComponent'
  import AppBar from '@/components/main/AppBar'
  import axios from 'axios'

  export default {
    watch: {
      '$route.query.category': {
        handler: function () {
          this.getStores()
        }
      }
    },
    data () {
      return {
        selection: 0,
        categories1: [],
        categories2: [],
        carouselItems: [],
        stores: [],
        news: [],
        news_cards: [],
        videos: [],
        video: {},
        colors: ['red', 'blue', 'green', 'yellow']
      }
    },
    created() {
      this.getStores(),
      this.getCarousel(),
      this.getPostAnnouncements(),
      this.getPostCategories(),
      this.getVideos()
    },
    methods: {
      async getStores() {
        const params = {
          category: this.$route.query.category,
          location: this.$route.query.location
        }
        try {
          const response = await axios.get('/exhibition/stores/', { params: params })
          this.stores = response.data.results
          console.log(response.data.results)
        } catch(e) {
          console.log(e)
        }
      },
      async getCarousel() {
        try {
          const response = await axios.get('/commercials/advertisements/')
          this.carouselItems = response.data
        }catch(e) {
          console.log(e)
        } 
      },
      async getPostAnnouncements(id) {
        if (id != -1) {
          await axios.get('/posts/announcements/', { params: { category: id } })
          .then(response => {
            this.news_cards = response.data.results
            this.news_cards = this.news_cards.concat(this.news_cards)
          })
          .catch(error => {
            console.log(error)
          })
        }else{
          await axios.get('/posts/announcements/')
          .then(response => {
            this.news_cards = response.data.results
            this.news_cards = this.news_cards.concat(this.news_cards)
          })
          .catch(error => {
            console.log(error)
          })
        }
      },
      async getPostCategories() {
        await axios.get('/posts/announcements/categories/')
        .then(response => {
          this.news = response.data
        })
        .catch(error => {
          console.log(error)
        })
      },
      async getVideos() {
        await axios.get('/posts/videos/')
        .then(response => {
          this.videos = response.data.results
        })
        .catch(error => {
          console.log(error)
        })
      },
    },
    components: {
      ToolBar,
      FooterComponent,
      AppBar,
    },
  }