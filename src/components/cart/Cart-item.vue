<template>
	<div class='cart-item'>
		<div  class='cart-item__title'>{{cartItem.name}}</div>
		<div class="cart-item__body">
			<div class="cart-item__image">
				<img :src="require('../../assets/images/' + cartItem.image)" alt="">
			</div>
			<div class="cart-item__content">
				<div  class='cart-item__qty qty'>
					<div class='qty__title'>Qty</div>
					<div class='qty__body'>
						<div class='qty__btn' @click='downQty'>-</div>
						<div class='qty__text'>{{cartItem.qty}}</div>
						<div class='qty__btn' @click='upQty'>+</div>
					</div>
				</div>
				<div  class='cart-item__price'>Price: {{price}}</div>
				<button  class='cart-item__btn _btn-1' @click='removeInCart'>Delete</button>
						</div>
			</div>
	</div>
</template>

<script>

export default {
	name: 'cart-item',
	props: ['cartItem'],
	components: {},
	methods: {
		removeInCart() {
			this.$emit('removeInCart')
		},

		downQty() {
			this.$emit('downQty')
		},

		upQty() {
			this.$emit('upQty')
		}
	},
	computed: {
		price() {
			return this.cartItem.price * this.cartItem.qty
		}
	}
}

</script>

<style>
.cart-item {
	padding: 20px;
	border: 5px solid #d3d3d3;
	border-radius: 5px
}
.cart-item__title {
	font-size: 28px;
	margin: 0 0 30px 0;
}
.cart-item__body {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.cart-item__content {
	max-width: 600px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.cart-item__image {
	width: 30%;
	text-align: center;
}
.cart-item__image img {
	height: 200px;
}
.cart-item__qty {
}
.qty {
}
.qty__title {
	font-size: 22px;
	margin: 0 0 20px 0;
	text-align: center;
}
.qty__body {
	display: flex;
	align-items: center;
}
.qty__btn {
	width: 25px;
	height: 25px;
	font-size: 16px;
	background: #d3d3d3;
	color: #161a1d;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
.qty__btn:hover {
	background: #aaaaaa
}
.qty__text {
	font-size: 20px;
	margin: 0 20px 0;
}
.cart-item__price {
	font-size: 30px;
}
.cart-item__btn {
	font-size: 18px;
}

@media (max-width:767px) {
	.cart-item {
		position: relative;
	}
	.cart-item__content {
		max-width: inherit;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.cart-item__qty {
		margin: 0 0 40px 0;
	}
	.cart-item__btn {
		position: absolute;
		top: 20px;
		right: 20px;
	}
}
@media (max-width:576px) {
	.cart-item__body {
		flex-direction: column;
	}
	.cart-item__image {
		margin: 0 0 30px 0;
		width: auto;
	}
	.cart-item__btn {
		position: absolute;
		top: 10px;
		right: 10px;
	}
}
</style>