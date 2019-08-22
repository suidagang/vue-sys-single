<template>
    <div class="app-container">
        <div class="filter-container">
            <el-button type="primary"><i class="el-icon-circle-plus-outline"></i>新增用户</el-button>
        </div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="box-card">
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card class="box-card">
                    <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            prop="name"
                            label="姓名">
                        </el-table-column>
                        <el-table-column
                            prop="station"
                            label="岗位或角色">
                        </el-table-column>
                        <el-table-column
                            prop="sequence"
                            label="排序号">
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="状态">
                        </el-table-column>
                        <el-table-column
                            label="操作"
                            align="center">
                            <el-button type="primary" size="mini">编辑</el-button>
                            <el-button type="danger" size="mini">删除</el-button>
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage1"
                            :page-size="10"
                            layout="total, prev, pager, next"
                            :total="100">
                        </el-pagination>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                list: null,
                listLoading: true,
                currentPage1: 1,
                tableData: [
                    {
                        name: "王小虎",
                        station: "采购经理",
                        sequence:10,
                        type:"有效"
                    },
                    {
                        name: "王小虎",
                        station: "网络经理",
                        sequence:10,
                        type:"有效"
                    },
                    {
                        name: "王小虎",
                        station: "人事经理",
                        sequence:10,
                        type:"有效"
                    },
                    {
                        name: "王小虎",
                        station: "财务经理",
                        sequence:10,
                        type:"有效"
                    }
                ],
                data: [
                    {
                        label: "一级 1",
                        children: [
                            {
                                label: "二级 1-1",
                                children: [
                                    {
                                        label: "三级 1-1-1"
                                    }
                                ]
                            },
                            {
                                label: "二级 1-1",
                                children: [
                                    {
                                        label: "三级 1-1-1"
                                    },
                                    {
                                        label: "三级 1-1-2"
                                    }
                                ]
                            },
                            {
                                label: "二级 1-1",
                                children: [
                                    {
                                        label: "三级 1-1-1"
                                    },
                                    {
                                        label: "三级 1-1-2"
                                    },
                                    {
                                        label: "三级 1-1-3"
                                    },
                                ]
                            }
                        ]
                    }
                ],
                defaultProps: {
                    children: "children",
                    label: "label"
                }
            };
        },
        methods: {
            handleNodeClick(data) {

            },
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>

</style>
