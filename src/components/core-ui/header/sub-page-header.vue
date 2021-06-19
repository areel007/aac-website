<template>
	<div class="sub-page-header">
		<div class="container">
			<div class="sub-page-header__inner">
				<div class="logo">
					<router-link to="/">
						<img src="../../../assets/aac_favicon-logo.png">
					</router-link>
				</div>
				<button @click="$router.go(-1)">
					<svg
						height="18px"
						viewBox="0 0 24 24"
						width="18px"
						fill="#000000">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
					</svg>
					<span>Back</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "sub-page-header"
}
</script>

<style scoped>
.sub-page-header {
	width: 100%;
	background-color: transparent;
	position: absolute;
	top: 0;
	z-index: 10;
}
.sub-page-header__inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}
.logo {
	width: 10rem;
}
.logo img {
	width: 100%;
	object-fit: cover;
}
.sub-page-header__inner button {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--secondary-color);
	outline: none;
	border: 1px solid var(--secondary-color);
	padding: 1rem 2rem;
	cursor: pointer;
	width: 15rem;
	color: var(--primary-color);
}
.sub-page-header__inner svg {
	fill: var(--primary-color);
}
.sub-page-header button:hover {
	background-color: transparent;
	border: 1px solid var(--secondary-color);
	color: var(--secondary-color);
}
.sub-page-header button:hover svg {
	fill: var(--secondary-color);
}

@media screen and (max-width: 700px) {
	.logo {
		width: 7.5rem;
	}
	.sub-page-header__inner button {
		width: 10rem;
		padding: 1rem;
	}
}

</style>
