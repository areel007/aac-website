<template>
	<div class="big-experience-card">
		<img :src="require(`../../../assets/air-1.jpg`)">
		<experience-card
			card-title="travel guides"
			card-subtitle="Plan your next escape"
			card-details="Find out about travelling safely through Heathrow at this time."
		></experience-card>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ExperienceCard from "@/components/core-ui/card/experience-card.vue";

export default defineComponent({
	name: "big-experience-card",
	components: {ExperienceCard},
	props: ["imageUrl"]
})
</script>

<style scoped>
.big-experience-card {
	min-width: 40rem;
	height: 40rem;
	position: relative;
	margin-right: 2rem;
}
.big-experience-card img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

</style>
