/*
 * @Author: gaowei1012 gyb2020018@163.com
 * @Date: 2025-04-08 17:20:22
 * @LastEditors: gaowei1012 gyb2020018@163.com
 * @LastEditTime: 2025-04-15 07:12:24
 * @FilePath: /monitor-sdk/packages/native/errorBoundary/withErrorBoundary.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { ComponentType } from 'react'
import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary'

/**
 * React HOC for creating ErrorBoundaryWrapper component.
 * @param params.renderBoundary
 * @param params.onDidCatch
 * @returns
 */

//  * @example
//  * ```tsx
//  * const ErrorBoundaryWrapper = withErrorBoundary({
//  *   renderBoundary: () => <Text>Something went wrong.</Text>,
//  *   onDidCatch: (error, errorInfo) => {
//  *     console.log('Error caught in HOC:', error, errorInfo)
//  *   }
//  * })(MyComponent)
//  * ```
export const withErrorBoundary =
  (params: ErrorBoundaryProps) =>
  (WrappedComponent: ComponentType<any>): ComponentType<any> => {
    const { renderBoundary, onDidCatch } = params
    return (props: any) => {
      return (
        <ErrorBoundary renderBoundary={renderBoundary} onDidCatch={onDidCatch}>
          <WrappedComponent {...props} />
        </ErrorBoundary>
      )
    }
  }
