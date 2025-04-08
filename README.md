## 多端监控工具

## 架构
  ![Alt text](image.png)

## 功能

TODO: 开发任务

> 一期： 基础页面数据统计上报，用户行为捕捉，错误拦截上报

1. 功能

  - 页面PV、自定义上报 (已实现taro)
  - 用户行为捕捉
  - 接口请求、页面报错 (已实现taro)
  - 页面性能、资源加载

2. 平台功能
  - Native [已适配]
  - Taro [已适配]
  - Web [进行中]


## Taro 使用说明

- usePv() 统计 Pv

```ts
// 统计访问量
usePv()
```

- createErrorBoundary 错误收集

```tsx
const App = () => {
  useEffeft(() => {
    try {
      // 正常逻辑
    } catch(err) {
      // 错误向上抛出
      thorw err
    }
  }, [])
  return <View>收集错误</View>
}

export default createErrorBoundary(App)
```

## ReactNative 使用说明

> 待补充