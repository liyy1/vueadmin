<template>

    <el-dialog title="增加用户" v-model="addFormVisible" size="tiny" v-loading="addFormLoading">
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
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="部门" prop="dept">
                <el-select v-model="addForm.dept" placeholder="请选择" style="width: 100%">
                    <el-option v-for="item in addForm.deptOptions" :label="item.text" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="角色" prop="role">
                <el-select v-model="addForm.role" placeholder="请选择" style="width: 100%">
                    <el-option v-for="item in addForm.roleOptions" :label="item.text" :value="item.value"></el-option>
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
    import {getRoleOptions} from 'src/api/basic/role';
    export default {
        data() {
            return {
                addFormLoading: false,
                addForm: {
                    username: '',
                    realname: '',
                    phone:'',
                    sex: '',
                    dept: '',
                    role: '',
                    deptOptions:[
                        {text: '部门一',value:1},
                        {text: '部门二',value:2},
                        {text: '部门三',value:3}
                    ],
                    roleOptions:[]
                },
                addFormRules: {
                    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    realname: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
                    phone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
                    sex: [{ required: true, message: '请输入姓别', trigger: 'blur' }],
                    dept: [{ required: true, message: '请输入部门', trigger: 'blur' }],
                    role: [{ required: true, message: '请输入角色', trigger: 'blur' }]
                },
            }
        },
        props: ['addFormVisible'],
        methods: {
            addUser: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        console.log("success");
                    } else {
                        console.log("fail");
                    }
                });
            },
            closeDialog: function () {
                this.$emit("changeAddFormVisible",false);
            }
        },
        mounted() {
            getRoleOptions().then((res) => {
                this.addForm.roleOptions = res.data;
            })
        }
    };

</script>