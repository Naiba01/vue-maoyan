<template>
  <div class="switch-nav-bar">
    <div class="container">
      <transition name="slide" v-for="tab in tabs">
        <router-link
          class="nav-btn"
          :class="currentTab === tab.type ? 'btn-on' : ''"
          :to="{name: tab.type + 'Film'}"
        >
          {{tab.text}}
        </router-link>
      </transition>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/styles/_variables";

.switch-nav-bar {
  display: inline-block;
  color: white;
}
.container {
  display: inline-block;
  padding: 3px;
  border-radius: 3px;
  background-color: @rose-red;
}
.nav-btn {
  display: inline-block;
  padding: 0.218rem 0.388rem;
  border-radius: 0.073rem;
  color: white;
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
  },
  beforeRouteLeave (to, from, next) {
    console.log(to)
  }
}

</script>
