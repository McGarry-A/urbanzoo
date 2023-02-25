<template>
  <figure class="PlayerCard">
    <a
      :href="player.profilePageUrl"
      class="PlayerCard-Link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="PlayerCard-Image"
        v-if="this.player.hasOwnProperty('squadImage')"
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
      <div class="PlayerCard-ShirtNumber" v-if="shirtNumber !== 'unknown'">
        <span class="PlayerCard-ShirtNumberText">{{ player.shirtNumber }}</span>
      </div>
    </a>
  </figure>
</template>

<script>
import "./PlayerCard.scss";

export default {
  computed: {
    fullName() {
      return `${this.player.firstName} ${this.player.surname}`;
    },
    shirtNumber() {
      return this.player.shirtNumber;
    },
    joinDate() {
      return this.player.joinDate;
    },
    joinDateAsDateString() {
      return new Date(this.player.joinDate).toDateString();
    },
  },
  props: {
    player: {
      firstName: String,
      surname: String,
      country: String,
      joinDate: String,
      position: String,
      squadImage: String || undefined,
      shirtNumber: String,
      profilePageUrl: String,
    },
  },
};
</script>