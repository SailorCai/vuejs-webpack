<template>
    <div class="list-title">列表页</div>
</template>
<script>
import util from "@/utils/tool";

export default {
  name: "list",
  data () {
    return {
    };
  },
  created() {
    var obj = getParam('http://www.baidu.com?a=1&b=2');
  }
}
</script>
<style lang="scss" scoped>
.list-title {
    color: yellowgreen;
}
</style>