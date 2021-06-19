<template>
	<div class="web-nav-dropdown"
		v-show="dropDropdown"
	>
		<div class="container">
			<div class="web-nav-dropdown-inner"
				v-for="(_drop, index) in webNavDropdown"
				:key="index"
			>
				<div v-if="_drop.listItem ==='Flights'">{{ _drop }}</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "web-nav-dropdown",
	props: [
		"webNavDropdown",
		"dropDropdown",
	]
})
</script>

<style scoped>
.web-nav-dropdown {
	width: 100%;
	padding: 1rem;
	background-color: var(--color-white);
}

</style>
