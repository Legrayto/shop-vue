<template>
	<div class='cart'>
		<div class="cart__container _container">
			<router-link :to="{name: 'Catalog'}" class='cart__back-to-catalog'>
				<i class="cart-back__arrow fas fa-sign-in-alt fa-ls"></i>
				<div class="cart-back__text">Catalog</div>
			</router-link>
			<div class='cart__title'>Cart</div>
			<div class="cart__list">
				<CartItem
					class='cart__item'
					v-for='(cartItem, index) in cart'
					:key='cartItem.article'
					:cartItem='cartItem'
					@removeInCart='removeInCart(index)'
					@downQty='downQty(index)'
					@upQty='upQty(index)'
				/>
			</div>
		</div>
		<div class="cart__total">Total: {{totalCost}}</div>
	</div>
</template>

<script>

import CartItem from './Cart-item'
import {mapState} from 'vuex'

export default {
	name: 'cart',
	components: {
		CartItem,
	},
	computed: {
		...mapState([
			'cart'
		]),

		totalCost() {
			return this.cart.length ? this.cart.reduce((sum, item) => sum + item.price*item.qty, 0) : 0
		}
	},
	methods: {
		removeInCart(index) {
			this.$store.commit('removeInCart', index)
		},

		downQty(index) {
			this.$store.commit('downQty', index)
		},

		upQty(index) {
			this.$store.commit('upQty', index)
		}
	}
}

</script>

<style>
.cart {
	position: relative;
}
.cart__container {
	margin-bottom: 30px;
}
.cart__back-to-catalog {
	position: absolute;
	top: 0;
	left: 20px;
	padding: 20px;
	border: 2px solid #d3d3d3;
	border-radius: 4px;
	background: none;
	color: #d3d3d3;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	font-size: 24px;
}
.cart-back__arrow {
	transform: rotate(180deg);
	margin: 0 10px 0 0;
}
.cart__back-to-catalog:hover {
	background: #d3d3d3;
	color: #161a1d;
}
.cart__title {
	font-size: 48px;
	line-height: 150%;
	margin: 0 0 20px 0;
	text-align: center;
	color: #d3d3d3;
}
.cart__item:not(:last-child) {
	margin: 0 0 30px 0;
}
.cart__total {
	padding: 30px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 48px;
	background: #b1a7a6;
	color: #161a1d
}

@media (max-width:767px) {
	.cart__back-to-catalog {
		position: inherit;
		justify-content: start;
	}
	.cart-back__arrow {
		margin: 0 20px 0 0;
	}
	.cart__total {
		font-size: 40px;
	}
}
</style>