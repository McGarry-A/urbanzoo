<template>
  <div>
    <Header />
    <TeamSelector />
  </div>
</template>

<script>
import pageData from "~/data/page-data";

export default {
  data() {
    return {
      heading: pageData.pageHeading,
      currentSeason: pageData.currentSeason,
    };
  },
};
</script>