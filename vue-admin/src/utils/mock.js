import Mock from 'mockjs';

export const mlogin = Mock.mock('http://127.0.0.1/mms/system/login', {
    status : true,
    msg : "success",
    data : {
    	"id":1,
    	"sex":0,
    	"username":"admin",
    	"password":"4QrcOUm6Wau+VuBX8g+IPg==",
    	"realname":"系统管理员",
    	"phone":"13426786348",
    	"avatar":null,
    	"token":"mZK+9FfpEPLXZBhukzGKZA==",
    	"dept":27,
    	"deptName":null,
    	"role":1,
    	"roleName":null,
    	"delete_flag":0
    }
});
export const mgetMenus = Mock.mock('http://127.0.0.1/mms/system/getMenusByRole', [
    {"id":1,"name":"系统主页","path":"/main","icon":"fa-university","leaf":1,"pid":0,"level":1,"type":1,"order":1,"deleteFlag":null,"children":null},
    {"id":2,"name":"系统管理","path":null,"icon":"el-icon-message","leaf":0,"pid":0,"level":1,"type":1,"order":2,"deleteFlag":null,
    "children":	[
    	{"id":6,"name":"用户管理","path":"/user","icon":"fa-book","leaf":1,"pid":2,"level":2,"type":1,"order":1,"deleteFlag":null,"children":null},
    	{"id":7,"name":"角色管理","path":"/role","icon":"fa-user","leaf":1,"pid":2,"level":2,"type":1,"order":2,"deleteFlag":null,"children":null},
    	{"id":8,"name":"部门管理","path":"/dept","icon":"fa-id-badge","leaf":1,"pid":2,"level":2,"type":1,"order":3,"deleteFlag":null,"children":null}
    ]},
    {"id":3,"name":"基础数据","path":"","icon":"fa-id-card-o","leaf":0,"pid":0,"level":1,"type":1,"order":3,"deleteFlag":null,
    "children":[
    	{"id":9,"name":"form表单","path":"/form","icon":"fa-cube","leaf":1,"pid":3,"level":2,"type":1,"order":1,"deleteFlag":null,"children":null},
    	{"id":10,"name":"百度地图","path":"/map","icon":"fa-tasks","leaf":1,"pid":3,"level":2,"type":1,"order":2,"deleteFlag":null,"children":null}]},
    {"id":4,"name":"业务管理","path":"","icon":"fa-address-card","leaf":0,"pid":0,"level":1,"type":1,"order":4,"deleteFlag":null,
    "children":[
    	{"id":11,"name":"page4","path":"/page4","icon":"fa-check-square","leaf":1,"pid":4,"level":2,"type":1,"order":1,"deleteFlag":null,"children":null},
    	{"id":12,"name":"page5","path":"/page5","icon":"fa-check-square-o","leaf":1,"pid":4,"level":2,"type":1,"order":2,"deleteFlag":null,"children":null},
    	{"id":13,"name":"page6","path":"/page6","icon":"fa-cloud","leaf":1,"pid":4,"level":2,"type":1,"order":3,"deleteFlag":null,"children":null}
    ]},
    {"id":5,"name":"统计分析","path":"","icon":"fa-bar-chart","leaf":0,"pid":0,"level":1,"type":1,"order":5,"deleteFlag":null,
	    "children":[
	    {"id":14,"name":"统计图表","path":"/charts","icon":"fa-cogs","leaf":1,"pid":5,"level":2,"type":1,"order":1,"deleteFlag":null,"children":null}]
    },
    {"id":6,"name":"测试模块1","path":"/main1","icon":"fa-calendar","leaf":1,"pid":0,"level":1,"type":1,"order":1,"deleteFlag":null,"children":null},
    {"id":7,"name":"测试模块2","path":"/main2","icon":"fa-film","leaf":1,"pid":0,"level":1,"type":1,"order":1,"deleteFlag":null,"children":null},
    {"id":8,"name":"测试模块3","path":"/main3","icon":"fa-picture-o","leaf":1,"pid":0,"level":1,"type":1,"order":1,"deleteFlag":null,"children":null},
    {"id":9,"name":"测试模块4","path":"/main4","icon":"fa-university","leaf":1,"pid":0,"level":1,"type":1,"order":1,"deleteFlag":null,"children":null},
    {"id":10,"name":"测试模块5","path":"/main5","icon":"fa-map-o","leaf":1,"pid":0,"level":1,"type":1,"order":1,"deleteFlag":null,"children":null},
    {"id":11,"name":"测试模块6","path":"/main6","icon":"fa-newspaper-o","leaf":1,"pid":0,"level":1,"type":1,"order":1,"deleteFlag":null,"children":null}
]);


