import { l as service, _ as _export_sfc, c as useApp } from './index.462def5c.js';
import { c as GetAllRoleList } from './sysRole.8251e414.js';
import { r as ref, o as onMounted, p as resolveComponent, l as openBlock, J as createElementBlock, K as createBaseVNode, j as createVNode, n as withCtx, m as createBlock, L as createCommentVNode, R as createTextVNode, S as toDisplayString, F as Fragment, Q as renderList, H as ElMessage, a9 as ElMessageBox } from './element-plus.fa662df5.js';

// 分页查询
const GetSysUserListByPage = (page, size, queryDto) => {
    return service({
        url: "/admin/administrator/select/" + page + "/" + size,
        method: 'post',
        data: queryDto
    })
};

// 新增用户的方法
const SaveSysUser = (sysUser) => {
    return service({
        url: "/admin/administrator/insert",
        method: "post",
        data: sysUser,
    })
};

// 修改用户数据的方法
const UpdateSysUser = (sysUser) => {
    return service({
        url: "/admin/administrator/update",
        method: "put",
        data: sysUser,
    })
};

// 根据id删除用户
const DeleteSysUserById = (administratorId) => {
    return service({
        url: "/admin/administrator/delete/" + administratorId,
        method: 'delete'
    })
};

// 给用户分配角色请求
const DoAssignRoleToUser = (assginRoleVo) => {
    return service({
        url: "/admin/administrator/role/assign",
        method: 'post',
        data: assginRoleVo
    })
};

var sysUser_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1 = { class: "search-div" };
const _hoisted_2 = /*#__PURE__*/createTextVNode(" 搜索 ");
const _hoisted_3 = /*#__PURE__*/createTextVNode("重置");
const _hoisted_4 = { class: "tools-div" };
const _hoisted_5 = /*#__PURE__*/createTextVNode("添 加");
const _hoisted_6 = ["src"];
const _hoisted_7 = /*#__PURE__*/createTextVNode("提交");
const _hoisted_8 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_9 = ["src"];
const _hoisted_10 = /*#__PURE__*/createTextVNode(" 修改 ");
const _hoisted_11 = /*#__PURE__*/createTextVNode(" 删除 ");
const _hoisted_12 = /*#__PURE__*/createTextVNode(" 分配角色 ");
const _hoisted_13 = /*#__PURE__*/createTextVNode("提交");
const _hoisted_14 = /*#__PURE__*/createTextVNode("取消");


//////////////用户分配角色
//角色分配按钮事件处理函数

const _sfc_main = {
  setup(__props) {

const doAssign = async () => {
    let assginRoleVo = {
        userId: sysUser.value.id ,
        roleIdList: userRoleIds.value
    };
    const { code , message , data} = await DoAssignRoleToUser(assginRoleVo) ;
    if(code === 200) {
        ElMessage.success('操作成功');
        dialogRoleVisible.value = false; 
        fetchData();
    }
};

// 角色列表
const userRoleIds = ref([]);
const allRoles = ref([]);
const dialogRoleVisible = ref(false);
const showAssignRole = async row => {
  sysUser.value = {...row};
  dialogRoleVisible.value = true;
  // 查询所有的角色数据
  const {code , message , data } = await GetAllRoleList(row.id) ;
  allRoles.value = data.allRolesList;

  // 获取当前登录用户的角色数据
  userRoleIds.value = data.sysUserRoles;
};

//////////////////////上传
const headers = {
  token: useApp().authorization.token     // 从pinia中获取token，在进行文件上传的时候将token设置到请求头中
};

// 图像上传成功以后的事件处理函数
const handleAvatarSuccess = (response, uploadFile) => {
    sysUser.value.avatar = response.data;
};
// 表格数据模型
const list = ref([]);

// 分页条数据模型
const total = ref(0);

// 定义搜索表单数据模型
const queryDto = ref({
    keyword: "" ,
    createTimeBegin: "",
    createTimeEnd: ""
});
const createTimes = ref([]);

//分页数据
const pageParamsForm = {
  page: 1, // 页码
  limit: 10, // 每页记录数
};

// 修改按钮点击事件处理函数
const editSysUser = (row) => {
    dialogVisible.value = true; 
    sysUser.value = {...row};
};

// 删除角色
const deleteById = (row) => {
    ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', 'Warning', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    }).then(async () => {
       const {code } = await DeleteSysUserById(row.id);
       if(code === 200) {
            ElMessage.success('删除成功');
            fetchData();
       }
    });
};
const pageParams = ref(pageParamsForm);

// onMounted钩子函数
onMounted(() => {
    fetchData() ;
});

// 搜素按钮点击事件处理函数
const searchSysUser = () => {
    fetchData();
};

// 重置按钮点击事件处理函数
const resetData = () => {
    queryDto.value = {};
    createTimes.value = [];
    fetchData(); // 重新请求数据
};

// 定义分页查询方法
const fetchData = async () => {
    if (createTimes.value.length == 2) {
        queryDto.value.createTimeBegin = createTimes.value[0];
        queryDto.value.createTimeEnd = createTimes.value[1];
    }
    // 请求后端接口进行分页查询
    const { code , message , data } = await GetSysUserListByPage(pageParams.value.page , pageParams.value.limit , queryDto.value);
    list.value = data.list;
    total.value = data.total;
};


// 添加表单对话框显示隐藏控制变量
const dialogVisible = ref(false);
const addShow = () => {
    sysUser.value = {};
    dialogVisible.value = true; 
};

