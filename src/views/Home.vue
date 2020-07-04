<template>
  <div>
    <Navbar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '../components/Navbar';

export default Vue.extend({
  name: 'Home',
  components: {
    Navbar,
  },
});
</script>

<style></style>
