<template>
	<div class="connections">
		<div class="input__box date">
			<label>Pick a date</label>
			<div class="date-picker__box">
				<span class="date__picked">{{ datePicked }}</span>
				<span class="datepicker-toggle">
					<span class="datepicker-toggle-button">
						<svg
							height="18px"
							viewBox="0 0 24 24"
							width="18px"
							fill="#004151"
						>
							<path d="M0 0h24v24H0V0z" fill="none"/>
							<path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9
							2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2
							1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5
							8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4
							0h2v-2h-2v2z"/>
						</svg>
					</span>
					<input
						type="date"
						class="datepicker-input"
						v-model="datePicked"
					>
				</span>
			</div>
		</div>
		<div class="input__box search">
			<input type="text" placeholder="Search airline, flight no., or city">
			<svg
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
				fill="#000000"
			>
				<path d="M0 0h24v24H0V0z" fill="none"/>
				<path d="M2.5 19h19v2h-19v-2zm16.84-3.15c.8.21
				1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15
				8.95l-.93-2.32-1.45-.39v5.17l16.57 4.44z"/>
			</svg>
		</div>
		<div class="input__box search-two">
			<input type="text" placeholder="Search airline, flight no., or city">
			<svg
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
				fill="#000000"
			>
				<path d="M0 0h24v24H0V0z" fill="none"/>
				<path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92
				10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59
				4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"/>
			</svg>
		</div>
		<p class="view-all-arrivals">
			<router-link to="/">View all Arrivals</router-link>
			<svg
				height="16px"
				viewBox="0 0 24 24"
				width="16px"
				fill="#fff"
			>
				<path d="M0 0h24v24H0V0z" fill="none"/>
				<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
			</svg>
		</p>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "connection-components",
	data () {
		return {
			datePicked: null
		}
	},
})
</script>

<style scoped>
.connections {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 4rem;
	grid-row-gap: 4rem;
}
.date {
	grid-column: 1/2;
}
.input__box {
	background-color: var(--color-white);
	padding: 1rem 2rem;
	height: 7rem;
}
.input__box label {
	display: block;
	margin-bottom: .5rem;
	font-family: var(--montserat);
	font-size: var(--fs-11);
}
.input__box input {
	width: 100%;
}
.date-picker__box {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.date__picked {
	font: var(--font-montserat-body-1);
}
.search,
.search-two {
	display: flex;
	align-items: center;
	/*height: 100%;*/
}
.search input[type=text],
.search-two input[type=text] {
	height: 100%;
	outline: none;
	border: 1px solid transparent;
	color: var(--primary-color);
	font-size: var(--fs-16);
	font-family: var(--montserat);
}
.search input[type=text]::placeholder,
.search-two input[type=text]::placeholder {
	font-size: var(--fs-16);
	font-family: var(--montserat);
}
.search svg,
.search-two svg {
	fill: var(--primary-color);
}
.view-all-arrivals {
	display: flex;
	align-items: center;
	grid-column: 3/4;
	justify-content: flex-end;
}
.view-all-arrivals a {
	text-decoration: none;
	color: var(--color-white);
	font: var(--font-montserat-body-1);
}
.view-all-arrivals svg {
	margin-left: 1rem;
}
.view-all-arrivals:hover svg {
	transform: translateX(.5rem);
	transition: transform .5s ease;
}


/* Date Picker*/
.datepicker-toggle {
	display: inline-block;
	position: relative;
	width: 18px;
	height: 19px;
}
.datepicker-toggle-button {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}

.datepicker-input {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
	box-sizing: border-box;
}
.datepicker-input::-webkit-calendar-picker-indicator {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	cursor: pointer;
}
.datepicker-toggle:hover .datepicker-toggle-button svg {
	transform: scale(1.3);
	transition: transform .3s ease;
}

@media screen and (max-width: 1000px) {
	.connections {
		grid-template-columns: 1fr;
		grid-row-gap: 2rem;
	}
	.date {
		grid-row: 1/2;
		grid-column: 1/4;
	}
	.search {
		grid-row: 2/3;
		grid-column: 1/4;
	}
	.search-two {
		grid-row: 3/4;
		grid-column: 1/4;
	}
	.view-all-arrivals {
		justify-content: flex-end;
	}
}

</style>
