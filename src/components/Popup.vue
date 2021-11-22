<template>
	<div class='popup'>
		<div class="popup__container">
			<i
				class='popup__icon-close fas fa-times fa-2x'
				@click='closePopup'>
			</i>
			<div class="popup__header">
				<div class="popup__title">{{product.name}}</div>
			</div>
			<div class="popup__body">
				<slot></slot>
			</div>
			<div class="popup__buttons">
				<button class="popup__btn-close _btn-2" @click='closePopup' >Close</button>
				<button class="popup__btn-action _btn-1" @click='clickRightBtn'>Add to cart</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'popup',
	props: ['product'],
	components: {},

	methods: {
		clickRightBtn() {
			this.$emit('clickRightBtn')
		},
		closePopup() {
			this.$emit('closePopup')
		}
	}

}

</script>

<style>
.popup {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	padding: 20px;
	background: rgb(120,120,120, .5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
}
.popup__container {
	position: relative;
	padding: 20px;
	max-width: 500px;
	width: 100%;
	background: #161a1d;
	color: #d3d3d3;
	border-radius: 5px;
}
.popup__icon-close {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
}
.popup__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 0 30px 0;
}
.popup__title {
	font-size: 28px;
}
.popup__body {
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0 0 20px 0;
}
.popup__buttons {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.popup__btn-close {
	font-size: 20px;
}
.popup__btn-action {
	font-size: 20px;
}

@media (max-width: 576px) {
	.popup__body {
		display: flex;
		flex-direction: column;
		justify-content: normal;
		align-items: center;
	}
}
</style>