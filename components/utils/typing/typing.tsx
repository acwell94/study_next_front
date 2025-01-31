'use client';
import { useEffect, useState } from 'react';
import * as styles from './typing.css';

interface Props {
  text: string;
  fontSize?: number;
}

const Typing = ({ text, fontSize = 10 }: Props) => {
  const [sequence, setSequence] = useState<string>('');
  const [textCount, setTextCount] = useState<number>(0);
  const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);

  useEffect(() => {
    const processedText = text.replace(/\\n/g, '\n'); // 여기에서 \n 처리

    const typingInterval = setInterval(() => {
      if (isTypingPaused) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsTypingPaused(false);
          setTextCount(0);
          setSequence('');
        }, 8000);
        return;
      }

      if (textCount >= processedText.length) {
        setIsTypingPaused(true);
        return;
      }

      const nextChar = processedText[textCount];
      setSequence((prevSequence) => prevSequence + nextChar);
      setTextCount((prevCount) => prevCount + 1);
    }, 200);

    return () => clearInterval(typingInterval);
  }, [text, textCount, isTypingPaused]);

  // 줄 바꿈 처리
  const renderWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <p
      className={styles.landingP}
      style={{
        fontSize: `${fontSize - 0.5}rem`,
        lineHeight: `${fontSize + 1}rem`,
      }}
    >
      {renderWithLineBreaks(sequence)}
      <span
        className={styles.blink}
        style={{
          height: `${fontSize + 1}rem`,
          width: `${fontSize * 0.1}rem`,
        }}
      />
    </p>
  );
};

export default Typing;
