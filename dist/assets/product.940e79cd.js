import { F as FindAllBrand } from './brand.e2959236.js';
import { F as FindCategoryByParentId } from './category.a4113c4e.js';
import { l as service, _ as _export_sfc, c as useApp } from './index.462def5c.js';
import { F as FindBrandByCategoryId } from './categoryBrand.e428db61.js';
import { F as FindAllProductSpec } from './productSpec.a2e52452.js';
import { r as ref, o as onMounted, p as resolveComponent, l as openBlock, J as createElementBlock, K as createBaseVNode, j as createVNode, n as withCtx, F as Fragment, Q as renderList, m as createBlock, R as createTextVNode, S as toDisplayString, L as createCommentVNode, H as ElMessage, a9 as ElMessageBox, $ as pushScopeId, a0 as popScopeId } from './element-plus.fa662df5.js';

const api_name$1 = '/admin/product';

// 分页列表
const GetProductPageList = (page, size, queryDto) => {
  return service({
    url: `${api_name$1}/select/${page}/${size}`,
    method: 'get',
    params: queryDto,
  })
};


// 保存信息
const SaveProduct = product => {
  return service({
    url: `${api_name$1}/insert`,
    method: 'post',
    data: product,
  })
};

// 修改信息
const UpdateProductById = product => {
  return service({
    url: `${api_name$1}/update`,
    method: 'put',
    data: product,
  })
};

// 根据id获取信息
const GetProductById = productId => {
  return service({
    url: `${api_name$1}/select/${productId}`,
    method: 'get',
  })
};


// 根据id删除商品
const DeleteProductById = productId => {
  return service({
    url: `${api_name$1}/delete/${productId}`,
    method: 'delete',
  })
};


//审核
const UpdateProductAuditStatus = (id, auditStatus) => {
  return service({
    url: `${api_name$1}/auditStatus/update/${id}/${auditStatus}`,
    method: 'get',
  })
};

//上下架
const UpdateProductStatus = (id, status) => {
  return service({
    url: `${api_name$1}/status/update/${id}/${status}`,
    method: 'get',
  })
};

const api_name = '/admin/product/unit';

// 获取全部信息
const FindAllProductUnit = () => {
    return service({
      url: `${api_name}/select/all`,
      method: 'get',
    })
};

var product_vue_vue_type_style_index_0_scoped_true_lang = '';

const _withScopeId = n => (pushScopeId("data-v-b63c70b2"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "search-div" };
const _hoisted_2 = /*#__PURE__*/createTextVNode(" 搜索 ");
const _hoisted_3 = /*#__PURE__*/createTextVNode("重置");
const _hoisted_4 = { class: "tools-div" };
const _hoisted_5 = /*#__PURE__*/createTextVNode("添 加");
const _hoisted_6 = { style: {"height":"50px","float":"left"} };
const _hoisted_7 = ["src"];
const _hoisted_8 = /*#__PURE__*/createTextVNode(" 修改 ");
const _hoisted_9 = /*#__PURE__*/createTextVNode(" 删除 ");
const _hoisted_10 = /*#__PURE__*/createTextVNode(" 审批 ");
const _hoisted_11 = /*#__PURE__*/createTextVNode(" 上架 ");
const _hoisted_12 = /*#__PURE__*/createTextVNode(" 下架 ");
const _hoisted_13 = { class: "tag-group__title" };
const _hoisted_14 = ["src"];
const _hoisted_15 = /*#__PURE__*/createTextVNode("提交");
const _hoisted_16 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_17 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("span", { style: {"margin-bottom":"5px"} }, "商品基本信息", -1));
const _hoisted_18 = ["src"];
const _hoisted_19 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("span", { style: {"margin-bottom":"5px"} }, "商品SKU信息", -1));
const _hoisted_20 = ["src"];
const _hoisted_21 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("span", { style: {"margin-bottom":"5px"} }, "商品详情信息", -1));
const _hoisted_22 = ["src"];
const _hoisted_23 = /*#__PURE__*/createTextVNode(" 通过 ");
const _hoisted_24 = /*#__PURE__*/createTextVNode(" 驳回 ");
const _hoisted_25 = /*#__PURE__*/createTextVNode(" 取消 ");

