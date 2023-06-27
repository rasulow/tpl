import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMedia from '@/components/main/AppBarMedia'
import axios from 'axios';

export default {
    data: () => ({
        tab: 0,
        videos: [],
        news: []
    }),
    created() {
        this.getMediaFavorites(),
        this.getAnnouncementFavorites()
    },
    methods: {
        async getMediaFavorites() {
            await axios.get('/posts/videos/favorites/')
            .then((response) => {
                this.videos = response.data.results
            })
            .catch(error => {
                console.log(error)
            })
        },
        async getAnnouncementFavorites() {
            await axios.get('/posts/announcements/favorites/')
            .then(response => {
                this.news = response.data.results
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
    }
};