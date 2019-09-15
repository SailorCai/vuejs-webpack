<template>
    <div>
        <div>这里是我的应用</div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "app",
  data () {
    return {

    };
  },
  created() {
      console.log('vue template is created');
  },
}
</script>
<style lang="scss" scoped>

</style>