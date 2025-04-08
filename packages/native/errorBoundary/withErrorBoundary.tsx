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
