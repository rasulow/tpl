import ToolBar from '@/components/main/ToolBar'
    import FooterComponent from '@/components/main/FooterComponent'
    import SearchComponent from '@/components/main/SearchComponent'
    import AppBar from '@/components/main/AppBar'
    import axios from 'axios'
  
    export default{
    data () {
        return {
            about_us: 0,
            tab: null,
            expansion_data: [
              { title: 'Habarlaşmak üçin' },
              { title: 'Iş wagty' },
              { title: 'Eltip berme maglumaty' },
              { title: 'Töleg we yzyna gaýdyp almak' },
            ],
            cards: []
        }
      },

      created() {
        this.getStore(),
        this.getStoreProducts()
      },

      methods: {
        async getStore() {
          try {
            const response = await axios.get('/exhibition/stores/' + this.$route.params.id + '/')
            this.about_us = response.data
            this.expansion_data[0]['content'] = response.data.contacts
            this.expansion_data[1]['content'] = response.data.work_hours
            this.expansion_data[2]['content'] = response.data.delivery_policy
            this.expansion_data[3]['content'] = response.data.payment_policy
          }catch(e) {
            console.log(e)
          }
        },

        async getStoreProducts() {
          const params = {
            store: this.$route.params.id
          }
          try {
          const response = await axios.get('/exhibition/products/', { params: params })
          this.cards = response.data.results
        } catch(e) {
          console.log(e)
        }
        }
      },
      components: {
        ToolBar,
        FooterComponent,
        SearchComponent,
        AppBar
      },
    }
