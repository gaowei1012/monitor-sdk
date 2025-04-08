import React, { Component, ComponentLifecycle } from 'react';
type ComponentDidCatch = ComponentLifecycle<{}, {}>['componentDidCatch'];
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
    renderBoundary?: () => React.ReactNode;
    /**
     * Gets called when the ErrorBoundary catches an error.
     * @returns {React.ReactNode}
     */
    onDidCatch?: NonNullable<ComponentDidCatch>;
    children?: React.ReactNode;
}
/**
 * Internal ErrorBoundary state.
 */
export interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}
/**
 * ErrorBoundary class
 * Catches errors using lifecycle methods and renders fallback ui using children or renderBoundary props.
 */
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: {
        hasError: boolean;
        error: any;
    };
    props: {
        onDidCatch: any;
        renderBoundary: any;
        children: React.ReactNode;
    };
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        error: Error;
    };
    comdponentDidCatch(...args: Parameters<ComponentDidCatch>): ReturnType<ComponentDidCatch>;
    render(): any;
}
export {};
