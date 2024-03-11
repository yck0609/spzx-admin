import request from '@/utils/request'

const api_name = '/admin/category/brand'

// 分页列表
export const GetCategoryBrandPageList = (page, size, searchObj) => {
    return request({
        url: `${api_name}/select/${page}/${size}`,
        method: 'get',
        params: searchObj,
    })
}

// 保存信息
export const SaveCategoryBrand = categoryBrand => {
    return request({
      url: `${api_name}/insert`,
      method: 'post',
      data: categoryBrand,
    })
}

// 修改信息
export const UpdateCategoryBrandById = categoryBrand => {
    return request({
        url: `${api_name}/update`,
        method: 'put',
        data: categoryBrand,
    })
}

// 根据id删除数据
export const DeleteCategoryBrandById = id => {
    return request({
      url: `${api_name}/delete/${id}`,
      method: 'delete',
    })
}

// 根据分类的id获取品牌数据
export const FindBrandByCategoryId = categoryId => {
    return request({
      url: `${api_name}/findBrandByCategoryId/${categoryId}`,
      method: 'get',
    })
}