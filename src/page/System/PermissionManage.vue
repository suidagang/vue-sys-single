<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card class="box-card">
          <div v-for="o in title" :key="o" class="text item">
            {{ o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card class="box-card">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <tr class="down">
                  <td class="one mytd">{{props.row.name}}</td>
                  <td class="two mytd">{{props.row.sign}}</td>
                  <td class="three mytd">{{props.row.sequence}}</td>
                  <td class="four mytd">{{props.row.type}}</td>
                  <td class="five"><el-button type="primary" size="mini">添加</el-button></td>
                </tr>
              </template>
            </el-table-column>
            <el-table-column label="名称" prop="name" width="450">
            </el-table-column>
            <el-table-column
              label="内部标志号"
              prop="sign">
            </el-table-column>
            <el-table-column
              label="排序号"
              align="center"
              prop="sequence">
            </el-table-column>
            <el-table-column
              label="状态"
              align="center"
              prop="type">
            </el-table-column>
            <el-table-column
              label="操作"
              align="center">
              <el-button type="primary" size="mini">添加</el-button>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      tableData: [
        {
          name: "我的桌面",
          sign: 10000,
          sequence: 10,
          type:"有效"
        },
        {
          name: "我的事务",
          sign: 11000,
          sequence: 10,
          type:"有效"
        },
        {
          name: "目标管理",
          sign: 12000,
          sequence: 10,
          type:"有效"
        },
        {
          name: "信息中心",
          sign: 13000,
          sequence: 10,
          type:"有效"
        }
      ],
      title:["模块访问权设置","模块操作权设置","按用户设置权限"]
    };
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.filter-container {
  text-align: right;
  .el-icon-circle-plus-outline {
    margin-right: 5px;
  }
}
.box-card{
  /deep/ .el-card__body{
    padding: 30px 0;
  }
  .text{
    border: 1px solid #999;
    border-left: none;
    border-right: none;
    padding: 10px 0 10px 10px;
    background: rgb(248, 248, 248);
    &:nth-child(2){
      margin: 10px 0;
    }
  }
}
.el-table__body{
  /deep/ .el-table__expanded-cell{
    padding: 20px;
  }
}
.mytd{
  font-size: 14px;
}
.one{
  width: 460px;
  padding-left: 24px;
}
.two{
  width: 178px;
}
.three{
  width: 124px;
}
.four{
  width: 102px;
}


</style>
