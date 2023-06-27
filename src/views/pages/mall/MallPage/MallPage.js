import ToolBar from '@/components/main/ToolBar'
  import FooterComponent from '@/components/main/FooterComponent'
  import SearchComponent from '@/components/main/SearchComponent'
  import AppBarMall from '@/components/main/AppBarMall' 
  import axios from 'axios'

  export default {
    data: () => ({
      carouselItems: [],
      stores: [],
      categories1: [],
      categories2: [],
    }),
    created(){
        this.getData(),
        this.getStores(),
        this.getCarousel()
      },
      methods: {

        async getStores(){
          try{
            const response = await axios.get("/mall/stores/")
            this.stores = response.data.results
          } catch(e){
            console.log(e)
          }
        },

        async getData(){
          try{
            const response = await axios.get('/mall/categories/')
            console.log(response.data)
            if (response.data.length <= 6) this.categories1 = response.data
            else {
              for (let i = 0; i < response.data.length; i++){
                if (i < 6) this.categories1.push(response.data[i])
                else{
                  this.categories2.push(response.data[i])
                }
              }
            }
          }catch(e){
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
      }
      },
    components: {
      ToolBar,
      FooterComponent,
      SearchComponent,
      AppBarMall
    },
  }