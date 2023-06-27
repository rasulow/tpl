import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBar from '@/components/main/AppBar'
import axios from 'axios'

export default {
data () {
    return {
        imgDialog: false,
        tab: null,
        productDatas: {},
        cards: [
          { subtitle: 'Nike Store', title: 'Nike Air Max', price: '635 TMT' },
          { subtitle: 'Nike Store', title: 'Nike Air Max', price: '635 TMT' },
          { subtitle: 'Nike Store', title: 'Nike Air Max', price: '635 TMT' },
          { subtitle: 'Nike Store', title: 'Nike Air Max', price: '635 TMT' },
          
        ]
      }
    },

    created () {
      this.getProduct()
    },

    methods: {
      async getProduct() {
        try {
          const response = await axios.get('/exhibition/products/' + this.$route.params.id + '/')
          this.productDatas = response.data
          console.log(response.data)
        }catch(error){
          console.log(error)
        }
      },

      changeMainImg (img) {
        this.productDatas.thumbnail = img
      }
    },

  components: {
    ToolBar,
    FooterComponent,
    AppBar
  },
}