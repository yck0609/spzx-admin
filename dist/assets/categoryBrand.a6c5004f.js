import { l as service } from './index.3d070750.js';

const api_name = '/admin/category/brand';

// 分页列表
const GetCategoryBrandPageList = (page, size, searchObj) => {
    return service({
        url: `${api_name}/select/${page}/${size}`,
        method: 'get',
        params: searchObj,
    })
};

// 保存信息
const SaveCategoryBrand = categoryBrand => {
    return service({
      url: `${api_name}/insert`,
      method: 'post',
      data: categoryBrand,
    })
};

// 修改信息
const UpdateCategoryBrandById = categoryBrand => {
    return service({
        url: `${api_name}/update`,
        method: 'put',
        data: categoryBrand,
    })
};

// 根据id删除数据
const DeleteCategoryBrandById = id => {
    return service({
      url: `${api_name}/delete/${id}`,
      method: 'delete',
    })
};

// 根据分类的id获取品牌数据
const FindBrandByCategoryId = categoryId => {
    return service({
      url: `${api_name}/findBrandByCategoryId/${categoryId}`,
      method: 'get',
    })
};

export { DeleteCategoryBrandById as D, FindBrandByCategoryId as F, GetCategoryBrandPageList as G, SaveCategoryBrand as S, UpdateCategoryBrandById as U };
