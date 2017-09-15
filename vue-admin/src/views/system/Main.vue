<template>
	<el-row>
		<el-row :gutter="30" style="padding-top: 30px;">
			<el-col :span="6">
				<info-box infoVal="69" infoMsg="Running" icon="fa fa fa-signal" bgColor="#00c0ef"></info-box>
			</el-col>
			<el-col :span="6">
				<info-box infoVal="33" infoMsg="Stoped Number" icon="fa fa-bell-o" bgColor="#00a65a"></info-box>
			</el-col>
			<el-col :span="6">
				<info-box infoVal="156" infoMsg="Warning Number" icon="fa fa-exclamation-triangle" bgColor="#f39c12"></info-box>
			</el-col>
			<el-col :span="6">
				<info-box infoVal="53" infoMsg="Warning Number" icon="fa fa-flag-o" bgColor="#dd4b39"></info-box>
			</el-col>
		</el-row>
		<el-row :gutter="30" style="padding-top: 20px">
			<el-col :span="16">
				<el-row>
					<el-col :span="24" class="panel-box">
						<el-row class="header">
							<el-col :span="24">&nbsp;&nbsp;Baidu Map</el-col>
						</el-row>
						<el-row>
							<el-col :span="19"  style="height: 500px;padding: 10px 10px 10px 10px;">
								<baidu-Map></baidu-Map>
							</el-col>
							<el-col :span="5" style="background: #00a65a;height: 500px">
								<el-row style="height: 166px;text-align: center;color: #fff;line-height: 170px">
									<div style="width: 100%;height: 40px">
										<i class="fa fa-bar-chart" aria-hidden="true" style="font-size: 45px"></i>
									</div>
									<div style="width: 100%;height: 20px">
										8309
									</div>
									<div style="width: 100%;height: 20px">
										VISIT
									</div>
								</el-row>
								<el-row style="height: 166px;text-align: center;color: #fff;line-height: 170px">
									<div style="width: 100%;height: 40px">
										<i class="fa fa-bar-chart" aria-hidden="true" style="font-size: 45px"></i>
									</div>
									<div style="width: 100%;height: 20px">
										30%
									</div>
									<div style="width: 100%;height: 20px">
										REFERRALS
									</div>
								</el-row>
								<el-row style="height: 166px;text-align: center;color: #fff;line-height: 170px">
									<div style="width: 100%;height: 40px">
										<i class="fa fa-bar-chart" aria-hidden="true" style="font-size: 45px"></i>
									</div>
									<div style="width: 100%;height: 20px">
										70%
									</div>
									<div style="width: 100%;height: 20px">
										ORGANIC
									</div>
								</el-row>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
				<el-row style="padding-top: 20px;">
					<el-col :span="24">
						<img src="../../assets/main_chart.png" style="width: 100%;height: 100%">
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="8">
				<el-row>
					<el-col :span="24">
						<img src="../../assets/main_pie.png" style="width: 100%;height: 100%">
					</el-col>
				</el-row>
				<el-row style="padding-top: 20px;">
					<el-col :span="24">
						<img src="../../assets/main_pie.png" style="width: 100%;height: 100%">
					</el-col>
				</el-row>
			</el-col>

		</el-row>
	</el-row>
</template>

<script>
    import infoBox from 'src/component/infoBox.vue';
	import BaiduMap from 'src/component/BaiduMap.vue'

    export default {
        data() {
            return {

            }
        },
        components: {infoBox, BaiduMap},
    };

</script>

<style scoped>
	.panel-box{
		padding-left: 0px !important;
		padding-right: 0px !important;
		margin: 0px;
		border: 1px solid lightgray;
		border-top: 3px solid green;
		background-color: #fff;
		border-radius:4px;
	}
	.panel-box>.header{
		height: 40px;
		line-height: 40px;
		font-size: 18px;
		font-weight: inherit;
		color: gray;
		border-bottom: 1px solid lightgray;
	}
	.main-chart{
		padding-left: 0px !important;
		padding-right: 0px !important;
		margin: 0px;
		background-color: #fff;
	}
</style>