<template>
	<div class="footer-component">
		<div class="container">
			<div class="footer__inner">
				<div class="footer__inner__top">
					<img src="../../../assets/aac-alt-logo.png">
				</div>
				<div class="footer__inner__bottom">
					<ul class="footer__links">
						<li v-for="(link, index) in footerLinks" :key="index">
							<router-link :to="link.url">{{ link.link }}</router-link>
						</li>
					</ul>
					<p class="copyright">Copyright &copy; 2021 - AAC.NG</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";

export default defineComponent({
	name: "footer-component",
	setup () {
		const footerLinks = reactive([
			{
				link: "Privacy",
				url: "/privacy"
			},
			{
				link: "Terms & Conditions",
				url: "/terms"
			},
			{
				link: "Accessibility",
				url: "/accessibility"
			},
			{
				link: "Sitemap",
				url: "/sitemap"
			},
			{
				link: "Communications",
				url: "/communications"
			},
		])

		return {
			footerLinks
		}
	}
})
</script>

<style scoped>
.footer-component {
	width: 100%;
	background-color: var(--primary-color);
	position: relative;
	margin-top: -12rem;
	padding: 2rem 0;
}
.footer__inner__top {
	padding: 1rem 0;
	border-bottom: 1px solid var(--color-white);
	margin-bottom: 1rem;
}
.footer__inner__top img {
	width: 100px;
	object-fit: cover;
}
.footer__inner__bottom {
	display: grid;
	grid-template-columns: 80% 1fr;
	height: auto;
}
.footer__links {
	display: flex;
	align-items: center;
}
.footer__links li {
	margin-right: 2rem;
}
.footer__links li:last-child {
	margin-right: 0;
}
.footer__links li a {
	color: var(--color-white);
	font-size: var(--fs-14);
	font-family: var(--montserat);
	text-decoration: none;
	white-space: nowrap;
}
.footer__links li a:hover {
	color: var(--secondary-color);
}
.copyright {
	display: flex;
	align-items: center;
	font-size: var(--fs-14);
	font-family: var(--montserat);
	color: var(--color-white);
}

@media screen and (max-width: 1000px) {
	.footer-component {
		margin-top: 3rem;
	}
	.footer__inner__top img {
		width: 50px;
	}
	.footer__inner__bottom {
		grid-template-columns: 1fr;
		grid-row-gap: 2rem;
	}
	.footer__links {
		width: 100%;
	}
}

@media screen and (max-width: 500px) {
	.footer__links {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-row-gap: 1rem;
	}
}

@media screen and (max-width: 350px) {
	.footer__links {
		display: grid;
		grid-template-columns: 1fr;
		grid-row-gap: 1rem;
	}
}


</style>
