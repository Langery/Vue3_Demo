// Vue 全局配置信息
import { ReactiveEffect, TrackOpTypes } from 'vue';
import { App } from '../main';

const app = App;

const AppConfig = app.config;

interface AppConfig {
  errorHandler?: (
    err: unknown,
    instance: ComponentPublicInstance | null,
    info: string
  ) => void,
  warnHandler?: (
    msg: string,
    instance: ComponentPublicInstance | null,
    trace: string // 组件层级结构的追踪
  ) => void,
  globalProperties: Record<string, any>,
  optionMergeStrategies: Record<string, OptionMergeFunction>
}

type OptionMergeFunction = (to: unknown, from: unknown) => any


AppConfig.errorHandler = (err, instance, info) => {
  // 处理错误
}

AppConfig.warnHandler = (msg, instance, trace) => {

}

AppConfig.compilerOptions.isCustonElement = (tag) => {
  return tag.startsWith('ion -')
}

AppConfig.compilerOptions.whitespace = 'preserve';
AppConfig.compilerOptions.delimiters = ['${', '}'];
AppConfig.compilerOptions.comments = true;

AppConfig.globalProperties.msg = ''; // console.log(this.msg);

AppConfig.optionMergeStrategies.msg = () => {
  // optionMergeStrategies
}

// 其他配置

interface ComponentOptions {
  // 生命周期
  beforeCreate?(this: ComponentPublicInstance): void,
  created?(this: ComponentPublicInstance): void,
  beforeMount?(this: ComponentPublicInstance): void,
  mounted?(this: ComponentPublicInstance): void,
  beforeUpdate?(this: ComponentPublicInstance): void,
  update?(this: ComponentPublicInstance): void,
  beforeUnmount?(this: ComponentPublicInstance): void,
  unmounted?(this: ComponentPublicInstance): void,
  errorCaptured?(
    this: ComponentPublicInstance,
    err: unknown,
    instance: ComponentPublicInstance | null,
    info: string
  ): boolean | void,
  renderTracked?(this: ComponentPublicInstancem, e: DebuggerEvent): void,
  renderTriggered?(this: ComponentPublicInstance, e: DebuggerEvent): void,
  activated?(this: ComponentPublicInstance): void,
  deactivated?(this: ComponentPublicInstance): void,
  serverPrefetch?(this: ComponentPublicInstance): Promise<any>,
}

type DebuggerEvent = {
  effect: ReactiveEffect
  target: object
  type: TrackOpTypes
  key: any
  newValue?: any
  oldValue?: any
  oldTarget?: Map<any, any> | Set<any>
}