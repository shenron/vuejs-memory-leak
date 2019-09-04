<template>
  <div>
    <FunctionalButton v-for="i in 1000" :key="i">Click me</FunctionalButton>
  </div>
</template>

<script>
import FunctionalButton from '@/components/FunctionalButton.vue';

export default {
  components: {
    FunctionalButton,
  },
};
</script>
