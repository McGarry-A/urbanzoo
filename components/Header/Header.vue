<template>
  <header class="Header">
    <ContentWrapper>
      <div class="Header-Container">
        <div class="Header-ContainerLeft">
          <h1 class="Header-PageHeading">{{ pageHeading }}</h1>
          <h2 class="Header-PageSubheading">
            {{ teamsTitle }}
            <span class="Header-PageSubheadingCurrentSeason">{{
              currentSeason
            }}</span>
          </h2>
        </div>
        <div class="Header-ContainerRight">
          <img
            src="../../images/Logo.png"
            alt="Aston Villa F.C. Crest"
            title="Aston Villa F.C. Crest"
            class="Header-Logo"
          />
        </div>
      </div>
    </ContentWrapper>
  </header>
</template>

<script lang="ts">
import data from "../../data/page-data";
import "./Header.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper.vue";
export default {
  data() {
    return {
      pageHeading: "Aston Villa F.C.",
      currentSeason: data.currentSeason,
      teamsTitle: "Your Teams",
    };
  },
  components: {
    ContentWrapper,
  },
};
</script>