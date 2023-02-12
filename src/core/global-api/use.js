/* @flow */

import { toArray } from '../util/index'
// Vue.install 实现
export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) { // use多次, 只会执行一次 plugin
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this) // 传入的 plugin 入参第一个参数是 vue
    if (typeof plugin.install === 'function') { // 自动执行 install 方法
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
