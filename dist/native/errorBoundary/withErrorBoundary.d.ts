import { ComponentType } from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
/**
 * React HOC for creating ErrorBoundaryWrapper component.
 * @param params.renderBoundary
 * @param params.onDidCatch
 * @returns
 */
export declare const withErrorBoundary: (params: ErrorBoundaryProps) => (WrappedComponent: ComponentType<any>) => ComponentType<any>;
