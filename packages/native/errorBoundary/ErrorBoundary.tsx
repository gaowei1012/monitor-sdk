import React, { Component, ComponentLifecycle } from 'react'
import { Text } from 'react-native'

type ComponentDidCatch = ComponentLifecycle<{}, {}>['componentDidCatch']

/**
 * ErrorBoundaryProps
 */
export interface ErrorBoundaryProps {
  /**
   * @returns {React.ReactNode}
   * @description 渲染错误边界的内容
   * @example
   * ```tsx
   * <ErrorBoundary renderBoundary={() => <Text>Something went wrong.</Text>} />
   * ```
   */
  renderBoundary?: () => React.ReactNode

  /**
   * Gets called when the ErrorBoundary catches an error.
   * @returns {React.ReactNode}
   */
  onDidCatch?: NonNullable<ComponentDidCatch>

  children?: React.ReactNode
}

/**
 * Internal ErrorBoundary state.
 */
export interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * ErrorBoundary class
 * Catches errors using lifecycle methods and renders fallback ui using children or renderBoundary props.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: { hasError: boolean; error: any }
  props: { onDidCatch: any; renderBoundary: any; children: React.ReactNode }
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }
  // 收集错误
  comdponentDidCatch(...args: Parameters<ComponentDidCatch>): ReturnType<ComponentDidCatch> {
    const { onDidCatch } = this.props
    onDidCatch && onDidCatch(...args)
  }

  // 对页面的错误使用 componentDidCatch 捕获，上报
  render() {
    const { hasError, error } = this.state
    const { renderBoundary, children } = this.props
    if (hasError) {
      if (renderBoundary && typeof renderBoundary === 'function') {
        return renderBoundary({ error })
      } else {
        return <Text>Something went wrong.</Text>
      }
    }

    return children
  }
}
