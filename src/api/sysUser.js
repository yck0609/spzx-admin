import request from '@/utils/request'

// 分页查询
export const GetSysUserListByPage = (page, size, queryDto) => {
    return request({
        url: "/admin/administrator/select/" + page + "/" + size,
        method: 'post',
        data: queryDto
    })
}

// 新增用户的方法
export const SaveSysUser = (sysUser) => {
    return request({
        url: "/admin/administrator/insert",
        method: "post",
        data: sysUser,
    })
}

// 修改用户数据的方法
export const UpdateSysUser = (sysUser) => {
    return request({
        url: "/admin/administrator/update",
        method: "put",
        data: sysUser,
    })
}

// 根据id删除用户
export const DeleteSysUserById = (administratorId) => {
    return request({
        url: "/admin/administrator/delete/" + administratorId,
        method: 'delete'
    })
}

// 给用户分配角色请求
export const DoAssignRoleToUser = (assginRoleVo) => {
    return request({
        url: "/admin/administrator/role/assign",
        method: 'post',
        data: assginRoleVo
    })
}