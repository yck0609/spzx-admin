import { _ as _export_sfc, c as useApp } from './index.2c51eab4.js';
import { G as GetBrandPageList, D as DeleteBrandById, U as UpdateBrandById, S as SaveBrand } from './brand.679e6b07.js';
import { r as ref, o as onMounted, p as resolveComponent, l as openBlock, J as createElementBlock, K as createBaseVNode, j as createVNode, n as withCtx, m as createBlock, F as Fragment, R as createTextVNode, a9 as ElMessageBox, H as ElMessage } from './element-plus.fa662df5.js';

var brand_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1 = { class: "tools-div" };
const _hoisted_2 = /*#__PURE__*/createTextVNode("添 加");
const _hoisted_3 = ["src"];
const _hoisted_4 = /*#__PURE__*/createTextVNode("提交");
const _hoisted_5 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_6 = ["src"];
const _hoisted_7 = /*#__PURE__*/createTextVNode(" 修改 ");
const _hoisted_8 = /*#__PURE__*/createTextVNode(" 删除 ");

////////////////////////////////////删除

const _sfc_main = {
  setup(__props) {

const remove = async id => {
  ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await DeleteBrandById(id);
      ElMessage.success('删除成功');
      fetchData();
    });
};
///////////////////////////////////////////修改
//进入修改
const editShow = row => {
  brand.value = {...row};
  
  dialogVisible.value = true;
};

// 保存数据
const saveOrUpdate = () => {
  if (!brand.value.id) {
    saveData();
  } else {
    updateData(); 
  }
};

// 修改
const updateData = async () => {
    await UpdateBrandById(brand.value);
    dialogVisible.value = false;
    ElMessage.success('操作成功');
    fetchData();
};

/////////////////////////////////////添加
    
const headers = {
  // 从pinia中获取token，在进行文件上传的时候将token设置到请求头中
  token: useApp().authorization.token     
};
// 定义提交表单数据模型
const defaultForm = {
    id: '',
    name: '',
    logo: ""
};
const brand = ref(defaultForm);
const dialogVisible = ref(false); 

// 显示添加品牌表单
const addShow = () => {
    brand.value = {};
    dialogVisible.value = true; 
};

//上传
const handleAvatarSuccess = (response) => {
  brand.value.logo = response.data;
};

// 新增
const saveData = async () => {
  await SaveBrand(brand.value);
  dialogVisible.value = false;
  ElMessage.success('操作成功');
  fetchData();
};


////////////////////////////分页
// 定义表格数据模型
const list = ref([]);

// 分页条数据模型
const total = ref(0);

//分页条数据模型
const pageParamsForm = {
  page: 1, // 页码
  limit: 10, // 每页记录数
};
const pageParams = ref(pageParamsForm);

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
   const {code , message , data} = await GetBrandPageList(pageParams.value.page , pageParams.value.limit); 
   list.value = data.list;
   total.value = data.total;
};


return (_ctx, _cache) => {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_Plus = resolveComponent("Plus");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_upload = resolveComponent("el-upload");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");

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
    createVNode(_component_el_dialog, {
      modelValue: dialogVisible.value,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((dialogVisible).value = $event)),
      title: "添加或修改",
      width: "30%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, { "label-width": "120px" }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "品牌名称" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: brand.value.name,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((brand.value.name) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "品牌图标" }, {
              default: withCtx(() => [
                createVNode(_component_el_upload, {
                  class: "avatar-uploader",
                  action: "http://localhost:1448/admin/system/fileUpload",
                  "show-file-list": false,
                  "on-success": handleAvatarSuccess,
                  headers: headers
                }, {
                  default: withCtx(() => [
                    (brand.value.logo)
                      ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: brand.value.logo,
                          class: "avatar"
                        }, null, 8, _hoisted_3))
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
                  _: 1
                })
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
                    _hoisted_4
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = $event => (dialogVisible.value = false))
                }, {
                  default: withCtx(() => [
                    _hoisted_5
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
          prop: "name",
          label: "品牌名称"
        }),
        createVNode(_component_el_table_column, {
          prop: "logo",
          label: "品牌图标"
        }, {
          default: withCtx((scope) => [
            createBaseVNode("img", {
              src: scope.row.logo,
              width: "50"
            }, null, 8, _hoisted_6)
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
                _hoisted_7
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_component_el_button, {
              type: "danger",
              size: "small",
              onClick: $event => (remove(scope.row.id))
            }, {
              default: withCtx(() => [
                _hoisted_8
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
      "onUpdate:current-page": _cache[3] || (_cache[3] = $event => ((pageParams.value.page) = $event)),
      "page-size": pageParams.value.limit,
      "onUpdate:page-size": _cache[4] || (_cache[4] = $event => ((pageParams.value.limit) = $event)),
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
var brand = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-0dbbf058"]]);

export { brand as default };
