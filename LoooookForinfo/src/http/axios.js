// import axios from 'axios';
// import qs from 'qs';

// //配置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// // axios.defaults.baseURL = 'http://139.224.221.31:11000/';
// axios.defaults.baseURL = 'http://47.106.244.1:8099/';
// // 请求拦截器
// axios.interceptors.request.use(function(config){
//     if(config.method == 'post'){
//         config.data = qs.stringify(config.data)
//         console.log(config,'-----------')
//     }
//     return config
// })

// // 响应拦截器
// axios.interceptors.response.use(function(res){
//     // console.log(res.status,'------')
//     if(res.status === 200){
//         return res.data
//     }else{
//         return Promise.reject(res.data)
//     }
// },function(e){
//     return Promise.reject(e.data)
// })

// export default axios;


import axios from 'axios';
import qs from 'qs'

// 全局配置
axios.defaults.baseURL = 'http://47.106.244.1:8099/';


// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // 将后台的参数结果设置到response
  let {data} = response;
  response.data = data.data;
  response.status = data.status;
  response.statusText = data.message;
  // 统一异常处理
  if(data.status !== 200){
    // Toast(data.message);
    return Promise.reject(data.message);
  }
  return response;
}, function (error) {
//   Toast("网络异常")
  return Promise.reject(error);
});

/**
  get方式请求
*/
export function get (url, params) {
  return axios({
    method: 'get',
    url,
    params, // get 请求时带的参数
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
}

/**
 * 提交post请求 发送的数据为查询字符串，key=val&key=val
*/
export function post(url,data){
  return axios({
    method:"post",
    url,
    data:qs.stringify(data),
    timeout:10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

/**
 * 提交post请求 ,查询字符串，对象中嵌套数组的格式
*/
export function post_obj_array(url,data){
  return axios({
    method:"post",
    url,
    data:qs.stringify(data,{allowDots:true}),
    timeout:10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

/**
 * 提交post请求 发送的数据为查询字符串，当参数为数组的时候适用该方法
 * ids=1&ids=2
*/
export function post_array(url,data){
  return axios({
    method:"post",
    url,
    data:qs.stringify(data,{arrayFormat:"repeat"}),
    timeout:10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
/**
 * 提交post请求 发送的数据为json字符串
*/
export function post_json(url,data){
  return axios({
    method:"post",
    url,
    data,
    timeout:10000
  })
}


