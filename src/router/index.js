import { createRouter, createWebHashHistory } from 'vue-router'
import Catalog from '../components/catalog/Catalog.vue'
import Cart from '../components/cart/Cart.vue'
import MainPage from '../components/Main-page.vue'

const routes = [
	{
    path: '/',
    name: 'Main-page',
    component: MainPage
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
		props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