// 定义提交表单数据模型
const defaultForm = {
    userName:"",
    name: "" ,
    phone: "" ,
    password: "" ,
    description:"",
    avatar: ""
};
const sysUser = ref(defaultForm);

// 提交按钮事件处理函数
const submit = async () => {
    if(!sysUser.value.id) {
        const {code , message , data} = await SaveSysUser(sysUser.value); 
        if(code === 200) {
            dialogVisible.value = false;
            ElMessage.success('操作成功');
            fetchData();
        }else {
            ElMessage.error(message);
        }
    }else {
        const {code , message , data} = await UpdateSysUser(sysUser.value); 
        if(code === 200) {
            dialogVisible.value = false;
            ElMessage.success('操作成功');
            fetchData();
        }else {
            ElMessage.error(message);
        }   
    }    
};

return (_ctx, _cache) => {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_date_picker = resolveComponent("el-date-picker");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form = resolveComponent("el-form");
  const _component_Plus = resolveComponent("Plus");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_upload = resolveComponent("el-upload");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
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
                  createVNode(_component_el_form_item, { label: "关键字" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: queryDto.value.keyword,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((queryDto.value.keyword) = $event)),
                        style: {"width":"100%"},
                        placeholder: "用户名、姓名、手机号码"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_col, { span: 12 }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, { label: "创建时间" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_date_picker, {
                        modelValue: createTimes.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((createTimes).value = $event)),
                        type: "daterange",
                        "range-separator": "To",
                        "start-placeholder": "开始时间",
                        "end-placeholder": "结束时间",
                        format: "YYYY-MM-DD",
                        "value-format": "YYYY-MM-DD"
                      }, null, 8, ["modelValue"])
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
                onClick: searchSysUser
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
      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((dialogVisible).value = $event)),
      title: "添加或修改",
      width: "40%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, { "label-width": "120px" }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "用户名" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: sysUser.value.userName,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((sysUser.value.userName) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            (sysUser.value.id == null)
              ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 0,
                  label: "密码"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      type: "password",
                      "show-password": "",
                      modelValue: sysUser.value.password,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((sysUser.value.password) = $event))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }))
              : createCommentVNode("", true),
            createVNode(_component_el_form_item, { label: "姓名" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: sysUser.value.name,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((sysUser.value.name) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "手机" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: sysUser.value.phone,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((sysUser.value.phone) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "头像" }, {
              default: withCtx(() => [
                createVNode(_component_el_upload, {
                  class: "avatar-uploader",
                  action: "http://121.41.52.4:1448/admin/fileUpload",
                  "show-file-list": false,
                  "on-success": handleAvatarSuccess,
                  headers: headers
                }, {
                  default: withCtx(() => [
                    (sysUser.value.avatar)
                      ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: sysUser.value.avatar,
                          class: "avatar"
                        }, null, 8, _hoisted_6))
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
            createVNode(_component_el_form_item, { label: "描述" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: sysUser.value.description,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((sysUser.value.description) = $event))
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
                    _hoisted_7
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: _cache[7] || (_cache[7] = $event => (dialogVisible.value = false))
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
    }, 8, ["modelValue"]),
    createVNode(_component_el_table, {
      data: list.value,
      style: {"width":"100%"}
    }, {
      default: withCtx(() => [
        createVNode(_component_el_table_column, {
          prop: "userName",
          label: "用户名"
        }),
        createVNode(_component_el_table_column, {
          prop: "name",
          label: "姓名"
        }),
        createVNode(_component_el_table_column, {
          prop: "phone",
          label: "手机"
        }),
        createVNode(_component_el_table_column, {
          prop: "avatar",
          label: "头像"
        }, {
          default: withCtx((scope) => [
            createBaseVNode("img", {
              src: scope.row.avatar,
              width: "50"
            }, null, 8, _hoisted_9)
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "description",
          label: "描述"
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
              type: "primary",
              size: "small",
              onClick: $event => (editSysUser(scope.row))
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
              onClick: $event => (showAssignRole(scope.row))
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
    createVNode(_component_el_dialog, {
      modelValue: dialogRoleVisible.value,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ((dialogRoleVisible).value = $event)),
      title: "分配角色",
      width: "40%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, { "label-width": "80px" }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "用户名" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  disabled: "",
                  value: sysUser.value.userName
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "角色列表" }, {
              default: withCtx(() => [
                createVNode(_component_el_checkbox_group, {
                  modelValue: userRoleIds.value,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ((userRoleIds).value = $event))
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(allRoles.value, (role) => {
                      return (openBlock(), createBlock(_component_el_checkbox, {
                        key: role.id,
                        label: role.id
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(role.roleName), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]))
                    }), 128))
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
                  onClick: doAssign
                }, {
                  default: withCtx(() => [
                    _hoisted_13
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: _cache[10] || (_cache[10] = $event => (dialogRoleVisible.value = false))
                }, {
                  default: withCtx(() => [
                    _hoisted_14
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
    createVNode(_component_el_pagination, {
      "current-page": pageParams.value.page,
      "onUpdate:current-page": _cache[12] || (_cache[12] = $event => ((pageParams.value.page) = $event)),
      "page-size": pageParams.value.limit,
      "onUpdate:page-size": _cache[13] || (_cache[13] = $event => ((pageParams.value.limit) = $event)),
      "page-sizes": [10, 20, 50, 100],
      layout: "total, sizes, prev, pager, next",
      total: total.value
    }, null, 8, ["current-page", "page-size", "total"])
  ], 64))
}
}

};
var sysUser = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-110eecc8"]]);

export { sysUser as default };
