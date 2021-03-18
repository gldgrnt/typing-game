import { Word } from 'classes';
import { IProps } from './HighlightedWord.types';

export const HighlightedWord: React.FC<IProps> = (props) => {
    const { quoteWord, userWord, status, isLastWord } = props;
    const color = Word.getColor(userWord, quoteWord, status);
    const space = isLastWord ? '' : ' ';
    // Calculate highlight colour

    return (
        <span>
            <mark style={{ color }}>{quoteWord}</mark>
            {space}
        </span>
    );
};
