<template>
	<div class="flights">
		<feedback></feedback>
		<sub-page-header></sub-page-header>
		<arrival-page-banner></arrival-page-banner>
		<arrival-table></arrival-table>
		<sub-page-footer></sub-page-footer>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SubPageHeader from "@/components/core-ui/header/sub-page-header.vue";
import ArrivalPageBanner from "@/components/core-ui/banner/arrival-page-banner.vue";
import Feedback from "@/components/core-ui/feedback/feedback.vue";
import ArrivalTable from "@/components/core-ui/flights-table/arrival-table.vue";
import SubPageFooter from "@/components/core-ui/footer/sub-page-footer.vue";

export default defineComponent({
	name: "arrivals",
	components: {SubPageFooter, ArrivalTable, Feedback, ArrivalPageBanner, SubPageHeader},
})
</script>

<style scoped>
footer {
	position: relative;
}

</style>
