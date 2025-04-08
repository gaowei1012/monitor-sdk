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

#### setGlobalErrorHandler

```tsx
import { setGlobalErrorHandler } from 'monitor-sdk/dist/native'
setGlobalErrorHandler((error, isFatal) => {
  console.lof('global error: ', error, isFatal)
}, true)
```

#### setPromiseUnCatchHandler

```tsx
import { setPromiseUnCatchHandler } from 'monitor-sdk/dist/native'
setPromiseUnCatchHandler((id, error) => {
  console.log('promise un catch: ', id, error)
})
```

#### ErrorBoundary

```tsx
import { ErrorBoundary } from 'monitor-sdk/dist/native'
const App = () => {
  return <ErrorBoundary>
    <BugComponent />
  </ErrorBoundary>
}
```

#### withErrorBoundary

```tsx
import { withErrorBoundary } from 'monitor-sdk/dist/native';

const BugCenter = props => {
  const [isError, setIsError] = useState();
  if (isError) {
    throw new Error('💥');
  } else {
    return (
      <Text
        onPress={() => {
          this.setState({
            isError: true
          });
        }}>
        {String(isError)}
      </Text>
    )
  }
}

const SafeCenter = withErrorBoundary({
  renderBoundary: ({error}) => {
    return <Text>catch error: {error.message}</Text>;
  },
})(BugCenter);
```