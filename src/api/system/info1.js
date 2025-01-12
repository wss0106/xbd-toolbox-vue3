import request from '@/utils/request'

// 查询ceshi列表
export function listInfo1(query) {
  return request({
    url: '/system/info1/list',
    method: 'get',
    params: query
  })
}

// 查询ceshi详细
export function getInfo1(id) {
  return request({
    url: '/system/info1/' + id,
    method: 'get'
  })
}

// 新增ceshi
export function addInfo1(data) {
  return request({
    url: '/system/info1',
    method: 'post',
    data: data
  })
}

// 修改ceshi
export function updateInfo1(data) {
  return request({
    url: '/system/info1',
    method: 'put',
    data: data
  })
}

// 删除ceshi
export function delInfo1(id) {
  return request({
    url: '/system/info1/' + id,
    method: 'delete'
  })
}
