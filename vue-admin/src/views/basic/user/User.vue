<template>
	<section>
		<el-row>
			<!--搜索栏-->
			<el-col :span="24" class="tool_bar">
				<el-input @keyup.enter.native="handleFilter" style="width: 150px;" class="filter-item" placeholder="姓名或用户名" v-model="para.name">
				</el-input>
				<el-cascader style="width: 140px" placeholder="部门" :options="deptOptions" 
					:show-all-levels="false" expand-trigger="hover" clearable @change="changeDept"></el-cascader>
				<el-select v-model="para.role" placeholder="角色" style="width: 130px;" clearable>
					<el-option v-for="item in roleOptions" :label="item.label" :value="item.value"></el-option>
				</el-select>
				<el-button type="primary" icon="search" @click="handleFilter">搜索</el-button>
				<el-button-group style="float:right;">
					<el-button type="primary" icon="plus" @click="addFormVisible = true"></el-button>
					<el-button type="primary" icon="edit"></el-button>
					<el-button type="primary" icon="delete"></el-button>
				</el-button-group>
			</el-col>
			<!--列表-->
			<el-table :data="users" highlight-current-row stripe border v-loading="loading">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column prop="username" label="用户名" width="120" sortable></el-table-column>
				<el-table-column prop="realname" label="姓名" width="120" sortable></el-table-column>
				<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
					<template scope="scope" >
			        	<el-tag :type="scope.row.sex === 1 ? 'primary' : 'danger'">{{formatSex(scope.row.sex)}}</el-tag>
			        </template>
				</el-table-column>
				<el-table-column prop="phone" label="电话" width="180"></el-table-column>
				<el-table-column prop="name" label="部门" width="180"></el-table-column>
				<el-table-column prop="roleName" label="角色" min-width="120"></el-table-column>
				<el-table-column label="操作" width="140">
					<template scope="scope">
						<el-button size="small" type="info" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-col :span="24" class="page_bar">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="para.page" :page-sizes="[20, 50, 100, 500]" :page-size="para.size" layout="total, sizes, prev, pager, next, jumper" :total="para.total">
				</el-pagination>
			</el-col>
			<!--新增界面-->
			<user_add :addFormVisible="addFormVisible" v-on:changeAddFormVisible="changeAddFormVisible"></user_add>
		</el-row>
	</section>
</template>
<script>
	import { getUsers } from 'src/api/basic/user.js';
	import { getRoleOptions } from 'src/api/basic/role';
	import { getDeptOptions } from 'src/api/basic/dept';
	import User_add from './User_add.vue'
	export default {
		data() {
			return {
				panelHeight: document.documentElement.clientHeight - 180,
				addFormVisible: false,
				loading: false,
				deptOptions: [],
				roleOptions: [],
				users: [],
				para: {
					page: 1,
					size: 20,
					total: 0,
					name: undefined,
					dept: undefined,
					role: undefined
				}
			}
		},
		components: { User_add },
		methods: {
			//性别显示转换
			formatSex: function(sex) {
				return sex === 1 ? '男' : sex === 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function() {
				this.loading = true;
				getUsers(this.para).then((res) => {
					this.users = res.data.rows;
					this.para.total = res.data.total;
					this.loading = false;
				});
			},
			handleFilter() {
				this.getUser();
			},
			handleSizeChange(val) {
				this.para.size = val;
				this.getUser();
			},
			handleCurrentChange(val) {
				this.para.page = val;
				this.getUser();
			},
			changeAddFormVisible(visible) {
				this.addFormVisible = visible;
			},
			getRoleOptions() {
				getRoleOptions().then((res) => {
					this.roleOptions = res.data;
				});
			},
			getDeptOptions() {
				getDeptOptions().then((res) => {
					this.deptOptions = res.data;
				});
			},
			changeDept(value){
				if(value!=null && value.length>0){
					this.para.dept = value[value.length-1];
				}else{
					this.para.dept = undefined;
				}
			}
		},
		mounted() {
			this.getUser();
			this.getRoleOptions();
			this.getDeptOptions();
		}
	};
</script>
<style scoped>
	.tool_bar {
		height: 65px;
		padding-top: 20px;
	}
	.page_bar {
		height: 50px;
		text-align: right;
		padding-top: 10px;
	}
</style>