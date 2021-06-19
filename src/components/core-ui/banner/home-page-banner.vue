<template>
	<div class="home-page-banner">
		<img :src="require('../../../assets/banner-img-1.jpg')">
		<div class="overlay"></div>
		<div class="banner__details">
			<div class="container">
				<div class="banner__details--inner">
					<h1>Looking forward to more adventure</h1>
					<p>Welcome back to Asaba Airport</p>
					<effect-button></effect-button>
				</div>
			</div>
		</div>
<!--		<schedule></schedule>-->
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Schedule from "@/components/core-ui/schedules/schedule.vue";
import EffectButton from "@/components/core-ui/button/effect-button.vue";

export default defineComponent({
	name: "home-page-banner",
	components: {EffectButton},
})
</script>

<style scoped>
.home-page-banner {
	height: 60rem;
	width: 100%;
	position: relative;
	top: 0;
	z-index: 0;
}
.home-page-banner img {
	width: 100%;
	height: 600px;
	object-fit: cover;
	filter: grayscale(50);
}
.overlay {
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 65, 81, 0.3);
	width: 100%;
	height: 100%;
}
.banner__details {
	position: absolute;
	width: 100%;
	top: 50%;
	transform: translateY(-50%);
}
.banner__details--inner h1 {
	font-size: 4rem;
	font-family: var(--montserat);
	color: var(--color-white);
	font-weight: var(--font-wieght-semibold);
	margin-bottom: 2rem;
	/*text-shadow: 0 0 4px var(--primary-color);*/
	max-width: 75rem;
}
.banner__details--inner p {
	font-family: var(--montserat);
	font-weight: var(--font-weight-normal);
	font-size: var(--fs-24);
	color: var(--color-white);
	margin-bottom: 3rem;
}

@media screen and (max-width: 500px) {
	.banner__details--inner h1 {
		font-size: 3rem;
	}
}

@media screen and  (max-width: 1000px) {
	.home-page-banner {
		height: auto;
	}
}

</style>
