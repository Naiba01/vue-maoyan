<template>
  <button type="button" :class="getBtnClass">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
@import '../assets/styles/_variables';

button {
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  line-height: 1.4;
  font-size: 14px;
  outline: none;
}
.outline.red-color {
  border-color: @default-red;
  background-color: white;
  color: @default-red;
}
.fill.red-color {
  border-color: @default-red;
  background-color: @default-red;
  color: white;
}
.outline.blue-color {
  border-color: @default-blue;
  background-color: white;
  color: @default-blue;
}
.fill.blue-color {
  border-color: @default-blue;
  background-color: @default-blue;
  color: white;
}
.small {
  padding: 8px 12px;
  min-width: 56px;
}
.medium {
  padding: 6px 10px;
}
.large {
  padding: 8px 14px;
}
</style>

<script>
const mapModeToClass = {
  outline: 'outline',
  fill: 'fill'
};
const mapColorToClass = {
  red: 'red-color',
  blue: 'blue-color'
};
const mapSizeToClass = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};
export default {
  name: 'common-button',
  props: ['mode', 'color', 'size'],
  data() {
    return {

    }
  },
  computed: {
    getBtnClass() {
      const btnClass = mapModeToClass[this.mode] + ' ' + mapColorToClass[this.color] + ' ' +
        mapSizeToClass[this.size];
      return btnClass;
    }
  }
}
</script>
