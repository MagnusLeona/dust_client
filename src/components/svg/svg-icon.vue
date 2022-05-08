<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName" />
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    svgName() {
      return `#icon-${this.icon}`;
    },
    svgClass() {
      return this.iconClass ? `svg-icon ${this.iconClass}` : `svg-icon`;
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>