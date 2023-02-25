<template>
  <header class="Header">
    <ContentWrapper>
      <h1 class="Header-PageHeading">{{ pageHeading }}</h1>
      <h2 class="Header-PageSubheading">
        {{ teamsTitle }}
        <span class="Header-PageSubheadingCurrentSeason"
          >({{ currentSeason }})</span
        >
      </h2>
    </ContentWrapper>
  </header>
</template>

<script>
import data from "../../data/page-data";
import "./Header.scss";
export default {
  data() {
    return {
      pageHeading: "Aston Villa F.C.",
      currentSeason: data.currentSeason,
      teamsTitle: "Your Teams",
    };
  },
};
</script>