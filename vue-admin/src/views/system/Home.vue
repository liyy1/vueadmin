<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="6" class="logo" :class="{'is-active':isCollapse}">
                <img src="../../assets/yimai.png" >
                {{sysName}}
            </el-col>
            <el-col :span="2" class="tool">
                <div class="hamburger" @click.prevent="collapse">
            		<i class="hamburger_icon fa fa-bars" :class="{'is-active':isCollapse}"></i>
            	</div>
            </el-col>
            <el-col :span="16" class="header_bar">
                <div class="header_bar_div">
                    <i class="fa fa-cog" aria-hidden="true"></i>
                    <span style="padding-left: 3px">设置</span>
                </div>
                <div class="header_bar_div">
                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                	<span style="padding-left: 3px">通知</span>
                </div>
                <div class="header_bar_div">
                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                    <span style="padding-left: 3px">帮助</span>
                </div>
                <div style="width: 120px;" class="header_bar_div">
                    <img src="../../assets/user.png" class="header_bar_img" />
                    <el-dropdown trigger="hover">
                        <span class="el-dropdown-link" style="color: #fff;">{{sysUserName}}</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>我的消息</el-dropdown-item>
                            <el-dropdown-item @click.native="pwdFormVisible=true">修改密码</el-dropdown-item>
                            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
        </el-col>
        <el-col :span="24" class="main">
            <!--导航菜单-->
            <aside class="menubar">
	            <el-menu class="el-menu-demo" theme="dark" :collapse="isCollapse" unique-opened router>
					<template v-for="(item,index) in menus">
                        <el-submenu v-if="!item.leaf" :index="index+''">
                            <template slot="title">
                            	<i class="fa" :class="item.icon"></i>
                            	<span slot="title">{{item.name}}</span>
                            </template>
                            <el-menu-item v-for="child in item.children" :index="child.path">
                            	<i class="fa" :class="child.icon"></i><span slot="title">{{child.name}}</span>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-if="item.leaf" :index="item.path">
                            <i class="fa" :class="item.icon"></i>
                            <span slot="title">{{item.name}}</span>
                        </el-menu-item>
                    </template>
				</el-menu>
				
			</aside>
            <el-col :row="24" class="content-wrapper">
                <router-view></router-view>
            </el-col>
        </el-col>
        <el-dialog title="修改密码" v-model="pwdFormVisible" size="tiny" v-loading="pwdFormLoading">
	        <el-form :model="pwdForm" :rules="pwdFormRules" ref="pwdForm" label-width="80px" style="padding-right: 30px">
	            <el-form-item label="旧密码" prop="oldpwd">
	                <el-input v-model="pwdForm.oldpwd" type="password"></el-input>
	            </el-form-item>
	            <el-form-item label="新密码" prop="newpwd">
	                <el-input v-model="pwdForm.newpwd" type="password"></el-input>
	            </el-form-item>
	            <el-form-item label="确认密码" prop="repwd">
	                <el-input v-model="pwdForm.repwd" type="password"></el-input>
	            </el-form-item>
	        </el-form>
	        <div slot="footer" class="dialog-footer">
	            <el-button @click="changePwdFormVisible(false);">取 消</el-button>
	            <el-button type="primary" @click="udpatePwd">确 定</el-button>
	        </div>
	    </el-dialog>
    </el-row>
</template>

