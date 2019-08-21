
/** 
 * 工具函数
 * */
import moment from 'moment';
moment.locale('zh-cn');
moment.suppressDeprecationWarnings = true;
const util = {
	/**
	 * 时间戳转时间字符串(毫秒和秒通用)
	 * @param {*} timestamp 
	 * @param {*} temp 要转成字符串的格式 
	 */
	timestampToTimeString(timestamp, temp = 'YYYY-MM-DD HH:mm:ss'){
		if(timestamp && String(timestamp).length == 10){
			return moment.unix(timestamp).format(temp)
		}else if(timestamp && String(timestamp).length == 13){
			return moment(timestamp).format(temp)
		}else{
			return timestamp;
		}
	},
	/**
	 * 时间字符串转时间时间戳
	 * @param {*} timestamp 
	 * @param {*} isMillisecond 是否输出毫秒 默认为true
	 */
	TimeStringTotimestamp(timeString, isMillisecond = true){
		if(timeString){
			if(isMillisecond){
				return moment(timeString).valueOf();
			}else{
				return moment(timeString).format('X');
			}
		}
	},
	/**
	 * 加(解决精度问题)
	 * @param {*} arg1 
	 * @param {*} arg2
	 */ 
	add(arg1, arg2) {
		let r1, r2, m, maxLen;
		try {
			r1 = arg1.toString().split(".")[1].length;
		} catch (e) {
			r1 = 0;
		}
		try {
			r2 = arg2.toString().split(".")[1].length;
		} catch (e) {
			r2 = 0;
		}
		maxLen = Math.max(r1, r2);
		m = Math.pow(10, Math.max(r1, r2));
		return Number((arg1 * m + arg2 * m) / m).toFixed(maxLen);
	},
	/**
	 * 减(解决精度问题)
	 * @param {*} arg1 
	 * @param {*} arg2
	 */ 
	sub(arg1, arg2) {
		let r1, r2, m, maxLen;
		try {
			r1 = arg1.toString().split(".")[1].length;
		} catch (e) {
			r1 = 0;
		}
		try {
			r2 = arg2.toString().split(".")[1].length;
		} catch (e) {
			r2 = 0;
		}
		m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
		maxLen = Math.max(r1, r2);
		return ((arg1 * m - arg2 * m) / m).toFixed(maxLen);
	},
	/**
	 * 乘(解决精度问题)
	 * @param {*} arg1 
	 * @param {*} arg2
	 */ 
	mul(arg1, arg2) {
		let m = 0,
			s1 = arg1.toString(),
			s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length;
		} catch (e) { }
		try {
			m += s2.split(".")[1].length;
		} catch (e) { }
		return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	},
	/**
	 * 除(解决精度问题)
	 * @param {*} arg1 
	 * @param {*} arg2
	 */ 
	div(arg1, arg2) {
		let t1 = 0,
			t2 = 0,
			r1, r2;
		try {
			t1 = arg1.toString().split(".")[1].length;
		} catch (e) { }
		try {
			t2 = arg2.toString().split(".")[1].length;
		} catch (e) { }
		r1 = Number(arg1.toString().replace(".", ""));
		r2 = Number(arg2.toString().replace(".", ""));
		return (r1 / r2) * Math.pow(10, t2 - t1);
	},
}
export default util
