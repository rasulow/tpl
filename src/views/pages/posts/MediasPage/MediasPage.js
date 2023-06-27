import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMedia from '@/components/main/AppBarMedia'
import SearchComponent from '@/components/main/SearchComponent'
import axios from 'axios'

export default {
    data: () => ({
        cards: [],
        popup: {},
        popupDialog: true
    }),
    async created() {
      this.getPopUp(),
      this.getMedia()
    },
    methods: {
        async getMedia() {
            await axios.get('/posts/videos/')
            .then(response => {
                this.cards = response.data.results
                console.log(this.cards)
            })
            .catch(error => {
              console.log(error)
            })
        },
        async getPopUp() {
            await axios.get('/commercials/popups/')
            .then(response => {
                this.popup = response.data[0]
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    components: {
        ToolBar,
        FooterComponent,
        AppBarMedia,
        SearchComponent
    }
};