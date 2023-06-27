import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMedia from '@/components/main/AppBarMedia'
import SearchComponent from '@/components/main/SearchComponent'
import axios from 'axios'

export default {
    data: () => ({
        cards: []
    }),
    created() {
        this.getAnnouncements()
    },
    methods: {
        async getAnnouncements() {
            await axios.get('/posts/announcements/')
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
        AppBarMedia,
        SearchComponent
    }
};