<template>
  <div>
    <Navbar></Navbar>
    <nuxt/>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar/default.vue';

  export default {
    data() {
      return {
        screenWidth: undefined,
        timer: false,
      }
    },
    mounted () {
      // get device info
      this.$store.dispatch('device/getDevice')
      // init screenWidth & watch screenWidth
      window.screenWidth = document.body.clientWidth
      this.screenWidth = window.screenWidth
      this.screenWidthWatcher()
    },
    // watch: {
    //   screenWidth (val) {
    //     if (!this.timer) {
    //       this.timer = true
    //       let that = this
    //       setTimeout(function () {
    //         that.timer = false
    //       }, 400)
    //     }
    //   },
    // },
    methods: {
      screenWidthWatcher() {
        const that = this
        window.onresize = () => {
          return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
          })()
        }
      }
    },
    components: {
      Navbar,
    }
  }
</script>

<style>
  body{
    margin: 0;
    /* font-family: jf-jinxuan, sans-serif; */
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #292b2c;
    background-color: #fff;
  }
</style>
