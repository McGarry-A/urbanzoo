<template>
  <ContentWrapper>
    <section v-for="role in roleNamesArr" :key="role" class="PlayerSection">
        <h3 class="PlayerSection-SectionHeading">{{ role }}</h3>
        <div class="PlayerSection-CardSectionWrapper">
          <PlayerCard
            v-for="player in playerSortedByRolesObject[role]"
            :key="player.surname"
            :player="player"
          />
          </div>
    </section>
  </ContentWrapper>
</template>

<script>
import "./PlayerSection.scss";
export default {
  data() {
    return {
      data: null,
    };
  },
  props: {
    roleNamesArr: {
      type: Array || null,
    },
    playerSortedByRolesObject: {
      type: Object || null,
    },
  },
};
</script>