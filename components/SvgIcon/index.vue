<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return `#${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }
      return 'svg-icon';
    },
  },
};
</script>

<style lang="scss">
.svg-icon {
  width: 2rem;
  height: 2rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.nav-item{
  width: 25px;
  height: 25px;
  padding: 0 .75rem;
  // fill: $color-primary;
  transition: fill .3s;
  cursor: pointer;
}

.search, .member, .favority{
  width: 25px;
  height: 25px;
}

.shopcart{
  width: 28px;
  height: 29px;
  // fill: $color-primary;
  --dot-color: #e8e8e8;
}

.shopcart.full{
  --dot-color: red;
}

</style>