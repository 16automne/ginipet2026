import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login(props) {
  
  // [1] 변수선언, 값 설정
    const [form, setForm] = useState({
      username:'',
      password:''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate(); //url주소이동

  // [2] 입력 폼에 입력시 실행되는 함수
  const handleChange =(e)=> {
    setForm({
      ...form,
      [e.target.name]:e.target.value //사용자가 입력한 데이터를 저장
    });   
    setError(''); // 데이터 값이 없는 경우 에러 초기화
  }

  
  // [3] 서버로 전송되는 함수
  const handleSubmit =(e)=> { // 입력data를 back서버에 post방식으로 전송
    e.preventDefault();

    axios.post('http://localhost:9070/login', form)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', form.username);
      alert('로그인 성공! 메인페이지로 이동');
      navigate('/');
    })
    .catch(err => {
      // 에러 처리 추가
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
      console.error(err);
    });
  }

  return (
    <main>
      <section>
        <h2 className='title01'>로그인</h2>
        <form onSubmit={handleSubmit} className='loginWrap'>
          <p className='radioMember'>
            <input type='radio' id='member' name='a'/>
            <label htmlFor='member'>회원</label>
            <input type='radio' id='nomember' name='a'/>
            <label htmlFor='member'>회원</label>
          </p>
          <p>
            <label className='hiddenLabel'>아이디</label>
            <input type='text'
              id='username' name='username'
              placeholder='아이디 입력'
              onChange={handleChange}
              value={form.username}
              required
            />
          </p>
          <p>
            <label className='hiddenLabel'>비밀번호</label>
            <input type='password'
              id='password' name='password'
              placeholder='비밀번호 입력'
              onChange={handleChange}
                value={form.password}
              required
            />
          </p>
          <p className='usernameCheck'>
            <input type='checkbox' id='usernameCheck' />
            <label htmlFor='usernameCheck'>아이디 저장</label>
          </p>

          {/* <p><input type='submit' value='로그인' /></p> */}
          <p><button type='submit' className='loginBtn'>로그인</button></p>
          {/* 
            input: 내용을 단순하게 전송, 버튼 안에 텍스트만 들어가며 아이콘/이미지/로딩바 적용 쉽지 X

            button: 확장 가능/문자/이미지/아이콘/html요소 모두 사용 가능 > css 서식 변경 가능. 스타일 적용이 시워 react에서 주로 많이 사용
          */}

          <p className='findWrap'>
            <Link to='/idSearch'>아이디 찾기</Link> &#10072;
            <Link to='/pwSearch'>비밀번호찾기</Link> &#10072;
            <Link to='/join'>회원가입</Link>
          </p>
        </form>
        <p>
          {error && <p style={{color: '#f00'}}>{error}</p>}
        </p>
      </section>
    </main>
  )
}

export default Login