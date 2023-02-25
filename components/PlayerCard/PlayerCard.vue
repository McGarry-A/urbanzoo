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
        <h4 class="PlayerCard-CaptionTitle">{{ fullName }}</h4>
        <p class="PlayerCard-CaptionPosition">{{ player.position }}</p>
      </figcaption>
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