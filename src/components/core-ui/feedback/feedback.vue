<template>
	<div class="feedback" @click="$emit('feedback-action')">
		<span>Feedback</span>
	</div>
</template>

<script>
export default {
	name: "feedback"
}
</script>

<style scoped>
.feedback {
	position: fixed;
	top: 30rem;
	right: -2rem;
	background-color: var(--primary-color);
	transform: rotate(90deg);
	transform-origin: initial;
	z-index: 1000;
	padding: 1rem 2rem;
	font-size: var(--fs-14);
	color: var(--color-white);
	font-family: var(--montserat);
	letter-spacing: 1px;
	cursor: pointer;
}

</style>
