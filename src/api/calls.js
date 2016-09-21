import request from 'src/api/request';


export const createCall = (data, auth) => request({
  url: '/call/',
  method: 'POST',
  data,
  auth,
});
