<template>
  <ContentWrapper>
    <section v-for="role in roleNamesArr" :key="role" class="PlayerSection">
      <div v-if="hasNoChildren(role)"></div>
      <div v-else>
        <h3 class="PlayerSection-SectionHeading">{{ role }}</h3>
        <div class="PlayerSection-CardSectionWrapper">
          <PlayerCard
            v-for="player in playerSortedByRolesObject[role]"
            :key="player.surname"
            :player="player"
          />
        </div>
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
  methods: {
    hasNoChildren(role) {
      return this.playerSortedByRolesObject[role] === undefined;
    },
  },
  props: {
    roleNamesArr: {
      type: Array || null,
      default: () => [],
    },
    playerSortedByRolesObject: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>