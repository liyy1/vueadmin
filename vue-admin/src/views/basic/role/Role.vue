<template>
    <section>
        <!--搜索栏-->
        <el-col :span="24" class="tool_bar">
            <el-button-group>
                <el-button type="primary" icon="plus" @click="addFormVisible = true"></el-button>
                <el-button type="primary" icon="edit"></el-button>
                <el-button type="primary" icon="delete"></el-button>
            </el-button-group>
            <el-input placeholder="请输入内容" v-model="para.name" style="float:right;width: 220px">
                <el-button slot="append" icon="search" @click="getUser"></el-button>
            </el-input>
        </el-col>
        <!--列表-->
        <template>
            <el-table :data="users" highlight-current-row stripe v-loading="loading" height="720">
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="username" label="用户名" width="120" sortable></el-table-column>
                <el-table-column prop="realname" label="姓名" width="120" sortable></el-table-column>
                <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable></el-table-column>
                <el-table-column prop="phone" label="电话" width="100"></el-table-column>
                <el-table-column prop="deptName" label="部门" width="120"></el-table-column>
                <el-table-column prop="roleName" label="角色" min-width="120"></el-table-column>
            </el-table>
        </template>
        <el-col :span="24" class="page_bar">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"  :current-page="para.page" :page-sizes="[20, 50, 100]"
                           :page-size="para.size" layout="total, sizes, prev, pager, next, jumper" :total="para.total">
            </el-pagination>
        </el-col>
        <role_add :addFormVisible="addFormVisible" v-on:changeAddFormVisible="changeAddFormVisible"></role_add>
    </section>
</template>
<script>
    import {getUserList} from 'src/api/basic/role';
    import Role_add from './Role_add.vue'

    export default {
        data() {
            return {
                message:'2222',
                users: [],
                loading: false,
                addLoading: false,
                para: {
                    name: '',
                    page: 1,
                    size: 20,
                    total: 0,
                },
                addFormVisible: false
            }
        },
        methods: {
            //性别显示转换
            formatSex: function (row, column) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            },
            //获取用户列表
            getUser: function () {
                this.loading = true;
                getUserList(this.para).then((res) => {
                    this.users = res.data.rows;
                    this.para.total = res.data.total;
                    this.loading = false;
                });
            },
            handleSizeChange(val) {
                this.para.size = val;
                this.getUser();
            },
            handleCurrentChange(val) {
                this.para.page = val;
                this.getUser();
            },
            changeAddFormVisible(visible){
                this.addFormVisible = visible;
            }
        },
        mounted() {
            this.getUser();
        },
        components: { Role_add }
    };

</script>
<style>
    .tool_bar {
        height: 55px;
        padding-top: 10px;
    }

    .page_bar {
        height: 50px;
        text-align: right;
        padding-top: 10px;
    }
</style>
