<template>
  <div class="up-app">
    <div id="page-setting" class="page start">
      <div class="up-header">
        <div class="left" @click="toBack">
          <van-icon name="arrow-left" size="20" color="#1989fa" />
          <div class="title">Nostr Key</div>
        </div>

        <div class="right"><!----></div>
      </div>
      <div style="margin-top: 30px">
        <div class="panel">
          <span>Nostr 公钥:</span>
          <p>foeiuwbvooeiuhfpiwenfioubwoebwoiuehfnewjdnowebgo vwoeiufewge</p>
        </div>
      </div>
      <div style="margin-top: 30px">
        <div class="panel">
          <span>Nostr 私钥:</span>
          <p>foeiuwbvooeiuhfpiwenfioubwoebwoiuehfnewjdnowebgo vwoeiufewge</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const toBack = () => history.back();
</script>
<style lang="scss" scoped>
.panel {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 16px 18px;
  border: 1px solid rgb(61, 69, 251);
  background: rgb(239, 240, 255);
  border-radius: 16px;
  width: 100%;
  span {
    font-size: 18px;
  }
  p {
    text-align: left;
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
