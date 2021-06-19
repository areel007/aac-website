<template>
	<a href="#home">
		<svg
			height="30px"
			viewBox="0 0 24 24"
			width="30px"
			fill="#000000"
		>
			<path d="M0 0h24v24H0V0z" fill="none"/>
			<path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
		</svg>
	</a>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "scroll-up",
})
</script>

<style scoped>
a {
	width: 5rem;
	height: 5rem;
	background-color: var(--secondary-color);
	position: fixed;
	right: 5rem;
	bottom: 10rem;
	z-index: 1000;
	display: flex;
	box-shadow: 0 2px 4px #000;
}
a svg {
	margin: auto;
}

@media screen and (max-width: 600px) {
	a {
		right: 2rem;
	}
}

</style>
