<template>
  <div>
    <StandardButton v-for="i in 1000" :key="i">Click me</StandardButton>
  </div>
</template>

<script>
import StandardButton from '@/components/StandardButton.vue';

export default {
  components: {
    StandardButton,
  },
};
</script>
