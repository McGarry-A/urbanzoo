<template>
  <figure class="PlayerCard">
    <a
      :href="hrefUrl"
      class="PlayerCard-Link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="PlayerCard-Image"
        v-if="hasSquadImage"
        :src="player.squadImage"
        :alt="fullName"
        :title="fullName"
      />
      <img
        class="PlayerCard-Image"
        v-else
        src="../../images/Logo.svg"
        :alt="fullName"
        :title="fullName"
      />
      <figcaption class="PlayerCard-Caption">
        <p class="PlayerCard-CaptionJoinedDate" v-show="joinDate">
          Since {{ joinDateAsDateString }}
        </p>
        <h4 class="PlayerCard-CaptionTitle">{{ fullName }}</h4>
        <p class="PlayerCard-CaptionPosition">{{ player.position }}</p>
      </figcaption>
      <div class="PlayerCard-ShirtNumber" v-if="hasShirtNumber">
        <span class="PlayerCard-ShirtNumberText">{{ player.shirtNumber }}</span>
      </div>
    </a>
  </figure>
</template>

<script lang="ts">
import "./PlayerCard.scss";
import { PlayerDataInterface } from "../../types/teamData.Interface";

export default {
  computed: {
    fullName() {
      return `${this.player.firstName} ${this.player.surname}`;
    },
    hasShirtNumber() {
      return this.player.shirtNumber !== "unknown";
    },
    joinDate() {
      return this.player.joinDate;
    },
    joinDateAsDateString() {
      return new Date(this.player.joinDate).toDateString();
    },
    hrefUrl() {
      return this.player.profilePageUrl === undefined
        ? this.player.pageProfileUrl
        : this.player.profilePageUrl;
    },
    hasSquadImage() {
      return this.player.hasOwnProperty("squadImage");
    },
  },
  props: {
    player : {
      type: Object as () => PlayerDataInterface,
      default: () => ({}),
    },
  },
};
</script>