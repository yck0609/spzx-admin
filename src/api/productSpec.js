import request from '@/utils/request'

const api_name = '/admin/product/specification'

// 分页列表
export const GetProductSpecPageList = (page, size) => {
    return request({
      url: `${api_name}/select/${page}/${size}`,
      method: 'get',
    })
}

// 保存信息
export const SaveProductSpec = productSpec => {
    return request({
      url: `${api_name}/insert`,
      method: 'post',
      data: productSpec,
    })
}

// 修改信息
export const UpdateProductSpecById = productSpec => {
    return request({
        url: `${api_name}/update`,
        method: 'put',
        data: productSpec,
    })
}

// 根据id删除数据
export const DeleteProductSpecById = productSpecificationId => {
    return request({
      url: `${api_name}/delete/${productSpecificationId}`,
      method: 'delete',
    })
}

// 查询所有的产品规格数据
export const FindAllProductSpec = () => {
    return request({
      url: `${api_name}/select/all`,
      method: 'get',
    })
  }