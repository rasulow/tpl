import ToolBar from '@/components/main/ToolBar'
  import FooterComponent from '@/components/main/FooterComponent'
  import AppBar from '@/components/main/AppBar'
  import axios from 'axios'

  export default {
    watch: {
      '$route.query.category': {
        handler: function () {
          this.getPublications(),
          this.getSubcategories()
        }
      }
    },
    data: () => ({
        publications: [],
        subscriptions: [],
        subscriptionModel: null,
        subCategories: [],
        subcategoryModel: null,
        districts: [],
        districtModel: null,
        isVipModel: null
    }),
    created() {
        this.getPublications(),
        this.getSubscriptions(),
        this.getSubcategories(),
        this.getDistricts()
    },
    methods: {
        async getPublications() {
            const location = JSON.parse(localStorage.getItem('location'))
            const params = {
              category: this.$route.query.category,
              subscription: this.subscriptionModel,
              location: location.id,
              district: this.districtModel,
              is_vip: this.isVipModel
            }
            await axios.get('/publications/publications/', { params: params })
            .then(response => {
                this.publications = response.data.results
            })
            .catch(error => {
                console.log(error)       
            })
        },
        async getSubscriptions() {
          await axios.get('/commercials/subscriptions')
          .then(response => {
            this.subscriptions = response.data
          })
          .catch(error => {
            console.log(error)
          })
        },
        async getSubcategories() {
          // const params = {
          //   parent: this.$route.query.category
          // }
          await axios.get('/publications/subcategories/')
          .then(response => {
            this.subCategories = response.data
          })
          .catch(error => {
            console.log(error)
          })
        },
        async getDistricts() {
          const location = JSON.parse(localStorage.getItem('location'))
          const params = {
            location: location.id
          }
          await axios.get('/publications/districts/', { params: params })
          .then(response => {
            this.districts = response.data
          })
          .catch(error => {
            console.log(error)
          })
        }
    },
    components: {
      ToolBar,
      FooterComponent,
      AppBar,
    },
  }