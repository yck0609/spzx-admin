import { G as GetSysRoleListByPage, D as DoAssignMenuIdToSysRole, a as GetSysRoleMenuIds, S as SaveSysRole, U as UpdateSysRole, b as DeleteSysRoleById } from './sysRole.996aa217.js';
import { _ as _export_sfc } from './index.49516a4f.js';
import { r as ref, o as onMounted, p as resolveComponent, l as openBlock, J as createElementBlock, j as createVNode, n as withCtx, K as createBaseVNode, u as unref, R as createTextVNode, H as ElMessage, a9 as ElMessageBox } from './element-plus.fa662df5.js';

var sysRole_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1 = { class: "search-div" };
const _hoisted_2 = /*#__PURE__*/createTextVNode(" 搜索 ");
const _hoisted_3 = /*#__PURE__*/createTextVNode("重置");
const _hoisted_4 = { class: "tools-div" };
const _hoisted_5 = /*#__PURE__*/createTextVNode("添 加");
const _hoisted_6 = /*#__PURE__*/createTextVNode("提交");
const _hoisted_7 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_8 = /*#__PURE__*/createTextVNode("提交");
const _hoisted_9 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_10 = /*#__PURE__*/createTextVNode(" 修改 ");
const _hoisted_11 = /*#__PURE__*/createTextVNode(" 删除 ");
const _hoisted_12 = /*#__PURE__*/createTextVNode(" 分配菜单 ");

 ///////////////////////////////////为角色添加菜单

const _sfc_main = {
  setup(__props) {

const doAssign = async () => {
    const checkedNodes = tree.value.getCheckedNodes() ; // 获取选中的节点
    const checkedNodesIds = checkedNodes.map(node => {  // 获取选中的节点的id
        return {
            id: node.id,
            isHalf: 0
        }
    });
        
    // 获取半选中的节点数据，当一个节点的子节点被部分选中时，该节点会呈现出半选中的状态
    const halfCheckedNodes = tree.value.getHalfCheckedNodes() ; 
    const halfCheckedNodesIds = halfCheckedNodes.map(node => {   // 获取半选中节点的id
        return {
            id: node.id,
            isHalf: 1
        }
    });
        
    // 将选中的节点id和半选中的节点的id进行合并
    const menuIds = [...checkedNodesIds , ...halfCheckedNodesIds];  
    console.log(menuIds);

    // 构建请求数据
    const assignMenuDto = {
        roleId: roleId,
        menuIdList: menuIds
    };
 
    // 发送请求
    await DoAssignMenuIdToSysRole(assignMenuDto) ;
    ElMessage.success('操作成功');
    dialogMenuVisible.value = false;

}; 


const defaultProps = {
  children: 'children',
  label: 'title',
};
const dialogMenuVisible = ref(false);
const sysMenuTreeList = ref([]);

// 树对象变量
const tree = ref(); 

// 默认选中的菜单数据集合
let roleId = ref();
const showAssignMenu = async row => { 
  dialogMenuVisible.value = true;
  roleId = row.id;
  const { data } = await GetSysRoleMenuIds(row.id);   // 请求后端地址获取所有的菜单数据，以及当前角色所对应的菜单数据
  sysMenuTreeList.value = data.sysMenuList;
  tree.value.setCheckedKeys(data.roleMenuIds);   // 进行数据回显
};



//////////////////////////角色添加
//表单数据模型
const roleForm = {
    id: "",
    roleCode: "",
    roleName: ""
};

const sysRole = ref(roleForm); 

// 弹框设置 true弹出框
const dialogVisible = ref(false);

//进入添加弹出框
const addShow = () => {
    sysRole.value = {};
  	dialogVisible.value = true;
};

// 添加角色
const submit = async () => {
    if(!sysRole.value.id) {
        const { code } = await SaveSysRole(sysRole.value) ;
        if(code === 200) {
            dialogVisible.value = false;
            ElMessage.success('操作成功');
            fetchData();
        }
    }else {
        const { code } = await UpdateSysRole(sysRole.value) ;
        if(code === 200) {
            dialogVisible.value = false;
            ElMessage.success('操作成功');
            fetchData();
        }
    }
};

// 修改按钮点击事件处理函数
const editShow = (row) => {
        //对象拓展运算符
        sysRole.value = {...row};
        // sysRole.value = row
        dialogVisible.value = true;
    };

// 删除数据
const deleteById = (row) => {
    ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', 'Warning', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    }).then(async () => {
       const {code} = await DeleteSysRoleById(row.id);
       if(code === 200) {
            ElMessage.success('删除成功');
            pageParams.value.page = 1;
            fetchData();
       }
    });
};
//////////////////////////角色列表
// 分页条总记录数
let total = ref(0);

