import request from '@/utils/request'

const api_name = '/admin/product/unit'

// 获取全部信息
export const FindAllProductUnit = () => {
    return request({
      url: `${api_name}/select/all`,
      method: 'get',
    })
}