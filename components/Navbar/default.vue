<template>
  <div class="navbar" :class="isScrollTop ? 'toggle' : ''">
    <div class="col menu-nav">
      <div class="menu-main-item">
        <router-link to="">HOME</router-link>
      </div>
      <div class="menu-main-item">
        <router-link to="">About US</router-link>
      </div>
      <div class="menu-main-item">
        <router-link to="">MAGAZINE</router-link>
      </div>
      <div class="menu-main-item">
        <router-link to="">SHOP</router-link>
      </div>
    </div>
    <div class="col logo">
      <router-link to="#">
        <img v-show="!isScrollTop" :src="require('~/assets/images/Decade_logo_toggle.png')" alt="">
        <img v-show="isScrollTop" :src="require('~/assets/images/Decade_logo.png')" alt="">
      </router-link>
    </div>
    <div class="col toolbar">
      <svg-icon icon-class="search_icon" class-name="nav-item search" class="toolbar-item"/>
      <svg-icon icon-class="shopcart" class-name="nav-item shopcart" class="toolbar-item"/>
      <svg-icon icon-class="favority_icon" class-name="nav-item favority" class="toolbar-item"/>
      <svg-icon icon-class="member_icon" class-name="nav-item member" class="toolbar-item"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrollTop: 1,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.bindScroll);
  },
  destroyed () {
    document.body.removeEventListener('scroll', this.bindScroll);
  },
  methods: {
    bindScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isScrollTop = scrollTop === 0 ? 1 : 0;
    }
  },
}
</script>

<style lang="scss" scoped>
  .navbar{
    background-color: #fff;
    position: fixed;
    top: 0;
    display: grid;
    z-index: 100;
    width: calc(100vw - 10rem);
    padding: 0 5rem;
    grid-template-columns: 0.5fr 150px 0.5fr;
    box-shadow: 0 2px 2px rgba(43,41,39,.3);
    transition: padding .3s;

    @media screen and (min-width: $small-device) and (max-width: $medium-device) {
      padding: 0 1rem;
      width: calc(100vw - 2rem);
    }
  }

  .navbar.toggle{
    background: none;
    box-shadow: none;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .menu-nav{
      .menu-main-item{
        &:hover{
          border-bottom-color: #fff;
        }
        a{
          color: #fff;
          border-right: 1px solid #fff;
        }
      }
    }
    

    .toolbar{
      .toolbar-item{
        fill: #e8e8e8;
        border-right: 1px solid #e8e8e8;
      }
    }
  }

  .menu-nav{
    display: flex;
    flex-direction: row;

    .menu-main-item{
      padding: 1.5rem 0;
      border-bottom: 2px solid rgba(255, 255, 255, 0);

      &:last-child > a{
        border-right: none !important;
      }

      &:hover{
        transition: border-bottom-color .3s;
        border-bottom-color: $color-primary;
      }

      a{
        text-decoration: none;
        color: $color-primary;
        letter-spacing: 1px;
        font-size: .7rem;
        padding: 0 1rem;
        border-right: 1px solid $color-primary;
        display: block;
      }
    }
  }

  .logo{
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 100%;
    }
  }

  .toolbar{
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .toolbar-item{
      border-right: 1px solid #ddc3a8;
      fill: $color-primary;
      
      &:last-child{
        border-right: none !important;
      }
    }
  }
</style>
