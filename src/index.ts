/*
 * @Author: 陈超
 * @Date: 2021-02-21 00:04:09
 * @Last Modified by: 陈超
 * @Last Modified time: 2021-03-11 12:18:25
 */
import Vue from 'vue'

import RemoteTable from 'fnb-element-ui/src/packages/remote-table'

const components = [RemoteTable]

const install = function (vue: typeof Vue, options: Record<string, unknown>) {
  // 上传组件，默认action
  vue.prototype.UPLOAD_URL = options?.UPLOAD_URL
  components.forEach(component => {
    vue?.component(component.options.name, component)
  })
}

export default {
  install,
  RemoteTable
}
