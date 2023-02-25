<template>
  <div>
    <Header />
    <TeamSelector :active-slug="activeSlug" @setActiveSlug="setActiveSlug" />
    <PlayerSection
      :role-names-arr="roleNamesArr"
      :player-sorted-by-roles-object="playerSortedByRolesObject"
    />
  </div>
</template>

<script>
import pageData from "~/data/page-data";
import playerData from "./data/player-data";

export default {
  data() {
    return {
      heading: pageData.pageHeading,
      currentSeason: pageData.currentSeason,
      activeSlug: "mens",
      teamData: null,
      playerSortedByRolesObject: null,
      roleNamesArr: null,
    };
  },
  computed: {},
  methods: {
    setActiveSlug(slug) {
      this.activeSlug = slug;
    },
    sortPlayersByRoles(activeSlug) {
      const playersSortedByPosition = {};
      const teamData = this.teamData;

      teamData[activeSlug].players.forEach((player) => {
        const playerPosition = player.position;

        if (playersSortedByPosition[playerPosition]) {
          playersSortedByPosition[playerPosition].push(player);
        } else {
          playersSortedByPosition[playerPosition] = [player];
        }
      });

      this.playerSortedByRolesObject = playersSortedByPosition;
    },
  },
  async mounted() {
    const response = await playerData();

    if (response) {
      this.teamData = response;
    }

    this.sortPlayersByRoles(this.activeSlug);
    this.roleNamesArr = Object.keys(this.playerSortedByRolesObject);
  },
  watch: {
    activeSlug() {
      this.sortPlayersByRoles(this.activeSlug);
    },
  },
};
</script>