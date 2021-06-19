<template>
	<section>
		<div class="container">
			<div class="experience__asaba__inner">
				<section-title title-text="Experience Asaba"></section-title>
				<div class="card-list">
					<big-experience-card
						image-url="air-1.png"
					></big-experience-card>
					<big-experience-card
						image-url="air-1.png"
					></big-experience-card>
					<big-experience-card
						image-url="air-1.png"
					></big-experience-card>
					<big-experience-card
						image-url="air-1.png"
					></big-experience-card>
					<big-experience-card
						image-url="air-1.png"
					></big-experience-card>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SectionTitle from "@/components/core-ui/title/section-title";
import BigExperienceCard from "@/components/core-ui/card/big-experience-card";
export default {
	name: "experience",
	components: {BigExperienceCard, SectionTitle}
}
</script>

<style scoped>
section {
	position: relative;
	top: -15rem;
	margin-top: 3rem;
	width: 100%;
}
.experience__asaba__inner {
	--section__title__margin: 0 0 2rem 0;
	width: 100%;
}
.card-list {
	width: 100%;
	overflow-x: scroll;
	display: flex;
	position: relative;
}
.card-list::-webkit-scrollbar {
	width: 0;
	height: 0;
}

.card-list::-webkit-scrollbar-track-piece  {
	background-color: transparent;
}

.card-list::-webkit-scrollbar-thumb:vertical {
	height: 0;
	background-color: transparent;
}

@media screen and (max-width: 1000px) {
	section {
		top: 0;
	}
}


</style>
