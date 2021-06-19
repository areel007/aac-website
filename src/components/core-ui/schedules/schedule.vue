<template>
	<div class="schedule">
		<div class="schedule__nav__and__country__info">
			<ul class="schedule__nav">
				<li>
					<router-link to="/">Arrivals</router-link>
				</li>
				<li>
					<router-link to="/departures">Departures</router-link>
				</li>
				<li>
					<router-link to="/connections">Connections</router-link>
				</li>
			</ul>
			<p class="country__info">
				<span class="country__state">Delta</span> |
				<span class="current__time">00:57</span> |
				<span class="current__weather">25&deg;C</span> |
				<span class="weather__icon">
					<svg
						height="20px"
						viewBox="0 0 24 24"
						width="20px"
						fill="#FAA831"
					>
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15
						11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76
						2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93
						7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41
						1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11
						17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13
						15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/>
					</svg>
				</span>
			</p>
		</div>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "schedule"
})
</script>

<style scoped>
.schedule {
	position: relative;
	top: -15rem;
	left: 50%;
	transform: translateX(-50%);
	width: 95%;
	max-width: 1440px;
	height: auto;
	background-color: var(--primary-color);
	padding: 4rem;
	z-index: 500;
}
.schedule__nav__and__country__info {
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
	grid-column-gap: 4rem;
	margin-bottom: 4rem;
}
.schedule__nav {
	grid-column: 1/3;
	display: flex;
}
.country__info {
	grid-column: 3/4;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 20rem;
	font: var(--font-montserat-body-bold-1);
	color: var(--color-white);
}
.country__info svg {
	display: flex;
	align-items: center;
	justify-content: center;
}
.schedule__nav li {
	margin-right: 2rem;
	font-size: var(--fs-16);
	font-family: var(--montserat);
}
.schedule__nav li a {
	color: var(--color-white);
	text-decoration: none;
	padding-bottom: .5rem;
}
.schedule__nav li:last-child {
	margin-right: 0;
}
.router-link-exact-active {
	/*border-bottom: 2px solid var(--secondary-color);*/
	position: relative;
}
.router-link-exact-active::before {
	content: '';
	width: 80%;
	height: 2px;
	background-color: var(--secondary-color);
	position: absolute;
	bottom: 0;
	left: 0;
}

@media screen and (max-width: 1000px) {
	.schedule {
		width: 100%;
		top: 0;
	}
}

@media screen and (max-width: 600px) {
	.schedule__nav__and__country__info {
		grid-template-columns: 1fr;
		grid-row-gap: 1rem;
	}
	.schedule__nav {
		grid-column: 1/4;
	}
	.country__info {
		display: none;
	}
}

@media screen and (max-width: 350px) {
	.schedule {
		padding: 2rem 1rem;
	}
}
</style>
