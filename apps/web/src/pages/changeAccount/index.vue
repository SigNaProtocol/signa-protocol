<template>
  <div class="up-app">
    <div id="page-setting" class="page start">
      <div class="up-header">
        <div class="left" @click="toBack">
          <van-icon name="arrow-left" size="20" color="#1989fa" />
          <div class="title">账户管理</div>
        </div>

        <div class="right"><!----></div>
      </div>
      <div style="margin-top: 30px">
        <div class="panel" @click="editAccount">
          <div class="left"></div>
          <span>Account A</span>
        </div>
      </div>
      <van-dialog
        v-model:show="editShow"
        title="编辑账户名"
        showCancelButton
        confirm-button-text="确定"
        cancel-button-text="取消"
        @confirm="confirm"
        @cancel="cancel"
      >
        <van-field
          v-model="newName"
          autosize
          autofocus
          maxlength="30"
          placeholder="请输入新名称"
          show-word-limit
        />
      </van-dialog>

      <van-button
        style="margin-top: 60px"
        block
        plain
        type="primary"
        @click="logout"
        >登录其他账户</van-button
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const router = useRouter();
const editShow = ref(false);
const newName = ref("");

function editAccount() {
  editShow.value = true;
}
function cancel() {
  editShow.value = false;
}
function confirm() {
  console.log(newName.value);
  editShow.value = false;
}
const logout = () => {
  router.push("/");
};
const toBack = () => history.back();
</script>
<style lang="scss" scoped>
.panel {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  flex-direction: row;
  padding: 6px 8px;
  border: 1px solid rgb(61, 69, 251);
  background: rgb(239, 240, 255);
  border-radius: 16px;
  cursor: pointer;
  width: 100%;
  .left {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: #000;
    border: 1px solid #fff;
    margin-right: 10px;
    background-image: url(@/assets/avatar.svg);
    background-size: cover;
  }
}

.start {
  justify-content: start;
}
.up-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.up-header {
  justify-content: space-between;
}

.up-header,
.up-header > .left {
  display: flex;
  align-items: center;
}

.up-header > .left > .iconpark {
  cursor: pointer;
}

.up-header > .left > .icon-back {
  font-size: 24px;
}

.up-header > .left > .title {
  margin-left: 12px;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}

.up-header > .right {
  display: flex;
  align-items: center;
}

.up-header > .right > .icon-more {
  cursor: pointer;
  font-size: 24px;
}
</style>
