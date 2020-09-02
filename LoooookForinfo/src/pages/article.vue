<template>
  <div class="article">
    <div class="border">
    文章管理
    </div>

    <div class="search">
      <el-button plain size="small">新增</el-button>
    </div>

    <div>
      <el-table
      size='small'
      border
      :data="tableData"
      @selection-change="handleChange"
      style="width: 100%">
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleChange (selection) {
      console.log(selection)
    }
  }

}
</script>
<style scoped>
  .article {
    width: 98%;
    height: 98%;
    background-color: #fffff1;
    margin: 10px;
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
  }
  .border {
    border-bottom: 1.5px solid #ddd;
    margin-bottom:10px;
  }
</style>
