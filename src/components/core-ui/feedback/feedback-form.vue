<template>
	<div class="feedback-form" v-if="isFeedbackFormShow">
		<svg
			height="20px"
			viewBox="0 0 24 24"
			width="20px" fill="#000000"
			@click="$emit('close-feedback-form')"
		>
			<path d="M0 0h24v24H0V0z" fill="none"/>
			<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
		</svg>
		<p class="feedback-form__title">Help us improve our website</p>
		<p class="feedback-form__subtitle">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Adipisci aperiam deserunt excepturi id in minima nesciunt,
			nihil odio optio pariatur?
		</p>
		<div class="rate">
			<p class="ques">How would you rate our website?</p>
			<star-rating></star-rating>
			<p class="policy">Your responses will be used in accordance with our privacy policy</p>
		</div>
		<button>Submit</button>
		<p class="brain">Powered by <span>Ahead By Design</span></p>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import StarRating from "@/components/core-ui/star-rating/star-rating.vue";

export default defineComponent({
	name: "feedback-form",
	components: {StarRating},
	props: ["isFeedbackFormShow"]
})
</script>

<style scoped>
.feedback-form {
	width: 45rem;
	padding: 4rem 2rem;
	background-color: var(--primary-color);
	position: absolute;
	z-index: 100000;
	top: 12rem;
	left: 50%;
	transform: translateX(-50%);
	box-shadow: 0 2px 4px #bbb9b9;
}
.feedback-form svg {
	position: absolute;
	right: 1rem;
	top: 1rem;
	cursor: pointer;
	fill: var(--color-white);
}
.feedback-form__title {
	font-size: var(--fs-20);
	font-family: var(--montserat);
	font-weight: var(--font-wieght-semibold);
	margin-bottom: 2rem;
	color: var(--color-white);
	text-align: center;
}
.feedback-form__subtitle {
	font-size: var(--fs-12);
	font-family: var(--montserat);
	font-weight: var(--font-weight-normal);
	margin-bottom: 2rem;
	color: var(--color-white);
	text-align: center;
	line-height: 150%;
}
.rate {
	margin-bottom: 2rem;
}
.ques,
.policy {
	font-size: var(--fs-12);
	font-family: var(--montserat);
	font-weight: var(--font-weight-normal);
	color: var(--color-white);
}
.feedback-form button {
	padding: 1rem 2rem;
	background-color: var(--secondary-color);
	outline: none;
	border: 1px solid transparent;
	cursor: pointer;
	color: var(--primary-color);
}
.feedback-form button:hover {
	background-color: transparent;
	border: 1px solid var(--secondary-color);
	color: var(--secondary-color);
}
.brain {
	text-align: right;
	margin-top: 1rem;
	font-size: var(--fs-10);
	font-family: var(--montserat);
	color: var(--color-white);
	letter-spacing: 1px;
}
.brain span {
	font-weight: var(--font-wieght-bold);
	color: var(--secondary-color);
}

@media screen and (max-width: 455px) {
	.feedback-form {
		width: 90%;
	}

}
</style>