<script>
	import { getMenus,logout,updatePwd } from 'src/api/system.js';
	import { Message } from 'element-ui';
	
	
    export default {
        data() {
        	var validateNewpwd = (rule, value, callback) => {
		        if (value === '') {
		          	callback(new Error('请输入新的密码'));
		        } else {
		          	callback();
		        }
	      	};
	      	var validateRepwd = (rule, value, callback) => {
		        if (value === '') {
		          	callback(new Error('请再次输入新的密码'));
		        } else if (value !== this.pwdForm.newpwd) {
		          	callback(new Error('两次输入密码不一致!'));
		        } else {
		          	callback();
		        }
	      	};
            return {
                sysName: '项目管理系统',
                isCollapse: false,
                sysUserName: '',
                sysUserAvatar: '',
                menus: [],
                pwdFormVisible: false,
                pwdFormLoading: false,
                pwdForm: {
                    oldpwd: '',
                    newpwd: '',
                    repwd:''
                },
                pwdFormRules: {
                    oldpwd: [{ required: true, message: '请输入旧密码', trigger: 'blur' }],
                    newpwd: [{ required: true, validator: validateNewpwd, trigger: 'blur' }],
                    repwd: [{ required: true, validator: validateRepwd, trigger: 'blur' }]
                }
            }
        },
        methods: {
            //退出登录
            logout() {
                this.$confirm('确认退出吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                	logout().then(() => {
                		localStorage.removeItem('Admin-Token');
                    	this.$router.push('/login');
                	}).catch(() => {
                		localStorage.removeItem('Admin-Token');
                    	this.$router.push('/login');
                	})
                }).catch(() => {
                });
            },
            //折叠导航栏
            collapse(){
                this.isCollapse=!this.isCollapse;
            },
            getMenus(){
            	const role = localStorage.getItem('user_role');
            	getMenus(role).then(res => {this.menus = res.data;})
            },
            changePwdFormVisible(visible){
                this.pwdFormVisible = visible;
            },
            udpatePwd() {
                this.$refs.pwdForm.validate((valid) => {
                    if (valid) {
                    	updatePwd(this.pwdForm)
                    	.then(res => {
                    		if(res.data.status){
                    			Message({message: '操作成功！',type: 'success'});
								this.changePwdFormVisible(false);
                    		}else{
                    			Message({message: res.data.msg,type: 'error'});
                    		}
                    	})
                    } else {
                        Message({message: '网络异常！',type: 'error'});
                    }
                });
            }
        },
        mounted() {
            this.sysUserName = localStorage.getItem('user_realname');
            this.sysUserAvatar = localStorage.getItem('user_avatar');
            this.getMenus();
        }
    }

</script>

<style scoped lang="scss">
	/*$color-black : #2b3441;
	$color-black2 : #202733;*/
	$color-font-gray : #BFCBD9;
	$color-black : #3c8dbc;
	$color-black2 : #367fa9;
	$color-font-gray : #fff;
    .container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        .header {
            height: 50px;
            line-height: 50px;
            background: $color-black;
            color:$color-font-gray;
            .logo {
            	width: 200px;
                height: 50px;
                line-height: 55px;
                background: $color-black2;
                font-size: 18px;
                transition:.3s cubic-bezier(.645,.045,.355,1);;
                img {
                	padding: 10px 10px 0px 10px;
                    width: 35px;
                    float: left;
                }
            }
            .logo.is-active{
            	width: 55px;
            }
            .hamburger{
				width: 50px;
				text-align: center;
				font-size: 16px;
			}
			.hamburger_icon {
				transform: rotate(0deg);
				transition: 0.38s;
			}
			.hamburger_icon.is-active {
				transform: rotate(90deg);
			}
            .tool :hover{
                background: $color-black2;
            }
            .header_bar {
                width: 370px;
                text-align: center;
                padding-right: 10px;
                float: right;
                .header_bar_div{
                    width: 80px;
                    float: left;
                }
                .header_bar_img{
                	width: 25px;
                	height: 25px;
                	border-radius: 25px;
                	float: left;
                	margin-top: 13px;
                	margin-left: 10px;
                }
                div:hover{
                	background-color: $color-black2;
                }
            }
        }
        .main {
            display: flex;
            position: absolute;
            top: 50px;
            bottom: 0px;
            overflow: hidden;
            .el-menu-demo:not(.el-menu--collapse) {
			    width: 200px;
			}
            .content-wrapper {
                background-color: #f1f2f7;
                box-sizing: border-box;
                padding-left: 15px;
                padding-right: 15px;
                overflow: auto;
            }
        }
    }
</style>