// 定义表格数据模型（角色列表）
let list = ref([]);

//分页数据
const pageParamsForm = {
  page: 1, // 页码
  limit: 10, // 每页记录数
};
const pageParams = ref(pageParamsForm);     // 将pageParamsForm包装成支持响应式的对象

// 搜索表单数据
const queryDto = ref({"roleName": ""});//条件封装数据

// 页面加载完毕以后请求后端接口获取数据
onMounted(() => {
    fetchData() ;
});

// 搜索按钮点击事件处理函数
const searchSysRole = () => {
    //queryDto.value.roleName = ""
    fetchData() ;
};

// 远程调用后端分页查询接口
const fetchData = async () => {
    const {data , code , message } = await GetSysRoleListByPage(pageParams.value.page , pageParams.value.limit , queryDto.value) ;
    list.value = data.list ;
    total.value = data.total;
};

// 重置表单数据
const resetData = () => {
    queryDto.value.roleName = ""; // 将搜索框中的角色名称清空
    fetchData(); // 重新请求数据
};



return (_ctx, _cache) => {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_tree = resolveComponent("el-tree");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_form, {
      "label-width": "70px",
      size: "small"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form_item, { label: "角色名称" }, {
          default: withCtx(() => [
            createVNode(_component_el_input, {
              modelValue: queryDto.value.roleName,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((queryDto.value.roleName) = $event)),
              style: {"width":"100%"},
              placeholder: "角色名称"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        createVNode(_component_el_row, { style: {"display":"flex"} }, {
          default: withCtx(() => [
            createVNode(_component_el_button, {
              type: "primary",
              size: "small",
              onClick: searchSysRole
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
    }),
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
      modelValue: dialogMenuVisible.value,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((dialogMenuVisible).value = $event)),
      title: "分配菜单",
      width: "40%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, { "label-width": "80px" }, {
          default: withCtx(() => [
            createVNode(_component_el_tree, {
              data: sysMenuTreeList.value,
              ref_key: "tree",
              ref: tree,
              "show-checkbox": "",
              "default-expand-all": "",
              "check-on-click-node": true,
              "node-key": "id",
              props: defaultProps
            }, null, 8, ["data"]),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: doAssign
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = $event => (dialogMenuVisible.value = false))
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
    createVNode(_component_el_dialog, {
      modelValue: dialogVisible.value,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((dialogVisible).value = $event)),
      title: "添加或修改角色",
      width: "30%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, { "label-width": "120px" }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "角色名称" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: sysRole.value.roleName,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((sysRole.value.roleName) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "角色Code" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: sysRole.value.roleCode,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((sysRole.value.roleCode) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: submit
                }, {
                  default: withCtx(() => [
                    _hoisted_8
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: _cache[5] || (_cache[5] = $event => (dialogVisible.value = false))
                }, {
                  default: withCtx(() => [
                    _hoisted_9
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
      data: unref(list),
      style: {"width":"100%"}
    }, {
      default: withCtx(() => [
        createVNode(_component_el_table_column, {
          prop: "roleName",
          label: "角色名称",
          width: "180"
        }),
        createVNode(_component_el_table_column, {
          prop: "roleCode",
          label: "角色code",
          width: "180"
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
              type: "primary",
              size: "small",
              onClick: $event => (editShow(scope.row))
            }, {
              default: withCtx(() => [
                _hoisted_10
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_component_el_button, {
              type: "danger",
              size: "small",
              onClick: $event => (deleteById(scope.row))
            }, {
              default: withCtx(() => [
                _hoisted_11
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_component_el_button, {
              type: "warning",
              size: "small",
              onClick: $event => (showAssignMenu(scope.row))
            }, {
              default: withCtx(() => [
                _hoisted_12
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
      onSizeChange: fetchData,
      onCurrentChange: fetchData,
      layout: "total, sizes, prev, pager, next",
      total: unref(total)
    }, null, 8, ["current-page", "page-size", "total"])
  ]))
}
}

};
var sysRole = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-da97e14a"]]);

export { sysRole as default };
