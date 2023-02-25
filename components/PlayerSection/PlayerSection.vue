<template>
  <section
    v-for="(role, index) in roleNamesArr"
    :key="role"
    class="PlayerSection"
  >
    <div v-if="hasNoChildren(role)"></div>
    <div
      v-else
      :class="index % 2 === 1 ? 'PlayerSection_Light' : 'PlayerSection_Dark'"
    >
      <ContentWrapper>
        <h3 class="PlayerSection-SectionHeading">{{ role }}</h3>
        <div class="PlayerSection-CardSectionWrapper">
          <PlayerCard
            v-for="player in playerSortedByRolesObject[role]"
            :key="player.surname"
            :player="player"
          />
        </div>
      </ContentWrapper>
    </div>
  </section>
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