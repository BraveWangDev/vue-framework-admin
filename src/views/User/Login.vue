<template>
  <div id="user-login-wrapper">
    <a-form class="user-layout-login" :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="请输入用户名"
          v-decorator="[
            'username',
            {
              rules: [{ required: true, message: '请输入用户名' }],
              validateTrigger: 'change'
            }
          ]"
        >
          <a-icon
            slot="prefix"
            type="user"
            :style="{ color: 'rgba(0,0,0,0.25)' }"
          />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          size="large"
          type="password"
          autocomplete="false"
          placeholder="请输入密码"
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '请输入密码' }],
              validateTrigger: 'blur'
            }
          ]"
        >
          <a-icon
            slot="prefix"
            type="lock"
            :style="{ color: 'rgba(0,0,0,.25)' }"
          />
        </a-input>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          html-type="submit"
          class="login-button"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      state: {
        loginBtn: false // 登录Loading加载状态
      }
    };
  },
  methods: {
    // ...mapActions("user", ['Login']),
    handleSubmit(e) {
      e.preventDefault();
      this.state.loginBtn = true;
      const validateFieldsKey = ["username", "password"];

      this.form.validateFields(
        validateFieldsKey,
        { force: true },
        (err, values) => {
          console.log("打印用户名密码", values);
          if (!err) {
            const loginParams = { ...values };
            // Login(loginParams)
            this.$store
              .dispatch("user/Login", loginParams)
              .then(res => this.loginSuccess(res))
              .catch(err => this.requestFailed(err))
              .finally(() => {
                this.state.loginBtn = false;
              });
          } else {
            setTimeout(() => {
              this.state.loginBtn = false;
            }, 600);
          }
        }
      );
    },
    loginSuccess(res) {
      this.$router.push({ name: "dashboard" });
      setTimeout(() => {
        this.$notification.success({
          message: "欢迎",
          description: res.nickname + " 欢迎回来"
        });
      }, 1000);
    },
    requestFailed(err) {
      this.$message.error({
        title: "错误",
        description: err.message
      });
    }
  }
};
</script>

<style lang="less" scoped>
#user-login-wrapper {
  width: 400px;
  margin: 0 auto;

  .user-layout-login {
    button.login-button {
      font-size: 18px;
      height: 45px;
      width: 100%;
    }
  }
}
</style>
