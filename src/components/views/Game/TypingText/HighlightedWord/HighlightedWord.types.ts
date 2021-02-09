import { WORD_STATUS } from 'classes';

export interface IProps {
    quoteWord: string;
    userWord: string;
    status: WORD_STATUS;
    isLastWord: boolean;
}
