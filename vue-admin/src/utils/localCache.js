export default {
	
	setCache : function (key,value){
        var curTime = new Date().getTime();
        localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
    },
    getCache : function (key,exp){
        var data = localStorage.getItem(key);
        if(data){
        	var dataObj = JSON.parse(data);
	        if (new Date().getTime() - dataObj.time>exp) {
	            //console.log('localStorage数据'+key+'已过期');
	            localStorage.removeItem(key);
	        }else{
	            var value = dataObj.data;
	            var curTime = new Date().getTime();
        		localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
	            return value;
	        }
        }
    },
    setToken : function (value){
    	this.setCache('Admin-Token', value);
    },
    getToken : function (){
    	return this.getCache('Admin-Token',30*60*1000);
    }

}
