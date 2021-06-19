<template>
	<div class="departures">
		<feedback></feedback>
		<sub-page-header></sub-page-header>
		<departure-page-banner></departure-page-banner>
		<arrival-table></arrival-table>
		<sub-page-footer></sub-page-footer>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DeparturePageBanner from "@/components/core-ui/banner/departure-page-banner.vue";
import SubPageHeader from "@/components/core-ui/header/sub-page-header.vue";
import Feedback from "@/components/core-ui/feedback/feedback.vue";
import ArrivalTable from "@/components/core-ui/flights-table/arrival-table.vue";
import SubPageFooter from "@/components/core-ui/footer/sub-page-footer.vue";

export default defineComponent({
	name: "departures",
	components: {SubPageFooter, ArrivalTable, Feedback, SubPageHeader, DeparturePageBanner},
})
</script>

<style scoped>

</style>
