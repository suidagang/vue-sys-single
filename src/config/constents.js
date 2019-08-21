/**
 * 作用：这个js 专门用于存储枚举值
 * 使用：import Constents from '@/config/constents.js'
 * 使用：v-for="(item,index) in Constents.orderStateMap.get("all")"（循环使用）
 * 使用：Constents.orderStateMap.get("10")（单独获取）
 *  */

//订单模块 -- > 订单状态
let orderStateMap = new Map();
orderStateMap.set("-100", "已取消")
orderStateMap.set("1", "已预约")
orderStateMap.set("10", "派单中")
orderStateMap.set("20", "待维修")
orderStateMap.set("30", "维保中")
orderStateMap.set("40", "待验收")
orderStateMap.set("50", "已验收")
orderStateMap.set("100", "已完成")
orderStateMap.set('all',[{
  value: '全部',
  key: ''
},{
  value: '已取消',
  key: '-100'
}, {
  value: '已预约',
  key: '1'
}, {
  value: '派单中',
  key: '10'
}, {
  value: '待维修',
  key: '20'
}, {
  value: '维保中',
  key: '30'
}, {
  value: '待验收',
  key: '40'
}, {
  value: '已验收',
  key: '50'
}, {
  value: '已完成',
  key: '100'
}]);
const constents = {
  orderStateMap: orderStateMap,
};
export default constents
