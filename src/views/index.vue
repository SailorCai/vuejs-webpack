<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container></template>
<script>
import _ from 'lodash';
import getParam from "@/utils/tool";

export default {
  name: "Index",
  data () {
    return {
    };
  },
  created() {
    console.log(_.compact([0,1,2,3,'',4,false]));
    var obj = getParam('http://www.baidu.com?a=1&b=2');
  },
}
</script>
<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: red;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  </style>