import { ReactNode } from 'react';
declare function createErrorBoundary(Page: any): {
    new (): {
        state: {
            hasError: any;
        };
        componentDidCatch(error: any, errorInfo: any): void;
        render(): ReactNode;
    };
    getDerivedStateFromError(): {
        hasError: boolean;
    };
};
export default createErrorBoundary;
