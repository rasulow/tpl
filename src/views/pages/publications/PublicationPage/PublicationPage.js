import ToolBar from '@/components/main/ToolBar'
  import FooterComponent from '@/components/main/FooterComponent'
  import AppBar from '@/components/main/AppBar'
  import axios from 'axios'

  export default {
    data: () => ({
        publication: {},
        mainImg: '',
        imgDialog: false,
        liked: false,
        fav_icon: '',
        comments: [],
        commentDialog: false,
        reportDialog: false,
        commentText: '',
        successAlert: false,
        reportTypes: [],
        reportModel: 0,
        reportText: ''
    }),
    async created() {
        await this.getPublication(),
        await this.changeIcon(),
        await this.getComments()
    },
    methods: {
        async getPublication() {
            await axios.get('/publications/publications/' + this.$route.params.id)
            .then(response => {
                this.publication = response.data
                this.mainImg = this.publication.images[0].path
                console.log(this.$route)
            })
            .catch(error => {
                console.log(error)
            })
        },
        changeMainImg(val) {
          this.mainImg = val
        },
        async changeIcon () {
            if (this.publication.is_liked) {
                this.fav_icon = 'mdi-heart';
            } else {
                this.fav_icon = 'mdi-heart-outline';
              }
        },
        async likeDislike() {
            if (this.fav_icon == 'mdi-heart') {
                await axios.post('/publications/publications/' + this.publication.id + '/like/', { is_liked: false })
                .then(() => {
                    this.fav_icon = 'mdi-heart-outline'
                })
                .catch(error => {
                    console.log(error)
                })
            }else{
                await axios.post('/publications/publications/' + this.publication.id + '/like/', { is_liked: true })
                .then(() => {
                    this.fav_icon = 'mdi-heart'
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        async getComments() {
            await axios.get('/publications/publications/' + this.publication.id + '/comment/')
            .then(response => {
                this.comments = response.data.results
            })
            .catch(error => {
                console.log(error)
            })
        },
        async sendComment() {
            await axios.post('/publications/publications/' + this.publication.id + '/comment/',
                {
                    text: this.commentText
                }
            )
            .then(() => {
                this.commentDialog = false
                this.successAlert = true
                this.commentText = ''
                this.getComments()
            })
            .catch(error => {
                console.log(error)
            })
        },
        async openReportDialog() {
            await axios.get('/comments/report_types/')
            .then((response) => {
                this.reportTypes = response.data.results
            })
            .catch((error) => {
                console.log(error)
            })
            this.reportDialog = true
        },
        async sendFeedback() {
            await axios.post('/publications/publications/' + this.publication.id + '/report/',
                {
                    content: this.reportText,
                    report_type: this.reportModel
                }
            )
            .then(() => {
                this.reportDialog = false
                this.successAlert = true
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