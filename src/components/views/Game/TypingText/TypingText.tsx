import { useState, useEffect } from 'react';
import { IProps } from './TypingText.types';

export const TypingText: React.FC<IProps> = (props) => {
    const { currentQuote, allUserWords } = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(currentQuote.getCurrentIndex());
    }, [allUserWords]);

    return (
        <div>
            <h3>
                {currentQuote.length === 0
                    ? 'Get a new quote'
                    : currentQuote.words.map((word, idx) => {
                          let color;

                          if (idx === currentIndex) {
                              color =
                                  word === allUserWords[currentIndex]
                                      ? 'green'
                                      : 'orange';
                          } else if (idx < currentIndex) {
                              color =
                                  word === allUserWords[idx] ? 'green' : 'red';
                          } else {
                              color = 'black';
                          }
                          return <span style={{ color }}>{`${word} `}</span>;
                      })}
            </h3>
        </div>
    );
};
