import { l as service, _ as _export_sfc } from './index.49516a4f.js';
import { r as ref, o as onMounted, p as resolveComponent, l as openBlock, J as createElementBlock, K as createBaseVNode, j as createVNode, n as withCtx, R as createTextVNode, S as toDisplayString, F as Fragment, H as ElMessage, a9 as ElMessageBox } from './element-plus.fa662df5.js';

const api_name = '/admin/menu';
// 分页列表
const FindNodes = () => {
    return service({
        url: `${api_name}/select/all`,
        method: 'get',
    })
};

// 保存信息
const SaveMenu = sysMenu => {
    return service({
        url: `${api_name}/insert`,
        method: 'post',
        data: sysMenu,
    })
};

// 修改信息
const UpdateSysMenuById = sysMenu => {
    return service({
        url: `${api_name}/update`,
        method: 'put',
        data: sysMenu,
    })
};

// 根据id删除数据
const RemoveSysMenuById = menuId => {
    return service({
        url: `${api_name}/delete/${menuId}`,
        method: 'delete',
    })
};

var sysMenu_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1 = { class: "tools-div" };
const _hoisted_2 = /*#__PURE__*/createTextVNode("添 加");
const _hoisted_3 = /*#__PURE__*/createTextVNode("正常");
const _hoisted_4 = /*#__PURE__*/createTextVNode("停用");
const _hoisted_5 = /*#__PURE__*/createTextVNode("提交");
const _hoisted_6 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_7 = /*#__PURE__*/createTextVNode(" 添加下级节点 ");
const _hoisted_8 = /*#__PURE__*/createTextVNode(" 修改 ");
const _hoisted_9 = /*#__PURE__*/createTextVNode(" 删除 ");

// 定义表格数据模型

const _sfc_main = {
  setup(__props) {

//引入调用的方法
const list = ref([]);

// 定义添加表单菜单表单相关数据模型
const dialogTitle = ref('添加');
const dialogVisible = ref(false);

//页面表单数据
const defaultForm = {
    id: '',
    parentId: 0,
    title: '',
    url: '',
    component: '',
    icon: '',
    sortValue: 1,
    status: 1,
};
// 表单响应式数据模型对象
const sysMenu = ref(defaultForm);

//=======================加载数据=========================
onMounted(() => {
    fetchData();
});

//=======================添加和修改功能====================
//进入添加
const addShow = (row) => {
  sysMenu.value = {};
  dialogVisible.value = true;
  if(!row.id) {
    dialogTitle.value = '添加';
  }else {
    dialogTitle.value = '添加下级节点';
    sysMenu.value.parentId = row.id;
  }
};

//进入修改
const editShow = row => {
  sysMenu.value = row;
  dialogVisible.value = true;
};

//提交保存与修改
const saveOrUpdate = () => {
    if (!sysMenu.value.id) {
        if(!sysMenu.value.parentId) {
            sysMenu.value.parentId = 0;
        }
        saveData();
    }  else {
        updateData();
    }
};

// 修改
const updateData = async () => {
  await UpdateSysMenuById(sysMenu.value);
  dialogVisible.value = false;
  ElMessage.success('操作成功');
  fetchData();
};

// 新增
const saveData = async () => {
  await SaveMenu(sysMenu.value);
  dialogVisible.value = false;
  ElMessage.success('操作成功');
  fetchData();
};

//=======================分页列表====================
const fetchData = async () => {
  const { code, data, message } = await FindNodes();
  list.value = data;
};

//=======================删除功能====================
const remove = async id => {
  console.log('removeDataById:' + id);
  ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
      const { code , message } = await RemoveSysMenuById(id);
      if(code === 200) {
        ElMessage.success('删除成功');
        fetchData();
      }else {
        ElMessage.error(message);
      }     
    });
};

return (_ctx, _cache) => {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");

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
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((dialogVisible).value = $event)),
      title: dialogTitle.value,
      width: "30%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, { "label-width": "120px" }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "菜单标题" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: sysMenu.value.title,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((sysMenu.value.title) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "路由名称" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: sysMenu.value.component,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((sysMenu.value.component) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "排序" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: sysMenu.value.sortValue,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((sysMenu.value.sortValue) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "状态" }, {
              default: withCtx(() => [
                createVNode(_component_el_radio_group, {
                  modelValue: sysMenu.value.status,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((sysMenu.value.status) = $event))
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio, { label: 1 }, {
                      default: withCtx(() => [
                        _hoisted_3
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_radio, { label: 0 }, {
                      default: withCtx(() => [
                        _hoisted_4
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
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
                    _hoisted_5
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: _cache[4] || (_cache[4] = $event => (dialogVisible.value = false))
                }, {
                  default: withCtx(() => [
                    _hoisted_6
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
    }, 8, ["modelValue", "title"]),
    createVNode(_component_el_table, {
      data: list.value,
      style: {"width":"100%","margin-bottom":"20px"},
      "row-key": "id",
      border: "",
      "default-expand-all": ""
    }, {
      default: withCtx(() => [
        createVNode(_component_el_table_column, {
          prop: "title",
          label: "菜单标题"
        }),
        createVNode(_component_el_table_column, {
          prop: "component",
          label: "路由名称"
        }),
        createVNode(_component_el_table_column, {
          prop: "sortValue",
          label: "排序"
        }),
        createVNode(_component_el_table_column, {
          prop: "status",
          label: "状态"
        }, {
          default: withCtx((scope) => [
            createTextVNode(toDisplayString(scope.row.status == 1 ? '正常' : '停用'), 1)
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
          width: "280"
        }, {
          default: withCtx((scope) => [
            createVNode(_component_el_button, {
              type: "success",
              size: "small",
              onClick: $event => (addShow(scope.row))
            }, {
              default: withCtx(() => [
                _hoisted_7
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_component_el_button, {
              type: "primary",
              size: "small",
              onClick: $event => (editShow(scope.row))
            }, {
              default: withCtx(() => [
                _hoisted_8
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_component_el_button, {
              type: "danger",
              size: "small",
              onClick: $event => (remove(scope.row.id))
            }, {
              default: withCtx(() => [
                _hoisted_9
              ]),
              _: 2
            }, 1032, ["onClick"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["data"])
  ], 64))
}
}

};
var sysMenu = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-6ed434a1"]]);

export { sysMenu as default };
