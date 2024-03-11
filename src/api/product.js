import request from '@/utils/request'

const api_name = '/admin/product'

// 分页列表
export const GetProductPageList = (page, size, queryDto) => {
  return request({
    url: `${api_name}/select/${page}/${size}`,
    method: 'get',
    params: queryDto,
  })
}


// 保存信息
export const SaveProduct = product => {
  return request({
    url: `${api_name}/insert`,
    method: 'post',
    data: product,
  })
}

// 修改信息
export const UpdateProductById = product => {
  return request({
    url: `${api_name}/update`,
    method: 'put',
    data: product,
  })
}

// 根据id获取信息
export const GetProductById = productId => {
  return request({
    url: `${api_name}/select/${productId}`,
    method: 'get',
  })
}


// 根据id删除商品
export const DeleteProductById = productId => {
  return request({
    url: `${api_name}/delete/${productId}`,
    method: 'delete',
  })
}


//审核
export const UpdateProductAuditStatus = (id, auditStatus) => {
  return request({
    url: `${api_name}/auditStatus/update/${id}/${auditStatus}`,
    method: 'get',
  })
}

//上下架
export const UpdateProductStatus = (id, status) => {
  return request({
    url: `${api_name}/status/update/${id}/${status}`,
    method: 'get',
  })
}