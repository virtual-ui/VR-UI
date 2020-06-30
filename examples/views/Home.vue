<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <vr-button>123</vr-button>
    <vr-button type="primary" round>123</vr-button>
    <vr-button type="danger">123</vr-button>
    <vr-button type="info">123</vr-button>
    <vr-button type="warning" size="large">确定按钮</vr-button>
    <vr-button type="warning" size="middle">确定按钮</vr-button>
    <vr-button type="warning" size="small">确定按钮</vr-button>
    <vr-button type="warning" size="mini">确定按钮</vr-button>
    <vr-button type="success">123</vr-button>
  </div>
</template>

<script>
// @ is an alias to /examples
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
