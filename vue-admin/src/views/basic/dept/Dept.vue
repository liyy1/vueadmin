<template>
	<section style="width: 100%">
		<el-row class='content'>
			<el-col :span="6" class="tree_panel">
				<el-button type="primary" icon="plus">新增</el-button>
				<el-tree :data="deptTree" :props="defaultProps" default-expand-all @node-click="handleNodeClick" 
					:render-content="renderContent" class="tree_content"></el-tree>
			</el-col>
			<el-col :span="18" class="info_panel">
				<el-row>
					<el-form ref="deptForm" :model="deptForm" label-width="80px">
						<h3>{{formTitle}}</h3>
						<el-form-item label="活动名称">
							<el-input v-model="deptForm.name"></el-input>
						</el-form-item>
						<el-form-item label="活动区域">
							<el-select v-model="deptForm.region" placeholder="请选择活动区域">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="活动时间">
							<el-col :span="11">
								<el-date-picker type="date" placeholder="选择日期" v-model="deptForm.date1" style="width: 100%;"></el-date-picker>
							</el-col>
							<el-col class="line" :span="2">-</el-col>
							<el-col :span="11">
								<el-time-picker type="fixed-time" placeholder="选择时间" v-model="deptForm.date2" style="width: 100%;"></el-time-picker>
							</el-col>
						</el-form-item>
						<el-form-item label="即时配送">
							<el-switch on-text="" off-text="" v-model="deptForm.delivery"></el-switch>
						</el-form-item>
						<el-form-item label="特殊资源">
							<el-radio-group v-model="deptForm.resource">
								<el-radio label="线上品牌商赞助"></el-radio>
								<el-radio label="线下场地免费"></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="活动形式">
							<el-input type="textarea" v-model="deptForm.desc"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">立即创建</el-button>
							<el-button>取消</el-button>
						</el-form-item>
					</el-form>
				</el-row>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	import { getDeptTree, getDeptInfo } from 'src/api/basic/dept';

	export default {
		data() {
			return {
				treeLoading: false,
				infoLoading: false,
				deptTree: [{
					id: 1,
					label: '一级 1',
					children: [{
						id: 4,
						label: '二级 1-1',
						children: [{
							id: 9,
							label: '三级 1-1-1'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: '一级 2',
					children: [{
						id: 5,
						label: '二级 2-1'
					}, {
						id: 6,
						label: '二级 2-2'
					}]
				}, {
					id: 3,
					label: '一级 3',
					children: [{
						id: 7,
						label: '二级 3-1'
					}, {
						id: 8,
						label: '二级 3-2'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				deptForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					resource: '',
					desc: ''
				},
				formTitle: '部门信息'
			};
		},
		methods: {
			handleNodeClick(data) {
				this.queryDepts(data.id);
			},
			queryDepts(id) {
				getDeptList({ 'parentId': id }).then((res) => {
					this.deptlists = res.data;
				})
			},
			renderContent(h, { node, data, store }) {
				return h('span',[
						h('i',{attrs:{class:'fa fa-folder-o',style:'padding-right:5px'}}),
						h('span',node.label)
					]
				);
			}
		}
	};
</script>

<style scoped>
	.content {
		height: 800px;
		border-radius: 3px;
		margin-top: 20px;
		border:1px solid #f0f2f5;
	}
	.tree_panel{
		border-right: 1px solid #f0f2f5;
		padding: 10px;
	}
	.tree_content{
		height: 700px;
		margin-top: 10px;
		border-color: #f0f2f5;
	}
	.info_panel {
		padding-left: 20px;
		padding-right: 20px;
	}
</style>