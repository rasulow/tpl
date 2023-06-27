import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import SearchComponent from '@/components/main/SearchComponent'
import AppBarMall from '@/components/main/AppBarMall'
import axios from 'axios'


export default {
  data: () => ({
    brands: []
  }),
  created(){
    this.getBrands()
  },
  methods: {
    async getBrands(){
      try{
        const response = await axios.get('/mall/brands/')
        console.log(response.data)
        this.brands = response.data
      }catch(e){
        console.log(e)
      }
    },
    goToBrand(id, name) {
      this.$router.push('/mall/brands/' + id)
      localStorage.setItem('brand', name)
    }
  },
  components: {
    ToolBar,
    FooterComponent,
    SearchComponent,
    AppBarMall
  },
}