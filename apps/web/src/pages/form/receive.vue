<template>
  <div class="up-app">
    <div id="page-send" class="page-sign page start">
      <div class="up-header">
        <div class="left" @click="toback">
          <van-icon name="arrow-left" size="20" color="#1989fa" />
          <div class="title">Receive</div>
        </div>

        <div class="right"><!----></div>
      </div>
      <form class="el-form el-form--default el-form--label-right send-form">
        <div class="qrcode">
          <QRCodeVue3 :width="200" :height="200" value="Simple QR code" />
        </div>
        <div class="tips">
          <div class="full-tips">
            scan the qr code scan the qr code scan the qr code scan the qr code
            scan the qr code
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import QRCodeVue3 from "qrcode-vue3";
const input1 = ref("");
const router = useRouter();
const toback = () => {
  router.push("/account");
};
</script>
<style lang="scss" scoped>
.start {
  justify-content: flex-start;
}
.up-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.qrcode {
  margin: 40px auto;
  width: 240px;
  height: 240px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
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
.send-form {
  .label {
    text-align: left;
    margin-top: 32px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
  }
  .token {
    margin-top: 20px;
    padding: 20px;
    background: var(--up-bg);
    border-radius: 12px;
  }

  .amount {
    margin-top: 20px;
  }

  .up-input {
    font-size: 20px;
    font-weight: 600;
    color: var(--up-text-third);
    .dollar {
      font-size: 14px;
      font-weight: 400;
      color: var(--up-text-third);
    }
    .line {
      margin: 16px;
      width: 1px;
      height: 18px;
      border: 1px solid var(--up-line);
    }
    .el-button {
      font-size: 16px;
      font-weight: 400;
    }
  }

  .to-address {
    margin-top: 20px;
  }

  .icon-loading {
    font-size: 15px;
    margin-right: 8px;
  }

  .tips {
    text-align: left;
    margin-top: 12px;
    span {
      color: var(--up-primary);
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
    .icon {
      position: relative;
      top: 4px;
      margin-right: 8px;
      margin-top: 2px;
      cursor: pointer;
    }
    .full-tips {
      font-size: 12px;
      line-height: 20px;
      color: var(--up-text-third);
      margin-top: 4px;
    }
  }

  .to-domain-success {
    margin-top: 12px;
    text-align: left;
    color: #4aac4c;
    font-weight: 450;
    font-size: 14px;
    line-height: 20px;
  }

  .submit {
    margin-top: 40px;
  }
}
</style>
