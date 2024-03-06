import { l as service } from './index.89c44364.js';

// 分页查询角色数据
const GetSysRoleListByPage = (current, limit, queryDto) => {
    return service({
        // url: '/admin/system/sysRole/findByPage/' + pageNum + "/" + pageSize,
        url: `/admin/system/sysRole/findByPage/${current}/${limit}`,//接口
        method: 'post',//提交方式
        //后端接口如果是@RequestBody，需要用data：名称
        //如果没有注解,前端是params：名称
        data: queryDto,
    })
};

// 添加角色请求方法
const SaveSysRole = (sysRole) => {
    return service({
        url: '/admin/system/sysRole/saveSysRole',
        method: 'post',
        data: sysRole ,
    })
};

// 保存修改
const UpdateSysRole = (data) => {
    return service({
        url: '/admin/system/sysRole/updateSysRole',
        method: 'put',
        data
    })
};

// 删除角色
const DeleteSysRoleById = (roleId) => {
    return service({
        url: '/admin/system/sysRole/deleteById/' + roleId,
        method: 'delete'
    })
};

// 查询所有的角色数据
const GetAllRoleList = (userId) => {
    return service({
        url: '/admin/system/sysRole/findAllRoles/' + userId,
        method: 'get'
    })
};

// 查询指定角色所对应的菜单id
const GetSysRoleMenuIds = (roleId) => {
    return service({
        url: "/admin/system/sysMenu/findAllNodes/"+ roleId,
        method: 'get'
    })
};

// 根据角色分配菜单请求方法
const DoAssignMenuIdToSysRole = (assignMenuDto) => {
    return service({
        url: "/admin/system/sysRole/assignMenu",
        method: 'post',
        data: assignMenuDto
    })
};

export { DoAssignMenuIdToSysRole as D, GetSysRoleListByPage as G, SaveSysRole as S, UpdateSysRole as U, GetSysRoleMenuIds as a, DeleteSysRoleById as b, GetAllRoleList as c };
