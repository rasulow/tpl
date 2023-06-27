import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMedia from '@/components/main/AppBarMedia'
import axios from 'axios';

export default {
    data: () => ({
        fav_icon: 'mdi-heart',
        cards: [],
        video: {}
    }),
    async created() {
        this.getVideo(),
        this.changeIcon()
    },
    methods: {
        async getVideo() {
          await axios.get('/posts/videos/' + this.$route.params.id + '/')
          .then(response => {
              this.video = response.data
              console.log(this.video)
          })
          .catch(error => {
            console.log(error)
          })
        },
        async changeIcon () {
            if (this.video.is_liked) {
                this.fav_icon = 'mdi-heart';
            } else {
                this.fav_icon = 'mdi-heart-outline';
              }
        },
        async likeDislike() {
            if (this.fav_icon == 'mdi-heart') {
                await axios.post('/posts/videos/' + this.video.id + '/like/', { is_liked: false })
                .then(() => {
                    this.fav_icon = 'mdi-heart-outline'
                })
                .catch(error => {
                    console.log(error)
                })
            }else{
                await axios.post('/posts/videos/' + this.video.id + '/like/', { is_liked: true })
                .then(() => {
                    this.fav_icon = 'mdi-heart'
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        goToStore(id, type){
            console.log(id, type)
            if (type === 'mall') {
                this.$router.push('/mall/stores/' + id)
            }
            if (type === 'exhibition') {
                this.$router.push('/exhibition/stores/' + id)
            }

        }
    },
    components: {
        ToolBar,
        FooterComponent,
        AppBarMedia,
    }
};