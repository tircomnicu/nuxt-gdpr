<template>
  <div id="app">
    <v-app>
      <h1>
        <span>NUXT JS</span> and GDPR
        <br />creating a custom Cookie Component
      </h1>
      <client-only>
        <Cookie />
      </client-only>
    </v-app>
  </div>
</template>

<script>
import Cookie from "@/components/Cookie.vue";
export default {
  components: {
    Cookie
  }
};
</script>
<style>
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 50px;
  width: 100%;
}
h1 span {
  color: #00c58e;
}
</style>
