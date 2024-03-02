import { G as GetProductSpecPageList, U as UpdateProductSpecById, S as SaveProductSpec, D as DeleteProductSpecById } from './productSpec.f6bc7791.js';
import { _ as _export_sfc } from './index.2c51eab4.js';
import { r as ref, o as onMounted, p as resolveComponent, l as openBlock, J as createElementBlock, K as createBaseVNode, j as createVNode, n as withCtx, F as Fragment, Q as renderList, R as createTextVNode, S as toDisplayString, m as createBlock, H as ElMessage, a9 as ElMessageBox } from './element-plus.fa662df5.js';

var productSpec_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1 = { class: "tools-div" };
const _hoisted_2 = /*#__PURE__*/createTextVNode("添 加");
const _hoisted_3 = /*#__PURE__*/createTextVNode(" 修改 ");
const _hoisted_4 = /*#__PURE__*/createTextVNode(" 删除 ");
const _hoisted_5 = /*#__PURE__*/createTextVNode(" 添加新规格 ");
const _hoisted_6 = /*#__PURE__*/createTextVNode("删除");
const _hoisted_7 = /*#__PURE__*/createTextVNode("提交");
const _hoisted_8 = /*#__PURE__*/createTextVNode("取消");

// 表格数据模型

const _sfc_main = {
  setup(__props) {

const list = ref([
    {
        "id": 2,
        "createTime": "2023-05-06 12:56:08",
        "specName": "笔记本电脑",
        "specValue": [{"key":"内存","valueList":["8G","18G","32G"]}]
    },
    {
        "id": 1,
        "createTime": "2023-05-06 12:40:22",
        "specName": "小米手机",
        "specValue": [{"key":"颜色","valueList":["白色","红色","黑色"]},{"key":"内存","valueList":["8G","18G"]}]
    }
]);

// 分页条数据模型
const total = ref(0);

//分页条数据模型
const pageParamsForm = {
  page: 1, // 页码
  limit: 10, // 每页记录数
};
const pageParams = ref(pageParamsForm);

// 定义数据模型
const dialogVisible = ref(false);

// 添加表单数据模型
const defaultForm = {
  id: '',
  specName: '',
  specValue: [
        {
            "key": "颜色",
            "valueList": [
                "白色",
                "红色",
                "黑色"
            ]
        },
        {
            "key": "内存",
            "valueList": [
                "8G",
                "18G"
            ]
        }
    ]
};
const productSpec = ref(defaultForm);

//进入修改
const editShow = row => {
    productSpec.value = row; 
    dialogVisible.value = true;
};

//进入添加
const addShow = () => {
  dialogVisible.value = true;
  productSpec.value = {
    id: '',
    specName: '',
    specValue: []
  };
};

// 页面添加规格操作
const addSpec = () => {
    productSpec.value.specValue.push({});
};

// 页面删除规格元素
const delSpec = (index) => {
    productSpec.value.specValue.splice(index , 1);
}; 

// 提交表单
const saveOrUpdate = async () => {

    if(!productSpec.value.id)  {
        saveData();
    }else {
        updateData();
    }

};

// 保存修改
const updateData = async () => {

    // 需要将productSpec.value.specValue转换成json字符串提交到后端，通过clone一个新的对象进行实现
    const productSpecClone = JSON.parse(JSON.stringify(productSpec.value));

    // 将productSpecClone.specValue.valueList转换成数组，因为后端需要的数组格式的数据[{"key":"内存","valueList":["8G","18G","32G"]}]
    // v-model绑定的数据模型为字符串
    productSpecClone.specValue.forEach(item => {  
        console.log(typeof item.valueList);
        if(typeof item.valueList === 'string') {   // 针对规格数据修改完毕以后数据类型有可能会变成string，针对string类型的数据将其转换成数组
            item.valueList = item.valueList.split(",");
        }   
    });
    productSpecClone.specValue = JSON.stringify(productSpecClone.specValue);

    // 提交表单
    await UpdateProductSpecById(productSpecClone);

    dialogVisible.value = false;
    ElMessage.success('操作成功');
    fetchData();
};

// 保存数据
const saveData = async () => {

    // 需要将productSpec.value.specValue转换成json字符串提交到后端，通过clone一个新的对象进行实现
    const productSpecClone = JSON.parse(JSON.stringify(productSpec.value));

    // 将productSpecClone.specValue.valueList转换成数组，因为后端需要的数组格式的数据[{"key":"内存","valueList":["8G","18G","32G"]}]
    // v-model绑定的数据模型为字符串
    productSpecClone.specValue.forEach(item => {     
        item.valueList = item.valueList.split(",");
    });
    productSpecClone.specValue = JSON.stringify(productSpecClone.specValue);
    
    console.log(productSpecClone);

    // 提交表单
    await SaveProductSpec(productSpecClone);
    
    dialogVisible.value = false;
    ElMessage.success('操作成功');
    fetchData();
};

//删除
const remove = async id => {
  ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await DeleteProductSpecById(id);
      ElMessage.success('删除成功');
      fetchData();
    })
    .catch(() => {
      ElMessage.info('取消删除');
    });
};

