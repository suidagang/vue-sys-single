const appConfig = require('../src/config/appConfig');
let hostUrl = appConfig.requestUrl;
const config = {
  /** start 地图列表页接口*/
  getMapServersByUserID:hostUrl+"/mapServer/getMapServersByUserID",//获取用户自定义地图列表
  /** end地图列表页接口*/
};
export default config;
