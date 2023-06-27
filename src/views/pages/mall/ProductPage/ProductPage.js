import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMall from '@/components/main/AppBarMall'
import axios from 'axios'

export default {
    data () {
      return {
        imgDialog: false,
        productData: {},
        sizeModel: 0,
        cards: [],
        fav_icon: ''
      }
    },
    async created() {
      await this.getProductDatas(),
      await this.getSimilarProducts(),
      await this.changeIcon()
    },
    methods: {
      async getProductDatas() {
          await axios.get('/mall/products/' + this.$route.params.id)
          .then(response => {
            this.productData = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      changeMainImg(val) {
        this.productData.thumbnail = val
      },
      async getSimilarProducts() {
        await axios.get('/mall/products/', { params: { category: this.productData.category_id } })
        .then(response => {
          this.cards = response.data.results
        })
        .catch(error => {
          console.log(error)
        })
      },
      async changeIcon () {
        if (this.productData.is_liked) {
            this.fav_icon = 'mdi-heart';
        } else {
            this.fav_icon = 'mdi-heart-outline';
          }
      },
      async likeDislike() {
        if (this.fav_icon == 'mdi-heart') {
          await axios.post('/mall/products/' + this.productData.id + '/like/', { is_liked: false })
          .then(() => {
              this.fav_icon = 'mdi-heart-outline'
          })
          .catch(error => {
              console.log(error)
          })
      }else{
          await axios.post('/mall/products/' + this.productData.id + '/like/', { is_liked: true })
          .then(() => {
              this.fav_icon = 'mdi-heart'
          })
          .catch(error => {
              console.log(error)
          })
      }
      }
    },
    components: {
        ToolBar,
        FooterComponent,
        AppBarMall
    }
}