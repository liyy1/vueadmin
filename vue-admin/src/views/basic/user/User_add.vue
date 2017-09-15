<template>

	<el-dialog title="增加用户" v-model="addFormVisible" size="tiny" v-loading="addFormLoading" :before-close="closeDialog">
		<el-form :model="addForm" :rules="addFormRules" ref="addForm" label-width="80px" style="padding-right: 30px">
			<el-form-item label="用户名" prop="username">
				<el-input v-model="addForm.username"></el-input>
			</el-form-item>
			<el-form-item label="姓名" prop="realname">
				<el-input v-model="addForm.realname"></el-input>
			</el-form-item>
			<el-form-item label="手机号" prop="phone">
				<el-input v-model="addForm.phone"></el-input>
			</el-form-item>
			<el-form-item label="性别" prop="sex">
				<el-radio-group v-model="addForm.sex">
					<el-radio label=1>男</el-radio>
					<el-radio label=0>女</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="部门" prop="dept">
				<el-cascader style="width: 100%" placeholder="请选择" :options="deptOptions" 
					:show-all-levels="false" expand-trigger="hover" @change="changeDept"></el-cascader>
			</el-form-item>
			<el-form-item label="角色" prop="role">
				<el-select v-model="addForm.role" placeholder="请选择" style="width: 100%">
					<el-option v-for="item in roleOptions" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="closeDialog">取 消</el-button>
			<el-button type="primary" @click="addUser">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	import { saveUser } from 'src/api/basic/user';
	import { getRoleOptions } from 'src/api/basic/role';
	import { getDeptOptions } from 'src/api/basic/dept';
	import { Message } from 'element-ui';
	
	export default {
		data() {
			return {
				deptOptions: [],
				roleOptions: [],
				addFormLoading: false,
				addForm: {
					username: '',
					realname: '',
					phone: '',
					sex: '',
					dept: undefined,
					role: undefined
				},
				addFormRules: {
					username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
					realname: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
					phone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
					sex: [{ required: true, message: '请输入姓别', trigger: 'blur' }],
					dept: [{ required: true, message: '请输入部门', trigger: 'blur' }],
					role: [{ required: true, message: '请输入角色', trigger: 'blur' }]
				}
			}
		},
		props: ['addFormVisible'],
		methods: {
			addUser() {
				this.$refs.addForm.validate((valid) => {
					if(valid) {
						saveUser(this.addForm).then((res) =>{
							console.log(res.data);
							if(res.data.status){
								Message({message: '操作成功！',type: 'success'});
								this.closeDialog();
							}else{
								Message({message: res.data.msg,type: 'error'});
							}
						})
					} else {
						console.log("fail");
					}
				});
			},
			closeDialog() {
				this.$emit("changeAddFormVisible", false);
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
					this.addForm.dept = value[value.length-1];
				}else{
					this.addForm.dept = undefined;
				}
			}
		},
		mounted() {
			this.getRoleOptions();
			this.getDeptOptions();
		}
	};
</script>