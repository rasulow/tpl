import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMedia from '@/components/main/AppBarMedia'
import SearchComponent from '@/components/main/SearchComponent'
import axios from 'axios'

export default {
    data: () => ({
        cards: [],
        category: [],
        selectedItem: 0
    }),
    created() {
        this.getBusiness(),
        this.getCategory()
    },
    methods: {
        async getBusiness(category_id) {
            const location = JSON.parse(localStorage.getItem('location'))
            const params = {
                category: category_id,
                location: location.id
            }
            await axios.get('/posts/business_accounts/', { params: params })
            .then(response => {
                this.cards = response.data.results
            })
            .catch(error => {
                console.log(error)
            })
        },
        async getCategory() {
            await axios.get('/posts/business_accounts/categories/')
            .then(response => {
                this.category = response.data
                this.category.unshift({name: 'Hemmesi', objects__count: '100'})
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