import { l as service } from './index.89c44364.js';

const api_name = '/admin/product/brand';

// 分页列表
const GetBrandPageList = (page, limit) => {
  return service({
    url: `${api_name}/query/${page}/${limit}`,
    method: 'get'
  })
};

// 保存品牌
const SaveBrand = brand => {
    return service({
        url: `${api_name}/save`,
        method: 'post',
        data: brand,
    })
};

// 修改信息
const UpdateBrandById = brand => {
    return service({
        url: `${api_name}/update`,
        method: 'put',
        data: brand,
    })
};


// 根据id删除品牌
const DeleteBrandById = brandId => {
    return service({
      url: `${api_name}/delete/${brandId}`,
      method: 'delete',
    })
};

// 查询所有的品牌数据
const FindAllBrand = () => {
    return service({
      url: `${api_name}/findAll`,
      method: 'get',
    })
};

export { DeleteBrandById as D, FindAllBrand as F, GetBrandPageList as G, SaveBrand as S, UpdateBrandById as U };
