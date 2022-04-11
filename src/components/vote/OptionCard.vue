<template>
  <div
    class="p-1 d-flex align-items-center justify-content-center option__card"
    :class="cardClass"
  >
    Hello world
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OptionCard",
  props: {
    isBig: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({

  }),
  computed: {
    cardClass() {
      return {
        "option__card-big": this.isBig,
      }
    }
  }
});
</script>

<style lang="scss">
.option {
  &__card {
    background-color: $color-white;
    border-radius: $radius;
    box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
    cursor: pointer;
    border: 3px solid transparent;

    &-big {
      min-height: 200px;
    }

    &:hover, &.active {
        border-color: $primary;
    }
  }
}
</style>
