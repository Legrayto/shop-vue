<template>
	<div class='header'>
		<router-link :to="{name: 'Main-page'}" >
			<img class="header__logo" src="../assets/logo.png" alt="logo">
		</router-link>
		<div class='header__search-container'>
			<div class="header__search">
				<input 
					class='header__input'
					type="text" 
					v-model='searchValue'
					@keyup.enter='search(searchValue)'	
				>
				<i class='header__clear-btn far fa-times-circle fa-lg' @click='clearSearch'></i>
			</div>
			<button class='header__search-btn _btn-1' @click='search(searchValue)'>Поиск</button>
		</div>
	</div>
</template>

<script>

export default {
	name: 'header',
	components: {},

	data() {
		return {
			searchValue: ''
		}
	},

	methods: {
		search(value) {
			if (this.$router.path !== '/Catalog') {
				this.$router.push('/Catalog')
			}
			this.$store.commit('search', value);
			this.clearSearch()
    },
		clearSearch() {
			this.searchValue = ''
		}
	}

}

</script>

<style>
.header {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 30px;
	max-width: 1200px;
	margin: 0 auto;
}
.header__logo {
	height: 70px;
}
.header__search-container {
	display: flex;
	align-items: center;
}
.header__search {
	position: relative;
	max-width: 290px;
}
.header__input {
	width: 100%;
	min-height: 40px;
	padding: 0 40px 0 20px ;
	border: none;
	outline: none;
	border-radius: 10px 0 0 10px;
	background: #f5f3f4;
	font-size: 18px;
  color: #161a1d;
}
.header__clear-btn {
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #b1a7a6;
	cursor: pointer;
}
.header__clear-btn:hover {
	color: #161a1d;
}
.header__search-container > button {
	font-size: 16px;
	border-radius: 0 10px 10px 0;
}

@media (max-width:576px) {
	.header {
		flex-direction: column;
		padding: 10px 20px;
	}
	.header__logo {
		margin: 0 0 20px 0;
	}
}
</style>