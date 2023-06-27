import ToolBar from '@/components/main/ToolBar'
    import FooterComponent from '@/components/main/FooterComponent'
    import SearchComponent from '@/components/main/SearchComponent'
    import AppBarMall from '@/components/main/AppBarMall'
    import axios from 'axios'

    export default {
        data () {
            return {
                storeAbout: {},
                expansion_data: [
                    { title: 'Habarlaşmak üçin' },
                    { title: 'Iş wagty' },
                    { title: 'Eltip berme maglumaty' },
                    { title: 'Töleg we yzyna gaýdyp almak' },
                ],
                jyns: ['Aýal','Erkek','Hemmesi'],
                sizes: ['38', '39', '40', '41', 'S', 'M', 'XS', 'XL'],
                category: [
                    { title: 'Aýakgap' },
                    { title: 'Gyşky eşik' },
                    { title: 'Futbolka'}, 
                    { title: 'Jeans'}, 
                    { title: 'Iýmit we kulinariýa'}, 
                    { title: 'Hojalyk öý esbaplary'}, 
                    { title: 'Kompýuterler'},
                    { title: 'Aýakgap'}, 
                    { title: 'Gyşky eşik'}, 
                    { title: 'Futbolka'}, 
                    { title: 'Jeans'}, 
                    { title: 'Iýmit we kulinariýa'}, 
                    { title: 'Hojalyk öý esbaplary'}, 
                    { title: 'Kompýuterler'}
                ],
                genderModel: [],
                categoryModel: [],
                sizeModel: [],
                allGender: false,
                cards: []
            }
        },
        created () {
            this.getStoreAbout(),
            this.getProducts()
        },
        methods: {
            jynsMethodAll() {
                if (this.allGender){
                if (!this.genderModel.includes('erkek')) this.genderModel.push('erkek')
                if (!this.genderModel.includes('ayal')) this.genderModel.push('ayal')
                }
                if (!this.allGender){
                this.genderModel.pop('ayal')
                this.genderModel.pop('erkek')
                }
            },
            async getStoreAbout() {
                await axios.get('/mall/stores/' + this.$route.params.id + '/')
                .then(response => {
                    this.storeAbout = response.data
                    this.expansion_data[0]['content'] = response.data.contacts
                    this.expansion_data[1]['content'] = response.data.work_hours
                    this.expansion_data[2]['content'] = response.data.delivery_policy
                    this.expansion_data[3]['content'] = response.data.payment_policy
                })
                .catch(error => {
                    console.log(error)
                })
            },
            async getProducts() {
                const params = {
                    store: this.$route.params.id
                }
                await axios.get('/mall/products/', { params: params })
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
            SearchComponent,
            AppBarMall
        }
    }