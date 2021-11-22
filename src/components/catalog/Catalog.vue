<template>
	<div class='catalog'>
		<div class='catalog__container _container'>
			<h1 class='catalog__title'>Catalog</h1>
			<div class='catalog__filters'>
				<Select
					class='catalog__select'
					:selected='selected'
					:options='category'
					@selectOption='sortByCategory'
				/>
				<div class="catalog__range range">
					<div class="range__slider">
						<input
							class='range__input'
							type="range"
							min='0'
							max='10000'
							step='100'
							v-model.number='minPrice'
							@change='setRange'
						>
						<input
							class='range__input'
							type="range"
							min='0'
							max='10000'
							step='100'
							v-model.number='maxPrice'
							@change='setRange'
						>
					</div>
					<div class="range__values">
						<div class="range__value">Min: {{minPrice}}</div>
						<div class="range__value">Max: {{maxPrice}}</div>
					</div>
				</div>
				<router-link :to="{name: 'Cart'}" class='catalog__cart'>
					<i class="fas fa-shopping-cart fa-2x cart__icon"></i>
					<div class='cart__text'>Cart: {{cart.length}}</div>
				</router-link>
			</div>
			<div class="catalog__list">
				<catalogItem
					v-for='product in filter'
					:key='product.article'
					:product='product'
				/>
			</div>
		</div>
	</div>
</template>

<script>

import Select from '../Select'
import catalogItem from '../catalog/Catalog-item'
import {mapState, mapGetters} from 'vuex'


export default {
	name: 'catalog',
	components: {
		catalogItem,
		Select
	},

	data() {
		return {
			category: [
				{name: 'All', value:'all'},
				{name: 'PC', value:'pc'},
				{name: 'PlayStation', value:'ps'},
			],
			selected: 'All',

			sortedProducts: [],
			sortedSearch: [],
			sortedCategory: [],
			sortedPrice: [],

			minPrice: 0,
			maxPrice: 10000,
		}
	},
	methods: {
		sortBySearch(value) {
			if (value) {
				this.sortedSearch = [...this.products].filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
			}
		},

		setRange() {
			this.sortedSearch = []
			if (this.maxPrice < this.minPrice) {
				let tmp = this.maxPrice
				this.maxPrice = this.minPrice
				this.minPrice = tmp
			}
			let vm = this
			this.sortedPrice = [...this.products].filter(item => {return item.price > vm.minPrice && item.price < vm.maxPrice})
		},

		sortByCategory(category) {
			this.sortedSearch = []
			category.name != 'All' ? this.sortedCategory = [...this.products].filter(item => item.category === category.name) : this.sortedCategory = this.products
			this.selected = category.name
		},
	},
	watch: {
		searchValue() {
			this.sortBySearch(this.searchValue)
		}
	},
	computed: {
		...mapState([
			'products',
			'cart',
		]),
		...mapGetters([
			'searchValue'
		]),
		filter() {
			if (this.sortedSearch.length) {
				return this.sortedSearch
			}
			return this.sortedCategory.filter(item => this.sortedPrice.indexOf(item) > -1);
		}
	},
	mounted() {
		this.sortedCategory = this.products;
		this.sortedPrice = this.products
	}

}

</script>

<style>
.catalog__title {
	font-size: 48px;
	line-height: 150%;
	margin: 0 0 20px 0;
	text-align: center;
	color: #d3d3d3;
}
.catalog__filters {
	position: relative;
	margin: 0 0 80px 0;
	display: flex;
	align-items: center;
}
.catalog__select {
	margin: 0 0 0 20px;
}
.catalog__range {
	margin: 0 0 0 40px;
}
.range__slider {
	width: 200px;
	text-align: center;
	position: relative;
}
.range__input {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
  -webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 10px;
	background: #d3d3d3;
	color: #d3d3d3;
	border-radius: 10px;
	outline: none;
}
.range__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
	border-radius: 50%;
	border: 1px solid #0b090a;
  background: #d3d3d3;
  cursor: pointer;

	z-index: 2;
	position: relative;
	top: 0px;
}
.range__input::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #f5f3f4;
  cursor: pointer;
}
.range__values {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transform: translate(0px, 120%)
}


.catalog__cart {
	position: absolute;
	top: 0;
	right: 0;
	padding: 20px;
	border: 2px solid #d3d3d3;
	border-radius: 4px;
	background: none;
	color: #d3d3d3;
	display: flex;
	align-items: center;
	cursor: pointer;
}
.catalog__cart:hover {
	background: #d3d3d3;
	color: #161a1d;
}
.cart__icon {
	margin: 0 10px 0 0;
}
.cart__text {
	font-size: 24px;
}
.catalog__list {
	display: grid;
	grid-gap: 40px;
	grid-template-columns: repeat(3, 1fr);
}

@media (max-width:992px) {
	.catalog__list {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
	}
}
@media (max-width:767px) {
	.catalog__list {
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}
	.catalog__filters {
		flex-direction: column-reverse;
		align-items: start;
		justify-content: normal;
	}
	.catalog__range {
	margin: 0 0 40px 20px;
	}
	.range__value {
		font-size: 16px;
	}
}
@media (max-width:576px) {
	.catalog__cart {
		position: inherit;
		margin: 0 0 30px 0;
		width: 100%;
		justify-content: center;
	}
	.catalog__filters {
		flex-direction: column-reverse;
		align-items: center;
		justify-content: normal;
	}
	.catalog__select {
		margin: 0;
	}
	.catalog__range {
		margin: 0 0 40px 0;
	}
}
</style>