import request from '@/utils/request'

const api_name = '/admin/order'

// 订单统计
export const GetOrderStatisticsData = searchObj => {
  return request({
    url: `${api_name}/select/all`,
    method: 'get',
    params: searchObj,
  })
}