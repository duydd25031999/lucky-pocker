<template>
  <div class="w-100 p-2 selection__row">
    <div class="row align-items-center">
      <div class="d-none d-md-block col-2 text-center">
        {{ indexString }}
      </div>
      <div class="col-6 col-md-6 text-center">
        {{ name }}
      </div>
      <div class="col-6 col-md-4 text-center">
        <span v-if="isHeader">Choice</span>
        <OptionCard v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OptionCard from "./OptionCard.vue";

export default defineComponent({
  name: "SelectionRow",
  components: {
    OptionCard
  },
  props: {
    isHeader: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    indexString() {
      return this.isHeader ? "Index" : this.index;
    },
    name() {
      return this.isHeader ? "Name" : "Hello World";
    }
  }
});
</script>

<style lang="scss">
.selection {
  &__row {
    background-color: $color-white;
    border-radius: $radius;
  }
}
</style>
