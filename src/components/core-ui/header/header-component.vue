<template>
	<header>
		<div class="container">
			<div class="header__inner">
				<div class="hamburger-icon">
					<svg
						@click="$emit('mobile-menu-button-action')"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#004151"
					>
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
					</svg>
				</div>
				<div class="logo">
					<img src="../../../assets/aac_favicon-logo.png">
				</div>
				<ul class="nav">
					<li v-for="(nav, index) in webNavigationLinks" :key="index">
						<span>{{ nav.listItem }}</span>
						<div class="sub-nav __flights" v-if="nav.listItem==='Flights'">
							<div class="dropdown-header">
								<span>{{ nav.listItem }}</span>
								<svg
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FAA831"
								>
									<path d="M0 0h24v24H0V0z" fill="none"/>
									<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
								</svg>
							</div>
							<div class="__links">
								<router-link
									v-for="(navSub, index) in nav.subItems"
									:key="index" :to="navSub.url"
								>
									{{ navSub.subListItem }}
								</router-link>
							</div>
						</div>
						<div class="sub-nav __airport" v-else-if="nav.listItem==='At the Airport'">
							<div class="dropdown-header">
								<span>{{ nav.listItem }}</span>
								<svg
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FAA831"
								>
									<path d="M0 0h24v24H0V0z" fill="none"/>
									<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
								</svg>
							</div>
							<div class="__links">
								<router-link
									v-for="(navSub, index) in nav.subItems"
									:key="index" :to="navSub.url"
								>
									{{ navSub.subListItem }}
								</router-link>
							</div>
						</div>
						<div class="sub-nav __transport" v-else-if="nav.listItem==='Transport & Directions'">
							<div class="dropdown-header">
								<span>{{ nav.listItem }}</span>
								<svg
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FAA831"
								>
									<path d="M0 0h24v24H0V0z" fill="none"/>
									<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
								</svg>
							</div>
							<div class="__links">
								<router-link
									v-for="(navSub, index) in nav.subItems"
									:key="index" :to="navSub.url"
								>
									{{ navSub.subListItem }}
								</router-link>
							</div>
						</div>
						<div class="sub-nav __shop" v-else-if="nav.listItem==='Shop & Eat'">
							<div class="dropdown-header">
								<span>{{ nav.listItem }}</span>
								<svg
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FAA831"
								>
									<path d="M0 0h24v24H0V0z" fill="none"/>
									<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
								</svg>
							</div>
							<div class="__links">
								<router-link
									v-for="(navSub, index) in nav.subItems"
									:key="index" :to="navSub.url"
								>
									{{ navSub.subListItem }}
								</router-link>
							</div>
						</div>
						<div class="sub-nav __shop" v-else-if="nav.listItem==='Rewards'">
							<div class="dropdown-header">
								<span>{{ nav.listItem }}</span>
								<svg
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FAA831"
								>
									<path d="M0 0h24v24H0V0z" fill="none"/>
									<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
								</svg>
							</div>
							<div class="__links">
								<router-link
									v-for="(navSub, index) in nav.subItems"
									:key="index" :to="navSub.url"
								>
									{{ navSub.subListItem }}
								</router-link>
							</div>
						</div>
						<div class="sub-nav __shop" v-else-if="nav.listItem==='Booking'">
							<div class="dropdown-header">
								<span>{{ nav.listItem }}</span>
								<svg
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FAA831"
								>
									<path d="M0 0h24v24H0V0z" fill="none"/>
									<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
								</svg>
							</div>
							<div class="__links">
								<router-link
									v-for="(navSub, index) in nav.subItems"
									:key="index" :to="navSub.url"
								>
									{{ navSub.subListItem }}
								</router-link>
							</div>
						</div>
						<div class="sub-nav __shop" v-else-if="nav.listItem==='Company'">
							<div class="dropdown-header">
								<span>{{ nav.listItem }}</span>
								<svg
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FAA831"
								>
									<path d="M0 0h24v24H0V0z" fill="none"/>
									<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
								</svg>
							</div>
							<div class="__links">
								<router-link
									v-for="(navSub, index) in nav.subItems"
									:key="index" :to="navSub.url"
								>
									{{ navSub.subListItem }}
								</router-link>
							</div>
						</div>
					</li>
				</ul>
				<div class="search__box">
					<svg
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#004151"
						@click="$emit('search-button-action')"
					>
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5
						3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49
						19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
					</svg>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "header-component",
	components: {

	},
	props: [
		"webNavigationLinks",
		"isSearchHidden",
		"dropDropdown",
		"webNavDropdown"
	]
})
</script>

<style scoped>

header {
	width: 100%;
	transition: background-color .5s ease;
	position: absolute;
	background-color: transparent;
	z-index: 10;
}
header:hover {
	background-color: var(--color-white);
}
.header__inner {
	display: grid;
	grid-template-columns: 100px 1fr 100px;
	grid-column-gap: 4rem;
	position: relative;
}
.hamburger-icon {
	display: none;
	height: 100%;
	justify-content: center;
	align-items: center;
}
.logo {
	width: 100px;
}
.logo img {
	width: 100%;
	object-fit: cover;
}
.nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}
.nav li {
	height: 100%;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	align-items: flex-start;
	justify-content: center;
}
.nav li::before {
	content: '';
	width: 0;
	height: 2px;
	position: relative;
	left: 0;
	top: 60px;
	background-color: var(--secondary-color);
	transition: all .3s ease;
	opacity: 0;
}
.nav li:hover::before {
	width: 100%;
	opacity: 1;
}
.nav li span {
	font: var(--font-montserat-body-1);
	color: var(--primary-color);
}
.nav li:hover .sub-nav{
	display: grid;
}
.sub-nav {
	display: none;
	position: absolute;
	top: 10rem;
	left: 0;
	width: 100%;
	padding: 5rem 2rem;
	background-color: var(--color-white);
	margin-top: .3rem;
	grid-template-columns: 1fr 2fr;
	grid-column-gap: 4rem;
}
.sub-nav a {
	display: block;
	width: min-content;
	text-decoration: none;
	white-space: nowrap;
}
.search__box {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.search__box svg {
	cursor: pointer;
}
.dropdown-header {
	display: flex;
	align-items: center;
	border-right: 1px solid var(--primary-color);
}
.dropdown-header span {
	font: var(--font-montserat-bold-h3) !important;
	color: var(--secondary-color) !important;
	margin-right: 1rem;
}
.__links a {
	margin-bottom: 2rem;
	font-family: var(--montserat);
	color: var(--primary-color);
	font-size: var(--fs-12);
	font-weight: var(--font-wieght-semibold);
}
.__links a:last-child {
	margin-bottom: 0;
}
.__links a:hover{
	color: var(--secondary-color);
}

@media screen and (max-width: 1250px) {
	.hamburger-icon {
		display: flex;
	}
	.nav {
		display: none;
	}
	.header__inner {
		justify-items: center;
	}
}

@media screen and (max-width: 700px) {
		.header__inner {
			grid-template-columns: 5rem 1fr 5rem;
	}
}

@media screen and (max-width: 375px) {
	.header__inner {
		grid-template-columns: auto 1fr auto;
	}
}

</style>
