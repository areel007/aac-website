<template>
	<span class="datepicker-toggle">
		<span class="datepicker-toggle-button">
			<svg
				height="16px"
				viewBox="0 0 24 24"
				width="16px"
				fill="#000000"
			>
				<path d="M0 0h24v24H0V0z" fill="none"/>
				<path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9
				2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2
				1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5
				8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4
				0h2v-2h-2v2z"/>
			</svg>
		</span>
		<input
			type="date"
			class="datepicker-input"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		>
	</span>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "date-picker",
	props: ["modelValue"],
})
</script>

<style scoped>
.datepicker-toggle {
	display: inline-block;
	position: relative;
	width: 18px;
	height: 19px;
}
.datepicker-toggle-button {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}

.datepicker-input {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
	box-sizing: border-box;
}
.datepicker-input::-webkit-calendar-picker-indicator {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	cursor: pointer;
}

</style>