// 钩子函数
onMounted(()=> {
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

// 分页查询
const fetchData = async () => {
   const { data } = await GetProductSpecPageList(pageParams.value.page , pageParams.value.limit); 
   data.list.forEach(item => {
      item.specValue = JSON.parse(item.specValue);       // 将规格字符串转换成规格js对象
   });
   list.value = data.list;
   total.value = data.total;
};

return (_ctx, _cache) => {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_dialog = resolveComponent("el-dialog");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_el_button, {
        type: "success",
        size: "small",
        onClick: addShow
      }, {
        default: withCtx(() => [
          _hoisted_2
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
          prop: "specName",
          label: "规格名称"
        }),
        createVNode(_component_el_table_column, { label: "规格值" }, {
          default: withCtx((scope) => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(scope.row.specValue, (item1, index1) => {
              return (openBlock(), createElementBlock("div", {
                key: index1,
                style: {"padding":"5px","margin":"0","width":"100%"}
              }, [
                createTextVNode(toDisplayString(item1.key) + "： ", 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(item1.valueList, (item2, index2) => {
                  return (openBlock(), createElementBlock("span", {
                    key: index2,
                    class: "div-atrr"
                  }, toDisplayString(item2), 1))
                }), 128))
              ]))
            }), 128))
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
                _hoisted_3
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_component_el_button, {
              type: "danger",
              size: "small",
              onClick: $event => (remove(scope.row.id))
            }, {
              default: withCtx(() => [
                _hoisted_4
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
      "onUpdate:current-page": _cache[0] || (_cache[0] = $event => ((pageParams.value.page) = $event)),
      "page-size": pageParams.value.limit,
      "onUpdate:page-size": _cache[1] || (_cache[1] = $event => ((pageParams.value.limit) = $event)),
      "page-sizes": [10, 20, 50, 100],
      layout: "total, sizes, prev, pager, next",
      total: total.value,
      onSizeChange: handleSizeChange,
      onCurrentChange: handleCurrentChange
    }, null, 8, ["current-page", "page-size", "total"]),
    createVNode(_component_el_dialog, {
      modelValue: dialogVisible.value,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((dialogVisible).value = $event)),
      title: "添加或修改",
      width: "40%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, { "label-width": "120px" }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "规格名称" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: productSpec.value.specName,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((productSpec.value.specName) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  size: "default",
                  type: "success",
                  onClick: addSpec
                }, {
                  default: withCtx(() => [
                    _hoisted_5
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            (openBlock(true), createElementBlock(Fragment, null, renderList(productSpec.value.specValue, (item, index) => {
              return (openBlock(), createBlock(_component_el_form_item, {
                label: "",
                key: index
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 10 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: item.key,
                            "onUpdate:modelValue": $event => ((item.key) = $event),
                            placeholder: "规格",
                            style: {"width":"90%"}
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_el_col, { span: 10 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: item.valueList,
                            "onUpdate:modelValue": $event => ((item.valueList) = $event),
                            placeholder: "规格值(如:白色,红色)",
                            style: {"width":"90%"}
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_el_col, { span: 4 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            size: "default",
                            type: "danger",
                            onClick: $event => (delSpec(index))
                          }, {
                            default: withCtx(() => [
                              _hoisted_6
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))
            }), 128)),
            createVNode(_component_el_form_item, { align: "right" }, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: saveOrUpdate
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: _cache[3] || (_cache[3] = $event => (dialogVisible.value = false))
                }, {
                  default: withCtx(() => [
                    _hoisted_8
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
  ], 64))
}
}

};
var productSpec = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-ed842b48"]]);

export { productSpec as default };
