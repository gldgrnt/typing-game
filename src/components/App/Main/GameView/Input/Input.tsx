import { useInputLogic } from './useInputLogic';
/**
 *  word traversal => next, prev, finishQuote, startQuote
 */

export const Input: React.FC = () => {
    const { handleChange, handleKeyDown, value } = useInputLogic();

    return (
        <input
            type={'text'}
            value={value || ''}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    );
};
