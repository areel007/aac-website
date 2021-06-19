<template>
	<div class="search__component" :class="{'hide-search': isSearchHidden}">
		<div class="container">
			<div class="search__component__inner">
				<div class="cancel" @click="$emit('cancel-button-action')">
					<svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59
						19 19 17.59 13.41 12 19 6.41z"/>
					</svg>
				</div>
				<div class="search__input__box">
					<input type="text" placeholder="Search AAC">
				</div>
				<div class="search__action">
					<span>Search</span>
					<svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "search-component",
	props: ["isSearchHidden"]
})
</script>

<style scoped>
.search__component {
	position: absolute;
	top: 0;
	width: 100%;
	background-color: var(--primary-color);
	transform: translateY(0);
	transition: all .3s ease;
	z-index: 200 !important;
}
.search__component__inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 10rem;
}
.cancel {
	width: 4rem;
	height: 4rem;
	display: flex;
	cursor: pointer;
	border-radius: 50%;
	transition: all .3s ease;
}
.cancel:hover {
	background-color: #168fa8;
}
.cancel svg {
	margin: auto;
	fill: var(--color-white);
}
.hide-search {
	display: block;
	transform: translateY(-100%);
	transition: all .3s ease;
	z-index: 15;
}
.search__input__box {
	height: 4rem;
	width: 70%;
}
.search__input__box input {
	width: 100%;
	height: 100%;
	background-color: transparent;
	outline: none;
	border: 1px solid transparent;
	padding-left: 1rem;
	color: var(--color-white);
	font: var(--font-montserat-body-2);
}
.search__input__box input::placeholder {
	font: var(--font-montserat-body-2);
	color: var(--color-white);
}
.search__input__box input:focus {
	border: 1px solid var(--color-white);
}
.search__action {
	display: flex;
	align-items: center;
	cursor: pointer;
}
.search__action span {
	margin-right: 2rem;
	font: var(--font-montserat-body-1);
	color: var(--color-white);
}
.search__action svg {
	fill: var(--color-white);
}
.search__action:hover span, .search__action:hover svg {
	color: #168fa8;
	fill: #168fa8;
}
</style>
