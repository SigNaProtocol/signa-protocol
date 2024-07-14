<template>
  <div class="view-account">
    <!-- <div class="view-account-header" @click="toIndex">Money</div> -->
    <div class="homeWrapper"><slot /></div>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
const toIndex = () => {
  router.replace("/");
};
</script>

<style lang="scss" scoped>
.view-account {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: rgb(245, 245, 245);
  &-header {
    margin-top: 20px;
    margin-left: 40px;
    font-size: 40px;
    color: #fff;
    cursor: pointer;
  }
}
.homeWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 60vw;
  height: 100%;
}
</style>
