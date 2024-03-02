import { F as FindAllBrand } from './brand.679e6b07.js';
import { F as FindCategoryByParentId } from './category.5c4155bc.js';
import { G as GetCategoryBrandPageList, D as DeleteCategoryBrandById, U as UpdateCategoryBrandById, S as SaveCategoryBrand } from './categoryBrand.05ef2a9b.js';
import { _ as _export_sfc } from './index.2c51eab4.js';
import { r as ref, o as onMounted, p as resolveComponent, l as openBlock, J as createElementBlock, K as createBaseVNode, j as createVNode, n as withCtx, F as Fragment, Q as renderList, m as createBlock, R as createTextVNode, a9 as ElMessageBox, H as ElMessage } from './element-plus.fa662df5.js';

var categoryBrand_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1 = { class: "search-div" };
const _hoisted_2 = /*#__PURE__*/createTextVNode(" 搜索 ");
const _hoisted_3 = /*#__PURE__*/createTextVNode("重置");
const _hoisted_4 = { class: "tools-div" };
const _hoisted_5 = /*#__PURE__*/createTextVNode("添 加");
const _hoisted_6 = /*#__PURE__*/createTextVNode("提交");
const _hoisted_7 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_8 = ["src"];
const _hoisted_9 = /*#__PURE__*/createTextVNode(" 修改 ");
const _hoisted_10 = /*#__PURE__*/createTextVNode(" 删除 ");
//删除

const _sfc_main = {
  setup(__props) {

const remove = async id => {
  ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await DeleteCategoryBrandById(id);
      ElMessage.success('删除成功');
      fetchData();
    })
    .catch(() => {
      ElMessage.info('取消删除');
    });
};

////////////////////////////////////////////////////修改
//进入修改
const editShow = row => {
  categoryBrand.value = row;
  dialogVisible.value = true;
};

//提交保存与修改
const saveOrUpdate = () => {
  if (categoryBrand.value.brandId == '') {
    ElMessage.info('品牌信息必须选择');
    return
  }
  //categoryId为数组：[1,2,3]
  if (categoryBrand.value.categoryId.length != 3) {
    ElMessage.info('分类信息必须选择');
    return
  }
  //系统只需要三级分类id
  categoryBrand.value.categoryId = categoryBrand.value.categoryId[2];
  if (!categoryBrand.value.id) {
    saveData();
  } else {
    updateData(); 
  }
};

// 修改
const updateData = async () => {
  await UpdateCategoryBrandById(categoryBrand.value);
  dialogVisible.value = false;
  ElMessage.success('操作成功');
  fetchData(); 
};




////////////////////////////////////////////////新增
const defaultForm = {       //页面表单数据
  id: '',
  brandId: '',
  categoryId: '',
};
const categoryBrand = ref(defaultForm);    

const dialogVisible = ref(false);

//进入添加
const addShow = () => {
    categoryBrand.value = {};
    dialogVisible.value = true;
};

//提交保存与修改

// 新增
const saveData = async () => {
  await SaveCategoryBrand(categoryBrand.value);
  dialogVisible.value = false;
  ElMessage.success('操作成功');
  fetchData();
};

