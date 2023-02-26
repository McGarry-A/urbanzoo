<template>
  <footer class="Footer">
    <ContentWrapper>
      <h1 class="Footer-Slogan">PREPARED</h1>
    </ContentWrapper>
  </footer>
</template>

<script lang="ts">
import "./Footer.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper.vue";
export default {
  components: {
    ContentWrapper,
  },
};
</script>