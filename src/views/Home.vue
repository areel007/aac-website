<template>
	<feedback-form
		:is-feedback-form-show="isFeedbackShow"
		@close-feedback-form="closeFeedbackForm"
	></feedback-form>
  <div
	  class="home"
	  id="home"
	  :class="{'freeze': isFeedbackShow}"
  >
	  <feedback @feedback-action="feedbackAction"></feedback>
	  <scroll-up></scroll-up>
	  <mobile-nav
		  :is-mobile-menu-show="isMobileMenuShow"
		  @close="close"
		  @toggle-sub-item="toggleSubItem($event)"
		  :mobile-nav-list-items="mobileNavListItems"
	  ></mobile-nav>
	  <search-component
		  :is-search-hidden="isSearchHidden"
	  ></search-component>
	  <header-component
		  :web-navigation-links="webNavigationLinks"
		  :is-search-hidden="isSearchHidden"
		  @search-button-action="searchButtonAction"
		  @cancel-button-action="cancelButtonAction"
		  @mobile-menu-button-action="mobileMenuButtonAction"
		  :drop-dropdown="dropDropdown"
	  ></header-component>
	  <search-component
		  @search-button-action="searchButtonAction"
		  @cancel-button-action="cancelButtonAction"
		  :is-search-hidden="isSearchHidden"
	  ></search-component>
	  <home-page-banner></home-page-banner>
	  <schedule></schedule>
	  <main>
		  <travel-info></travel-info>
		  <experience></experience>
		  <advertisement></advertisement>
	  </main>
	  <footer>
		  <footer-component></footer-component>
	  </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import HeaderComponent from "@/components/core-ui/header/header-component.vue";
import SearchComponent from "@/components/core-ui/search/search-component.vue";
import HomePageBanner from "@/components/core-ui/banner/home-page-banner.vue";
import MobileNav from "@/components/core-ui/mobile-nav/mobile-nav.vue";
import Feedback from "@/components/core-ui/feedback/feedback.vue";
import TravelInfo from "@/components/core-ui/travel-info/travel-info.vue";
import Experience from "@/components/core-ui/experience/experience.vue";
import Advertisement from "@/components/core-ui/advertisement/advertisement.vue";
import Schedule from "@/components/core-ui/schedules/schedule.vue";
import FooterComponent from "@/components/core-ui/footer/footer-component.vue";
import ScrollUp from "@/components/core-ui/scroll-up/scroll-up.vue";
import FeedbackForm from "@/components/core-ui/feedback/feedback-form.vue";

export default defineComponent({
	name: "Home",
	components: {
		FeedbackForm,
		ScrollUp,
		FooterComponent,
		Schedule,
		Advertisement,
		Experience,
		TravelInfo,
		Feedback,
		MobileNav,
		HomePageBanner,
		SearchComponent,
		HeaderComponent,
	},
	setup () {
		//Data

		const webNavigationLinks = reactive([
			{
				listItem: "Flights",
				subItems: [
					{
						subListItem: "Arrivals",
						url: "/flights/arrivals"
					},
					{
						subListItem: "Departures",
						url: "/flights/departures"
					},
					{
						subListItem: "Travel guide",
						url: "/flights/travel-guide"
					},
				]
			},
			{
				listItem: "At the Airport",
				subItems: [
					{
						subListItem: "Fly Safe",
						url: "/flights/at-the-airport"
					},
					{
						subListItem: "Safety Measures",
						url: "/flights/departures"
					},
					{
						subListItem: "Frequently Asked Questions (FAQs)",
						url: "/flights/travel-guide"
					},
					{
						subListItem: "Testing",
						url: "/flights/at-the-airport"
					},
				]
			},
			{
				listItem: "Transport & Directions",
				subItems: [
					{
						subListItem: "Arrivals",
						url: "/flights/arrivals"
					},
					{
						subListItem: "Departures",
						url: "/flights/departures"
					},
					{
						subListItem: "Travel guide",
						url: "/flights/travel-guide"
					},
				]
			},
			{
				listItem: "Shop & Eat",
				subItems: [
					{
						subListItem: "Arrivals",
						url: "/flights/arrivals"
					},
					{
						subListItem: "Departures",
						url: "/flights/departures"
					},
					{
						subListItem: "Travel guide",
						url: "/flights/travel-guide"
					},
				]
			},
			{
				listItem: "Rewards",
				subItems: [
					{
						subListItem: "Arrivals",
						url: "/flights/arrivals"
					},
					{
						subListItem: "Departures",
						url: "/flights/departures"
					},
					{
						subListItem: "Travel guide",
						url: "/flights/travel-guide"
					},
				]
			},
			{
				listItem: "Booking",
				subItems: [
					{
						subListItem: "Arrivals",
						url: "/flights/arrivals"
					},
					{
						subListItem: "Departures",
						url: "/flights/departures"
					},
					{
						subListItem: "Travel guide",
						url: "/flights/travel-guide"
					},
				]
			},
			{
				listItem: "Company",
				subItems: [
					{
						subListItem: "Arrivals",
						url: "/flights/arrivals"
					},
					{
						subListItem: "Departures",
						url: "/flights/departures"
					},
					{
						subListItem: "Travel guide",
						url: "/flights/travel-guide"
					},
				]
			},
		])

		const isSearchHidden = ref(true)

		const isMobileMenuShow = ref(false)

		const mobileNavListItems = reactive([
			{
				listItem: "Flights",
				showItem: false,
				subItems: [
					{
						subListItem: "Arrivals",
						url: "/flights/arrivals"
					},
					{
						subListItem: "Departures",
						url: "/flights/departures"
					},
					{
						subListItem: "Travel guide",
						url: "/flights/travel-guide"
					},
				]
			},
			{
				listItem: "At the Airport",
				showItem: false,
				subItems: [
					{
						subListItem: "Arrivals",
						url: "/flights/arrivals"
					},
				]
			},
		])

		const showSubItems = ref(false)

		const dropDropdown = ref(false)

		const isFeedbackShow = ref(false)

		//Methods

		const searchButtonAction = () => {
			isSearchHidden.value = false
		}

		const cancelButtonAction = () => {
			isSearchHidden.value = true
		}

		const mobileMenuButtonAction = () => {
			isMobileMenuShow.value = true
		}

		const  close =() => {
			isMobileMenuShow.value = false
		}

		const toggleSubItem = (e: any) => {
			mobileNavListItems.filter( (mobileNavItemList: any) => {
				if(mobileNavItemList.listItem === e.listItem) {
					e.showItem = !e.showItem
				}
			})
		}

		const feedbackAction = () => {
			isFeedbackShow.value = true
		}

		const closeFeedbackForm = () => {
			isFeedbackShow.value = false
		}


		return {
			webNavigationLinks,
			isSearchHidden,
			searchButtonAction,
			cancelButtonAction,
			isMobileMenuShow,
			mobileMenuButtonAction,
			close,
			mobileNavListItems,
			showSubItems,
			toggleSubItem,
			dropDropdown,
			isFeedbackShow,
			feedbackAction,
			closeFeedbackForm,
		}
	}


});
</script>

<style scoped>
.home {
	position: relative;
}
main {
	position: relative;
}
footer {
	position: relative;
}
.freeze {
	position: fixed;
	width: 100%;
	opacity: .2;
}

</style>
