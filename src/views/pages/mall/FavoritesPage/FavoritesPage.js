import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMall from '@/components/main/AppBarMall'
import axios from 'axios'

export default {
  data: () => ({
    cards: []
  }),
  created(){
    this.getFavorites()
  },
  methods: {
    async getFavorites() {
        await axios.get('/mall/products/favorites/')
        .then(response => {
            this.cards = response.data.results
        })
        .catch(error => {
            console.log(error)
        })
    }
  },
  components: {
    ToolBar,
    FooterComponent,
    AppBarMall
  },
}