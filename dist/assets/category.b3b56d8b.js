import { _ as _export_sfc, c as useApp } from './index.3d070750.js';
import { F as FindCategoryByParentId, E as ExportCategoryData } from './category.7b96d5ba.js';
import { r as ref, o as onMounted, p as resolveComponent, l as openBlock, J as createElementBlock, K as createBaseVNode, j as createVNode, n as withCtx, R as createTextVNode, S as toDisplayString, F as Fragment, H as ElMessage } from './element-plus.fa662df5.js';

var category_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1 = { class: "tools-div" };
const _hoisted_2 = /*#__PURE__*/createTextVNode("导出");
const _hoisted_3 = /*#__PURE__*/createTextVNode("导入");
const _hoisted_4 = /*#__PURE__*/createTextVNode("上传");
const _hoisted_5 = ["src"];
//////////////////////////////////导入
// 文件上传相关变量以及方法定义

const _sfc_main = {
  setup(__props) {

const dialogImportVisible = ref(false);
const headers = {
  token: useApp().authorization.token     // 从pinia中获取token，在进行文件上传的时候将token设置到请求头中
};
const importData = () => {
  dialogImportVisible.value = true;
};

// 上传文件成功以后要执行方法
const onUploadSuccess = async (response, file) => {
  ElMessage.success('操作成功');
  dialogImportVisible.value = false;
  const { data } = await FindCategoryByParentId(0);
  list.value = data ; 
};


/////////////////////////////////导出
const exportData = () => {
  // 调用 ExportCategoryData() 方法获取导出数据
  ExportCategoryData().then(res => {
      // 创建 Blob 对象，用于包含二进制数据
      const blob = new Blob([res]);             
      // 创建 a 标签元素，并将 Blob 对象转换成 URL
      const link = document.createElement('a'); 
      link.href = window.URL.createObjectURL(blob);
      // 设置下载文件的名称
      link.download = '分类数据.xlsx';
      // 模拟点击下载链接
      link.click();
  });  
};



// 定义list属性模型
const list = ref([]);

// 页面初始化完毕以后请求后端接口查询数据
onMounted(async () => {
  const {code , data , message} = await FindCategoryByParentId(0);
  list.value = data ; 
});

// 加载数据的方法
const fetchData = async (row, treeNode, resolve) => {
    
    // 向后端发送请求获取数据
    const {code , data , message} = await FindCategoryByParentId(row.id);

    // 返回数据
    resolve(data);

};


return (_ctx, _cache) => {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_upload = resolveComponent("el-upload");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_el_button, {
        type: "success",
        size: "small",
        onClick: exportData
      }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }),
      createVNode(_component_el_button, {
        type: "primary",
        size: "small",
        onClick: importData
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      })
    ]),
    createVNode(_component_el_dialog, {
      modelValue: dialogImportVisible.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((dialogImportVisible).value = $event)),
      title: "导入",
      width: "30%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, { "label-width": "120px" }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "分类文件" }, {
              default: withCtx(() => [
                createVNode(_component_el_upload, {
                  class: "upload-demo",
                  action: "http://121.41.52.4:1448/admin/product/category/import",
                  "on-success": onUploadSuccess,
                  headers: headers
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_button, { type: "primary" }, {
                      default: withCtx(() => [
                        _hoisted_4
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
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(_component_el_table, {
      data: list.value,
      style: {"width":"100%"},
      "row-key": "id",
      border: "",
      lazy: "",
      load: fetchData,
      "tree-props": { children: 'children', hasChildren: 'hasChildren' }
    }, {
      default: withCtx(() => [
        createVNode(_component_el_table_column, {
          prop: "name",
          label: "分类名称"
        }),
        createVNode(_component_el_table_column, {
          prop: "imageUrl",
          label: "图标"
        }, {
          default: withCtx((scope) => [
            createBaseVNode("img", {
              src: scope.row.imageUrl,
              width: "50"
            }, null, 8, _hoisted_5)
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "orderNum",
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
        })
      ]),
      _: 1
    }, 8, ["data"])
  ], 64))
}
}

};
var category = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-b8256faa"]]);

export { category as default };
