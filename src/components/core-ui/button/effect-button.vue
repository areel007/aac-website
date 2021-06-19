<template>
	<button class="effect-button">
		<span>Explore our featured routes</span>
		<svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
			<path d="M0 0h24v24H0V0z" fill="none"/>
			<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
		</svg>
	</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "effect-button",

})
</script>

<style scoped>
.effect-button {
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	padding: 2rem;
	outline: none;
	border: none;
	color: var(--primary-color);
}
.effect-button span {
	font: var(--font-montserat-body-1);
	margin-right: 1rem;
}
.effect-button svg {
	width: 1.6rem;
	height: 1.6rem;
}
.effect-button span,
.effect-button svg {
	z-index: 10;
}
.effect-button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 0rem;
	background-color: var(--primary-color);
	transition: width .5s ease;
}
.effect-button:hover::before {
	width: 30rem;
	height: 100%;
}
.effect-button:hover span,
.effect-button:hover svg {
	color: var(--color-white);
	fill: var(--color-white);
	transform: translateX(.5rem);
	transition: all .5s ease, fill .5s ease;
}
</style>
