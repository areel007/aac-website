<template>
	<div class="travel-info">
		<div class="container">
			<div class="travel-info-inner">
				<div class="travel-info-box">
					<p class="travel__info__page__title">Covid-19</p>
					<p class="travel__info__page__subtitle">Travel information</p>
					<p class="travel__info__details">Find out about travelling safely through Heathrow at this time.</p>
					<p class="view-all" @click="showAllInfo">
						<span>View all</span>
						<svg
							viewBox="0 0 24 24"
							id="drawer"
							width="24px"
							height="24px"
						>
							<path d="M24 5l-5 4V1l5 4zM2 11h20v2H2v-2zm0-7h15v2H2V4zm0 14h20v2H2v-2z"
								fill-rule="evenodd" clip-rule="evenodd">
							</path>
						</svg>
					</p>
				</div>
				<ul
					class="travel__info__nav__box"
					:class="{'show-info': isAllInfoShow}"
				>
					<svg
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#000000"
						class="close"
						@click="close"
					>
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19
					19 17.59 13.41 12 19 6.41z"/>
					</svg>
					<li
						v-for="(item, index) in travelInfoItems"
						:key="index"
					>
						<router-link :to="item.url">
							<span>{{ item.travelInfoItem }}</span>
							<svg
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#000000"
							>
								<path d="M0 0h24v24H0V0z" fill="none"/>
								<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
							</svg>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue";

export default defineComponent({
	name: "travel-info",


	setup () {
		const isAllInfoShow = ref(false)

		const travelInfoItems = reactive([
			{
				travelInfoItem: "Prepare for your journey",
				url: "/"
			},
			{
				travelInfoItem: "COVID-19 Testing",
				url: "/"
			},
			{
				travelInfoItem: "COVID-19 FAQs",
				url: "/"
			},
			{
				travelInfoItem: "Shop Options",
				url: "/"
			},
			{
				travelInfoItem: "Food Options",
				url: "/"
			},
		])

		const showAllInfo = () => {
			isAllInfoShow.value = true
		}

		const close = () => {
			isAllInfoShow.value = false
		}

		return {
			showAllInfo,
			isAllInfoShow,
			travelInfoItems,
			close,
		}
	}
})
</script>

<style scoped>
.travel-info {
	width: 100%;
	position: relative;
	top: -15rem;
	margin-top: 1rem;


}
.travel-info-inner {
	width: 100%;
	background-image: url("../../../assets/travel-info-bg.jpg");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 50rem;

}
.travel-info-box {
	width: 50rem;
	height: 40rem;
	background-color: var(--color-white);
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	padding: 10rem 2rem;
	z-index: 2;
}
.travel__info__page__title {
	font: var(--font-montserat-body-2);
	text-transform: uppercase;
	color: var(--primary-color);
	margin-bottom: 2rem;
}
.travel__info__page__subtitle {
	font-size: var(--fs-24);
	font-family: var(--montserat);
	color: var(--primary-color);
	margin-bottom: 2rem;
}
.travel__info__details {
	font-family: var(--montserat);
	font-size: var(--fs-14);
	color: #000;
	margin-bottom: 2rem;
}
.view-all {
	display: flex;
	align-items: center;
	cursor: pointer;
	width: min-content;
	white-space: nowrap;
}
.view-all span {
	margin-right: 1rem;
	font-size: var(--fs-12);
	font-family: var(--montserat);
}
.view-all svg {
	width: 20px;
	height: 20px;
	fill: var(--primary-color);
}
.travel__info__nav__box {
	width: 50rem;
	height: 40rem;
	position: absolute;
	z-index: 0;
	top: 50%;
	transform: translateY(-50%);
	background-color: var(--primary-color);
	padding: 5rem 3rem 0 3rem;
}
.show-info {
	z-index: 100;
}
.travel__info__nav__box li {
	border-bottom: 1px solid #168fa8;
	position: relative;
	cursor: pointer;
}
.travel__info__nav__box li::before {
	content: '';
	height: 100%;
	width: 0;
	position: absolute;
	background-color: #168fa8;
	color: var(--primary-color);
}
.travel__info__nav__box li:hover::before {
	width: 100%;
	transition: all .3s ease;
}
.travel__info__nav__box li a {
	padding: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-decoration: none;
}
.travel__info__nav__box li a span {
	font-size: var(--fs-14);
	font-family: var(--montserat);
	color: var(--color-white);
	z-index: 2;
}
.travel__info__nav__box li a svg {
	fill: var(--color-white);
	z-index: 2;
}
.close {
	position: absolute;
	right: 5rem;
	top: 1rem;
	fill: var(--color-white);
	cursor: pointer;
	width: 2rem;
	height: 2rem;
}
.close:hover {
	fill: red;
}

@media screen and (max-width: 1000px) {
	.travel-info {
		top: 0;
	}
}


@media screen and (max-width: 700px) {
	.travel__info__nav__box {
		overflow-y: auto;
		height: 30rem;
		padding: 4rem;
		width: 90%;
	}
	.travel-info-box {
		width: 90%;
		height: 30rem;
		padding: 7rem 2rem;
	}
}
</style>
