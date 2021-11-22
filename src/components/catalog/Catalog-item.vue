<template>
	<div class='catalog-item'>

		<Popup
			class='catalog-item__popup'
			v-if='isShowPopup'
			@closePopup='closePopup'
			@clickRightBtn='addToCart'
			:product='product'
		>
			<div class="popup__image">
				<img :src="require('../../assets/images/' + product.image)" alt="">
			</div>
			<div  class='popup__price'>Price: {{product.price}}</div>
		</Popup>

		<img  class='catalog-item__image' :src="require('../../assets/images/' + product.image)" alt="">
		<div class="catalog-item__body">
			<div  class='catalog-item__name'>{{product.name}}</div>
			<div  class='catalog-item__price'>Price: {{product.price}}</div>
			<div class="catalog-item__buttons">
				<button  class='catalog-item__btn-show-more _btn-2' @click='showMore'>Show more</button>
				<button  class='catalog-item__btn-add-to-cart _btn-1' @click='addToCart'>Add to cart</button>
			</div>
		</div>
	</div>
</template>

<script>

import Popup from '../Popup'

export default {
	name: 'catalog-item',
	props: ['product'],
	components: {
		Popup
	},

	data() {
		return {
			isShowPopup: false
		}
	},

	methods: {
		closePopup() {
			this.isShowPopup = false
		},
		showMore() {
			this.isShowPopup = true
		},
		addToCart() {
			this.$store.commit('addToCart', this.product)
		}
	}
}

</script>

<style>
.popup__image {
	margin: 0 0 20px 0;
}
.popup__image img {
	max-width: 200px;
	width: 100%;
}
.popup__price {
	font-size: 30px;
}

.catalog-item {
	border: 5px solid #d3d3d3;
	border-radius: 5px;
	padding: 20px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
.catalog-item__body {
	width: 100%;
}
.catalog-item__image {
	max-width: 200px;
	width: 100%;
	margin: 0 0 30px 0;
}
.catalog-item__name {
	font-weight: 700;
	font-size: 18px;
	margin: 0 0 20px 0;
}
.catalog-item__price {
	font-size: 20px;
	margin: 0 0 20px 0;
}
.catalog-item__buttons {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.catalog-item__btn-show-more {
	font-size: 18px;
	margin: 0 5px 0 0;
}
.catalog-item__btn-add-to-cart {
	font-size: 18px;
}

@media (max-width:992px) {
	.catalog-item__name {
		font-size: 24px;
	}
	.catalog-item__price {
		font-size: 26px;
	}
	.catalog-item__btn-show-more {
		font-size: 22px;
	}
	.catalog-item__btn-add-to-cart {
		font-size: 22px;
	}
}
@media (max-width:767px) {
	.catalog-item {
		max-width: 420px;
		width: 100%;
		margin: 0 auto;
	}
	.catalog-item__image {
		max-width: 300px;
	}
}
@media (max-width:576px) {
	.catalog-item__buttons {
		display: block;
	}
	.catalog-item__btn-show-more {
		max-width: 180px;
		width: 100%;
		margin: 0 auto 10px;
	}
	.catalog-item__btn-add-to-cart {
		width: 100%;
		margin: 0 auto;
	}
}
</style>