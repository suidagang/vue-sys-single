<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="名称" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-plus" @click="handleCreate">
        新增组织机构
      </el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      fit
      highlight-current-row
      default-expand-all
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="名称">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="描述" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.desc }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" align="center">
        <template slot-scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="medium" @click="handleUpdate(row)">
            编辑
          </el-button>
          <el-button type="danger" size="medium" @click="handleDelete(row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.pageSize" @pagination="fetchData" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="500px" :close-on-click-modal="false">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="70px" style="margin: auto 20px">
        <el-form-item label="从属于">
          <el-select v-model="temp.roleId" class="filter-item">
            <el-option label="1">机构1</el-option>
            <el-option label="2">机构2</el-option>
            <el-option label="3">机构3</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input v-model="temp.desc" type="textarea" />
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="temp.sort" />
        </el-form-item>
        <el-form-item label="职责说明" prop="desc">
          <el-input v-model="temp.desc" type="textarea" />
        </el-form-item>
        <el-form-item label="状态">
          <el-checkbox v-model="temp.status" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确定
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'

export default {
  components: { Pagination },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 5,
      listQuery: {
        pageNum: 1,
        pageSize: 10
      },
      temp: {
        id: undefined,
        name: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑组织机构',
        create: '添加组织机构'
      },
      rules: {
        name: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      //this.listLoading = true
        this.listLoading = false
        this.list=[{
            id: '1',
            name: '总经办',
            status: '有效',
            desc: '今天是个好日子',
            sort: '1',
            hasChildren: true,
            children: [
                {
                    id: '11',
                    name: '总经办',
                    status: '有效',
                    desc: '今天是个好日子',
                    sort: '1',
                }
            ]
        },{
            id: '2',
            name: '总经办',
            status: '有效',
            desc: '今天是个好日子',
            sort: '1',
            hasChildren: true,
            children: [
                {
                    id: '22',
                    name: '总经办',
                    status: '有效',
                    desc: '今天是个好日子',
                    sort: '1',
                }
            ]
        },{
            id: '3',
            name: '总经办',
            status: '有效',
            desc: '今天是个好日子',
            sort: '1',
            hasChildren: true,
            children: [
                {
                    id: '33',
                    name: '总经办',
                    status: '有效',
                    desc: '今天是个好日子',
                    sort: '1',
                }
            ]
        },{
            id: '4',
            name: '总经办',
            status: '有效',
            desc: '今天是个好日子',
            sort: '1',
            hasChildren: true,
            children: [
                {
                    id: '44',
                    name: '总经办',
                    status: '有效',
                    desc: '今天是个好日子',
                    sort: '1',
                }
            ]
        },{
            id: '5',
            name: '总经办',
            status: '有效',
            desc: '今天是个好日子',
            sort: '1',
            hasChildren: true,
            children: [
                {
                    id: '55',
                    name: '总经办',
                    status: '有效',
                    desc: '今天是个好日子',
                    sort: '1',
                }
            ]
        }]
      /*getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })*/
    },
    handleFilter() {
      this.listQuery.pageNum = 1
      this.getList()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        name: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          console.log(this.temp)
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          console.log(tempData)
        }
      })
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row.id)
      }).catch(() => {
        console.log('取消删除操作！')
      })
    }
  }
}
</script>
