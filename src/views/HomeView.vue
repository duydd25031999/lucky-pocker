<template>
  <div
    class="vw-100 min-vh-100 d-flex justify-content-center align-items-center home"
  >
    <div class="container-md home__card">
      <div class="p-3">
        <div class="row">
          <div class="col-12 col-md-6">Welcome</div>
          <div class="col-12 col-md-6 d-flex flex-column align-items-center">
            <img alt="Home Icon" class="w-50" src="../assets/HomeIcon.png" />
            <p class="display-4">Create a Room</p>
            <div class="w-100 row">
              <div class="col-6 d-flex justify-content-center p-1">
                <div class="h-100 p-2 d-flex flex-column home__create">
                  <div class="w-100 d-flex justify-content-center align-items-center home__create-img">
                    <img alt="Vote Room" src="../assets/vote.png" />
                  </div>
                  <p class="h5 text-center mt-2 mb-0">Voting Room</p>
                </div>
              </div>
              <div class="col-6 d-flex justify-content-center p-1">
                <div class="h-100 p-2 d-flex flex-column home__create">
                  <div class="w-100 d-flex justify-content-center align-items-center home__create-img">
                    <img alt="Random Person" src="../assets/rotation.png" />
                  </div>
                  <p class="h5 text-center mt-2 mb-0">Random Person</p>
                </div>
              </div>
            </div>
          </div>
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

  &__create {
    border-radius: $radius;
    border: 3px solid $color-home-bg;
    cursor: pointer;

    transition: transform 0.6s linear;

    &-img {
      flex-grow: 1;
      width: 100%;
      max-width: 150px;

      img {
        width: 100%;
        height: auto;
      }
    }

    &:hover {
      border-color: $primary;
      box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
    }
  }
}
</style>
