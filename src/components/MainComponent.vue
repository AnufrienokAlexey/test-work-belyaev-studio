<template>
  <h1>{{ msg }}</h1>
  <div class="main">
    <div v-for="counter in counters" :key="counter">
      <CounterComponent/>
    </div>
    <div @click="addCounterComponent" class="wrapper flex pointer">
      <div class="add flex">
          <div class="add__plus"></div>
          <div class="add__plus"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CounterComponent from './CounterComponent.vue'

export default {
  data() {
    return {
      addNewCounter: 0,
      counters: [this.addNewCounter]
    }
  },
  props: {
    msg: String,
  },
  components: {
    CounterComponent
  },
  methods: {
    addCounterComponent() {
      this.counters.push(this.addNewCounter);
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  .main {
    max-width: 775px;
    display: grid;
    gap: 50px;
    background-color: #353638;
  }

  .wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 225px;
    height: 120px;
    background-color: #696969;
  }

  .flex {
    display: flex;
  }

  .add {
    width: 20px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .add__plus {
    background: var(--grey);
    height: 20px; 
    width: 3px;
    position: relative;
  }

  .add__plus:first-child {
    transform: translateX(50%)
  }

  .add__plus:last-child {
    transform: rotate(90deg);
    left: -1.5px;
  }

  .pointer {
    cursor: pointer;
  }
</style>