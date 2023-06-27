import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage/HomePage.vue'
import MallPage from '../views/pages/mall/MallPage/MallPage.vue'
import MallStore from '../views/pages/mall/StorePage/StorePage.vue'
import MallBrandsPage from '../views/pages/mall/BrandsPage/BrandsPage.vue'
import MallBrandPage from '../views/pages/mall/BrandPage/BrandPage.vue'
import MallStoresPage from '../views/pages/mall/StoresPage/StoresPage.vue'
import MallProductsPage from '../views/pages/mall/ProductsPage/ProductsPage.vue'
import MallProductPage from '../views/pages/mall/ProductPage/ProductPage.vue'
import MallBasketPage from '../views/pages/mall/BasketPage/BasketPage.vue'
import MallFavorites from '../views/pages/mall/FavoritesPage/FavoritesPage.vue'
import ExhibitionStoresPage from '../views/pages/exhibition/StoresPage/StoresPage.vue'
import ExhibitionStorePage from '../views/pages/exhibition/StorePage/StorePage.vue'
import ExhibitionProductPage from '../views/pages/exhibition/ProductPage/ProductPage.vue'
import ExhibitonFavouritePage from '../views/pages/publications/FavoritePage/FavoritePage.vue'
import PublicationAdd from '../views/pages/publications/PublicationAdd.vue'
import MediasPage from '../views/pages/posts/MediasPage/MediasPage.vue'
import MediaPage from '../views/pages/posts/MediaPage/MediaPage.vue'
import MessagesPage from '../views/pages/posts/MessagesPage/MessagesPage.vue'
import MessagePage from '../views/pages/posts/MessagePage/MessagePage.vue'
import BusinessPages from '../views/pages/posts/BusinessPages/BusinessPages.vue'
import BusinessPage from '../views/pages/posts/BusinessPage/BusinessPage.vue'
import PostFavorites from '../views/pages/posts/FavoritesPage/FavoritesPage.vue'
import PublicationsPage from '../views/pages/publications/PublicationsPage/PublicationsPage.vue'
import PublicationPage from '../views/pages/publications/PublicationPage/PublicationPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/mall',
    name: 'mall',
    component: MallPage
  },
  {
    path: '/mall/stores',
    name: 'mall-stores',
    component: MallStoresPage
  },
  {
    path: '/exhibition/stores',
    name: 'exhibition-stores',
    component: ExhibitionStoresPage
  },
  {
    path: '/exhibition/stores/:id',
    name: 'exhibition-store',
    component: ExhibitionStorePage
  },
  {
    path: '/exhibition/products/:id',
    name: 'exhibition-products',
    component: ExhibitionProductPage
  },
  {
    path: '/publications/favorites/',
    name: 'halanlarym',
    component: ExhibitonFavouritePage
  },
  {
    path: '/publications/add-publication/',
    name: 'publication-add',
    component: PublicationAdd
  },
  {
    path: '/mall/brands',
    name: 'brands',
    component: MallBrandsPage
  },
  {
    path: '/mall/brands/:id',
    name: 'brand',
    component: MallBrandPage
  },
  {
    path: '/mall/basket',
    name: 'basket',
    component: MallBasketPage
  },
  {
    path: '/mall/products',
    name: 'products',
    component: MallProductsPage
  },
  {
    path: '/mall/products/:id',
    name: 'product',
    component: MallProductPage
  },
  {
    path: '/mall/stores/:id',
    name: 'bazardukan',
    component: MallStore
  },
  {
    path: '/mall/favorites/',
    name: 'mall-favorites',
    component: MallFavorites
  },
  {
    path: '/posts/media',
    name: 'posts-media',
    component: MediasPage
  },
  {
    path: '/posts/media/:id',
    name: 'media',
    component: MediaPage
  },
  {
    path: '/posts/messages',
    name: 'messages',
    component: MessagesPage
  },
  {
    path: '/posts/messages/:id',
    name: 'message',
    component: MessagePage
  },
  {
    path: '/posts/business',
    name: 'business',
    component: BusinessPages
  },
  {
    path: '/posts/business/:id',
    name: 'business-page',
    component: BusinessPage
  },
  {
    path: '/posts/favorites',
    name: 'posts-favorites',
    component: PostFavorites
  },
  {
    path: '/publications',
    name: 'publications',
    component: PublicationsPage
  },
  {
    path: '/publications/:id',
    name: 'publication',
    component: PublicationPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
