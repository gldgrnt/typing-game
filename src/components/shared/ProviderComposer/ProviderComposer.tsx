import { IProps } from './ProviderComposer.types';

const ContextProviderComposer = (props: IProps): React.FC | React.ReactNode => {
    const { contextProviders, children } = props;
    // Return the children
    if (contextProviders.length === 0) {
        return props.children;
    }
    // Set up the outermost context and recurse
    const [OuterContextProvider, ...otherContextProviders] = contextProviders;

    return (
        <OuterContextProvider>
            <ProviderComposer contextProviders={otherContextProviders}>
                {children}
            </ProviderComposer>
        </OuterContextProvider>
    );
};

export const ProviderComposer = ContextProviderComposer as React.FC<IProps>;
