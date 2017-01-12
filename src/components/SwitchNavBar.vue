<template>
  <div class="switch-nav-bar">
    <div class="container">
      <div
        class="nav-btn"
        :class="currentTab === tab.type ? 'btn-on' : ''"
        @click="onClick(tab.type)"
        v-for="tab in tabs"
      >
        {{tab.text}}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/styles/_variables";

.switch-nav-bar {
  height: 0.777rem;
  color: white;
}
.container {
  padding: 0.485rem;
  border-radius: 0.485rem;
  background-color: @rose-red;
}
.nav-btn {
  display: inline-block;
  border-radius: 0.485rem;
  &.btn-on {
    background-color: white;
    color: @rose-red;
  }
}
</style>

<script>
const tabs = [
  {
    type: 'hot',
    text: '热映'
  },
  {
    type: 'todo',
    text: '待映'
  },
  {
    type: 'find',
    text: '找片'
  }
]

export default {
  name: 'switch-nav-bar',
  data () {
    return {
      tabs,
      currentTab: 'hot'
    }
  },
  methods: {
    onClick (type) {
      this.currentTab = type
    }
  }
}

</script>
