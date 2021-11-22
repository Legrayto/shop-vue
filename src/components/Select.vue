<template>
	<div class='select'>
		<div class='select__container'>
			<div
				class='select__active'
				@click='active()'
			>
			<div class="select__text">
				{{selected}}
				<i class="select__arrow fas fa-chevron-down" :class='{active: areOptionsVisible}'></i>
			</div>
			</div>
			<div
				class="select__options"
				v-if='areOptionsVisible'
			>
				<div
					class='select__option'
					v-for='(option, index) in options'
					:key='index'
					@click='selectOption(option)'
				>
				{{option.name}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'select',
	props: ['options', 'selected'],
	components: {},

	data() {
		return {
			areOptionsVisible: false,
		}
	},

	methods: {
		selectOption(option) {
			this.$emit('selectOption', option);
			this.areOptionsVisible = false
		},
		hideSelect() {
			this.areOptionsVisible = false;
		},
		active() {
			this.areOptionsVisible = !this.areOptionsVisible;
		}
	},

	mounted() {
		document.addEventListener('click', this.hideSelect.bind(this), true)
	},
	beforeUnmount() {
		document.removeEventListener('click', this.hideSelect)
	}
}

</script>

<style>
.select {
	width: 200px;
	cursor: pointer;
}
.select__container {
	position: relative;
}
.select__active {
	font-size: 24px;
	border: 1px solid #d3d3d3;
	border-radius: 4px;
	padding: 10px;
}
.select__active:hover {
	background: #d3d3d3;
	color: #161a1d;
}
.select__text {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.select__arrow.active {
	transform: rotate(180deg)
}
.select__options {
	position: absolute;
	top: 120%;
	left: 0;
	width: 100%;
	background:#161a1d;
	border: 1px solid #d3d3d3;
	cursor: pointer;
}
.select__option {
	font-size: 20px;
	padding: 10px;
}
.select__option:hover {
	background: #d3d3d3;
	color: #161a1d;
}
</style>