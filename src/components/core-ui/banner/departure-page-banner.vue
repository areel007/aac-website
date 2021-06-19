<template>
	<div class="departure-page-banner">
		<img src="../../../assets/departure-bg.jpg">
		<div class="overlay"></div>
		<div class="banner__details">
			<div class="container">
				<div class="banner__details--inner">
					<h1>Departures</h1>
					<p>Find the latest status information for flights departing Asaba, updated minute-by-minute</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "departure-page-banner",
})
</script>

<style scoped>
.departure-page-banner {
	width: 100%;
	position: relative;
	top: 0;
	height: 40rem;
	margin-bottom: 2rem;
}
.departure-page-banner img {
	width: 100%;
	height: 40rem;
	object-fit: cover;
}
.overlay {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #004151;
	opacity: .4;
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
	width: 60%;
}

@media screen and (max-width: 500px) {
	.banner__details--inner h1 {
		font-size: 3rem;
	}
}

@media screen and  (max-width: 1000px) {
	.arrival-page-banner {
		height: auto;
	}
}

@media screen and (max-width: 700px) {
	.banner__details--inner p {
		width: 100%;
	}
}
</style>
