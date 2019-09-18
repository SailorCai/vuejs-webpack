<template>
    <div>this is detail</div>
</template>
<script>
import _ from 'lodash';

export default {
  name: "detail",
  data () {
    return {
    };
  },
  mounted() {
      this.getName();
  },
  methods: {
      getName() {
          console.log('============');
          let arr = [1,2,3]
          console.log(_.concat(arr, 4, 5));
      },
  }
}
</script>
<style lang="scss" scoped>
</style>