// ----------------------------------------------------分页列表查询 start --------------------------------------------------------------------------
// 品牌列表数据模型

const _sfc_main = {
  setup(__props) {

const brandList = ref([]);

// 分类列表
const props = {
  lazy: true,
  value: 'id',
  label: 'name',
  leaf: 'leaf',
  checkStrictly: true ,
  async lazyLoad(node, resolve) {   // 加载数据的方法
    if (typeof node.value == 'undefined') node.value = 0;
    const { data } = await FindCategoryByParentId(node.value);
    data.forEach(function(item) {       //hasChildren判断是否有子节点
      item.leaf = !item.hasChildren;
    });
    resolve(data);  // 返回数据  
  }
};
const categoryProps = ref(props);

// 选中的数据模型
const queryDto = ref({ brandId: '', category1Id: '' , category2Id: '', category3Id: ''});
const searchCategoryIdList = ref([]);

//分页数据
const pageParamsForm = {
  page: 1, // 页码
  limit: 10, // 每页记录数
};
const pageParams = ref(pageParamsForm);

// 表格数据模型
const list = ref([]);

// 总记录数数据模型
const total = ref(0);

// 钩子函数
onMounted(async () => {
    const { data } = await FindAllBrand(); 
    brandList.value = data;
    fetchData();
});

//页面变化
const handleSizeChange = size => {
  pageParams.value.limit = size;
  fetchData();
};
const handleCurrentChange = number => {
  pageParams.value.page = number;
  fetchData();
};

//重置
const resetData = () => {
  queryDto.value = {};
  searchCategoryIdList.value = [];
  fetchData();
};

// 分页列表查询方法
const fetchData = async () => {

  // 处理三级分类的id
  if(searchCategoryIdList.value.length == 1) {
    queryDto.value.category1Id = searchCategoryIdList.value[0];
  }

  if(searchCategoryIdList.value.length == 2) {
    queryDto.value.category1Id = searchCategoryIdList.value[0];
    queryDto.value.category2Id = searchCategoryIdList.value[1];
  }

  if(searchCategoryIdList.value.length == 3) {
    queryDto.value.category1Id = searchCategoryIdList.value[0];
    queryDto.value.category2Id = searchCategoryIdList.value[1];
    queryDto.value.category3Id = searchCategoryIdList.value[2];
  }

  // 请求后端接口
  const { data } = await GetProductPageList( pageParams.value.page, pageParams.value.limit,queryDto.value);
  data.list.forEach(item => {
    item.sliderUrls = item.sliderUrls.split(',');
  });

  // 将响应结果数据设置给对应的属性模型
  list.value = data.list;
  total.value = data.total;
};

// 控制对话框是否展示的数据模型
const dialogVisible = ref(false);

// 表单label对其方式
const labelPosition = ref('top');

// 对话框激活的面板
const activeNames = ref(['productBaseInfo' , 'skuInfo' , 'productDetails' , 'submit']);

// 表单数据模型
const defaultForm = {
    id: '',
    name: '',
    brandId: '',
    category1Id: '',
    category2Id: '',
    category3Id: '',
    unitName: '',
    sliderUrls: '',
    specValue: '',
    productSkuList: [],
    detailsImageUrls: '',
};
const product = ref(defaultForm);


//进入添加
const addShow = () => {
  props.checkStrictly = false; 
  dialogVisible.value = true;
  //清空
  fileList.value = [];
  categoryIdList.value = [];
  detailsFileList.value = [];
  sliderUrlList.value = [];
  specValueList.value = [];
  product.value = {};
  fetchProductUnit();
  fetchProductSpect();
};

// 分类级联选择器选中数据以后的数据模型
const categoryIdList = ref([]);

// 分类级联选择器数据发送改变以后的事件处理函数
const categoryChange = async () => {
    if (categoryIdList.value.length == 3) {
      product.value.category1Id = categoryIdList.value[0];
      product.value.category2Id = categoryIdList.value[1];
      product.value.category3Id = categoryIdList.value[2];
      const { data } = await FindBrandByCategoryId(categoryIdList.value[2]);
      categoryBrandList.value = data;
      if(product.value.id) {
        product.value.brandId = '';
      }
    }
};

// 定义品牌的数据模型
const categoryBrandList = ref([]);

// 商品单元的数据模型
const unitList = ref([]);

// 查询所有的商品单元
const fetchProductUnit = async () => {
   const { data } = await FindAllProductUnit();
   unitList.value = data; 
};


// 商品规格数据数据模型
const specList = ref([]);

// 查询产品规格数据
const fetchProductSpect = async () => {
    const { data } = await FindAllProductSpec();
    specList.value = data;
};


const saveOrUpdate = () => {

  console.log('submit!' + product.value);
  product.value.sliderUrls = sliderUrlList.value.join(',');
  product.value.detailsImageUrls = detailsImageUrlList.value.join(',');
  if (!product.value.id) {
    saveData();
  } else {
    updateData();
  }
};

// 新增
const saveData = async () => {
  await SaveProduct(product.value);
  dialogVisible.value = false;
  ElMessage.success('操作成功');
  fetchData();
};

// 修改
const updateData = async () => {
  console.log(product.value);
  await UpdateProductById(product.value);
  dialogVisible.value = false;
  ElMessage.success('操作成功');
  fetchData();
};

// 展示选择的规则数据
const specValueList = ref([]);
const changeSpecValueList = () => {
  specValueList.value = JSON.parse(product.value.specValue);
  const specValueArr = []; 
  specValueList.value.forEach((item , index) => {
    specValueArr.push(item.valueList);
  });


  // last为上次运算的结果，current为数组中的当前元素
  var result = specValueArr.reduce((last, current) => {
        const array = [];
        last.forEach(par1 => {
            current.forEach(par2 => {
                array.push(par1 + " + " + par2);
            });
        });
        return array;
  });

  console.log(result);
  product.value.productSkuList = [];
  result.forEach(function(item) {
    product.value.productSkuList.push({
      skuSpec: item,
      price: 0,
    });
  });

};

// 上传商品轮播图图片
const sliderUrlList = ref([]);
const headers = {
  token: useApp().authorization.token     // 从pinia中获取token，在进行文件上传的时候将token设置到请求头中
};
const handleRemove = (uploadFile, uploadFiles) => {
  sliderUrlList.value.splice(sliderUrlList.value.indexOf(uploadFile.url), 1);
};
const fileList = ref([]);
const handleSliderSuccess = (response, uploadFile) => {
  sliderUrlList.value.push(response.data);
};


//sku图片
const handleSkuSuccess = (response, uploadFile, fileList, row) => {
  row.thumbImg = response.data;
};


// 上传商品详情图片
const detailsFileList = ref([]);
const handleDetailsRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
  detailsImageUrlList.value.splice( detailsImageUrlList.value.indexOf(uploadFile.url),1);
  console.log(sliderUrlList.value);
};
const detailsImageUrlList = ref([]);
const handleDetailsSuccess = (response, uploadFile) => {
  console.log(response);
  detailsImageUrlList.value.push(response.data);
  console.log(detailsImageUrlList.value);
};


//进入修改
const editShow = row => {
  getById(row.id);
  props.checkStrictly = false; 
  dialogVisible.value = true;
};

const getById = async id => {
  const { data } = await GetProductById(id);
  product.value = data;
  // eslint-disable-next-line no-debugger
  console.log(product.value);

  //分类赋值
  categoryIdList.value = [ product.value.category1Id, product.value.category2Id, product.value.category3Id];

  //处理图片
  fileList.value = [];
  sliderUrlList.value = product.value.sliderUrls.split(',');
  sliderUrlList.value.forEach(url => {
    fileList.value.push({ url: url });
  });

  // 处理规格数据
  specValueList.value = JSON.parse(product.value.specValue);

  //处理sku
  // product.value.productSkuList.forEach(sku => {
  //   sku.skuSpec = sku.skuSpec.split(',').join(' * ')
  //   sku.skuSpecList = sku.skuSpec.split(',')
  // })

  //处理详情图片
  detailsFileList.value = [];
  detailsImageUrlList.value = product.value.detailsImageUrls.split(',');
  detailsImageUrlList.value.forEach(url => {
    detailsFileList.value.push({ url: url });
  });

  //加载分类品牌
  getBrand(); 
  fetchProductUnit();
  fetchProductSpect();
};

const getBrand = async () => {
  const { data } = await FindBrandByCategoryId(categoryIdList.value[2]);
  categoryBrandList.value = data;
};

//删除
const remove = async id => {
  console.log('removeDataById:' + id);
  ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await DeleteProductById(id);
      ElMessage.success('删除成功');
      fetchData();
    })
    .catch(() => {
      ElMessage.info('取消删除');
    });
};

