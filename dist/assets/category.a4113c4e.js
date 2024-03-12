import { l as service } from './index.462def5c.js';

const api_name = '/admin/category';

// 根据parentId获取下级节点
const FindCategoryByParentId = parentId => {
  return service({
    url: `${api_name}/select/${parentId}`,
    method: 'get',
  })
};

// 导出方法
const ExportCategoryData = () => {
    return service({
      url: `${api_name}/export`,
      method: 'get',
      responseType: 'blob'  // // 这里指定响应类型为blob类型,二进制数据类型，用于表示大量的二进制数据
    })
  };

export { ExportCategoryData as E, FindCategoryByParentId as F };
