import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import SearchComponent from '@/components/main/SearchComponent'
import AppBarMall from '@/components/main/AppBarMall'
import axios from 'axios'

export default {
  data: () => ({
    selectedItem: 0,
    genderModel: [],
    categoryModel: [],
    sizeModel: [],
    allGender: false,
    jyns: ['Aýal','Erkek','Hemmesi'],
    sizes: ['38', '39', '40', '41', 'S', 'M', 'XS', 'XL'],
    category: [],
    subCategory: [],
    cards: []
  }),
  created() {
    this.getProducts(),
    this.getCategory()
  },
  methods: {
    async getCategory() {
      await axios.get('/mall/categories/')
      .then(response => {
        this.category = response.data
        this.category.unshift({name: 'Hemmesi', subcategories: []})
      })
      .catch(error => {
        console.log(error)
      })
    },
    // jynsMethodAll() {
    //   if (this.allGender){
    //     if (!this.genderModel.includes('erkek')) this.genderModel.push('erkek')
    //     if (!this.genderModel.includes('ayal')) this.genderModel.push('ayal')
    //   }
    //   if (!this.allGender){
    //     this.genderModel.pop('ayal')
    //     this.genderModel.pop('erkek')
    //   }
    // },
    
    async getProducts(category_id) {
      const params = {
        brand: this.$route.query.brand,
        store: this.$route.query.store,
        categories: category_id
      }
      await axios.get('/mall/products/', { params: params })
      .then(response => {
        this.cards = response.data.results
      })
      .catch(error => {
        console.log(error)
      })
      
    },
  },
  components: {
      ToolBar,
      FooterComponent,
      SearchComponent,
      AppBarMall
  }
} 