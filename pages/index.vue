<template>
  <section class="container">
    <div class="banner"></div>
    <div style="margin-top:20vh">
      <app-logo/>
      <h1 class="title">
        decade-frontend
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links" style="margin-bottom:50vh">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.banner{
  background: url("https://decade.global/admin/api/images/decade_e02449e7f5c58a04dff52f57d6bef877_image.jpeg");
  height: 60vh;
  width: 100vw;
}
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
