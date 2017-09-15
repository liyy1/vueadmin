<template>
    <div class="info-box" v-bind:style="{ 'background-color': bgColor}">
        <div class="inner">
            <div style="font-size: 40px;font-weight: bold;">{{infoVal}}</div>
            <p>{{infoMsg}}</p>
        </div>
        <div class="icon">
            <i v-bind:class="icon"></i>
        </div>
        <a href="#" class="footer">More info <i class="fa fa-arrow-circle-right"></i></a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: ['infoVal','infoMsg','icon','bgColor']
    };

</script>

<style scoped>
    .info-box{
        position: relative;
        height: 125px;
        background-color:#20A0FF;
        border-radius:2px;
        color:#fff !important;
        font-size: small;
    }
    .info-box>.inner{
        padding-top: 10px;
        padding-left: 20px;
    }
    .info-box>.icon{
        position: absolute;
        top: 20px;
        right: 20px;
        font-size:60px;
    }
    .info-box>.footer{
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: rgba(255,255,255,0.8);
        display: block;
        background: rgba(0,0,0,0.1);
        text-decoration: none;
    }
</style>