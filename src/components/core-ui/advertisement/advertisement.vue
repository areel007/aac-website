<template>
	<div class="advertisement">
		<div class="container">
			<div class="advertisement__inner">
				<div class="overlay"></div>
				<div class="advertisement-text">
					<p class="_title">Food & Drink</p>
					<p class="_subtitle">Pre-order your food and enjoy in the terminal or on-board your flight</p>
					<button>Find out more</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "advertisement"
}
</script>

<style scoped>
.advertisement {
	position: relative;
	width: 100%;
	margin-top: 2rem;
	top: -15rem;
}
.advertisement__inner {
	background-image: url("../../../assets/advert.jpg");
	width: 100%;
	height: 50rem;
	background-position: center;
	background-size: cover;
	position: relative;
}
.overlay {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: var(--primary-color);
	opacity: .5;
}
.advertisement-text {
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	margin-left: 4rem;
	width: 90%;
}
.advertisement-text p {
	margin-bottom: 2rem;
	color: var(--color-white);
	font-family: var(--montserat);
}
.advertisement-text p:last-child {
	margin-bottom: 0;
}
._title {
	font-size: 1.1rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	width: 50%;
}
._subtitle {
	font-size: 2.4rem;
	width: 50%;
	line-height: 3.612rem;
}
.advertisement-text button {
	font-size: 1.4rem;
	padding: 1.6rem;
	background-color: transparent;
	border: 1px solid var(--color-white);
	outline: none;
	cursor: pointer;
	color: var(--color-white);
}

@media screen and (max-width: 1000px) {
	.advertisement {
		top: 0;
	}
}

@media screen and (max-width: 600px) {
	.advertisement-text {
		top: 50%;
		margin-left: 2rem;
	}
	._subtitle,
	._title {
		width: 90%;
	}
}

</style>
