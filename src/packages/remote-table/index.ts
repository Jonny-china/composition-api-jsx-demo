/*
 * @Author: 陈超
 * @Date: 2021-03-10 10:30:11
 * @Last Modified by: 陈超
 * @Last Modified time: 2021-03-11 11:39:59
 */

import RemoteTable from './src/remote-table'
RemoteTable.options = { name: 'FnbRemoteTable' }

/* istanbul ignore next */
RemoteTable.install = function (Vue: typeof RemoteTable) {
  Vue.component(RemoteTable.options.name, RemoteTable)
}

export default RemoteTable
