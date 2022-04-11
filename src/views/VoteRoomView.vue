<template>
  <div
    class="
      vw-100
      min-vh-100
      d-flex
      justify-content-center
      align-items-center
      home
    "
  >
    <div class="container-md home__card">
      <div class="p-4">
        <div class="row">
          <div class="col-12 col-lg-6">
            <h1 class="text-center">Vote Options</h1>
            <div class="py-2">
              <div class="d-flex align-items-center justify-content-between">
                <div class="p-2 vote-room__btn">Edit</div>
                <p>ID: {{ roomId }}</p>
                <div class="p-2 vote-room__btn">Share</div>
              </div>
            </div>

            <div class="row">
              <div
                class="col-6 col-md-3 mb-4"
                v-for="(i, index) in options"
                :key="index"
              >
                <OptionCard is-big />
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
            <h1 class="text-center">Result</h1>
            <div class="d-flex justify-content-between w-100 py-2">
              <div class="p-2 vote-room__btn">Show</div>
              <div class="p-2 vote-room__btn">Delete</div>
            </div>
            <SelectionRow is-header />
            <div class="w-100 mt-2">
              <SelectionRow
                v-for="(i, index) in options"
                :key="index"
                class="mb-1"
                :index="index + 1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import OptionCard from "@/components/vote/OptionCard.vue";
import SelectionRow from "@/components/vote/SelectionRow.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VoteRoomView",
  components: {
    OptionCard,
    SelectionRow,
  },
  data: () => ({
    options: [1, 2, 3, 4],
  }),
  computed: {
    roomId() {
      return this.$route.params.roomId
    }
  }
});
</script>

<style lang="scss">
.vote-room {
  &__btn {
    border-radius: $radius;
    background-color: $color-white;
    cursor: pointer;
  }
}
</style>
