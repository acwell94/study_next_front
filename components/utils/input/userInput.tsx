'use client';

import * as styles from './userInput.css';

interface Props {
  type?: string;
  placeholder?: string;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const UserInput = ({ type = 'text', placeholder, value, change }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={change}
      className={styles.inputStyle}
    />
  );
};

export default UserInput;
