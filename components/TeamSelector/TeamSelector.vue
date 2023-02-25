<template>
  <div class="TeamSelector">
    <ContentWrapper>
      <ul class="TeamSelector-List">
        <li
          :class="getActiveLinkClasses(team)"
          v-for="team in teams"
          :key="team.slug"
          @click="handleMenuItemClick(team.slug)"
        >
          {{ team.name }}
        </li>
      </ul>
    </ContentWrapper>
  </div>
</template>
    
<script>
import pageData from "~~/data/page-data";
import "./TeamSelector.scss";

export default {
  data() {
    return {
      teams: pageData.teams,
    };
  },
  methods: {
    handleMenuItemClick(slug) {
      this.$emit("setActiveSlug", slug);
    },
    getActiveLinkClasses(team) {
      return team.slug === this.activeSlug
        ? "TeamSelector-ListItem_isActive TeamSelector-ListItem"
        : "TeamSelector-ListItem";
    },
  },
  props: {
    activeSlug: {
      type: String,
      required: true,
    },
  },
};
</script>