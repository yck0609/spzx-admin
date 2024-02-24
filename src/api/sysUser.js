import request from '@/utils/request'

// 分页查询
export const GetSysUserListByPage = (pageNum , pageSize , queryDto) => {
    return request({
        url: "/admin/system/sysUser/findByPage/" + pageNum + "/" + pageSize,
        method: 'post',
        data: queryDto
    })
}

// 新增用户的方法
export const SaveSysUser = (sysUser) => {
    return request({
        url: "/admin/system/sysUser/save",
        method: "post",
        data: sysUser,
    })
}

// 修改用户数据的方法
export const UpdateSysUser = (sysUser) => {
    return request({
        url: "/admin/system/sysUser/update",
        method: "put",
        data: sysUser,
    })
}

// 根据id删除用户
export const DeleteSysUserById = (userId) => {
    return request({
        url: "/admin/system/sysUser/delete/" + userId,
        method: 'delete'
    })
}

// 给用户分配角色请求
export const DoAssignRoleToUser = (assginRoleVo) => {
    return request({
        url: "/admin/system/sysUser/assignRole",
        method: 'post',
        data: assginRoleVo
    })
}