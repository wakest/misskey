<template>
<div
	class="uywduthvrdnlpsvsjkqigicixgyfctto"
	:class="{ disabled, checked }"
	:aria-checked="checked"
	:aria-disabled="disabled"
	@click="toggle"
>
	<input type="radio"
		:disabled="disabled"
	>
	<span class="button">
		<span></span>
	</span>
	<span class="label"><slot></slot></span>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	model: {
		prop: 'model',
		event: 'change'
	},
	props: {
		model: {
			required: false
		},
		value: {
			required: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		checked(): boolean {
			return this.model === this.value;
		}
	},
	methods: {
		toggle() {
			this.$emit('change', this.value);
		}
	}
});
</script>

<style lang="stylus" scoped>
@import '~const.styl'

root(isDark)
	display inline-flex
	margin 0 16px 0 0
	cursor pointer
	transition all 0.3s

	> *
		user-select none

	&:hover
		> .button
			border solid 2px isDark ? rgba(#fff, 0.7) : rgba(#000, 0.54)

	&.disabled
		opacity 0.6
		cursor not-allowed

	&.checked
		> .button
			border-color $theme-color

			&:after
				background-color $theme-color
				transform scale(1)
				opacity 1

		> .label
			color $theme-color

	> input
		position absolute
		width 0
		height 0
		opacity 0
		margin 0

	> .button
		display inline-block
		flex-shrink 0
		width 20px
		height 20px
		background none
		border solid 2px isDark ? rgba(#fff, 0.6) : rgba(#000, 0.4)
		border-radius 100%
		transition inherit

		&:after
			content ''
			display block
			position absolute
			top 3px
			right 3px
			bottom 3px
			left 3px
			border-radius 100%
			opacity 0
			transform scale(0)
			transition 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)

	> .label
		margin-left 8px
		display block
		font-size 14px
		line-height 20px
		cursor pointer

.uywduthvrdnlpsvsjkqigicixgyfctto[data-darkmode]
	root(true)

.uywduthvrdnlpsvsjkqigicixgyfctto:not([data-darkmode])
	root(false)

</style>
