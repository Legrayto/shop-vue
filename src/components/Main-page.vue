<template>
	<div class='main-page'>
		<div class='main-page__title'>Main Page</div>
		<router-link :to="{name: 'Catalog'}">
		<div class="main-page__link-to-catalog">To catalog</div>
		</router-link>
	</div>
</template>

<script>

export default {
	name: 'main-page',
	components: {},

}

</script>

<style>
.main-page__title {
	font-size: 48px;
	line-height: 150%;
	margin: 0 0 60px 0;
	text-align: center;
}
.main-page__link-to-catalog {
	font-size: 40px;
	line-height: 150%;
	text-align: center;
	font-style: italic;
	color: #d3d3d3;
	text-decoration: underline;
}
.main-page__link-to-catalog:hover {
	color: #969696;
}
</style>