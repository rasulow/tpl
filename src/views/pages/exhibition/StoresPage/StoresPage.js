import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import SearchComponent from '@/components/main/SearchComponent'
import AppBar from '@/components/main/AppBar'
import axios from 'axios'

export default {
    data: () => ({
        category: [],
        cards: [],
        selectedItem: 0,
        testData: ''
    }),
    created() {
        this.getCategories(),
        this.getExhibition()
    },
    methods: {
        async getCategories() {
            await axios.get('/exhibition/categories/')
            .then(response => {
                this.category = response.data
                this.category.unshift({name: 'Hemmesi', objects__count: '100'})
            })
            .catch(error => {
                console.log(error)
            })
        },
        async getExhibition(category_id) {
            const params = {
                categories: category_id
            }
            await axios.get('/exhibition/stores/', { params: params })
            .then(response => {
                this.cards = response.data.results
                console.log(params)
            })
            .catch(error => {
                console.log(error)
            })
        },
        logInput(data) {
            this.testData = data
        }
    },
    components: {
        ToolBar,
        FooterComponent,
        SearchComponent,
        AppBar
    }
};