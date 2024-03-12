import { l as service } from './index.49516a4f.js';

// 分页查询角色数据
const GetSysRoleListByPage = (page, size, queryDto) => {
    return service({
        // url: '/admin/role/findByPage/' + pageNum + "/" + pageSize,
        url: `/admin/role/select/${page}/${size}`,//接口
        method: 'post',//提交方式
        //后端接口如果是@RequestBody，需要用data：名称
        //如果没有注解,前端是params：名称
        data: queryDto,
    })
};

// 添加角色请求方法
const SaveSysRole = (sysRole) => {
    return service({
        url: '/admin/role/insert',
        method: 'post',
        data: sysRole ,
    })
};

// 保存修改
const UpdateSysRole = (data) => {
    return service({
        url: '/admin/role/update',
        method: 'put',
        data
    })
};

// 删除角色
const DeleteSysRoleById = (roleId) => {
    return service({
        url: '/admin/role/delete/' + roleId,
        method: 'delete'
    })
};

// 查询所有的角色数据
const GetAllRoleList = (administratorId) => {
    return service({
        url: '/admin/role/select/' + administratorId,
        method: 'get'
    })
};

// 查询指定角色所对应的菜单id
const GetSysRoleMenuIds = (roleId) => {
    return service({
        url: "/admin/sysMenu/select/"+ roleId,
        method: 'get'
    })
};

// 根据角色分配菜单请求方法
const DoAssignMenuIdToSysRole = (assignMenuDto) => {
    return service({
        url: "/admin/role/menu/assign",
        method: 'post',
        data: assignMenuDto
    })
};

export { DoAssignMenuIdToSysRole as D, GetSysRoleListByPage as G, SaveSysRole as S, UpdateSysRole as U, GetSysRoleMenuIds as a, DeleteSysRoleById as b, GetAllRoleList as c };
