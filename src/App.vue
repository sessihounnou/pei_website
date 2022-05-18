<template>
    <component :is="this.$route.meta.layout">
      <router-view />
    </component>
</template>

<script>
export default {
  name: 'App',
}
</script>
