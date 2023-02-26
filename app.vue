<template>
    <Header />
    <team-selector :active-slug="activeSlug" @setActiveSlug="setActiveSlug" />
    <player-section
      :player-sorted-by-roles-object="playerSortedByRolesObject"
    />
    <Footer />
</template>

<script lang="ts">
import pageData from "~/data/page-data";
import playerData from "./data/player-data";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import { PlayerSortedByRolesInterface } from "./types/playerSortedByRoles.interface";
import { TeamDataInterface } from "./types/teamData.interface";

export default {
  data() {
    return {
      heading: pageData.pageHeading,
      currentSeason: pageData.currentSeason,
      activeSlug: "mens",
      teamData: {} as TeamDataInterface,
      playerSortedByRolesObject: {} as PlayerSortedByRolesInterface,
    };
  },
  components: {
    Header,
    Footer,
    TeamSelector: () => import("./components/TeamSelector/TeamSelector.vue"),
    PlayerSection: () => import("./components/PlayerSection/PlayerSection.vue"),
  },
  methods: {
    setActiveSlug(slug: string) {
      this.activeSlug = slug;
    },
    sortPlayersByRoles(activeSlug: string) {
      const playerSortedByRolesObject: PlayerSortedByRolesInterface = {};
      const teamData = this.teamData;

      if (!teamData) return;

      teamData[activeSlug].players.forEach((player) => {
        const playerPosition = player.position;

        if (playerSortedByRolesObject[playerPosition]) {
          playerSortedByRolesObject[playerPosition].push(player);
        } else {
          playerSortedByRolesObject[playerPosition] = [player];
        }
      });

      this.playerSortedByRolesObject = playerSortedByRolesObject;
    },
  },
  async mounted() {
    const response = await playerData();

    if (response) {
      this.teamData = response;
    }

    this.sortPlayersByRoles(this.activeSlug);
  },
  watch: {
    activeSlug() {
      this.sortPlayersByRoles(this.activeSlug);
    },
  },
};
</script>