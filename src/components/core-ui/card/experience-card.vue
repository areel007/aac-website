<template>
	<div class="experience-card">
		<p class="experience__card__title">{{ cardTitle }}</p>
		<p class="experience__card__subtitle">{{ cardSubtitle }}</p>
		<p class="card__details">{{ cardDetails }}</p>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "experience-card",
	props: ["cardTitle", "cardSubtitle", "cardDetails"]
})
</script>

<style scoped>
.experience-card {
	width: 90%;
	height: 50%;
	position: absolute;
	left: 0;
	bottom: 0;
	padding: 2rem;
	background-color: var(--color-white);
	border-bottom: 2px solid grey;
	cursor: pointer;
}
.experience-card::before {
	content: '';
	width: 0;
	height: 2px;
	transition: all .5s ease;
	background-color: var(--secondary-color);
	position: absolute;
	bottom: -2px;
	left: 0;
}
.experience-card:hover::before {
	width: 100%;
}
.experience__card__title {
	font: var(--font-montserat-body-2);
	text-transform: uppercase;
	color: var(--primary-color);
	margin-bottom: 2rem;
}
.experience__card__subtitle {
	font-size: var(--fs-24);
	font-family: var(--montserat);
	color: var(--primary-color);
	margin-bottom: 2rem;
}
.card__details {
	font-family: var(--montserat);
	font-size: var(--fs-14);
	color: #000;
	margin-bottom: 2rem;
}

@media screen and (max-width: 300px) {
	.experience-card {
		width: 100vw;
	}
	.experience__card__title,
	.experience__card__subtitle,
	.card__details {
		width: 100%;
	}
}

</style>
