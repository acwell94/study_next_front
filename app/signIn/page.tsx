'use client';
import UserInput from '@/components/utils/input/userInput';
import * as styles from './page.css';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = async (id: string, pw: string) => {
    const data = await fetch('http://localhost:3001/user/email/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    });
    const result = await data.json();
    console.log(result);
    return result;
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.limitContainer}>
        <div className={styles.inputContainer}>
          <UserInput
            type="text"
            placeholder="이메일을 입력해 주세요"
            value={email}
            change={(e) => setEmail(e.target.value)}
          />
          <UserInput
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            change={(e) => setPassword(e.target.value)}
          />
          <div className={styles.buttonContainer}>
            <button
              className={styles.clickButton}
              onClick={() => login(email, password)}
            >
              로그인
            </button>
            <button className={styles.clickButton}>회원가입</button>
          </div>
        </div>
      </div>
    </main>
  );
}
