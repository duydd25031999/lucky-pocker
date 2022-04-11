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
      <div class="p-5">
        <div class="row">
          <div class="col-12 col-lg-6">
            <h1 class="text-center">Welcome</h1>

            <div class="form-group">
              <label for="nameInput">Join Name</label>

              <div class="mt-2 w-100 home__input">
                <input class="w-100 p-2" name="" id="nameInput" />
              </div>
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>

            <div class="form-group mt-2">
              <label for="roomInput">Room ID</label>

              <div class="mt-2 w-100 home__input">
                <input class="w-100 p-2" name="" id="roomInput" />
              </div>
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>

            <button class="btn btn-primary btn-block w-100 my-2">
              Joim Room
            </button>
          </div>
          <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
            <img alt="Home Icon" class="w-50" src="../assets/HomeIcon.png" />
            <p class="display-4">Create a Room</p>
            <div class="w-100 row">
              <div class="col-6 d-flex justify-content-center p-1">
                <div class="h-100 p-2 d-flex flex-column home__create">
                  <div
                    class="
                      w-100
                      d-flex
                      justify-content-center
                      align-items-center
                      home__create-img
                    "
                    @click="createVoteRoom"
                  >
                    <img alt="Vote Room" src="../assets/vote.png" />
                  </div>
                  <p class="h5 text-center mt-2 mb-0">Voting Room</p>
                </div>
              </div>
              <div class="col-6 d-flex justify-content-center p-1">
                <div class="h-100 p-2 d-flex flex-column home__create">
                  <div
                    class="
                      w-100
                      d-flex
                      justify-content-center
                      align-items-center
                      home__create-img
                    "
                  >
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
import router from "@/router/index";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  methods: {
    createVoteRoom() {
      router.push({
        name: "vote-room",
        params: {
          roomId: 123,
        },
      });
    },
  },
});
</script>

<style lang="scss">
.home {
  background-color: $color-bg-home;

  &__card {
    background-color: $color-bg-card;
    border-radius: $radius;
    box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
  }

  &__create {
    &-img {
      flex-grow: 1;
      width: 100%;
      max-width: 150px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  &__input {
    input {
      outline: none;
      border: none;
      border-radius: $radius;

      &:focus {
        border: none;
        outline: none;
      }
    }
  }

  &__input,
  &__create {
    border: 3px solid $color-bg-card;
    background-color: $color-white;
    border-radius: $radius;
    cursor: pointer;

    transition: transform 0.6s linear;

    &:hover {
      border-color: $primary;
      box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
    }
  }
}
</style>
