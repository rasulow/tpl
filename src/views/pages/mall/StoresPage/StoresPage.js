import ToolBar from '@/components/main/ToolBar'
    import FooterComponent from '@/components/main/FooterComponent'
    import SearchComponent from '@/components/main/SearchComponent'
    import AppBarMall from '@/components/main/AppBarMall'
    import axios from 'axios'
  
    export default {
      data: () => ({
        stores: [],
        selectedItem: 0,
        category: []
      }),
      created(){
        this.getCategory(),
        this.getStores()
      },
      methods: {
        async getStores(category_id){
          const location = JSON.parse(localStorage.getItem('location'))
          if (!category_id) {
            category_id = this.$route.query.category
            console.log(category_id)
          }
          const params = { 
            categories: category_id,
            location: location.id
          }
          await axios.get('/mall/stores/', { params: params })
          .then(response => {
            this.stores = response.data.results
          })
          .catch(error => {
            console.log(error)
          })
        },
        async getCategory(){
          await axios.get('/mall/categories/')
          .then(response => {
            this.category = response.data
            this.category.unshift({name: 'Hemmesi'})

          })
          .catch(error => {
            console.log(error)
          })
        }
      },
      components: {
        ToolBar,
        FooterComponent,
        SearchComponent,
        AppBarMall
      },
    }