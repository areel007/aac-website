<template>
	<div class="star-rating">
		<input type="radio" name="star" id="star1"><label for="star1"></label>
		<input type="radio" name="star" id="star2"><label for="star2"></label>
		<input type="radio" name="star" id="star3"><label for="star3"></label>
		<input type="radio" name="star" id="star4"><label for="star4"></label>
		<input type="radio" name="star" id="star5"><label for="star5"></label>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "star-rating",
})
</script>

<style scoped>
.star-rating {
	display: flex;
	transform: rotateY(180deg);
	width: min-content;
}
.star-rating input {
	display: none;
}
.star-rating label {
	display: block;
	cursor: pointer;
	width: 3rem;
}
.star-rating label:before {
	content: '\2605';
	font-size: 3rem;
	position: relative;
	display: block;
	color: #D4D3D3FF;
}
.star-rating label:after {
	content: '\2605';
	font-size: 3rem;
	position: absolute;
	top: 0;
	display: block;
	color: #FAA831;
	opacity: 0;
	transition: .5s ease;
}
.star-rating label:hover:after,
.star-rating label:hover ~ label:after,
.star-rating input:checked ~ label:after {
	opacity: 1;
}
</style>
