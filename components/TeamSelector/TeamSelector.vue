<template>
  <div class="TeamSelector">
    <ContentWrapper>
      <ul class="TeamSelector-List">
        <li
          class="TeamSelector-ListItem"
          v-for="team in teams"
          :key="team.slug"
        >
          {{ team.name }}
        </li>
      </ul>
    </ContentWrapper>
  </div>
</template>
    
<script>
import pageData from "~~/data/page-data";
import './TeamSelector.scss'

export default {
  data() {
    return {
      teams: pageData.teams,
    };
  },
};
</script>