const dialogAuditVisible = ref(false);
const audit = async id => {
  const { data } = await GetProductById(id);
  product.value = data;

  //分类赋值
  categoryIdList.value = [ product.value.category1Id, product.value.category2Id, product.value.category3Id];

  //处理图片
  fileList.value = [];
  sliderUrlList.value = product.value.sliderUrls.split(',');
  sliderUrlList.value.forEach(url => {
    fileList.value.push({ url: url });
  });

  // 处理规格数据
  specValueList.value = JSON.parse(product.value.specValue);

  //处理详情图片
  detailsFileList.value = [];
  detailsImageUrlList.value = product.value.detailsImageUrls.split(',');
  detailsImageUrlList.value.forEach(url => {
    detailsFileList.value.push({ url: url });
  });

  //加载分类品牌
  getBrand(); 
  fetchProductUnit();
  fetchProductSpect();

  dialogAuditVisible.value = true;
};

const updateAuditStatus = async (id, auditStatus) => {
  await UpdateProductAuditStatus(id, auditStatus);
  dialogAuditVisible.value = false;
  ElMessage.success('操作成功');
  fetchData();
};

//上下架
const updateStatus = async (id, status) => {
  await UpdateProductStatus(id, status);
  dialogAuditVisible.value = false;
  ElMessage.success('操作成功');
  fetchData();
};


