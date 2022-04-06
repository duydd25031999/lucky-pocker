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
    <div class="container">
      <div class="p-2 home__card">
        <div class="row">
          <div class="col-6 d-flex flex-column">
            <img alt="Rotation Logo" src="../assets/rotation.png">
          </div>
          <div class="col-6">Welcome</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
.home {
  background-color: $color-home-bg;

  &__card {
    background-color: $color-white;
    border-radius: $radius;
    box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
  }
}
</style>
