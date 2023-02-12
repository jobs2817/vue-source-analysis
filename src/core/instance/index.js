import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue) // 初始化 $data. $props, watch 挂载在原型上
eventsMixin(Vue) // 注册全局事件中心
lifecycleMixin(Vue) // 生命周期相关
renderMixin(Vue) // _render 挂载原型上

export default Vue
