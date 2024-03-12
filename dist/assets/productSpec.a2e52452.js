import { l as service } from './index.462def5c.js';

const api_name = '/admin/product/specification';

// 分页列表
const GetProductSpecPageList = (page, size) => {
    return service({
      url: `${api_name}/select/${page}/${size}`,
      method: 'get'
    })
};

// 保存信息
const SaveProductSpec = productSpec => {
    return service({
      url: `${api_name}/insert`,
      method: 'post',
      data: productSpec,
    })
};

// 修改信息
const UpdateProductSpecById = productSpec => {
    return service({
        url: `${api_name}/update`,
        method: 'put',
        data: productSpec,
    })
};

// 根据id删除数据
const DeleteProductSpecById = productSpecificationId => {
    return service({
      url: `${api_name}/delete/${productSpecificationId}`,
      method: 'delete',
    })
};

// 查询所有的产品规格数据
const FindAllProductSpec = () => {
    return service({
      url: `${api_name}/select/all`,
      method: 'get',
    })
  };

export { DeleteProductSpecById as D, FindAllProductSpec as F, GetProductSpecPageList as G, SaveProductSpec as S, UpdateProductSpecById as U };
