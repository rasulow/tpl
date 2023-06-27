import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMedia from '@/components/main/AppBarMedia'
import axios from 'axios';

export default {
    data: () => ({
        reportModel: 0,
        business: {},
        reportDialog: false,
        reportTypes: [],
        reportText: '',
        successSnackbar: false
    }),
    created() {
        this.getBusiness()
    },
    methods: {
        async getBusiness() {
            await axios.get('/posts/business_accounts/' + this.$route.params.id)
            .then(response => {
                this.business = response.data
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
            await axios.post('/posts/business_accounts/' + this.business.id + '/report/',
                {
                    content: this.reportText,
                    report_type: this.reportModel
                }
            )
            .then(() => {
                console.log()
                this.reportDialog = false
                this.successSnackbar = true
            })
            .catch(error => {
                console.log(error)
            })

        }
    },
    components: {
        ToolBar,
        FooterComponent,
        AppBarMedia
    }
};