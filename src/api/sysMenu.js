import request from '@/utils/request'

const api_name = '/admin/menu'
// 分页列表
export const FindNodes = () => {
    return request({
        url: `${api_name}/select/all`,
        method: 'get',
    })
}

// 保存信息
export const SaveMenu = sysMenu => {
    return request({
        url: `${api_name}/insert`,
        method: 'post',
        data: sysMenu,
    })
}

// 修改信息
export const UpdateSysMenuById = sysMenu => {
    return request({
        url: `${api_name}/update`,
        method: 'put',
        data: sysMenu,
    })
}

// 根据id删除数据
export const RemoveSysMenuById = menuId => {
    return request({
        url: `${api_name}/delete/${menuId}`,
        method: 'delete',
    })
}