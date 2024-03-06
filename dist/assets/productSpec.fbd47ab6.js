import { l as service } from './index.89c44364.js';

const api_name = '/admin/product/productSpec';

// 分页列表
const GetProductSpecPageList = (page, limit) => {
    return service({
      url: `${api_name}/${page}/${limit}`,
      method: 'get'
    })
};

// 保存信息
const SaveProductSpec = productSpec => {
    return service({
      url: `${api_name}/save`,
      method: 'post',
      data: productSpec,
    })
};

// 修改信息
const UpdateProductSpecById = productSpec => {
    return service({
        url: `${api_name}/updateById`,
        method: 'put',
        data: productSpec,
    })
};

// 根据id删除数据
const DeleteProductSpecById = id => {
    return service({
      url: `${api_name}/deleteById/${id}`,
      method: 'delete',
    })
};

// 查询所有的产品规格数据
const FindAllProductSpec = () => {
    return service({
      url: `${api_name}/findAll`,
      method: 'get',
    })
  };

export { DeleteProductSpecById as D, FindAllProductSpec as F, GetProductSpecPageList as G, SaveProductSpec as S, UpdateProductSpecById as U };
