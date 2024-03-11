import request from '@/utils/request'

const api_name = '/admin/product/brand'

// 分页列表
export const GetBrandPageList = (page, size) => {
  return request({
    url: `${api_name}/select/${page}/${size}`,
    method: 'get'
  })
}

// 保存品牌
export const SaveBrand = brand => {
    return request({
        url: `${api_name}/insert`,
        method: 'post',
        data: brand,
    })
}

// 修改信息
export const UpdateBrandById = brand => {
    return request({
        url: `${api_name}/update`,
        method: 'put',
        data: brand,
    })
}


// 根据id删除品牌
export const DeleteBrandById = brandId => {
    return request({
      url: `${api_name}/delete/${brandId}`,
      method: 'delete',
    })
}

// 查询所有的品牌数据
export const FindAllBrand = () => {
    return request({
      url: `${api_name}/select/all`,
      method: 'get',
    })
}