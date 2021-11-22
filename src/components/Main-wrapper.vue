<template>
	<div class='v-main-wrapper'>
		<Header />
		<keep-alive>
      <router-view></router-view>
    </keep-alive>
	</div>
</template>

<script>

import Header from './Header'

export default {
	name: 'v-main-wrapper',
	components: {
		Header
	}
}

</script>

<style>
</style>