/////////////////////////////////////分页
const props = {
  lazy: true,
  value: 'id',
  label: 'name',
  leaf: 'leaf',
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

//查询所有品牌
const selectAllBrandList = async () => {
    const { data } = await FindAllBrand();
    brandList.value = data;
};

// 定义搜索表单数据模型
const brandList = ref([]);
// 定义表格数据模型
const list = ref([]);
// 分页条数据模型
const total = ref(0);
// 搜索表单数据模型
const queryDto = ref({ brandId: '', categoryId: '' });
const searchCategoryIdList = ref([]);
//分页条数据模型
const pageParamsForm = {
  page: 1,   // 页码
  limit: 10, // 每页记录数
};
const pageParams = ref(pageParamsForm);    
    
// onMounted钩子函数
onMounted(() => {
    selectAllBrandList(); // 查询所有的品牌数据
    fetchData();
});
    
//重置
const resetData = () => {
  queryDto.value = { brandId: '', categoryId: '' };
  searchCategoryIdList.value = [];
  fetchData();
};

//分页变化
const handleSizeChange = size => {
  pageParams.value.limit = size;
  fetchData();
};
const handleCurrentChange = number => {
  pageParams.value.page = number;
  fetchData();
};

// 分页列表查询
const fetchData = async () => {
  if (searchCategoryIdList.value.length == 3) {
     queryDto.value.categoryId = searchCategoryIdList.value[2];
  }
  const { data } = await GetCategoryBrandPageList( pageParams.value.page, pageParams.value.limit, queryDto.value);
  list.value = data.list;
  total.value = data.total;
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
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");

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
                        placeholder: "选择品牌",
                        size: "small",
                        style: {"width":"100%"},
                        modelValue: queryDto.value.brandId,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((queryDto.value.brandId) = $event))
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
                onClick: _cache[2] || (_cache[2] = $event => (fetchData()))
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
    createVNode(_component_el_dialog, {
      modelValue: dialogVisible.value,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((dialogVisible).value = $event)),
      title: "添加或修改",
      width: "30%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, { "label-width": "120px" }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "品牌" }, {
              default: withCtx(() => [
                createVNode(_component_el_select, {
                  class: "m-2",
                  placeholder: "选择品牌",
                  size: "small",
                  modelValue: categoryBrand.value.brandId,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((categoryBrand.value.brandId) = $event))
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
            }),
            createVNode(_component_el_form_item, { label: "分类" }, {
              default: withCtx(() => [
                createVNode(_component_el_cascader, {
                  props: categoryProps.value,
                  modelValue: categoryBrand.value.categoryId,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((categoryBrand.value.categoryId) = $event))
                }, null, 8, ["props", "modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: saveOrUpdate
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: _cache[5] || (_cache[5] = $event => (dialogVisible.value = false))
                }, {
                  default: withCtx(() => [
                    _hoisted_7
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
    }, 8, ["modelValue"]),
    createVNode(_component_el_table, {
      data: list.value,
      style: {"width":"100%"}
    }, {
      default: withCtx(() => [
        createVNode(_component_el_table_column, {
          prop: "categoryName",
          label: "分类"
        }),
        createVNode(_component_el_table_column, {
          prop: "brandName",
          label: "品牌"
        }),
        createVNode(_component_el_table_column, {
          prop: "logo",
          label: "品牌图标"
        }, {
          default: withCtx((scope) => [
            createBaseVNode("img", {
              src: scope.row.logo,
              width: "50"
            }, null, 8, _hoisted_8)
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "createTime",
          label: "创建时间"
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
              onClick: $event => (editShow(scope.row))
            }, {
              default: withCtx(() => [
                _hoisted_9
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_component_el_button, {
              type: "danger",
              size: "small",
              onClick: $event => (remove(scope.row.id))
            }, {
              default: withCtx(() => [
                _hoisted_10
              ]),
              _: 2
            }, 1032, ["onClick"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["data"]),
    createVNode(_component_el_pagination, {
      "current-page": pageParams.value.page,
      "onUpdate:current-page": _cache[7] || (_cache[7] = $event => ((pageParams.value.page) = $event)),
      "page-size": pageParams.value.limit,
      "onUpdate:page-size": _cache[8] || (_cache[8] = $event => ((pageParams.value.limit) = $event)),
      "page-sizes": [10, 20, 50, 100],
      layout: "total, sizes, prev, pager, next",
      total: total.value,
      onSizeChange: handleSizeChange,
      onCurrentChange: handleCurrentChange
    }, null, 8, ["current-page", "page-size", "total"])
  ], 64))
}
}

};
var categoryBrand = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-46182b9b"]]);

export { categoryBrand as default };
