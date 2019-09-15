<template>
    <div class="index-title">我是首页</div>
</template>
<script>
export default {
  name: "Index",
  data () {
    return {
    };
  },
  created() {
    console.log('this is index page');
  },
}
</script>
<style lang="scss" scoped>
.index-title{
  color: red;
  font-size: 16px;
  font-weight: bolder;
}
</style>