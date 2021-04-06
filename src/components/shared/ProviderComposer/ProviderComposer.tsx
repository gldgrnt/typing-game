import { IProps } from './_types';

export const ProviderComposer: React.FC<IProps> = (props) => {
    const { contextProviders = [], children } = props;

    return (
        <>
            {contextProviders.reduceRight((acc, Provider) => {
                return <Provider>{acc}</Provider>;
            }, children)}
        </>
    );
};
