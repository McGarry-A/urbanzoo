<template>
  <section v-for="role in roles" :key="role" class="PlayerSection">
    <div v-if="hasChildren(role)" class="PlayerSection-Section">
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

<script lang="ts">
import "./PlayerSection.scss";
export default {
  methods: {
    hasChildren(role: string) {
      return this.playerSortedByRolesObject[role] !== undefined;
    },
  },
  computed: {
    roles() {
      if (!this.playerSortedByRolesObject) return [];
      return Object.keys(this.playerSortedByRolesObject);
    },
  },
  props: {
    playerSortedByRolesObject: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>