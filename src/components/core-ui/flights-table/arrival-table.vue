<template>
	<div class="arrival-table">
		<div class="container">
			<div class="arrival-table__inner">

				<div class="filter-component">
					<select>
						<option>Scheduled time</option>
						<option>Flight number</option>
						<option>Arriving from</option>
						<option>Status</option>
					</select>
					<input type="date">
				</div>

				<div class="table">

					<div class="table-header">
						<div class="column scheduled">Scheduled</div>
						<div class="column flight">Flight</div>
						<div class="column from">Arriving from</div>
						<div class="column airlines">Airline</div>
						<div class="column terminal">Terminal</div>
						<div class="column status">Status</div>
					</div>

					<div class="table-body">
						<div
							class="row"
							v-for="(data, index) in tableData"
							:key="index"
						>
							<div class="column scheduled">{{ data.scheduled }}</div>
							<div class="column flight">{{ data.flight }}</div>
							<div class="column from">{{ data.from }}</div>
							<div class="column airlines">{{ data.airlines }}</div>
							<div class="column terminal">{{ data.terminal }}</div>
							<div class="column status">{{ data.status }}</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";

export default defineComponent({
	name: "arrival-table",
	setup () {
		const tableData = reactive([
			{
				scheduled: "12:05",
				flight: "AA156",
				from: "Seattle",
				airlines: "American Airline",
				terminal: "T5",
				status: "Landed"
			},
			{
				scheduled: "12:05",
				flight: "AA156",
				from: "Seattle",
				airlines: "American Airline",
				terminal: "T5",
				status: "Landed"
			},
		])

		return {
			tableData
		}
	}
})
</script>

<style scoped>
.filter-component {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 2rem;
	padding: 2rem;
	background-color: var(--primary-color);
	margin-bottom: 4rem;

}
.filter-component select,
.filter-component input {
	width: 100%;
	padding: 1rem;
	outline: none;
	border: 1px solid grey;
}
.table-header {
	padding: 2rem 0;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-column-gap: 2rem;
	border-top: 1px solid grey;
	border-bottom: 1px solid grey;
	font-size: var(--fs-14);
	font-family: var(--montserat);
	font-weight: var(--font-wieght-semibold);
	text-wrap: initial;
}
.scheduled {
	grid-column: 1/3;
}
.flight {
	grid-column: 3/4;
}
.from {
	grid-column: 4/7;
}
.airlines {
	grid-column: 7/10;
}
.terminal {
	grid-column: 10/12;
}
.status {
	grid-column: 12/13;
}
.row {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	padding: 2rem 0;
	border-bottom: 1px solid grey;
	font-size: var(--fs-12);
	font-family: var(--montserat);
	grid-column-gap: 2rem;
}

@media screen and (max-width: 550px) {
	.airlines {
		display: none;
	}
	.table-header {
		grid-template-columns: repeat(5, 1fr);
	}
	.scheduled {
		grid-column: 1/2;
	}
	.flight {
		grid-column: 2/3;
	}
	.from {
		grid-column: 3/4;
	}
	.terminal {
		grid-column: 4/5;
	}
	.status {
		grid-column: 5/6;
	}
	.row {
		grid-template-columns: repeat(5, 1fr);
	}
	.filter-component {
		grid-template-columns: 1fr;
		grid-row-gap: .5rem;
	}
}

</style>
