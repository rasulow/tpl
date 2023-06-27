import ToolBar from '@/components/main/ToolBar'
import FooterComponent from '@/components/main/FooterComponent'
import AppBarMall from '@/components/main/AppBarMall'

export default {
  data () {
      return {
          step: 1,
          fullname: '',
          phone: '',
          address: '',
          checkbox: false,
          umumy_baha: 0,
          eltip_berme_baha: 0,
          jemi_baha: 0,
          cards: {
              'Nike Store': [
                  { title: 'Nike Air Max', size: 44, color: 'White', price: 635, count: 1 },
                  { title: 'Nike Small', size: 44, color: 'White', price: 635, count: 1 }
              ],
              'Puma Turkmenistan': [
                  { title: 'Puma original', size: 44, color: 'White', price: 635, count: 1 },
                  { title: 'Puma store', size: 44, color: 'White', price: 635, count: 1 }
              ]
          }
      }
  },
  methods: {
      nextWindow() {
          if (this.step == 2) this.step = 1
          else {
              this.step = 2
          }
      },
      deleteItem(key, idx) {
          this.cards[key].splice(idx, 1)
          if (this.cards[key].length == 0) {
              delete this.cards[key]
          }
      },
  },
  components: {
      ToolBar,
      FooterComponent,
      AppBarMall
  },
}