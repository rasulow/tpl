import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBar from '@/components/main/AppBar'
import axios from 'axios'

export default {
data () {
    return {
        loading: false,
        tab: 0,
        cards: [],
        toleg_card: [
          { 
            title1: 'Dükanyň 3 aýlyk kärende tölegi',
            title2: '100 TMT',
            title3: '04.11.2023 | 17:00 çenli'
          },
          { 
            title1: 'Dükanyň 3 aýlyk kärende tölegi',
            title2: '100 TMT',
            title3: '04.11.2023 | 17:00 çenli'
          },
          { 
            title1: 'Dükanyň 3 aýlyk kärende tölegi',
            title2: '100 TMT',
            title3: '04.11.2023 | 17:00 çenli'
          },
        ],
        toleg_taryh_card: [
          { 
            info: 'Dükanyň 3 aýlyk kärende tölegi',
            price: '100 TMT',
            date: '04.11.2023 | 17:00 çenli',
            store: 'Nike Store',
            location: 'Aşgabat',
            status: 0,
            status_text: 'Töleg geçmedi'
          },
          { 
            info: 'Dükanyň 3 aýlyk kärende tölegi',
            price: '100 TMT',
            date: '04.11.2023 | 17:00 çenli',
            store: 'Nike Store',
            location: 'Aşgabat',
            status: 1,
            status_text: 'Töleg geçdi'
          },
          { 
            info: 'Dükanyň 3 aýlyk kärende tölegi',
            price: '100 TMT',
            date: '04.11.2023 | 17:00 çenli',
            store: 'Nike Store',
            location: 'Aşgabat',
            status: 0,
            status_text: 'Töleg geçmedi'
          },
        ],
        input_comments: [
          {
            code: 'KEZ56EG',
            datetime: '16.11.2023 | 16:33',
            comment: 'Bolýan ýeri näçe dost, oňuşsaň göni barjak'
          },
          {
            code: 'KEZ56EG',
            datetime: '16.11.2023 | 16:33',
            comment: 'Bolýan ýeri näçe dost, oňuşsaň göni barjak'
          },
          {
            code: 'KEZ56EG',
            datetime: '16.11.2023 | 16:33',
            comment: 'Bolýan ýeri näçe dost, oňuşsaň göni barjak'
          },
        ],
        email: localStorage.getItem('email'),
        categoryDialog: false,
        category: []
      }
    },
  watch: {
    '$route.query.tab': {
      handler: function() {
        this.getTab()
      }
    }
  },
  components: {
    ToolBar,
    FooterComponent,
    AppBar
  },
  created() {
    this.getTab(),
    this.getFavorites()
  },
  methods: {
    async getFavorites() {
      await axios.get('/publications/publications/favorites/')
        .then(response => {
          this.cards = response.data.results
        })
        .catch(error => {
          console.log(error)
        })
    },
    async getTab() {
      if (this.$route.query.tab == '0'){
        this.tab = 0
      }
      if (this.$route.query.tab == '1'){
        this.tab = 1
      }
      if (this.$route.query.tab == '2'){
        this.tab = 2
      }
    },
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.$router.push('/')
    },
    async openCatDialog() {
      this.categoryDialog = !this.categoryDialog
      this.loading = !this.loading
      await axios.get('/publications/categories/')
      .then(response => {
        this.category = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}