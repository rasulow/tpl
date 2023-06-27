import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMedia from '@/components/main/AppBarMedia'
import axios from 'axios';

export default {
    data: () => ({
        fav_icon: 'mdi-heart',
        news: {}
    }),
    async created() {
        await this.getAnnouncement(),
        await this.changeIcon()
    },
    methods: {  
        async getAnnouncement() {
            await axios.get('/posts/announcements/' + this.$route.params.id)
            .then(response => {
                this.news = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        async changeIcon () {
            if (this.news.is_liked) {
                this.fav_icon = 'mdi-heart';
            } else {
                this.fav_icon = 'mdi-heart-outline';
              }
        },
        async likeDislike() {
            if (this.fav_icon == 'mdi-heart') {
                await axios.post('/posts/announcements/' + this.news.id + '/like/', { is_liked: false })
                .then(() => {
                    this.fav_icon = 'mdi-heart-outline'
                })
                .catch(error => {
                    console.log(error)
                })
            }else{
                await axios.post('/posts/announcements/' + this.news.id + '/like/', { is_liked: true })
                .then(() => {
                    this.fav_icon = 'mdi-heart'
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    },
    components: {
        ToolBar,
        FooterComponent,
        AppBarMedia,
    }
};