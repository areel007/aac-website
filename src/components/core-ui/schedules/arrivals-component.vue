<template>
	<div class="arrivals">
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
				<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16
				9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5
				16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49
				19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5
				14 7.01 14 9.5 11.99 14 9.5 14z"/>
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
import {defineComponent, ref} from "vue";

export default defineComponent({
	name: "arrivals-component",
	data () {
		return {
			datePicked: null
		}
	},
})
</script>

<style scoped>
.arrivals {
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
	grid-column-gap: 4rem;
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
.search {
	display: flex;
	align-items: center;
	/*height: 100%;*/
}
.search input[type=text] {
	height: 100%;
	outline: none;
	border: 1px solid transparent;
	color: var(--primary-color);
	font-size: var(--fs-16);
	font-family: var(--montserat);
}
.search input[type=text]::placeholder {
	font-size: var(--fs-16);
	font-family: var(--montserat);
}
.search svg {
	fill: var(--primary-color);
}
.view-all-arrivals {
	display: flex;
	align-items: center;
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
	.arrivals {
		grid-template-columns: 1fr;
		grid-row-gap: 2rem;
	}
	.view-all-arrivals {
		justify-content: flex-end;
	}
}
</style>
