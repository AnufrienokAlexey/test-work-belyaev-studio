<template>
  <MainComponent msg="Тестовое задание Ануфриенок Алексея"/>
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent
  }
}
</script>

<style>
  body {
    display: flex;
    justify-content: center;
    align-self: center;
  }
  :root {
    --grey: #9E9E9E;
  }
</style>