return (_ctx, _cache) => {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_cascader = resolveComponent("el-cascader");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");
  const _component_el_input = resolveComponent("el-input");
  const _component_Plus = resolveComponent("Plus");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_upload = resolveComponent("el-upload");
  const _component_el_collapse_item = resolveComponent("el-collapse-item");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_collapse = resolveComponent("el-collapse");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_el_divider = resolveComponent("el-divider");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_el_form, {
        "label-width": "70px",
        size: "small"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_row, null, {
            default: withCtx(() => [
              createVNode(_component_el_col, { span: 12 }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, { label: "品牌" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_select, {
                        class: "m-2",
                        modelValue: queryDto.value.brandId,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((queryDto.value.brandId) = $event)),
                        placeholder: "选择品牌",
                        size: "small",
                        style: {"width":"100%"}
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(brandList.value, (item) => {
                            return (openBlock(), createBlock(_component_el_option, {
                              key: item.id,
                              label: item.name,
                              value: item.id
                            }, null, 8, ["label", "value"]))
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_col, { span: 12 }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, { label: "分类" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_cascader, {
                        props: categoryProps.value,
                        style: {"width":"100%"},
                        modelValue: searchCategoryIdList.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((searchCategoryIdList).value = $event))
                      }, null, 8, ["props", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_el_row, { style: {"display":"flex"} }, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                type: "primary",
                size: "small",
                onClick: fetchData
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                size: "small",
                onClick: resetData
              }, {
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    createBaseVNode("div", _hoisted_4, [
      createVNode(_component_el_button, {
        type: "success",
        size: "small",
        onClick: addShow
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      })
    ]),
    createVNode(_component_el_table, {
      data: list.value,
      style: {"width":"100%"}
    }, {
      default: withCtx(() => [
        createVNode(_component_el_table_column, {
          prop: "sliderUrls",
          label: "轮播图",
          width: "200"
        }, {
          default: withCtx((scope) => [
            createBaseVNode("div", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(scope.row.sliderUrls, (item, index) => {
                return (openBlock(), createElementBlock("img", {
                  key: index,
                  src: item,
                  width: "50"
                }, null, 8, _hoisted_7))
              }), 128))
            ])
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "name",
          label: "商品名称",
          width: "160"
        }),
        createVNode(_component_el_table_column, {
          prop: "brandName",
          label: "品牌"
        }),
        createVNode(_component_el_table_column, {
          prop: "category1Name",
          label: "一级分类"
        }),
        createVNode(_component_el_table_column, {
          prop: "category2Name",
          label: "二级分类"
        }),
        createVNode(_component_el_table_column, {
          prop: "category3Name",
          label: "三级分类"
        }),
        createVNode(_component_el_table_column, {
          prop: "unitName",
          label: "计量单位"
        }),
        createVNode(_component_el_table_column, {
          prop: "status",
          label: "状态"
        }, {
          default: withCtx((scope) => [
            createTextVNode(toDisplayString(scope.row.status == 0
                ? '未上架'
                : scope.row.status == 1
                ? '上架'
                : '下架'), 1)
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "auditStatus",
          label: "审核状态"
        }, {
          default: withCtx((scope) => [
            createTextVNode(toDisplayString(scope.row.auditStatus == 0
                ? '未审核'
                : scope.row.auditStatus == 1
                ? '通过'
                : '驳回'), 1)
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          label: "操作",
          align: "center",
          width: "200"
        }, {
          default: withCtx((scope) => [
            createVNode(_component_el_button, {
              type: "primary",
              size: "small",
              onClick: $event => (editShow(scope.row)),
              style: {"padding":"5px","margin-left":"5px"}
            }, {
              default: withCtx(() => [
                _hoisted_8
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_component_el_button, {
              type: "danger",
              size: "small",
              onClick: $event => (remove(scope.row.id)),
              style: {"padding":"5px","margin-left":"5px"}
            }, {
              default: withCtx(() => [
                _hoisted_9
              ]),
              _: 2
            }, 1032, ["onClick"]),
            (scope.row.auditStatus == 0 || scope.row.auditStatus == -1)
              ? (openBlock(), createBlock(_component_el_button, {
                  key: 0,
                  type: "success",
                  size: "small",
                  onClick: $event => (audit(scope.row.id)),
                  style: {"padding":"5px","margin-left":"5px"}
                }, {
                  default: withCtx(() => [
                    _hoisted_10
                  ]),
                  _: 2
                }, 1032, ["onClick"]))
              : createCommentVNode("", true),
            ( scope.row.auditStatus == 1 && (scope.row.status == 0 || scope.row.status == -1)
          && scope.row.status == 0 )
              ? (openBlock(), createBlock(_component_el_button, {
                  key: 1,
                  type: "warning",
                  size: "small",
                  onClick: $event => (updateStatus(scope.row.id, 1)),
                  style: {"padding":"5px","margin-left":"5px"}
                }, {
                  default: withCtx(() => [
                    _hoisted_11
                  ]),
                  _: 2
                }, 1032, ["onClick"]))
              : createCommentVNode("", true),
            (
            scope.row.auditStatus == 1 &&
              (scope.row.status == 0 || scope.row.status == 1) && scope.row.status == 1 
          )
              ? (openBlock(), createBlock(_component_el_button, {
                  key: 2,
                  type: "warning",
                  plain: "",
                  size: "small",
                  onClick: $event => (updateStatus(scope.row.id, -1)),
                  style: {"padding":"5px","margin-left":"5px"}
                }, {
                  default: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 2
                }, 1032, ["onClick"]))
              : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["data"]),
    createVNode(_component_el_pagination, {
      "current-page": pageParams.value.page,
      "onUpdate:current-page": _cache[2] || (_cache[2] = $event => ((pageParams.value.page) = $event)),
      "page-size": pageParams.value.limit,
      "onUpdate:page-size": _cache[3] || (_cache[3] = $event => ((pageParams.value.limit) = $event)),
      "page-sizes": [10, 20, 50, 100],
      layout: "total, sizes, prev, pager, next",
      total: total.value,
      onSizeChange: handleSizeChange,
      onCurrentChange: handleCurrentChange
    }, null, 8, ["current-page", "page-size", "total"]),
    createVNode(_component_el_dialog, {
      modelValue: dialogVisible.value,
      "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => ((dialogVisible).value = $event)),
      title: "添加或修改",
      width: "80%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, {
          "label-width": "120px",
          style: {"margin-top":"10px"},
          "label-position": labelPosition.value
        }, {
          default: withCtx(() => [
            createVNode(_component_el_collapse, {
              modelValue: activeNames.value,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => ((activeNames).value = $event))
            }, {
              default: withCtx(() => [
                createVNode(_component_el_collapse_item, {
                  title: "商品基本信息",
                  name: "productBaseInfo"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "商品名称" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: product.value.name,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((product.value.name) = $event))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "分类" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_cascader, {
                          style: {"width":"100%"},
                          props: categoryProps.value,
                          modelValue: categoryIdList.value,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((categoryIdList).value = $event)),
                          onChange: categoryChange
                        }, null, 8, ["props", "modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "品牌" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          class: "m-2",
                          placeholder: "选择品牌",
                          modelValue: product.value.brandId,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((product.value.brandId) = $event)),
                          style: {"width":"100%"}
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(categoryBrandList.value, (item) => {
                              return (openBlock(), createBlock(_component_el_option, {
                                key: item.id,
                                label: item.name,
                                value: item.id
                              }, null, 8, ["label", "value"]))
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "商品单元" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: product.value.unitName,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((product.value.unitName) = $event)),
                          style: {"width":"100%"},
                          class: "m-2",
                          placeholder: "商品单元"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unitList.value, (item) => {
                              return (openBlock(), createBlock(_component_el_option, {
                                key: item.id,
                                label: item.name,
                                value: item.name
                              }, null, 8, ["label", "value"]))
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "轮播图" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_upload, {
                          "file-list": fileList.value,
                          "onUpdate:file-list": _cache[8] || (_cache[8] = $event => ((fileList).value = $event)),
                          action: "http://121.41.52.4:1448/admin/fileUpload",
                          "list-type": "picture-card",
                          multiple: "",
                          "on-success": handleSliderSuccess,
                          "on-remove": handleRemove,
                          headers: headers
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(_component_Plus)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["file-list"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_collapse_item, {
                  title: "商品SKU信息",
                  name: "skuInfo"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "选择规格" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          disabled: product.value.id != '' && product.value.id != undefined ,
                          modelValue: product.value.specValue,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ((product.value.specValue) = $event)),
                          style: {"width":"100%"},
                          class: "m-2",
                          placeholder: "选择规格",
                          size: "default",
                          onChange: changeSpecValueList
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(specList.value, (item) => {
                              return (openBlock(), createBlock(_component_el_option, {
                                key: item.specValue,
                                label: item.specName,
                                value: item.specValue
                              }, null, 8, ["label", "value"]))
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["disabled", "modelValue"])
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(specValueList.value, (item, index) => {
                      return (openBlock(), createElementBlock("div", {
                        class: "specValue",
                        key: index
                      }, [
                        createBaseVNode("span", _hoisted_13, toDisplayString(item.key), 1),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item.valueList, (specValue, index) => {
                          return (openBlock(), createBlock(_component_el_tag, {
                            class: "tag-group__title",
                            type: "success",
                            effect: "dark",
                            key: index
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(specValue), 1)
                            ]),
                            _: 2
                          }, 1024))
                        }), 128))
                      ]))
                    }), 128)),
                    createVNode(_component_el_form_item, { label: "商品SKU" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_table, {
                          data: product.value.productSkuList,
                          border: "",
                          style: {"width":"100%"}
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_table_column, {
                              prop: "skuSpec",
                              label: "规格",
                              width: "180"
                            }),
                            createVNode(_component_el_table_column, {
                              label: "图片",
                              width: "80"
                            }, {
                              default: withCtx((scope) => [
                                createVNode(_component_el_upload, {
                                  class: "avatar-uploader",
                                  action: "http://121.41.52.4:1448/admin/fileUpload",
                                  "show-file-list": false,
                                  "on-success": 
                              (response, uploadFile, fileList) => handleSkuSuccess(response, uploadFile, fileList, scope.row)
                            ,
                                  headers: headers
                                }, {
                                  default: withCtx(() => [
                                    (scope.row.thumbImg)
                                      ? (openBlock(), createElementBlock("img", {
                                          key: 0,
                                          src: scope.row.thumbImg,
                                          class: "avatar"
                                        }, null, 8, _hoisted_14))
                                      : (openBlock(), createBlock(_component_el_icon, {
                                          key: 1,
                                          class: "avatar-uploader-icon"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Plus)
                                          ]),
                                          _: 1
                                        }))
                                  ]),
                                  _: 2
                                }, 1032, ["on-success"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_table_column, { label: "售价" }, {
                              default: withCtx((scope) => [
                                createVNode(_component_el_input, {
                                  modelValue: scope.row.salePrice,
                                  "onUpdate:modelValue": $event => ((scope.row.salePrice) = $event)
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_table_column, { label: "市场价" }, {
                              default: withCtx((scope) => [
                                createVNode(_component_el_input, {
                                  modelValue: scope.row.marketPrice,
                                  "onUpdate:modelValue": $event => ((scope.row.marketPrice) = $event)
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_table_column, { label: "成本价" }, {
                              default: withCtx((scope) => [
                                createVNode(_component_el_input, {
                                  modelValue: scope.row.costPrice,
                                  "onUpdate:modelValue": $event => ((scope.row.costPrice) = $event)
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_table_column, { label: "库存数" }, {
                              default: withCtx((scope) => [
                                createVNode(_component_el_input, {
                                  modelValue: scope.row.stockNum,
                                  "onUpdate:modelValue": $event => ((scope.row.stockNum) = $event)
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_table_column, { label: "重量" }, {
                              default: withCtx((scope) => [
                                createVNode(_component_el_input, {
                                  modelValue: scope.row.weight,
                                  "onUpdate:modelValue": $event => ((scope.row.weight) = $event)
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_table_column, { label: "体积" }, {
                              default: withCtx((scope) => [
                                createVNode(_component_el_input, {
                                  modelValue: scope.row.volume,
                                  "onUpdate:modelValue": $event => ((scope.row.volume) = $event)
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["data"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_collapse_item, {
                  title: "商品详情信息",
                  name: "productDetails"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "详情图片" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_upload, {
                          "file-list": detailsFileList.value,
                          "onUpdate:file-list": _cache[10] || (_cache[10] = $event => ((detailsFileList).value = $event)),
                          action: "http://121.41.52.4:1448/admin/fileUpload",
                          "list-type": "picture-card",
                          multiple: "",
                          "on-success": handleDetailsSuccess,
                          "on-remove": handleDetailsRemove,
                          headers: headers
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(_component_Plus)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["file-list"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_collapse_item, {
                  title: "保存修改数据",
                  name: "submit",
                  disabled: true
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "primary",
                          onClick: saveOrUpdate
                        }, {
                          default: withCtx(() => [
                            _hoisted_15
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_button, {
                          onClick: _cache[11] || (_cache[11] = $event => (dialogVisible.value = false))
                        }, {
                          default: withCtx(() => [
                            _hoisted_16
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["label-position"])
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(_component_el_dialog, {
      modelValue: dialogAuditVisible.value,
      "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => ((dialogAuditVisible).value = $event)),
      title: "审批",
      width: "80%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, {
          model: product.value,
          "label-width": "120px",
          style: {"margin-top":"10px"}
        }, {
          default: withCtx(() => [
            createVNode(_component_el_divider),
            _hoisted_17,
            createVNode(_component_el_row, null, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "商品名称" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(product.value.name), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "分类" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(product.value.category1Name) + " => " + toDisplayString(product.value.category2Name) + " => " + toDisplayString(product.value.category3Name), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_row, null, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "品牌" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(product.value.brandName), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "计量单位" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(product.value.unitName), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_row, null, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "创建时间" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(product.value.createTime), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "状态" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(product.value.auditStatus == 0
                ? '未审核'
                : product.value.auditStatus == 1
                ? '通过'
                : '驳回'), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_row, null, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "轮播图" }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(sliderUrlList.value, (item, index) => {
                          return (openBlock(), createElementBlock("img", {
                            key: index,
                            src: item,
                            style: {"width":"50px"}
                          }, null, 8, _hoisted_18))
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_divider),
            _hoisted_19,
            createVNode(_component_el_form_item, { label: "商品SKU" }, {
              default: withCtx(() => [
                createVNode(_component_el_table, {
                  data: product.value.productSkuList,
                  border: "",
                  style: {"width":"100%"}
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_table_column, {
                      prop: "skuSpec",
                      label: "规格",
                      width: "180"
                    }),
                    createVNode(_component_el_table_column, {
                      label: "图片",
                      width: "80"
                    }, {
                      default: withCtx((scope) => [
                        createBaseVNode("img", {
                          src: scope.row.thumbImg,
                          style: {"width":"80px"}
                        }, null, 8, _hoisted_20)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "售价",
                      prop: "salePrice"
                    }),
                    createVNode(_component_el_table_column, {
                      label: "市场价",
                      prop: "marketPrice"
                    }),
                    createVNode(_component_el_table_column, {
                      label: "成本价",
                      prop: "costPrice"
                    }),
                    createVNode(_component_el_table_column, {
                      label: "库存数",
                      prop: "stockNum"
                    }),
                    createVNode(_component_el_table_column, {
                      label: "重量",
                      prop: "weight"
                    }),
                    createVNode(_component_el_table_column, {
                      label: "体积",
                      prop: "volume"
                    })
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              _: 1
            }),
            createVNode(_component_el_divider),
            _hoisted_21,
            createVNode(_component_el_form_item, { label: "详情图片" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(detailsImageUrlList.value, (item, index) => {
                  return (openBlock(), createElementBlock("img", {
                    key: index,
                    src: item,
                    style: {"width":"80px"}
                  }, null, 8, _hoisted_22))
                }), 128))
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "success",
                  size: "large",
                  onClick: _cache[14] || (_cache[14] = $event => (updateAuditStatus(product.value.id, 1)))
                }, {
                  default: withCtx(() => [
                    _hoisted_23
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  type: "success",
                  size: "large",
                  plain: "",
                  onClick: _cache[15] || (_cache[15] = $event => (updateAuditStatus(product.value.id, -1)))
                }, {
                  default: withCtx(() => [
                    _hoisted_24
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  size: "large",
                  onClick: _cache[16] || (_cache[16] = $event => (dialogAuditVisible.value = false))
                }, {
                  default: withCtx(() => [
                    _hoisted_25
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64))
}
}

};
var product = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-b63c70b2"]]);

export { product as default };
