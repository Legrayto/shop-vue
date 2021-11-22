import { createStore } from 'vuex'

export default createStore({
  state: {
		isDesktop: true,
		isMobile: false,
		products: [
			{
				"image": "1.jpg",
				"name": "Prey",
				"price": 2100,
				"article": "T1",
				"available": true,
				"category": "PC"
			},
			{
				"image": "2.jpg",
				"name": "DOOM",
				"price": 3150,
				"article": "T2",
				"available": true,
				"category": "PC"
			},
			{
				"image": "3.jpg",
				"name": "Spider-Man",
				"price": 4200,
				"article": "T3",
				"available": false,
				"category": "PlayStation"
			},
			{
				"image": "4.jpg",
				"name": "Kena",
				"price": 5300,
				"article": "T4",
				"available": true,
				"category": "PlayStation"
			},
			{
				"image": "5.jpg",
				"name": "Bloodborne",
				"price": 6500,
				"article": "T5",
				"available": false,
				"category": "PlayStation"
			},
			{
				"image": "6.jpg",
				"name": "Deathloop",
				"price": 8700,
				"article": "T6",
				"available": true,
				"category": "PlayStation"
			}
		],
		cart: [],
		searchValue: '',
  },
  mutations: {
		search(state,value) {
			state.searchValue = value
		},

		addToCart(state, product) {
			if (state.cart.length) {
				let itemFind = false;
				state.cart.map(item => {
					if (item.article === product.article) {
						item.qty++;
						itemFind = true
					}
				});

				if (!itemFind) {
					state.cart.push(product);
					product.qty = 1
				}
			} else {
				state.cart.push(product);
				product.qty = 1
			}
		},

		removeInCart(state, index) {
			state.cart.splice(index, 1)
		},

		downQty(state, index) {
			state.cart[index].qty > 1 ? state.cart[index].qty-- : null
		},

		upQty(state, index) {
			state.cart[index].qty++
		}
  },
  modules: {
  }
})
