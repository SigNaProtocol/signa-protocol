<template>
  <div class="up-app">
    <div id="page-connect" class="page">
      <div class="header">AnoCash</div>
      <div class="page-login">
        <div class="logo">
          <img :src="loginImage" class="arrow" alt="" />
        </div>
        <!---->
        <div class="oauth-box">
          <div class="one">
            <van-button
              round
              block
              type="primary"
              size="large"
              @click="create"
              style="border-radius: 16px"
              ><span>创建新账户</span></van-button
            >
          </div>
          <div class="one">
            <van-button
              round
              plain
              block
              type="primary"
              size="large"
              @click="login"
              style="border-radius: 16px"
              ><span>通过 Passkey 登录</span></van-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import loginImage from "@/assets/analysis.svg";

const router = useRouter();

onMounted(() => {
  const test = useHide();
});

function create() {
  showDialog({
    message: "创建新账户",
    showConfirmButton: true,
    confirmButtonColor: "#1989fa",
    closeOnClickOverlay: true,
  }).then(() => {
    // 点击按钮
    router.push("/account");
  });
}
function login() {
  showDialog({
    message: "通过 Passkey 登录",
    showConfirmButton: true,
    confirmButtonColor: "#1989fa",
    closeOnClickOverlay: true,
  }).then(() => {
    router.push("/account");
    // 点击按钮
  });
}
</script>
<style lang="scss" scoped>
.page {
  justify-content: flex-start;
}
.header {
  align-self: flex-start;
  font-size: 40px;
  font-style: italic;
}
.page-login {
  .logo {
    display: block;
    margin-top: 80px;
    margin-bottom: 80px;
    width: 100%;
    height: 300px;
    img {
      height: 100%;
    }
  }

  .title {
    display: inline-block;
    position: relative;
    width: 150px;
    white-space: nowrap;
    animation: typing 2.5s ease-in;
    overflow: hidden;
    color: #1989fa;
  }
  /* 打印效果 */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 150px;
    }
  }

  .oauth-box {
    margin-top: 40px;
    width: 100%;
  }

  .oauth-box .one {
    cursor: pointer;
  }

  .oauth-box .one + .one {
    margin-top: 20px;
  }

  .oauth-box .one span {
    margin-left: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
