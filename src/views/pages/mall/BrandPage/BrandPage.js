import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMall from '@/components/main/AppBarMall'
import axios from 'axios'


export default {
  data: () => ({
      brandName: '',
      brands: []
  }),
  created(){
      this.getBrandName(),
      this.getBrands()
  },
  methods: {
      getBrandName() {
          this.brandName = localStorage.getItem('brand')
      },
      async getBrands() {
          await axios.get('/mall/products/', { params: { brand: this.$route.params.id } })
          .then(response => {
              this.brands = response.data.results
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