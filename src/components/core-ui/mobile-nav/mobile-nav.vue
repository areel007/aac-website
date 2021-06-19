<template>
	<nav class="mobile__nav" v-show="isMobileMenuShow">
		<div class="mobile__nav__header">
			<svg
				@click="$emit('close')"
				height="24px"
				viewBox="0 0 24 24"
				width="24px" fill="#000000">
				<path d="M0 0h24v24H0V0z" fill="none"/>
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12
				5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
			</svg>
			<img :src="require('../../../assets/aac-alt-logo.png')">
		</div>
		<ul>
			<li
				v-for="(mobileNavListItem, index) in mobileNavListItems"
				:key="index"
				@click="$emit('toggle-sub-item', mobileNavListItem)"
			>
				<div class="mobile__nav__list__item">
					<span>{{ mobileNavListItem.listItem }}</span>
					<svg
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#fff"
					>
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
					</svg>
				</div>
				<div v-if="mobileNavListItem.showItem" class="mobile__nav__sublist__item">
					<p
						v-for="(subItem, index) in mobileNavListItem.subItems"
						:key="index"
					>
						<router-link :to="subItem.url">{{ subItem.subListItem }}</router-link>
					</p>
				</div>
			</li>

		</ul>
	</nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "mobile-nav",
	props: [
		"isMobileMenuShow",
		"mobileNavListItems",
	],
})
</script>

<style scoped>
.mobile__nav {
	width: 100%;
	height: 100vh;
	background-color: var(--primary-color);
	position: fixed;
	z-index: 1000;
	padding: 1rem;
}
.mobile__nav__header {
	padding: 1rem 0;
	width: 100%;
	border-bottom: 1px solid var(--secondary-color);
	display: flex;
	justify-content: center;
	position: relative;
}
.mobile__nav__header svg {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
}
.mobile__nav__header img {
	width: 70px;
	height: auto;
	object-fit: cover;
}
.mobile__nav__header ul {
	width: 100%;
}
.mobile__nav__list__item {
	padding: 1rem 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
}
.mobile__nav__list__item span {
	color: var(--color-white);
	font: var(--font-montserat-body-1);
}
.mobile__nav__list__item span:hover  {
	color: var(--secondary-color);
}
.mobile__nav__sublist__item p {
	font-size: var(--fs-14);
	font-family: var(--montserat);
	margin-bottom: .5rem;
}
.mobile__nav__sublist__item p:last-child {
	margin-bottom: 0;
}
.mobile__nav__sublist__item p a {
	color: var(--secondary-color);
	text-decoration: none;
}
.mobile__nav__sublist__item p a:hover {
	color: var(--color-white);
}
</style>
