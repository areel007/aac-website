<template>
	<p>{{ titleText }}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "section-title",
	props: ["titleText"]
})
</script>

<style scoped>
p {
	font-size: var(--fs-50);
	font-family: var(--montserat);
	margin: var(--section__title__margin, 0);
}

@media screen and (max-width: 1000px) {
	p {
		font-size: var(--fs-32);
	}
}

</style>
